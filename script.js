// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all service cards, promo cards, and gallery items
const animatedElements = document.querySelectorAll('.service-card, .promo-card, .gallery-item, .info-card, .highlight-box');

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Gallery lightbox effect (simple version)
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const overlay = document.createElement('div');
        overlay.className = 'lightbox-overlay';
        overlay.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img src="${img.src}" alt="${img.alt}">
            </div>
        `;
        
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';
        
        // Add styles for lightbox
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.3s ease;
        `;
        
        const content = overlay.querySelector('.lightbox-content');
        content.style.cssText = `
            position: relative;
            max-width: 90%;
            max-height: 90vh;
        `;
        
        const lightboxImg = overlay.querySelector('img');
        lightboxImg.style.cssText = `
            max-width: 100%;
            max-height: 90vh;
            border-radius: 10px;
        `;
        
        const closeBtn = overlay.querySelector('.lightbox-close');
        closeBtn.style.cssText = `
            position: absolute;
            top: -40px;
            right: 0;
            font-size: 40px;
            color: white;
            cursor: pointer;
            font-weight: 300;
            transition: transform 0.3s ease;
        `;
        
        closeBtn.addEventListener('mouseenter', () => {
            closeBtn.style.transform = 'rotate(90deg)';
        });
        
        closeBtn.addEventListener('mouseleave', () => {
            closeBtn.style.transform = 'rotate(0deg)';
        });
        
        // Close lightbox
        const closeLightbox = () => {
            overlay.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                overlay.remove();
                document.body.style.overflow = 'auto';
            }, 300);
        };
        
        closeBtn.addEventListener('click', closeLightbox);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeLightbox();
            }
        });
    });
});

// Add fade animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);

// Counter animation for highlight boxes
const counters = document.querySelectorAll('.highlight-box h3');
const speed = 200;

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = counter.textContent.replace('+', '');
            
            if (!isNaN(target)) {
                const updateCount = () => {
                    const count = +counter.textContent.replace('+', '');
                    const increment = target / speed;
                    
                    if (count < target) {
                        counter.textContent = Math.ceil(count + increment) + '+';
                        setTimeout(updateCount, 1);
                    } else {
                        counter.textContent = target + '+';
                    }
                };
                
                counter.textContent = '0';
                updateCount();
            }
            
            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// Add click to call tracking
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Call button clicked:', link.getAttribute('href'));
        // You can add analytics tracking here
    });
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add print styles
window.addEventListener('beforeprint', () => {
    console.log('Page is being printed');
});

// Detect user timezone for business hours
const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log('User timezone:', userTimezone);

// Add current year to footer
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    footerYear.textContent = `© ${currentYear} Eyebrow Zone. All rights reserved.`;
}

// Preload critical images
const preloadImages = [
    'images/interior.jpg',
    'images/storefront.jpg'
];

preloadImages.forEach(src => {
    const img = new Image();
    img.src = src;
});

console.log('Eyebrow Zone website loaded successfully!');

// ===== GSAP ANIMATIONS =====
if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero animations
    gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3
    });
    
    gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5
    });
    
    gsap.from('.hero-buttons', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.7
    });
    
    gsap.from('.hero-features', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.9
    });
    
    // Service cards on scroll
    gsap.from('.service-card', {
        scrollTrigger: {
            trigger: '.services',
            start: 'top 70%'
        },
        opacity: 0,
        y: 100,
        stagger: 0.2,
        duration: 0.8
    });
    
    // About section
    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%'
        },
        opacity: 0,
        x: -50,
        duration: 1
    });
    
    // Gallery items
    gsap.from('.gallery-item', {
        scrollTrigger: {
            trigger: '.gallery',
            start: 'top 70%'
        },
        opacity: 0,
        scale: 0.8,
        stagger: 0.15,
        duration: 0.6
    });
    
    // Stats counter animation
    const counters = document.querySelectorAll('.highlight-box h3');
    counters.forEach(counter => {
        const text = counter.textContent.trim();
        const isNumber = !isNaN(parseInt(text));
        
        if (isNumber) {
            const target = parseInt(text);
            counter.textContent = '0';
            
            ScrollTrigger.create({
                trigger: counter,
                start: 'top 80%',
                onEnter: () => {
                    gsap.to(counter, {
                        textContent: target,
                        duration: 2,
                        snap: { textContent: 1 },
                        onUpdate: function() {
                            const val = Math.floor(this.targets()[0].textContent);
                            this.targets()[0].textContent = val.toLocaleString();
                        }
                    });
                }
            });
        }
    });
}

// ===== EMAIL BOOKING SYSTEM =====
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            service: document.getElementById('service').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            notes: document.getElementById('notes').value
        };
        
        // Create email mailto link
        const subject = 'Appointment Booking Request - Eyebrow Zone';
        const body = `New Appointment Request

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Service Requested: ${formData.service}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}

Special Requests:
${formData.notes || 'None'}

---
Please confirm this appointment by contacting the client at:
Phone: ${formData.phone}
Email: ${formData.email}`;
        
        // Open email client
        window.location.href = `mailto:Bombaybeautysalonnyc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Show confirmation
        alert('Your email app will open with the booking request. Please send the email to complete your booking!');
        
        // Reset form
        this.reset();
    });
}

// ===== 3D HERO CANVAS ANIMATION =====
const canvas = document.getElementById('hero3d');
if (canvas) {
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Luxury particle system
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = `rgba(196, 78, 158, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}
