// scripts/tilt-effect.js
// Advanced 3D Tilt Effect for Project Cards

document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // Select all cards that should have tilt effect
    const tiltCards = document.querySelectorAll('.project-card-modern, .skill-card-modern, .experience-card-modern');
    
    tiltCards.forEach(card => {
        // Add mouse move event
        card.addEventListener('mousemove', handleTilt);
        
        // Add mouse leave event to reset
        card.addEventListener('mouseleave', resetTilt);
    });
    
    function handleTilt(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        
        // Get mouse position relative to card
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate center of card
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate rotation angles (max 10 degrees)
        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((centerX - x) / centerX) * 10;
        
        // Apply transform
        card.style.transform = `
            translateY(-10px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg)
            scale(1.02)
        `;
        
        // Add subtle shadow following mouse
        const shadowX = ((x - centerX) / centerX) * 20;
        const shadowY = ((y - centerY) / centerY) * 20;
        
        card.style.boxShadow = `
            ${shadowX}px ${shadowY}px 40px rgba(112, 0, 255, 0.3),
            0 0 60px rgba(112, 0, 255, 0.1)
        `;
    }
    
    function resetTilt(e) {
        const card = e.currentTarget;
        
        // Smooth return to original position
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
        card.style.boxShadow = '';
        card.style.transition = 'all 0.5s ease';
        
        // Remove transition after animation completes
        setTimeout(() => {
            card.style.transition = '';
        }, 500);
    }
});

// Alternative: Simpler tilt effect (use this if the above is too intense)
function simpleTiltEffect() {
    const cards = document.querySelectorAll('.project-card-modern');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotateX(5deg) rotateY(-5deg) scale(1.02)';
            this.style.boxShadow = '0 25px 50px rgba(112, 0, 255, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
}

// Uncomment to use simple version instead:
// document.addEventListener('DOMContentLoaded', simpleTiltEffect);
