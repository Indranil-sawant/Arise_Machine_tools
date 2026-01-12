(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1500);
    };
    spinner(0);


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // International carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        items: 1,
        smartSpeed: 1500,
        dots: true,
        dotsData: true,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });

    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });



    // Back to top button
    // Back to top button
    var backToTop = $('.back-to-top');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            if (!backToTop.is(':visible')) {
                backToTop.fadeIn('slow', function () {
                    $(this).css('display', 'flex');
                });
            }
        } else {
            if (backToTop.is(':visible')) {
                backToTop.fadeOut('slow');
            }
        }
    });

    // Check initial position
    if ($(window).scrollTop() <= 300) {
        backToTop.hide();
    }

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    function myMove() {
        let id = null;
        const elem = document.getElementById("animate");
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
            if (pos == 350) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + "px";
                elem.style.left = pos + "px";
            }
        }
    }




})(jQuery);


document.querySelectorAll('.blog-content').forEach(blog => {
    const title = blog.querySelector('h5').textContent.trim();
    const query = encodeURIComponent(title);
    const link = blog.querySelector('a.btn');
    link.href = `https://www.google.com/search?q=${query}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
});

/* ============================
     Minimal UX / Performance additions (vanilla, additive)
     - Sets lazy/async hints on media
     - Adds rAF-throttled scroll indicator class
     - Respects prefers-reduced-motion
     - Non-blocking, easy to remove
     ============================ */
(function () {
    'use strict';

    // Respect reduced motion preference
    var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    try {
        if (!prefersReduced) {
            // Ensure native smooth scroll (non-invasive)
            try { document.documentElement.style.scrollBehavior = 'smooth'; } catch (e) { /* ignore */ }
        }

        // Add lightweight lazy/decode hints to images to reduce main-thread work
        var imgs = document.getElementsByTagName('img');
        for (var i = 0; i < imgs.length; i++) {
            var im = imgs[i];
            if (!im.getAttribute('loading')) im.setAttribute('loading', 'lazy');
            if (!im.getAttribute('decoding')) im.setAttribute('decoding', 'async');
        }

        // For videos: prefer metadata preload to avoid blocking; preserve explicit autoplay/muted attributes
        var videos = document.getElementsByTagName('video');
        for (i = 0; i < videos.length; i++) {
            var v = videos[i];
            if (!v.getAttribute('preload')) v.setAttribute('preload', 'metadata');
            // small safety: if autoplay is set but muted isn't, don't change behavior
        }

        // rAF-throttled scroll indicator (non-invasive)
        (function () {
            var ticking = false;
            var lastScroll = 0;
            function onScroll() {
                lastScroll = Date.now();
                if (!ticking) {
                    window.requestAnimationFrame(function () {
                        document.body.classList.add('ux-scrolling');
                        // remove ux-scrolling shortly after scroll stops
                        setTimeout(function () {
                            var dt = Date.now() - lastScroll;
                            if (dt >= 120) document.body.classList.remove('ux-scrolling');
                        }, 150);
                        ticking = false;
                    });
                    ticking = true;
                }
            }
            window.addEventListener('scroll', onScroll, { passive: true });
        })();

        // Improve touch responsiveness: ensure passive listeners for touchstart where safe
        try {
            window.addEventListener('touchstart', function () { }, { passive: true });
        } catch (e) { /* old browsers */ }

    } catch (err) {
        // Fail safe: nothing critical
        console.error('UX enhancement script error', err);
    }
})();




function toggleFAQ(button) {
    const item = button.parentElement;
    const answer = button.nextElementSibling;
    const isActive = item.classList.contains('cnc-faq-item-active');

    // Close all items
    document.querySelectorAll('.cnc-faq-item').forEach(faqItem => {
        faqItem.classList.remove('cnc-faq-item-active');
        faqItem.querySelector('.cnc-faq-answer').classList.remove('cnc-faq-answer-open');
    });

    // Open clicked item if it wasn't active
    if (!isActive) {
        item.classList.add('cnc-faq-item-active');
        answer.classList.add('cnc-faq-answer-open');
    }
}


document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const navbar = document.getElementById("cncNavbar");
    const navToggle = document.getElementById("cncNavToggle");
    const navMenu = document.getElementById("cncNavMenu");

    /* ============================
       NAVBAR SCROLL EFFECT
       ============================ */
    if (navbar) {
        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 50) {
                navbar.classList.add("cnc-navbar-scrolled");
            } else {
                navbar.classList.remove("cnc-navbar-scrolled");
            }
        });
    }

    /* ============================
       MOBILE MENU TOGGLE
       ============================ */
    if (navToggle && navMenu) {
        navToggle.addEventListener("click", (e) => {
            e.stopPropagation(); // don't bubble to document click
            navToggle.classList.toggle("cnc-navbar-toggle-active");
            navMenu.classList.toggle("cnc-navbar-menu-open");

            document.body.style.overflow = navMenu.classList.contains(
                "cnc-navbar-menu-open"
            )
                ? "hidden"
                : "";
        });
    }

    /* ============================
       DROPDOWN TOGGLE (MOBILE)
       ============================ */
    /* ============================
       DROPDOWN TOGGLE (MOBILE)
       ============================ */
    const dropdowns = document.querySelectorAll(".cnc-navbar-dropdown");

    dropdowns.forEach((dropdown) => {
        const dropdownToggle = dropdown.querySelector(".cnc-navbar-dropdown-toggle");

        if (dropdownToggle) {
            dropdownToggle.addEventListener("click", (e) => {
                // Only prevent default and toggle on mobile
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();

                    // Close other open dropdowns (optional, but good UX)
                    dropdowns.forEach((otherDropdown) => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove("cnc-navbar-dropdown-open");
                        }
                    });

                    dropdown.classList.toggle("cnc-navbar-dropdown-open");
                }
            });
        }
    });

    /* ============================
       CLOSE MOBILE MENU ON OUTSIDE CLICK
       ============================ */
    document.addEventListener("click", (event) => {
        if (!navToggle || !navMenu) return;

        const target = event.target;
        const clickInsideNavbar = navbar && navbar.contains(target);
        const clickInsideMenu = navMenu && navMenu.contains(target);

        if (
            !clickInsideNavbar &&
            !clickInsideMenu &&
            navMenu.classList.contains("cnc-navbar-menu-open")
        ) {
            navToggle.classList.remove("cnc-navbar-toggle-active");
            navMenu.classList.remove("cnc-navbar-menu-open");
            document.body.style.overflow = "";
        }
    });

    /* ============================
       CLOSE MENU ON RESIZE
       ============================ */
    window.addEventListener("resize", () => {
        if (!navToggle || !navMenu) return;

        if (window.innerWidth > 768) {
            navToggle.classList.remove("cnc-navbar-toggle-active");
            navMenu.classList.remove("cnc-navbar-menu-open");
            document.body.style.overflow = "";
        }
    });

    /* ============================
       ACTIVE NAV HIGHLIGHTING
       ============================ */
    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const navLinks = document.querySelectorAll(".cnc-navbar-link");

    navLinks.forEach((link) => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.classList.add("cnc-navbar-link-active");
        } else {
            link.classList.remove("cnc-navbar-link-active");
        }
    });
});
