// public/js/main.js
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Enhanced hover effects for cards
    const interactiveCards = document.querySelectorAll('.feature-card, .driver-card, .circuit-card, .miami-card');
    interactiveCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Navbar scroll effect
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.floating-nav');
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            navbar.style.transform = 'translateX(-50%) translateY(-100px)';
        } else {
            navbar.style.transform = 'translateX(-50%) translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });

    console.log('🏁 F1 Miami Dashboard loaded! 🌴');
});