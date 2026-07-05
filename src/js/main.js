import { 
  NAV_LINKS, 
  STATS, 
  MENU_CATEGORIES, 
  MENU_ITEMS, 
  FEATURED_DISHES, 
  CHEF, 
  TESTIMONIALS, 
  GALLERY_IMAGES, 
  OPENING_HOURS, 
  CONTACT_INFO 
} from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
  initNavigation();
  renderContent();
  initScrollAnimations();
  initFormValidation();
});

/* ==========================================================================
   Navigation
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.header');
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  // Render Links
  if (navLinks) {
    navLinks.innerHTML = NAV_LINKS.map(link => 
      `<li><a href="${link.href}" class="nav-link">${link.label}</a></li>`
    ).join('');
  }

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ── Mobile Menu ──
  if (!mobileBtn || !navLinks) return;

  // Create backdrop element (click outside to close)
  let backdrop = document.querySelector('.mobile-nav-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.classList.add('mobile-nav-backdrop');
    document.body.appendChild(backdrop);
  }

  function openMenu() {
    navLinks.classList.add('active');
    mobileBtn.classList.add('open');
    backdrop.classList.add('active');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    navLinks.classList.remove('active');
    mobileBtn.classList.remove('open');
    backdrop.classList.remove('active');
    document.body.classList.remove('menu-open');
  }

  function toggleMenu() {
    if (navLinks.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Toggle on hamburger click
  mobileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close on backdrop click (click outside)
  backdrop.addEventListener('click', closeMenu);

  // Close on nav link click
  navLinks.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
      closeMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      closeMenu();
    }
  });
}

/* ==========================================================================
   Scroll Animations (Intersection Observer)
   ========================================================================== */
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // We will attach '.fade-in-up' class to elements we want to animate in HTML
  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
  });
}

/* ==========================================================================
   Render Content (DOM Manipulation)
   ========================================================================== */
function renderContent() {
  if (document.querySelector('.about-stats')) renderAboutStats();
  
  if (document.querySelector('.menu-grid.preview-grid')) {
    renderMenuPreview();
  } else if (document.querySelector('.menu-grid.full-grid')) {
    renderFullMenu();
  }

  if (document.querySelector('.featured-grid')) renderFeaturedDishes();
  if (document.querySelector('.chef-section-inner')) renderChef();
  if (document.querySelector('.testimonials-grid')) renderTestimonials();
  if (document.querySelector('.gallery-grid')) renderGallery();
  
  renderFooter();
}

function renderAboutStats() {
  const statsContainer = document.querySelector('.about-stats');
  if (!statsContainer) return;

  statsContainer.innerHTML = STATS.map(stat => `
    <div class="stat-item fade-in-up">
      <div class="stat-value">${stat.value}${stat.suffix}</div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join('');
}

function renderMenuPreview() {
  const menuContainer = document.querySelector('.menu-grid.preview-grid');
  if (!menuContainer) return;

  const items = [
    MENU_ITEMS.find(i => i.id === 's1'),
    MENU_ITEMS.find(i => i.id === 's2'),
    MENU_ITEMS.find(i => i.id === 'sf1'),
    MENU_ITEMS.find(i => i.id === 'sf2'),
    MENU_ITEMS.find(i => i.id === 'st1'),
    MENU_ITEMS.find(i => i.id === 'st3')
  ].filter(Boolean);
  
  menuContainer.innerHTML = items.map(item => `
    <div class="dish-card fade-in-up">
      <div class="dish-img">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </div>
      <div class="dish-content">
        <h4>${item.name}</h4>
        <p class="dish-desc">${item.description}</p>
        <span class="dish-price">$${item.price}</span>
      </div>
    </div>
  `).join('');

  initScrollAnimations();
}

function renderFullMenu() {
  const menuContainer = document.querySelector('.menu-grid.full-grid');
  const categoryContainer = document.querySelector('.menu-categories');
  if (!menuContainer || !categoryContainer) return;

  categoryContainer.innerHTML = MENU_CATEGORIES.map((cat, index) => `
    <button class="btn btn-outline category-btn ${index === 0 ? 'active' : ''}" data-category="${cat.key}" style="margin: 0 4px 8px;">
      ${cat.label}
    </button>
  `).join('');

  updateMenuGrid(MENU_CATEGORIES[0].key, menuContainer);

  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.category-btn').forEach(b => {
        b.classList.remove('active');
        b.style.backgroundColor = 'transparent';
        b.style.color = 'var(--accent-primary)';
      });
      e.target.classList.add('active');
      e.target.style.backgroundColor = 'var(--accent-primary)';
      e.target.style.color = 'var(--bg-home)';
      updateMenuGrid(e.target.dataset.category, menuContainer);
    });
  });
}

function updateMenuGrid(categoryKey, container) {
  const items = MENU_ITEMS.filter(item => item.category === categoryKey);
  
  container.innerHTML = items.map(item => `
    <div class="dish-card fade-in-up">
      <div class="dish-img">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </div>
      <div class="dish-content">
        <h4>${item.name}</h4>
        <p class="dish-desc">${item.description}</p>
        <span class="dish-price">$${item.price}</span>
      </div>
    </div>
  `).join('');

  initScrollAnimations();
}

function renderFeaturedDishes() {
  const container = document.querySelector('.featured-grid');
  if (!container) return;

  container.innerHTML = FEATURED_DISHES.map(dish => `
    <div class="featured-card fade-in-up">
      <div class="featured-img-wrapper">
        <img src="${dish.image}" alt="${dish.name}" loading="lazy">
      </div>
      <div class="featured-content">
        <h3>${dish.name}</h3>
        <p>${dish.description}</p>
        <div class="featured-footer">
          <span class="price">$${dish.price}</span>
          ${dish.isChefRecommendation ? '<span class="tag gold">Chef\'s Pick</span>' : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function renderChef() {
  const container = document.querySelector('.chef-section-inner');
  if (!container) return;

  container.innerHTML = `
    <div class="chef-image fade-in-up">
      <img src="${CHEF.image}" alt="${CHEF.name}">
    </div>
    <div class="chef-content fade-in-up">
      <span class="subtitle">${CHEF.title}</span>
      <h2>${CHEF.name}</h2>
      <p>${CHEF.bio}</p>
      <p>${CHEF.experience}</p>
      <blockquote class="chef-quote">${CHEF.philosophy}</blockquote>
    </div>
  `;
}

function renderTestimonials() {
  const container = document.querySelector('.testimonials-grid');
  if (!container) return;

  // Render all 6 testimonials
  const items = TESTIMONIALS;

  container.innerHTML = items.map(t => `
    <div class="testimonial-card fade-in-up">
      <div class="stars">
        <i data-lucide="star" class="star-icon"></i>
        <i data-lucide="star" class="star-icon"></i>
        <i data-lucide="star" class="star-icon"></i>
        <i data-lucide="star" class="star-icon"></i>
        <i data-lucide="star" class="star-icon"></i>
      </div>
      <p class="review-text">"${t.review}"</p>
      <div class="reviewer">
        <img src="${t.image}" alt="${t.name}" loading="lazy">
        <div>
          <h4>${t.name}</h4>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function renderGallery() {
  const container = document.querySelector('.gallery-grid');
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  if (!container) return;

  let activeCategory = 'all';
  let filteredImages = [...GALLERY_IMAGES];
  let currentLightboxIndex = 0;

  // Create Lightbox DOM elements if they don't exist
  let lightbox = document.querySelector('.lightbox-modal');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'lightbox-modal';
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <span class="lightbox-close">&times;</span>
        <span class="lightbox-arrow lightbox-arrow-left">&#10094;</span>
        <span class="lightbox-arrow lightbox-arrow-right">&#10095;</span>
        <img class="lightbox-img" src="" alt="" />
        <div class="lightbox-caption">
          <h4 class="lightbox-title"></h4>
          <p class="lightbox-category"></p>
        </div>
      </div>
    `;
    document.body.appendChild(lightbox);
  }

  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const lightboxTitle = lightbox.querySelector('.lightbox-title');
  const lightboxCat = lightbox.querySelector('.lightbox-category');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-arrow-left');
  const nextBtn = lightbox.querySelector('.lightbox-arrow-right');

  function updateGalleryGrid() {
    filteredImages = activeCategory === 'all' 
      ? GALLERY_IMAGES 
      : GALLERY_IMAGES.filter(img => img.category === activeCategory);

    container.innerHTML = filteredImages.map((img, index) => `
      <div class="gallery-item fade-in-up" data-index="${index}">
        <img src="${img.src}" alt="${img.alt}" loading="lazy">
        <div class="gallery-overlay">
          <span>${img.category}</span>
          <h4>${img.alt}</h4>
        </div>
      </div>
    `).join('');

    // Re-initialize animations for filtered images
    initScrollAnimations();

    // Attach click listeners to gallery items for lightbox opening
    container.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const index = parseInt(item.getAttribute('data-index'), 10);
        openLightbox(index);
      });
    });
  }

  function openLightbox(index) {
    currentLightboxIndex = index;
    const imgData = filteredImages[currentLightboxIndex];
    if (!imgData) return;

    lightboxImg.src = imgData.src;
    lightboxImg.alt = imgData.alt;
    lightboxTitle.textContent = imgData.alt;
    lightboxCat.textContent = imgData.category;

    lightbox.classList.add('active');
    document.body.classList.add('menu-open'); // reuse scroll lock class
  }

  function removeScrollLock() {
    // Only remove scroll lock if the mobile navigation menu is also closed
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks || !navLinks.classList.contains('active')) {
      document.body.classList.remove('menu-open');
    }
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    removeScrollLock();
  }

  function showNext() {
    if (filteredImages.length <= 1) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % filteredImages.length;
    openLightbox(currentLightboxIndex);
  }

  function showPrev() {
    if (filteredImages.length <= 1) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    openLightbox(currentLightboxIndex);
  }

  // Hook up filter button listeners
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      updateGalleryGrid();
    });
  });

  // Lightbox event listeners
  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showPrev();
  });
  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showNext();
  });

  // Close lightbox on click outside the image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation for lightbox
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });

  // Initial load
  updateGalleryGrid();
}

function renderFooter() {
  const linksContainer = document.querySelector('.footer-links');
  const contactContainer = document.querySelector('.footer-contact');
  
  if (linksContainer) {
    linksContainer.innerHTML = NAV_LINKS.map(link => `
      <li><a href="${link.href}">${link.label}</a></li>
    `).join('');
  }

  if (contactContainer) {
    contactContainer.innerHTML = `
      <p>${CONTACT_INFO.address}</p>
      <p><a href="tel:${CONTACT_INFO.phone}">${CONTACT_INFO.phone}</a></p>
      <p><a href="mailto:${CONTACT_INFO.email}">${CONTACT_INFO.email}</a></p>
      <p class="mt-4" style="color: var(--accent-primary);">Mon - Sun: 5:00 PM - 11:30 PM</p>
    `;
  }
}

/* ==========================================================================
   Form Validation
   ========================================================================== */
function initFormValidation() {
  const reservationForm = document.getElementById('reservation-form');
  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = reservationForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      
      btn.textContent = 'Confirming...';
      btn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        btn.textContent = 'Reservation Confirmed';
        btn.classList.add('success');
        reservationForm.reset();
        
        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
          btn.classList.remove('success');
        }, 3000);
      }, 1500);
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      
      btn.textContent = 'Sending...';
      btn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        btn.textContent = 'Message Sent Successfully';
        btn.classList.add('success');
        contactForm.reset();
        
        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
          btn.classList.remove('success');
        }, 3000);
      }, 1200);
    });
  }
}
