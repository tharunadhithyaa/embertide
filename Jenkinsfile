// ────────────────────────────────────────────────────────────
// EMBER & TIDE — Declarative Jenkins Pipeline
// ────────────────────────────────────────────────────────────
// Production-ready CI/CD pipeline for GitHub + Jenkins.
// Target: Windows Jenkins agent with Docker Desktop installed.
// ────────────────────────────────────────────────────────────

pipeline {
    agent any

    // ── Environment Variables ──
    environment {
        IMAGE_NAME    = 'embertide'
        IMAGE_TAG     = 'latest'
        CONTAINER_NAME = 'embertide'
        HOST_PORT     = '80'
        CONTAINER_PORT = '80'
    }

    // ── Pipeline Options ──
    options {
        timestamps()                       // Prefix every log line with a timestamp
        ansiColor('xterm')                 // Enable ANSI color output
        buildDiscarder(logRotator(         // Retain last 10 builds to save disk space
            numToKeepStr: '10',
            artifactNumToKeepStr: '5'
        ))
        disableConcurrentBuilds()          // Prevent overlapping deployments
        timeout(time: 30, unit: 'MINUTES') // Global timeout for the entire pipeline
    }

    stages {

        // ══════════════════════════════════════════════════════
        //  STAGE 1 — Checkout
        // ══════════════════════════════════════════════════════
        stage('Checkout') {
            steps {
                echo '\u001B[36m══════════════════════════════════════════════════\u001B[0m'
                echo '\u001B[36m  Stage 1: Checkout — Cloning repository...\u001B[0m'
                echo '\u001B[36m══════════════════════════════════════════════════\u001B[0m'

                checkout scm

                echo "\u001B[32m✔ Repository cloned successfully.\u001B[0m"
                echo "\u001B[33m  Branch: ${env.BRANCH_NAME ?: env.GIT_BRANCH ?: 'N/A'}\u001B[0m"
                echo "\u001B[33m  Commit: ${env.GIT_COMMIT ?: 'N/A'}\u001B[0m"
            }
        }

        // ══════════════════════════════════════════════════════
        //  STAGE 2 — Install Dependencies
        // ══════════════════════════════════════════════════════
        stage('Install Dependencies') {
            steps {
                echo '\u001B[36m══════════════════════════════════════════════════\u001B[0m'
                echo '\u001B[36m  Stage 2: Install Dependencies — npm ci\u001B[0m'
                echo '\u001B[36m══════════════════════════════════════════════════\u001B[0m'

                bat 'npm ci'

                echo '\u001B[32m✔ Dependencies installed successfully.\u001B[0m'
            }
        }

        // ══════════════════════════════════════════════════════
        //  STAGE 3 — Code Quality
        // ══════════════════════════════════════════════════════
        stage('Code Quality') {
            steps {
                echo '\u001B[36m══════════════════════════════════════════════════\u001B[0m'
                echo '\u001B[36m  Stage 3: Code Quality — Running ESLint...\u001B[0m'
                echo '\u001B[36m══════════════════════════════════════════════════\u001B[0m'

                bat 'npm run lint'

                echo '\u001B[32m✔ Linting passed — no errors found.\u001B[0m'
            }
        }

        // ══════════════════════════════════════════════════════
        //  STAGE 4 — Build
        // ══════════════════════════════════════════════════════
        stage('Build') {
            steps {
                echo '\u001B[36m══════════════════════════════════════════════════\u001B[0m'
                echo '\u001B[36m  Stage 4: Build — Generating production bundle...\u001B[0m'
                echo '\u001B[36m══════════════════════════════════════════════════\u001B[0m'

                bat 'npm run build'

                // Verify dist folder was created
                bat '''
                    @echo off
                    if not exist "dist" (
                        echo [ERROR] dist folder was not generated!
                        exit /b 1
                    )
                    echo dist folder exists — build output verified.
                    dir dist
                '''

                echo '\u001B[32m✔ Build completed — dist folder generated.\u001B[0m'
            }
        }

        // ══════════════════════════════════════════════════════
        //  STAGE 5 — Docker Build
        // ══════════════════════════════════════════════════════
        stage('Docker Build') {
            steps {
                echo '\u001B[36m══════════════════════════════════════════════════\u001B[0m'
                echo '\u001B[36m  Stage 5: Docker Build — Building image...\u001B[0m'
                echo '\u001B[36m══════════════════════════════════════════════════\u001B[0m'

                bat "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."

                echo "\u001B[32m✔ Docker image built: ${IMAGE_NAME}:${IMAGE_TAG}\u001B[0m"
            }
        }

        // ══════════════════════════════════════════════════════
        //  STAGE 6 — Stop Existing Container
        // ══════════════════════════════════════════════════════
        stage('Stop Existing Container') {
            steps {
                echo 'Stopping existing container...'

                bat """
                @echo off
                docker stop ${CONTAINER_NAME} >nul 2>&1
                if %ERRORLEVEL% neq 0 (
                    echo No running container found.
                ) else (
                    echo Container stopped.
                )
                exit /b 0
                """
            }
        }

        // ══════════════════════════════════════════════════════
        //  STAGE 7 — Remove Existing Container
        // ══════════════════════════════════════════════════════
        stage('Remove Existing Container') {
            steps {
                echo 'Removing existing container...'
                bat """
                @echo off
                docker rm ${CONTAINER_NAME} >nul 2>&1
                if %ERRORLEVEL% neq 0 (
                    echo No container found.
                ) else (
                    echo Container removed.
                )
                exit /b 0
        """
            }
        }

        // ══════════════════════════════════════════════════════
        //  STAGE 8 — Deploy
        // ══════════════════════════════════════════════════════
        stage('Deploy') {
            steps {
                echo '\u001B[36m══════════════════════════════════════════════════\u001B[0m'
                echo '\u001B[36m  Stage 8: Deploy — Starting new container...\u001B[0m'
                echo '\u001B[36m══════════════════════════════════════════════════\u001B[0m'

                bat """
                    docker run -d ^
                        --name ${CONTAINER_NAME} ^
                        -p ${HOST_PORT}:${CONTAINER_PORT} ^
                        --restart unless-stopped ^
                        ${IMAGE_NAME}:${IMAGE_TAG}
                """

                echo "\u001B[32m✔ Container '${CONTAINER_NAME}' deployed on port ${HOST_PORT}.\u001B[0m"
            }
        }

        // ══════════════════════════════════════════════════════
        //  STAGE 9 — Health Check
        // ══════════════════════════════════════════════════════
        stage('Health Check') {
            steps {
                echo '\u001B[36m══════════════════════════════════════════════════\u001B[0m'
                echo '\u001B[36m  Stage 9: Health Check — Verifying container...\u001B[0m'
                echo '\u001B[36m══════════════════════════════════════════════════\u001B[0m'

                // Wait 10 seconds for the container to initialize
                bat 'ping -n 11 127.0.0.1 > nul'

                // Verify the container is running
                bat """
                    @echo off
                    for /f "tokens=*" %%i in ('docker inspect -f "{{.State.Running}}" ${CONTAINER_NAME} 2^>nul') do set RUNNING=%%i
                    if "%RUNNING%"=="true" (
                        echo Container "${CONTAINER_NAME}" is running.
                        docker ps --filter "name=${CONTAINER_NAME}" --format "table {{.ID}}\\t{{.Image}}\\t{{.Status}}\\t{{.Ports}}"
                    ) else (
                        echo [ERROR] Container "${CONTAINER_NAME}" is NOT running!
                        echo === Container Logs ===
                        docker logs ${CONTAINER_NAME} 2>&1
                        exit /b 1
                    )
                """

                echo '\u001B[32m✔ Health check passed — application is live.\u001B[0m'
            }
        }

        // ══════════════════════════════════════════════════════
        //  STAGE 10 — Cleanup
        // ══════════════════════════════════════════════════════
        stage('Cleanup') {
            steps {
                echo '\u001B[36m══════════════════════════════════════════════════\u001B[0m'
                echo '\u001B[36m  Stage 10: Cleanup — Removing dangling images...\u001B[0m'
                echo '\u001B[36m══════════════════════════════════════════════════\u001B[0m'

                bat '''
                    @echo off
                    docker image prune -f 2>nul
                    if %ERRORLEVEL% equ 0 (
                        echo Dangling images removed.
                    ) else (
                        echo No dangling images to remove.
                    )
                '''

                echo '\u001B[32m✔ Cleanup completed.\u001B[0m'
            }
        }
    }

    // ── Post Conditions ──
    post {
        success {
            echo '\u001B[32m'
            echo '══════════════════════════════════════════════════════════'
            echo '  ✅  PIPELINE SUCCEEDED'
            echo '  EMBER & TIDE is now live at http://localhost:80'
            echo '══════════════════════════════════════════════════════════'
            echo '\u001B[0m'
        }
        failure {
            echo '\u001B[31m'
            echo '══════════════════════════════════════════════════════════'
            echo '  ❌  PIPELINE FAILED'
            echo '  Check the stage logs above for details.'
            echo '══════════════════════════════════════════════════════════'
            echo '\u001B[0m'
        }
        unstable {
            echo '\u001B[33m'
            echo '══════════════════════════════════════════════════════════'
            echo '  ⚠️   PIPELINE UNSTABLE'
            echo '  Some stages reported warnings. Review the logs.'
            echo '══════════════════════════════════════════════════════════'
            echo '\u001B[0m'
        }
        always {
            echo "Pipeline finished at: ${new Date()}"
            echo "Build URL: ${env.BUILD_URL ?: 'N/A'}"
        }
        cleanup {
            // Clean workspace after pipeline to free disk space
            cleanWs()
        }
    }
}
