(function ($) {

    "use strict";

    /*------------------------------------------
    Nice Select
-------------------------------------------*/
    if ($(".select").length) {
        $(".select").niceSelect();
    }

    /*------------------------------------------
        = ALL ESSENTIAL FUNCTIONS
    -------------------------------------------*/

    // Cached selectors
    const $navigationHolder = $(".navigation-holder");
    const $mobileMenuOpenBtn = $(".mobail-menu .open-btn");
    const $mobileMenuToggleBtn = $(".mobail-menu .navbar-toggler");
    const $mainNavUl = $("#navbar > ul");
    const $body = $("body");
    const $menuCloseBtns = $(".menu-close");

    /**
     * Toggle mobile navigation
     */
    function toggleMobileNavigation() {
        if ($mobileMenuOpenBtn.length) {
            $mobileMenuOpenBtn.on("click", (e) => {
                e.stopImmediatePropagation();
                $navigationHolder.toggleClass("slideInn");
                $mobileMenuToggleBtn.toggleClass("x-close");
                return false;
            });
        }
    }
    toggleMobileNavigation();

    /**
     * Debounce helper
     */
    function debounce(func, wait = 150) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    /**
     * Toggle class for small nav based on window width
     */
    function toggleClassForSmallNav() {
        if (window.innerWidth <= 991) {
            $mainNavUl.addClass("small-nav");
        } else {
            $mainNavUl.removeClass("small-nav");
        }
    }

    /**
     * Small navigation submenu toggle functionality
     */
    function smallNavFunctionality() {
        const windowWidth = window.innerWidth;
        const $smallNav = $navigationHolder.find("> .small-nav");
        const $subMenus = $smallNav.find(".sub-menu");
        const $megaMenus = $smallNav.find(".mega-menu");
        const $menuItemsWithChildren = $smallNav.find(".menu-item-has-children > a");

        if (windowWidth <= 991) {
            $subMenus.hide();
            $megaMenus.hide();

            $menuItemsWithChildren.off("click").on("click", function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                $(this).siblings().slideToggle();
                $(this).toggleClass("rotate");
            });
        } else {
            $navigationHolder.find(".sub-menu, .mega-menu").show();
            $menuItemsWithChildren.off("click");
        }
    }

    /**
     * Close navigation menu and toggle button states
     */
    function closeNavigation() {
        $navigationHolder.removeClass("slideInn");
        $mobileMenuToggleBtn.removeClass("x-close");
    }

    // Initialize functions on load and bind event listeners
    function initEssentialFunctions() {
        toggleClassForSmallNav();
        smallNavFunctionality();

        $(window).on(
            "resize",
            debounce(() => {
                toggleClassForSmallNav();
                smallNavFunctionality();
            })
        );

        $body.on("click", closeNavigation);
        $menuCloseBtns.on("click", closeNavigation);
    }

    initEssentialFunctions();

    /**
     * Active menu item on scroll
     */
    function activeMenuItem($links) {
        const top = $(window).scrollTop();
        const nav = $links;
        const navHeight = nav.outerHeight();

        $("section").each(function () {
            const sectionTop = $(this).offset().top - navHeight;
            const sectionBottom = sectionTop + $(this).outerHeight();

            if (top >= sectionTop && top <= sectionBottom) {
                nav.find("> ul > li > a").parent().removeClass("current-menu-item");
                nav.find("a[href='#" + $(this).attr("id") + "']").parent().addClass("current-menu-item");
            } else if (top === 0) {
                nav.find("> ul > li > a").parent().removeClass("current-menu-item");
            }
        });
    }

    /**
     * Smooth scrolling
     */
    function smoothScrolling($scrollLinks, topOffset) {
        $scrollLinks.on("click", function (e) {
            if (
                location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
                location.hostname === this.hostname
            ) {
                let target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate(
                        { scrollTop: target.offset().top - topOffset },
                        1000,
                        "easeInOutExpo"
                    );
                    e.preventDefault();
                }
            }
        });
    }

    /*------------------------------------------
        Toggle Sections (Refactored)
    -------------------------------------------*/
    $("[id^='toggle']").on("click", function () {
        const toggleId = $(this).attr("id").replace("toggle", "open");
        const $target = $("#" + toggleId);
        if ($target.length) {
            $target.slideToggle();
        }
        // Add/remove related active classes
        if ($(this).is("#toggle1")) {
            $(".create-account").slideToggle();
            $(".caupon-wrap.s1").toggleClass("active-border");
        }
        if ($(this).is("#toggle2, #toggle3")) {
            $(".caupon-wrap.s2").toggleClass("coupon-2");
        }
        if ($(this).is("#toggle4")) {
            $(".caupon-wrap.s3").toggleClass("coupon-2");
        }
    });

    /*------------------------------------------
        Payment Option Toggle
    -------------------------------------------*/
    $(".payment-select .addToggle").on("click", () => {
        $(".payment-name").addClass("active");
        $(".payment-option").removeClass("active");
    });
    $(".payment-select .removeToggle").on("click", () => {
        $(".payment-option").addClass("active");
        $(".payment-name").removeClass("active");
    });

    /*------------------------------------------
        Datepicker
    -------------------------------------------*/
    if ($("#datepicker").length && $.fn.datepicker) {
        $("#datepicker").datepicker();
    }

    /*------------------------------------------
        Tooltips (Bootstrap 5)
    -------------------------------------------*/
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));


    /*------------------------------------------
     = PARALLAX BACKGROUND
 -------------------------------------------*/
    function bgParallax() {
        if ($(".parallax").length) {
            $(".parallax").each(function () {
                const sectionTop = $(this).offset().top; // use offset instead of position
                const scrollTop = $(window).scrollTop();
                const resize = sectionTop - scrollTop;
                const doParallax = -(resize / 5);
                const positionValue = doParallax + "px";
                const img = $(this).data("bg-image");

                $(this).css({
                    backgroundImage: img ? "url(" + img + ")" : "",
                    backgroundPosition: "50% " + positionValue,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                });
            });
        }
    }

    /*------------------------------------------
        = DEBOUNCE FUNCTION
    -------------------------------------------*/
    function debounce(func, wait = 20, immediate = false) {
        let timeout;
        return function (...args) {
            const context = this;
            const later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    /*------------------------------------------
        = WINDOW SCROLL & RESIZE
    -------------------------------------------*/
    $(window).on("scroll", debounce(bgParallax, 15));
    $(window).on("resize", debounce(bgParallax, 50));

    /*------------------------------------------
        = HERO SLIDER
    -------------------------------------------*/
    const menu = [];
    $(".wpo-hero-slider .swiper-slide").each(function () {
        menu.push($(this).find(".slide-inner").attr("data-text"));
    });

    const interleaveOffset = 0.5;
    const swiperOptions = {
        loop: true,
        speed: 1000,
        parallax: true,
        autoplay: {
            delay: 6500,
            disableOnInteraction: false,
        },
        watchSlidesProgress: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: (index, className) =>
                `<span class="${className}">${index + 1}</span>`,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            progress(swiper) {
                swiper.slides.each((i, slide) => {
                    const slideProgress = slide.progress;
                    const innerOffset = swiper.width * interleaveOffset;
                    const innerTranslate = slideProgress * innerOffset;
                    $(slide)
                        .find(".slide-inner")
                        .css("transform", `translate3d(${innerTranslate}px, 0, 0)`);
                });
            },
            touchStart(swiper) {
                swiper.slides.each((i, slide) => {
                    $(slide).css("transition", "");
                });
            },
            setTransition(swiper, speed) {
                swiper.slides.each((i, slide) => {
                    $(slide).css("transition", speed + "ms");
                    $(slide).find(".slide-inner").css("transition", speed + "ms");
                });
            },
        },
    };
    const swiper = new Swiper(".wpo-hero-slider .swiper-container", swiperOptions);

    /*------------------------------------------
        = DATA BACKGROUND IMAGE
    -------------------------------------------*/
    $(".slide-bg-image").each(function () {
        const bg = $(this).data("background");
        if (bg) $(this).css("background-image", "url(" + bg + ")");
    });

    /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
    function preloader() {
        const $preloader = $(".preloader");
        if ($preloader.length) {
            $preloader.delay(100).fadeOut(500, function () {
                wow.init();
            });
        }
    }

    /*------------------------------------------
        = WOW ANIMATION
    -------------------------------------------*/
    const wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: true,
        live: true,
    });

    /*------------------------------------------
        = ACTIVE POPUP IMAGE
    -------------------------------------------*/
    if ($(".fancybox").length) {
        $(".fancybox").fancybox({
            openEffect: "elastic",
            closeEffect: "elastic",
            wrapCSS: "project-fancybox-title-style",
        });
    }

    /*------------------------------------------
        = POPUP YOUTUBE, VIMEO, GMAPS
    -------------------------------------------*/
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });

    /*------------------------------------------
        = POPUP VIDEO
    -------------------------------------------*/
    if ($(".video-btn").length) {
        $(".video-btn").on("click", function (e) {
            e.preventDefault();
            $.fancybox({
                src: this.href,
                aspectRatio: true,
                type: $(this).data("type"),
                title: this.title,
                helpers: {
                    title: { type: "inside" },
                    media: {},
                },
                beforeShow: function () {
                    $(".fancybox-wrap").addClass("gallery-fancybox");
                },
            });
        });
    }

    /*------------------------------------------
        = ACTIVE GALLERY POPUP IMAGE
    -------------------------------------------*/
    if ($(".popup-gallery").length) {
        $(".popup-gallery").magnificPopup({
            delegate: "a",
            type: "image",
            gallery: { enabled: true },
            zoom: {
                enabled: true,
                duration: 300,
                easing: "ease-in-out",
                opener: function (openerElement) {
                    return openerElement.is("img")
                        ? openerElement
                        : openerElement.find("img");
                },
            },
        });
    }

    /*------------------------------------------
        = SORTING GALLERY
    -------------------------------------------*/
    function sortingGallery() {
        if ($(".sortable-gallery .gallery-filters").length) {
            const $container = $(".gallery-container");
            $container.isotope({
                filter: "*",
                animationOptions: { duration: 750, easing: "linear", queue: false },
            });

            $(".gallery-filters li a").on("click", function (e) {
                e.preventDefault();
                $(".gallery-filters li .current").removeClass("current");
                $(this).addClass("current");
                const selector = $(this).attr("data-filter");
                $container.isotope({
                    filter: selector,
                    animationOptions: { duration: 750, easing: "linear", queue: false },
                });
            });
        }
    }
    sortingGallery();

    /*------------------------------------------
        = FUNFACT / ODOMETER
    -------------------------------------------*/
    if ($(".odometer").length) {
        $(".odometer").appear();
        $(document.body).on("appear", ".odometer", function () {
            $(".odometer").each(function () {
                const countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
    }

    /*------------------------------------------
        = STICKY HEADER
    -------------------------------------------*/
    function cloneNavForStickyMenu($ele, $newElmClass) {
        $ele
            .addClass("original")
            .clone()
            .insertAfter($ele)
            .addClass($newElmClass)
            .removeClass("original");
    }

    // Clone navigation for sticky menu
    if ($(".wpo-site-header .navigation").length) {
        cloneNavForStickyMenu($(".wpo-site-header .navigation"), "sticky-header");
    }

    // Sticky menu function
    function stickyMenu($targetMenu, $toggleClass) {
        const st = $(window).scrollTop();
        if (st > 500) {
            $targetMenu.addClass($toggleClass);
        } else {
            $targetMenu.removeClass($toggleClass);
        }
    }

    $(window).on(
        "scroll",
        debounce(() => {
            stickyMenu($(".sticky-header"), "sticky-menu-active");
            toggleBackToTopBtn?.(); // Only if function exists
        }, 15)
    );

    /*------------------------------------------
        = HEADER SEARCH TOGGLE
    -------------------------------------------*/
    if ($(".header-search-form-wrapper").length) {
        const $searchToggleBtn = $(".search-toggle-btn");
        const $searchToggleBtnIcon = $(".search-toggle-btn i");
        const $searchContent = $(".header-search-form");
        const $body = $("body");

        $searchToggleBtn.on("click", function (e) {
            $searchContent.toggleClass("header-search-content-toggle");
            $searchToggleBtnIcon.toggleClass("fi flaticon-search fi ti-close");
            e.stopPropagation();
        });

        $body.on("click", function () {
            $searchContent.removeClass("header-search-content-toggle");
        });

        $searchContent.on("click", function (e) {
            e.stopPropagation(); // Prevent close on clicking inside
        });
    }

    /*------------------------------------------
        = HEADER SHOPPING CART TOGGLE
    -------------------------------------------*/
    if ($(".mini-cart").length) {
        const $cartToggleBtn = $(".cart-toggle-btn");
        const $cartContent = $(".mini-cart-content");
        const $cartCloseBtn = $(".mini-cart-close");
        const $body = $("body");

        $cartToggleBtn.on("click", function (e) {
            $cartContent.toggleClass("mini-cart-content-toggle");
            e.stopPropagation();
        });

        $cartCloseBtn.on("click", function (e) {
            $cartContent.removeClass("mini-cart-content-toggle");
            e.stopPropagation();
        });

        $body.on("click", function () {
            $cartContent.removeClass("mini-cart-content-toggle");
        });

        $cartContent.on("click", function (e) {
            e.stopPropagation();
        });
    }

    /*------------------------------------------
        = TESTIMONIAL SLIDER (Slick)
    -------------------------------------------*/
    if ($(".wpo-testimonial-wrap").length) {
        $(".wpo-testimonial-active").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            focusOnSelect: true,
            arrows: false,
            dots: true
        });
    }

    /*------------------------------------------
        = PARTNERS SLIDER (OwlCarousel)
    -------------------------------------------*/
    if ($(".partners-slider").length) {
        $(".partners-slider").owlCarousel({
            autoplay: true,
            smartSpeed: 300,
            margin: 0,
            loop: true,
            autoplayHoverPause: true,
            dots: false,
            nav: false,
            responsive: {
                0: { items: 2 },
                550: { items: 3 },
                992: { items: 4 },
                1200: { items: 5 }
            }
        });
    }

    /*------------------------------------------
        = CATEGORY SLIDER (OwlCarousel)
    -------------------------------------------*/
    if ($(".category-slider").length) {
        $(".category-slider").owlCarousel({
            autoplay: true,
            smartSpeed: 300,
            margin: 0,
            loop: true,
            autoplayHoverPause: true,
            dots: false,
            nav: false,
            responsive: {
                0: { items: 2 },
                550: { items: 3 },
                992: { items: 4 },
                1200: { items: 7 }
            }
        });
    }

    /*------------------------------------------
        = HERO ITEMS SLIDER (OwlCarousel)
    -------------------------------------------*/
    if ($(".wpo-hero-items").length) {
        $(".wpo-hero-items").owlCarousel({
            autoplay: true,
            smartSpeed: 300,
            margin: 30,
            loop: true,
            autoplayHoverPause: true,
            dots: true,
            nav: true,
            items: 3,
            navText: [
                '<i class="ti-arrow-left"></i>',
                '<i class="ti-arrow-right"></i>'
            ],
            responsive: {
                0: { items: 1, dots: true, nav: false },
                575: { items: 2 },
                767: { items: 2, dots: false },
                992: { items: 3, dots: false },
                1200: { items: 3 }
            }
        });
    }

    /*------------------------------------------
        = POST SLIDER (OwlCarousel)
    -------------------------------------------*/
    if ($(".post-slider").length) {
        $(".post-slider").owlCarousel({
            mouseDrag: false,
            smartSpeed: 500,
            margin: 30,
            loop: true,
            nav: true,
            navText: [
                '<i class="fi ti-arrow-left"></i>',
                '<i class="fi ti-arrow-right"></i>'
            ],
            dots: false,
            items: 1
        });
    }


    /*------------------------------------------
     = SHOP SINGLE PRODUCT SLIDER
 -------------------------------------------*/
    function initShopSingleSlider() {
        if (!$(".shop-single-slider").length || typeof $.fn.slick === "undefined") return;

        try {
            $(".slider-for").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: ".slider-nav"
            });

            $(".slider-nav").slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                asNavFor: ".slider-for",
                vertical: true,
                verticalSwiping: true,
                focusOnSelect: true,
                arrows: false,
                responsive: [
                    { breakpoint: 500, settings: { slidesToShow: 3 } },
                    { breakpoint: 400, settings: { slidesToShow: 2 } }
                ]
            });
        } catch (err) {
            console.error("Shop single product slider failed:", err);
        }
    }

    /*------------------------------------------
        = PRODUCT QUANTITY (TouchSpin)
    -------------------------------------------*/
    function initProductQuantity() {
        if ($("input[name='product-count']").length && typeof $.fn.TouchSpin !== "undefined") {
            $("input[name='product-count']").TouchSpin({ verticalbuttons: true });
        }
    }

    /*------------------------------------------
     = PRICE RANGE SLIDER
 -------------------------------------------*/
    function initPriceSlider() {
        if (!$("#slider-range").length || typeof $.fn.slider === "undefined") return;

        $("#slider-range").slider({
            range: true,
            min: 12,
            max: 200,
            values: [20, 100],
            slide: function (event, ui) {
                $("#amount").val(`$${ui.values[0]} - $${ui.values[1]}`);
            }
        });

        $("#amount").val(
            `$${$("#slider-range").slider("values", 0)} - $${$("#slider-range").slider("values", 1)}`
        );
    }

    /*------------------------------------------
        = CART PLUS-MINUS
    -------------------------------------------*/
    function initCartButtons() {
        if (!$(".cart-plus-minus").length) return;

        $(".cart-plus-minus").append(
            '<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>'
        );

        $(".cart-plus-minus").on("click", ".qtybutton", function () {
            const $input = $(this).siblings("input");
            let oldVal = parseFloat($input.val()) || 0;
            let newVal = $(this).hasClass("inc") ? oldVal + 1 : Math.max(0, oldVal - 1);
            $input.val(newVal).trigger("change");
        });
    }

    /*------------------------------------------
        = BACK TO TOP BUTTON
    -------------------------------------------*/
    function initBackToTop() {
        if (!$(".back-to-top").length) {
            $("body").append("<a href='#' class='back-to-top'><i class='ti-arrow-up'></i></a>");
        }

        $(".back-to-top").off("click").on("click", function (e) {
            e.preventDefault();
            $("html, body").stop().animate({ scrollTop: 0 }, 700, "swing");
        });
    }

    function toggleBackToTopBtn() {
        const amountScrolled = 1000;
        $("a.back-to-top").stop(true, true).fadeToggle($(window).scrollTop() > amountScrolled, "fast");
    }

    /*------------------------------------------
        = COUNTDOWN CLOCK (Reusable)
    -------------------------------------------*/
    function initCountdown(selector, date, labels) {
        if (!$(selector).length || typeof $.fn.countdown === "undefined") return;

        $(selector).countdown(date, function (event) {
            $(this).html(`
            <div class="box"><div><div class="time">${event.strftime("%D")}</div><span>${labels.days}</span></div></div>
            <div class="box"><div><div class="time">${event.strftime("%H")}</div><span>${labels.hours}</span></div></div>
            <div class="box"><div><div class="time">${event.strftime("%M")}</div><span>${labels.minutes}</span></div></div>
            <div class="box"><div><div class="time">${event.strftime("%S")}</div><span>${labels.seconds}</span></div></div>
        `);
        });
    }

    /*------------------------------------------
        = CONTACT FORM
    -------------------------------------------*/
    function initContactForm() {
        const $form = $("#contact-form-main");
        if (!$form.length || typeof $.fn.validate === "undefined") return;

        $form.validate({
            rules: {
                name: { required: true, minlength: 2 },
                email: { required: true, email: true },
                phone: { required: true },
                adress: { required: true },
                guest: { required: true },
                meal: { required: true },
                date: { required: true },
                what: { required: true },
                service: { required: true }
            },
            messages: {
                name: "Please enter your name.",
                email: { required: "Please enter your email.", email: "Enter a valid email." },
                phone: "Please enter your phone number.",
                adress: "Please enter your address.",
                guest: "Select number of guests.",
                meal: "Select a meal.",
                date: "Select a date.",
                what: "Select a reason.",
                service: "Select a service."
            },
            submitHandler: function (form) {
                $.ajax({
                    type: "POST",
                    url: "mail-contact.php",
                    data: $(form).serialize(),
                    dataType: "json",
                    beforeSend: () => $("#loader").show(),
                    success: function (response) {
                        $("#loader").hide();
                        if (response.status === "success") {
                            $("#success").slideDown("slow").delay(3000).slideUp("slow");
                            form.reset();
                        } else {
                            $("#error").text(response.message || "Submission failed.")
                                .slideDown("slow").delay(3000).slideUp("slow");
                        }
                    },
                    error: function () {
                        $("#loader").hide();
                        $("#error").text("Server error. Please try again later.")
                            .slideDown("slow").delay(3000).slideUp("slow");
                    }
                });
                return false;
            }
        });
    }

    /*------------------------------------------
       = BACK TO TOP BTN SETTING
   -------------------------------------------*/
    $("body").append("<a href='#' class='back-to-top'><i class='ti-arrow-up'></i></a>");

    function toggleBackToTopBtn() {
        var amountScrolled = 1000;
        if ($(window).scrollTop() > amountScrolled) {
            $("a.back-to-top").fadeIn("slow");
        } else {
            $("a.back-to-top").fadeOut("slow");
        }
    }

    $(".back-to-top").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 700);
        return false;
    })

    /*------------------------------------------
        = INIT ON LOAD
    -------------------------------------------*/
    $(window).on("load", function () {

        if (typeof preloader === "function") preloader();
        if (typeof sortingGallery === "function") sortingGallery();
        if (typeof toggleMobileNavigation === "function") toggleMobileNavigation();
        if (typeof smallNavFunctionality === "function") smallNavFunctionality();

        smoothScrolling($("#navbar > ul > li > a[href^='#'], .preview-middle-text a.scrool[href^='#'] "), $(".wpo-site-header .navigation, .site-header .nav").innerHeight());

        if (typeof initShopSingleSlider === "function") initShopSingleSlider();
        if (typeof initProductQuantity === "function") initProductQuantity();
        if (typeof initPriceSlider === "function") initPriceSlider();
        if (typeof initCartButtons === "function") initCartButtons();
        if (typeof initBackToTop === "function") initBackToTop();

        if (typeof initCountdown === "function") {
            initCountdown("#clock", "2026-08-30 20:30:00", { days: "Days", hours: "Hours", minutes: "Mins", seconds: "Secs" });
            initCountdown("#clock2", "2026-08-30 20:30:00", { days: "أيام", hours: "ساعات", minutes: "دقيقة", seconds: "ثانية" });
        }

        if (typeof initContactForm === "function") initContactForm();
    });

    /*------------------------------------------
        = SCROLL & RESIZE EVENTS
    -------------------------------------------*/
    $(window).on("scroll", debounce(function () {
        if (typeof toggleBackToTopBtn === "function") toggleBackToTopBtn();
        if (typeof activeMenuItem === "function") activeMenuItem($(".navigation-holder"));
        if ($(".wpo-site-header").length && typeof stickyMenu === "function")
            stickyMenu($(".wpo-site-header .navigation"), "sticky-on");
    }, 15));

    $(window).on("resize", debounce(function () {
        if (typeof toggleClassForSmallNav === "function") toggleClassForSmallNav();
        if (typeof smallNavFunctionality === "function") smallNavFunctionality();
    }, 200));


    /*-------------------------------
        GALLERY SLIDER 
    --------------------------------*/

    if ($(".wpo-portfolio-section-s3").length) {
        function getSlide() {
            const wW = $(window).width();
            if (wW < 450) {
                return 1;
            }
            if (wW < 600) {
                return 2;
            }
            if (wW < 767) {
                return 3;
            }
            if (wW < 1399) {
                return 3;
            }
            return 5;
        }
        const mySwiper = $('.swiper-main').swiper({
            mode: 'horizontal',
            autoplay: 3000,
            loop: true,
            speed: 400,
            slidesPerView: 1,
            effect: 'coverflow',
            spaceBetween: 40,
            slidesPerView: getSlide(),
            grabCursor: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            keyboardControl: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            coverflow: {
                rotate: 0,
                stretch: 0,
                depth: 180,
                modifier: 1,
                slideShadows: false
            },
        });
    }


    /*-------------------------------
    // PASSWORD REVEAL
    --------------------------------*/
    function togglePassword(revealBtnClass, pwdClass) {
        $(revealBtnClass).on('click', function () {
            const $pwd = $(pwdClass);
            $pwd.attr('type', $pwd.attr('type') === 'text' ? 'password' : 'text');
        });
    }

    togglePassword(".reveal6", ".pwd6");
    togglePassword(".reveal3", ".pwd2");
    togglePassword(".reveal2", ".pwd3");

})(window.jQuery);
