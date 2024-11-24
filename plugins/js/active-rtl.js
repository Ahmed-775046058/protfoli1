(function($) {
    'use strict';
    jQuery(document).on('ready', function(){

        // Preloader
        jQuery(window).on('load',function(){
            jQuery(".preloader").fadeOut(500);
        });

        if($('.wow').length){
            var wow = new WOW(
                {

                    boxClass: 'wow',      // animated element css class (default is wow)
                    animateClass: 'animated', // animation css class (default is animated)
                    offset: 100,          // distance to the element when triggering the animation (default is 0)
                    mobile: true,       // trigger animations on mobile devices (default is true)
                    live: true,       // act on asynchronously loaded content (default is true)
                    callback: function (box) {
                        // the callback is fired every time an animation is started
                        // the argument that is passed in is the DOM node being animated
                    },
                    scrollContainer: null,    // optional scroll container selector, otherwise use window,
                    resetAnimation: true,

                }
            );
            wow.init();
        }

        // Header Sticky
        $(window).on('scroll', function() {
            if ($(this).scrollTop() >150){
                $('.navbar-area').addClass("is-sticky");
            }
            else{
                $('.navbar-area').removeClass("is-sticky");
            }
        });
        $("#rev_arrows").show().revolution({
            sliderType: "standard",
            jsFileLocation: "js/revolution/",
            sliderLayout: "fullwidth",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                arrows: {
                    enable: true,
                    hide_onmobile: true,
                    hide_onleave: false,
                    hide_under: 767,
                    right: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 30,
                    },
                    left: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 30
                    },
                },
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false,
                }
            },
            viewPort: {
                enable: true,
                outof: "pause",
                visible_area: "90%"
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1140, 1024, 768, 480],
            gridheight: [620, 600, 550, 490],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 9000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 480,
            hideAllCaptionAtLilmit: 480,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });


        $('.slider-for').slick({
            slidesToShow: 1,
            useTransform: false,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 5,
            infinite: true,
            useTransform: false,
            autoplay: true,
            autoplaySpeed: 3000,
            verticalReverse: true,
            verticalSwiping: true,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            centerMode: false,
            focusOnSelect: true
        });
        $("#partners-slider").owlCarousel({
            items: 4,
            autoplay: true,
            smartSpeed: 900,
            autoplayHoverPause: true,
            loop: true,
            rtl: true,
            margin: 30,
            dots: false,
            nav: false,
            responsive: {
                1200: {
                    items: 4,
                },
                800: {
                    items: 3,
                },
                480: {
                    items: 2,
                },
                320: {
                    items: 1,
                },
            }
        });

        $("#gallary-slider").owlCarousel({
            items: 3,
            autoplay: true,
            smartSpeed: 900,
            autoplayHoverPause: true,
            loop: true,
            rtl: true,
            margin: 30,
            dots: false,
            nav: false,
            responsive: {
                1200: {
                    items: 3,
                },
                800: {
                    items: 3,
                },
                480: {
                    items: 2,
                },
                320: {
                    items: 1,
                },
            }
        });
        $("#services-slider").owlCarousel({
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            smartSpeed: 1200,
            loop: true,
            rtl:true,
            nav: false,
            navText: false,
            dots: false,
            mouseDrag: true,
            touchDrag: true,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                640: {
                    items: 3
                }
            }
        });
        $(".owl-ads").owlCarousel({
            items: 1,
            margin: 30,
            dots: false,
            nav: true,
            navText: [
                "<i class='fa fa-angle-up'></i>",
                "<i class='fa fa-angle-down'></i>"
            ],
            loop: true,
            animateIn: 'fadeInUp',
            autoplay: true,
            smartSpeed: 1000,
            navSpeed: true,
            autoplayHoverPause: true,
            rtl: true

        });
        $(".owl-say").owlCarousel({
            items: 1,
            margin: 30,
            dots: false,
            nav: true,
            navText: [
                '<i class="fa fa-angle-right"></i>',
                '<i class="fa fa-angle-left"></i>'
            ],
            loop: true,
            autoplay: true,
            smartSpeed: 1000,
            navSpeed: true,
            autoplayHoverPause: true,
            rtl: true
        });

        // Mean Menu
        jQuery('.mean-menu').meanmenu({
            meanScreenWidth: "991"
        });

        // Main-Slides
        $('.main-slides').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            autoplay: true,
            smartSpeed: 500,
            animateOut: 'fadeOut',
            rtl: true,
            autoHeight:true,
            items: 1,
            navText: [
                "<i class='fa fa-angle-right'></i>",
                "<i class='fa fa-angle-left'></i>",
            ],
        });
        $(".main-slides").on("translate.owl.carousel", function(){
            $(".main-banner-content h1").removeClass("animated fadeInUp").css("opacity", "0");
            $(".main-banner-content p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".main-banner-content .default-btn-one").removeClass("animated fadeInRight").css("opacity", "0");
        });
        $(".main-slides").on("translated.owl.carousel", function(){
            $(".main-banner-content h1").addClass("animated fadeInUp").css("opacity", "1");
            $(".main-banner-content p").addClass("animated fadeInUp").css("opacity", "1");
            $(".main-banner-content .default-btn-one").addClass("animated fadeInRight").css("opacity", "1");
        });

        // Testimonial Slides
        $('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            items: 1,
            dots: false,
            autoplay: true,
            smartSpeed: 1000,
            rtl: true,
            autoplayHoverPause: true,
            navText: [
                "<i class='flaticon-right-arrow'></i>",
                "<i class='flaticon-left-arrow'></i>",
            ],

            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 1
                }
            },
        });

        // Image Slides
        $('.image-slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            items: 1,
            dots: false,
            rtl: true,
            autoplay: true,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            navText: [
                "<i class='flaticon-right-arrow'></i>",
                "<i class='flaticon-left-arrow'></i>",
            ],
        });

        // Blog Slides
        $('.blog-slider').owlCarousel({
            loop: true,
            nav: false,
            items: 1,
            dots: true,
            autoplay: true,
            rtl: true,
            smartSpeed: 1000,
            autoplayHoverPause: true,

            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            },
        });

        // Destinations-slider
        $('.destinations-slider').owlCarousel({
            loop: true,
            nav: false,
            items: 1,
            margin: 15,
            dots: true,
            autoplay: true,
            rtl: true,
            smartSpeed: 1000,
            autoplayHoverPause: true,

            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 4
                }
            },
        });

        // Benefits-slider
        $('.benefits-slider').owlCarousel({
            loop: true,
            nav: false,
            items: 1,
            margin: 30,
            dots: true,
            rtl: true,
            autoplay: true,
            smartSpeed: 1000,
            autoplayHoverPause: true,

            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            },
        });

        // Video Popup
        $('.popup-youtube').magnificPopup({
            disableOn: 320,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        // Nice Select JS
        $('select').niceSelect();

        // Go to Top
        $(function(){
            // Scroll Event
            $(window).on('scroll', function(){
                var scrolled = $(window).scrollTop();
                if (scrolled > 600) $('.go-top').addClass('active');
                if (scrolled < 600) $('.go-top').removeClass('active');
            });
            // Click Event
            $('.go-top').on('click', function() {
                $("html, body").animate({ scrollTop: "0" },  500);
            });
        });

        // FAQ Accordion
        $(function() {
            $('.accordion').find('.accordion-title').on('click', function() {
                // Adds Active Class
                $(this).toggleClass('active');
                // Expand or Collapse This Panel
                $(this).next().slideToggle('fast');
                // Hide The Other Panels
                $('.accordion-content').not($(this).next()).slideUp('fast');
                // Removes Active Class From Other Titles
                $('.accordion-title').not($(this)).removeClass('active');
            });
        });

        // Popup Gallery
        $('.popup-btn').magnificPopup({
            type: 'image',
            gallery:{
                enabled:true
            }
        });

        /*Business*/

        // Count Time
        function makeTimer() {
            var endTime = new Date("September 30, 2020 17:00:00 PDT");
            var endTime = (Date.parse(endTime)) / 1000;
            var now = new Date();
            var now = (Date.parse(now) / 1000);
            var timeLeft = endTime - now;
            var days = Math.floor(timeLeft / 86400);
            var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
            var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            if (seconds < "10") { seconds = "0" + seconds; }
            $("#days").html(days + "<span>Days</span>");
            $("#hours").html(hours + "<span>Hours</span>");
            $("#minutes").html(minutes + "<span>Minutes</span>");
            $("#seconds").html(seconds + "<span>Seconds</span>");
        }
        setInterval(function() { makeTimer(); }, 1000);


    });
})(jQuery);