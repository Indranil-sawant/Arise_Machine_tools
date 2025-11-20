(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
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
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
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
    const dropdown = document.getElementById("cncNavDropdown");
    if (dropdown) {
        const dropdownToggle = dropdown.querySelector(".cnc-navbar-dropdown-toggle");

        if (dropdownToggle) {
            dropdownToggle.addEventListener("click", (e) => {
                // Only prevent default and toggle on mobile
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    dropdown.classList.toggle("cnc-navbar-dropdown-open");
                }
            });
        }
    }

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
