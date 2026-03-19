/*
   Arise Machine Tools - Premium Optimization Logic
   Non-blocking, Isolated, Performance-First
   v2.1 - Production Safe (white-section bug fixed)
*/

(function () {
    'use strict';

    // Helper: Defer execution to idle time
    const defer = (fn) => {
        if (window.requestIdleCallback) {
            window.requestIdleCallback(fn, { timeout: 2000 });
        } else {
            setTimeout(fn, 200);
        }
    };

    const initOptimizations = () => {

        // 1. Lazy Load Iframes
        const iframes = document.getElementsByTagName('iframe');
        for (let i = 0; i < iframes.length; i++) {
            if (!iframes[i].hasAttribute('loading')) {
                iframes[i].setAttribute('loading', 'lazy');
            }
        }

        // 2. Add Premium Hover Effects to Cards (Dynamic Enhancement)
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
        });

        // 3. Smooth Anchor Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // 4. ✅ SAFE Reveal Animations on Scroll (IntersectionObserver)
        // CRITICAL FIX: Do NOT set opacity:0 on sections directly in JS.
        // That caused sections to permanently stay invisible if the observer
        // misfired (slow devices, rapid scroll, tab switch, etc.).
        // Instead: use CSS class 'cnc-reveal-ready' as the initial hidden state,
        // and add 'cnc-revealed' when intersecting.
        // A CSS fallback ensures content is ALWAYS visible if JS fails.

        if ('IntersectionObserver' in window) {
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -40px 0px', // Trigger slightly before fully in view
                threshold: 0.05  // Lower threshold = more reliable triggering
            };

            const scrollObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('cnc-revealed');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Respect reduced motion
            const prefersReduced = window.matchMedia &&
                window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            if (!prefersReduced) {
                // Only observe sections NOT already animated by WOW.js
                const sections = document.querySelectorAll(
                    'section:not(.wow), .cnc-products-card, .cnc-services-card, .cnc-about-feature-card'
                );
                sections.forEach(section => {
                    // Safety: only add reveal class if not the hero or above-fold
                    const rect = section.getBoundingClientRect();
                    const isAboveFold = rect.top < window.innerHeight;
                    if (!isAboveFold) {
                        section.classList.add('cnc-reveal-ready');
                        scrollObserver.observe(section);
                    }
                });
            }
        }

    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => defer(initOptimizations));
    } else {
        defer(initOptimizations);
    }

})();
