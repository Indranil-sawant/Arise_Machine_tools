/**
 * ANTI-GRAVITY SCROLL ENGINE
 * 
 * A lightweight, dependency-free script to add momentum and performance 
 * optimizations to native scrolling.
 * 
 * Features:
 * - Desktop-only smooth inertia (Mouse wheel)
 * - 60FPS Performance optimizations (Hover disabling)
 * - Accessibility checks (Prefers-reduced-motion)
 * - Native fallbacks
 */

class AntiGravityScroll {
    constructor() {
        // Configuration
        this.config = {
            friction: 0.08,        // 0.1 = tight, 0.05 = loose/floaty
            acceleration: 400,     // Scroll speed multiplier
            mobileBreakpoint: 1024
        };

        // State
        this.scrollY = window.scrollY;
        this.targetY = window.scrollY;
        this.isScrolling = false;
        this.isHoverDisabled = false;
        this.isAnimationActive = false;
        this.rafId = null;

        // Feature Detection
        this.isMobile = window.innerWidth <= this.config.mobileBreakpoint;
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        // Check for Mac to potentially skip inertia if native is good enough, 
        // but User requested "Add", so we enforce uniformity unless it's mobile.
        this.isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

        // Bindings
        this.onWheel = this.onWheel.bind(this);
        this.update = this.update.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.onResize = this.onResize.bind(this);

        this.init();
    }

    init() {
        // 1. Core Performance Check (Run on all devices)
        window.addEventListener('scroll', this.onScroll, { passive: true });
        window.addEventListener('resize', this.onResize, { passive: true });

        // 2. Smooth Inertia (Desktop Only, Non-Mac preference optional)
        if (!this.isMobile && !this.prefersReducedMotion) {

            // We only intercept WHEEL for momentum. Keys/Drag remain native.
            window.addEventListener('wheel', this.onWheel, { passive: false });

            // CRITICAL: Disable CSS smooth scroll to prevent "Double Easing" fighting
            // logic which causes stutter.
            document.documentElement.style.scrollBehavior = 'auto';

            // Start the loop
            this.update();
        }

        console.log('🌌 Anti-Gravity Scroll Initialized');
    }

    /**
     * Intercepts Mouse Wheel for Momentum Calculation
     */
    onWheel(e) {
        // Safety: Allow Zoom (Ctrl+Wheel) or Textareas
        if (e.ctrlKey || e.metaKey) return;

        // Safety: Check if target is a scrollable internal container
        let target = e.target;
        while (target && target !== document.body) {
            if (target.scrollHeight > target.clientHeight) {
                const style = window.getComputedStyle(target);
                if (['auto', 'scroll'].includes(style.overflowY)) {
                    // Let native scroll handle nested containers
                    return;
                }
            }
            target = target.parentElement;
        }

        // Prevent default browser scroll to handle it ourselves
        e.preventDefault();

        // Calculate Delta
        // Normalize delta for Firefox vs Chrome
        let delta = e.deltaY;
        if (e.deltaMode === 1) delta *= 40; // Line mode
        if (e.deltaMode === 2) delta *= 800; // Page mode

        // Update Target
        // Cap target to document bounds
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        this.targetY = Math.max(0, Math.min(this.targetY + delta, maxScroll));

        // Wake up animation loop if sleeping
        if (!this.isAnimationActive) {
            this.isAnimationActive = true;
            this.rafId = requestAnimationFrame(this.update);
        }
    }

    /**
     * Animation Loop (60fps)
     */
    update() {
        // Linear Interpolation (Lerp) for smoothness
        const diff = this.targetY - this.scrollY;

        // Stop condition: sufficiently close
        if (Math.abs(diff) < 0.5) {
            this.isAnimationActive = false;
            // Snap to exact
            this.scrollY = this.targetY;
            window.scrollTo(0, this.scrollY);
            return;
        }

        // Apply Friction
        this.scrollY += diff * this.config.friction;

        // Perform Scroll
        window.scrollTo(0, this.scrollY);

        // Continue Loop
        this.rafId = requestAnimationFrame(this.update);
    }

    /**
     * Native Scroll Listener (Performance Optimization)
     * Detects when native scroll happens (dragbar, keys) to sync state
     * and toggle pointer-events.
     */
    onScroll() {
        // Sync state if user drags scrollbar
        if (!this.isAnimationActive) {
            this.scrollY = window.scrollY;
            this.targetY = window.scrollY;
        }

        // Performance: Disable hover effects while scrolling
        if (!this.isHoverDisabled) {
            document.body.classList.add('is-scrolling');
            this.isHoverDisabled = true;
        }

        // Debounce removal of hover disable
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(() => {
            document.body.classList.remove('is-scrolling');
            this.isHoverDisabled = false;
        }, 150);
    }

    onResize() {
        this.isMobile = window.innerWidth <= this.config.mobileBreakpoint;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        this.targetY = Math.min(this.targetY, maxScroll);
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new AntiGravityScroll());
} else {
    new AntiGravityScroll();
}
