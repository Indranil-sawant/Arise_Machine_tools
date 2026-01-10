/* 
   Arise Machine Tools - Premium Optimization Logic
   Non-blocking, Isolated, Performance-First
*/

(function () {
    'use strict';

    // Helper: Defer execution
    const defer = (fn) => {
        if (window.requestIdleCallback) {
            window.requestIdleCallback(fn);
        } else {
            setTimeout(fn, 1);
        }
    };

    const initOptimizations = () => {
        console.log('Arise Premium Optimizations: Initializing...');

        // 1. Lazy Load Iframes
        const iframes = document.getElementsByTagName('iframe');
        for (let i = 0; i < iframes.length; i++) {
            if (!iframes[i].hasAttribute('loading')) {
                iframes[i].setAttribute('loading', 'lazy');
            }
        }

        // 2. Add Premium Hover Effects to Cards (Dynamic Enhancement)
        // Targeting common card classes found in the project
        const cardSelectors = [
            '.card',
            '.service-item',
            '.product-item',
            '.cnc-products-card',
            '.cnc-services-card',
            '.cnc-about-feature-card',
            '.cnc-blog-card',
            '.cnc-team-item',
            '.cnc-range-card',
            '.cnc-process-step-card',
            '.cnc-stat-card',
            '.cnc-mv-card'
        ];

        const cards = document.querySelectorAll(cardSelectors.join(','));
        cards.forEach(card => {
            card.classList.add('hover-lift');
            // Ensure they have the transition base from CSS
            card.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease';
        });

        // 3. Smooth Anchor Scrolling (Polyfill/Enhancement for complex cases)
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // 4. Reveal Animations on Scroll (Intersection Observer)
        // Adds 'fade-in-up-subtle' to sections as they appear
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const scrollObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add animation class
                    entry.target.classList.add('fade-in-up-subtle');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Target major sections for reveal
        const sections = document.querySelectorAll('section, header, footer, .cnc-hero-content');
        sections.forEach(section => {
            // Only apply if not already animated by WOW.js or similar
            // We'll check if it has 'wow' class.
            if (!section.classList.contains('wow')) {
                section.style.opacity = '0'; // Set initial state
                section.style.animationFillMode = 'forwards';
                scrollObserver.observe(section);
            }
        });

    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => defer(initOptimizations));
    } else {
        defer(initOptimizations);
    }

})();
