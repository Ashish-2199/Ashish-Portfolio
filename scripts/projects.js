// scripts/projects.js
document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    const filterButtons = document.querySelectorAll('.project-filter');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Project filtering
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    setTimeout(function() {
                        card.classList.add('show');
                    }, 200);
                } else if (card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(function() {
                        card.classList.add('show');
                    }, 200);
                } else {
                    card.classList.remove('show');
                    setTimeout(function() {
                        card.style.display = 'none';
                    }, 200);
                }
            });
        });
    });
});