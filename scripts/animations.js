// scripts/animations.js
document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (cursor && cursorFollower) {
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(function() {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });
        
        document.addEventListener('mousedown', function() {
            cursor.classList.add('click');
            cursorFollower.classList.add('click');
            
            setTimeout(function() {
                cursor.classList.remove('click');
                cursorFollower.classList.remove('click');
            }, 500);
        });
        
        // Add hover effect to all links and buttons
        const hoverElements = document.querySelectorAll('a, button, .btn, .project-card, .skill-item');
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                cursor.classList.add('hover');
                cursorFollower.classList.add('hover');
            });
            
            element.addEventListener('mouseleave', function() {
                cursor.classList.remove('hover');
                cursorFollower.classList.remove('hover');
            });
        });
    }
    
    // Animate elements when they come into view
    const animateElements = document.querySelectorAll('.animate');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
});