document.addEventListener('DOMContentLoaded', function() {
    // Language selector functionality
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('click', function() {
            console.log('Language selector clicked');
        });
    }

    // Navigation link active state
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Hero section button interactions
    const findOutMoreBtn = document.querySelector('.btn-primary');
    const playDemoBtn = document.querySelector('.btn-play');
    
    if (findOutMoreBtn) {
        findOutMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Find out more clicked');
        });
    }
    
    if (playDemoBtn) {
        playDemoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Play demo clicked');
        });
    }

    // Service card hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('highlighted')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
    

    // Testimonials functionality
    const testimonials = [
        {
            text: '"Booking was a breeze! From choosing my destination to arriving at the airport, everything was smooth and stress-free. Highly recommend!"',
            author: 'Mike taylor',
            location: 'Lahore, Pakistan',
            avatar: 'images/testimonial.png'
        },
        {
            text: '"Amazing travel experience! The team was professional and the destinations were breathtaking. Highly recommend their services."',
            author: 'Chris Thomas',
            location: 'CEO of Red Button',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
        },
        {
            text: '"Exceptional service and unforgettable memories. They truly understand what makes a perfect vacation."',
            author: 'Sarah Johnson',
            location: 'New York, USA',
            avatar: 'images/sarah.png'
        }
    ];

    let currentTestimonial = 0;
    const dots = document.querySelectorAll('.nav-dot');
    const testimonialText = document.querySelector('.testimonial-text');
    const authorName = document.querySelector('.author-info h4');
    const authorLocation = document.querySelector('.author-info p');
    const authorAvatar = document.querySelector('.author-avatar img');
    const prevArrow = document.querySelector('.nav-arrow.prev');
    const nextArrow = document.querySelector('.nav-arrow.next');

    function updateTestimonial(index) {
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });

        // Update testimonial content
        const testimonial = testimonials[index];
        testimonialText.textContent = testimonial.text;
        authorName.textContent = testimonial.author;
        authorLocation.textContent = testimonial.location;
        authorAvatar.src = testimonial.avatar;
        authorAvatar.alt = testimonial.author;

        currentTestimonial = index;
    }

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateTestimonial(index);
        });
    });

    // Arrow navigation
    prevArrow.addEventListener('click', () => {
        const prevIndex = currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1;
        updateTestimonial(prevIndex);
    });

    nextArrow.addEventListener('click', () => {
        const nextIndex = currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1;
        updateTestimonial(nextIndex);
    });

    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        const nextIndex = currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1;
        updateTestimonial(nextIndex);
    }, 5000);

    // Partner logo hover effects
    const partnerLogos = document.querySelectorAll('.partner-logo');
    partnerLogos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Subscription form
    document.getElementById('subscriptionForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = document.getElementById('emailInput');
        const email = emailInput.value.trim();
        
        if (email) {
            const button = document.querySelector('.subscribe-btn');
            const originalText = button.textContent;
            
            button.textContent = 'Subscribed!';
            button.style.background = 'linear-gradient(135deg, #10b981 0%, #34d399 100%)';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = 'linear-gradient(135deg, #ff6b47 0%, #ff8e7a 100%)';
                emailInput.value = '';
            }, 2000);
            
            console.log('Subscription email:', email);
        }
    });

    // Subscription container hover effect
    document.querySelector('.subscription-container').addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });

    document.querySelector('.subscription-container').addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });

    // Footer interactions
    const socialIcons = document.querySelectorAll('.social-icon');
    const footerLinks = document.querySelectorAll('.footer-column a');
    const appButtons = document.querySelectorAll('.app-button');

    // Add ripple effect to social icons
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                pointer-events: none;
                animation: ripple 0.6s ease-out;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add hover effects to footer links
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Add click tracking for app buttons
    appButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            this.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            console.log('App button clicked:', this.classList.contains('google-play') ? 'Google Play' : 'App Store');
        });
    });

    // Add CSS animation for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});


// Update in script.js
// Replace the nested DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    // Language selector functionality
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('click', function() {
            console.log('Language selector clicked');
        });
    }

    // Mobile menu functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
            document.body.classList.toggle('no-scroll');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.add('fa-bars');
                menuToggle.querySelector('i').classList.remove('fa-times');
                document.body.classList.remove('no-scroll');
            });
        });
    }

});