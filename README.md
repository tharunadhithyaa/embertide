# EMBER & TIDE 🌊🔥

Welcome to the **EMBER & TIDE** repository! This is a modern, responsive restaurant web application built with HTML, CSS, JavaScript, and bundled using Vite. 

The project features a fully automated CI/CD pipeline using **Jenkins** and **Docker** to ensure seamless, production-ready deployments.

---

## 🏗️ Project Architecture & Tech Stack

- **Frontend Core**: HTML5, CSS3, Vanilla JavaScript
- **Build Tool**: [Vite](https://vitejs.dev/) (Fast frontend tooling)
- **Code Quality**: ESLint, Prettier
- **Containerization**: Docker (Multi-stage builds)
- **Web Server**: Nginx (Alpine-based, configured for SPA routing and static caching)
- **CI/CD**: Jenkins (Declarative Pipeline)

---

## 📁 Project Structure

```text
EMBER-AND-TIDE/
├── public/                 # Static assets (images, fonts, etc.)
├── src/                    # Source files (CSS, JS)
├── index.html              # Homepage
├── about.html              # About Us page
├── menu.html               # Restaurant Menu
├── gallery.html            # Image Gallery
├── reservations.html       # Booking/Reservations
├── contact.html            # Contact Information
├── Jenkinsfile             # Jenkins CI/CD Declarative Pipeline
├── Dockerfile              # Multi-stage Docker build config
├── nginx.conf              # Custom Nginx configuration
├── package.json            # Node.js dependencies & scripts
└── vite.config.js          # Vite configuration
```

---

## 🚀 Local Development

To run this project locally on your machine, you need [Node.js](https://nodejs.org/) (v20+) installed.

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/EMBER-AND-TIDE.git
cd EMBER-AND-TIDE
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5173`. Vite provides instant Hot Module Replacement (HMR) as you edit files.

### 4. Code Quality & Linting
```bash
# Run ESLint to check for code issues
npm run lint

# Format code with Prettier
npm run format
```

---

## 🐳 Docker Deployment (Production Simulation)

You can run the production-ready Docker container locally to test exactly what Jenkins deploys. Ensure [Docker Desktop](https://www.docker.com/products/docker-desktop/) is running.

### 1. Build the Docker Image
```bash
docker build -t embertide:latest .
```

### 2. Run the Container
```bash
docker run -d --name embertide -p 80:80 embertide:latest
```
The production build of the app will now be available at `http://localhost`. 

*(To stop the container, run: `docker stop embertide`)*

---

## ⚙️ Jenkins CI/CD Pipeline

This project is configured with a fully automated, 10-stage **Jenkins Declarative Pipeline** defined in the `Jenkinsfile`. 

### Pipeline Stages:
1. **Checkout**: Pulls the latest code from GitHub.
2. **Install Dependencies**: Runs a clean `npm ci`.
3. **Code Quality**: Runs `npm run lint` to enforce coding standards.
4. **Build**: Generates the optimized production bundle (`npm run build`).
5. **Docker Build**: Builds the Docker image `embertide:latest`.
6. **Stop Existing Container**: Safely stops the currently running container (if any).
7. **Remove Existing Container**: Cleans up the old container.
8. **Deploy**: Starts the new container on port `80` with a restart policy.
9. **Health Check**: Verifies the container is successfully running.
10. **Cleanup**: Prunes dangling/unused Docker images to save disk space.

### Webhook Automation
The pipeline is designed to be triggered automatically via **GitHub Webhooks**. Every push to the `main` branch will instantly trigger the build, test, and deployment process.

---

## 🛡️ Nginx Configuration
The included `nginx.conf` is heavily optimized for production:
- **Gzip Compression**: Enabled for faster load times.
- **Aggressive Caching**: Static assets (images, CSS, JS) are cached for 1 year.
- **Security Headers**: Includes protections against XSS, MIME-sniffing, and clickjacking.
- **SPA Fallback**: Gracefully handles routing.
