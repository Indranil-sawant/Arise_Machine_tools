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
        nav : true,
        navText : [
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
        nav : true,
        navText : [
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
    });z

    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });

    document.addEventListener('DOMContentLoaded', function () {
        function toggleCarouselForMobile() {
            var el = document.getElementById('ezy__header30-controls');
            if (!el) return;
            var isMobile = window.innerWidth <= 768;

            // If bootstrap available, dispose on mobile to avoid duplicate slides
            if (window.bootstrap && bootstrap.Carousel) {
                try {
                    var inst = bootstrap.Carousel.getInstance(el);
                    if (isMobile) {
                        if (inst) inst.dispose();
                        el.removeAttribute('data-bs-ride');
                    } else {
                        // re-init if desktop and not initialized
                        if (!inst) new bootstrap.Carousel(el, { interval: false });
                    }
                } catch (e) {
                    // ignore if bootstrap not present or already disposed
                }
            }

            // Add a helper class for CSS if needed
            if (isMobile) el.classList.add('mobile-scroll');
            else el.classList.remove('mobile-scroll');
        }

        toggleCarouselForMobile();
        window.addEventListener('resize', function () {
            // throttle not necessary for simple project, but add if needed
            toggleCarouselForMobile();
        });
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
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
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


