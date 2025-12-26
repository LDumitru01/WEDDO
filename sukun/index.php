<!DOCTYPE html>
<html lang="en">

<?php include './partials/head.php' ?>

<body>

    <!-- start page-wrapper -->
    <div class="page-wrap">
        <!-- start preloader -->
        <?php include './partials/preloader.php' ?>
        <!-- end preloader -->
        <!-- Start header -->
        <?php
        $HeaderStyle = 'wpo-header-style-1';
        ?>
        <?php include './partials/header.php' ?>
        <!-- end of header -->
        <!-- start of hero -->
        <section class="static-hero">
            <div class="static-main-box">
                <div class="static-inner-box">
                    <div class="container">
                        <div class="row">
                            <div class="col col-xl-6 col-lg-6 col-12">
                                <div class="static-hero-img">
                                    <img class="wow fadeInLeftSlow" data-wow-duration="1500ms"
                                        src="assets/images/slider/hero-img-1.png" alt="">
                                    <div class="hero-img-inner-shape">
                                        <svg viewBox="0 0 550 814" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M520 0.804281C529.932 0.270383 539.935 0 550 0V30V784V814H520H30.0002H0.000244141V784V550C0.000244141 256.309 230.195 16.3825 520 0.804281ZM95 298.06C85.7573 314.717 77.4026 331.934 70 349.649V784H95V298.06ZM119 258.979V784H144V225.064C135.224 236.015 126.882 247.329 119 258.979ZM192 784H168V197.185C175.733 188.816 183.738 180.702 192 172.857V784ZM215 784H241V131.725C232.112 138.302 223.441 145.156 215 152.273V784ZM290 784H264V115.645C272.496 110.04 281.166 104.677 290 99.5667V784ZM314 784H338.25V74.9247C330.053 78.5841 321.967 82.4494 314 86.5141V784ZM386.834 784H362.084V64.992C370.236 61.8311 378.488 58.8699 386.834 56.1142V784ZM410.667 784H434.5V42.8728C426.484 44.6909 418.538 46.6941 410.667 48.8779V784ZM481.25 784H458.334V38.0538C465.917 36.7051 473.557 35.5207 481.25 34.5046V784ZM505.084 784H520V30.8509C515.009 31.1348 510.036 31.4892 505.084 31.9129V784ZM30.0002 550C30.0002 504.255 35.9072 459.889 47 417.624V784H30.0002V550Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-xl-6 col-lg-6 col-12">
                                <div class="wpo-static-hero-text-box">
                                    <div class="slide-title">
                                        <h2 class="poort-text poort-in-up">Esabella & William</h2>
                                    </div>
                                    <div class="slide-text wow fadeInUp" data-wow-duration="1600ms">
                                        <p>We Are Getting Married In </p>
                                    </div>
                                    <div class="slide-date wow fadeInUp" data-wow-duration="1700ms">
                                        <p>12 . 12 . 2025</p>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom-shape wow fadeInUp" data-wow-duration="1400ms">
                    <img src="assets/images/slider/bottom-image.png" alt="">
                </div>
            </div>
        </section>
        <!-- end of hero slider -->
        <!-- start wpo-wedding-date -->
        <section class="wpo-wedding-date section-padding">
            <h2 class="d-none">hidden</h2>
            <div class="container">
                <div class="wedding-date-wrap">
                    <div class="clock-grids">
                        <div id="clock"></div>
                    </div>
                </div>
            </div> <!-- end container -->
        </section>
        <!-- end wpo-wedding-date-s3-->
        <!-- start couple-section -->
        <section class="wpo-couple-section section-padding pt-2" id="couple">
            <div class="container">
                <div class="couple-area clearfix">
                    <div class="couple-wrap">
                        <div class="row align-items-center gx-5">
                            <div class="col col-md-6 col-12">
                                <div class="couple-item">
                                    <div class="couple-img">
                                        <img src="assets/images/couple/couple-img-1.jpg" alt="">
                                    </div>
                                    <div class="couple-text">
                                        <i><img src="assets/images/couple/bride.svg" alt=""></i>
                                        <h3>Esabella Bell</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor
                                            vitae nisl. fringilla pellesque amet tempus.</p>
                                        <div class="social">
                                            <ul>
                                                <li><a href="#"><i class="ti-facebook"></i></a></li>
                                                <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                                                <li><a href="#"><i class="ti-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="couple-bg">
                                            <svg viewBox="0 0 500 433" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M0 28.0003C0 28.0003 40 -20.2942 78 11.0001C90.075 20.9443 94.3766 37.833 95.1425 54.6979C95.9162 71.7365 117.555 85.4249 131.164 75.1428C133.036 73.7282 135.17 72.6975 137.441 72.11L142.442 70.8167C168.453 64.0898 194.316 82.2112 196.874 108.956L197.393 114.379C200.295 144.721 230.211 164.837 259.405 156.079L263 155C290.305 139.265 324.668 157.485 326.966 188.914L328.735 213.107C329.843 228.267 342.466 240 357.667 240C359.882 240 362.089 239.747 364.246 239.244L376.055 236.494C404.616 229.843 431.332 253.052 428.738 282.263L427.564 295.484C425.743 315.988 443.286 332.954 463.719 330.449C482.999 328.085 500 343.128 500 362.553V433H0V28.0003Z"
                                                    fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-md-6 col-12">
                                <div class="couple-item">
                                    <div class="couple-img">
                                        <img src="assets/images/couple/couple-img-2.jpg" alt="">
                                    </div>
                                    <div class="couple-text">
                                        <i><img src="assets/images/couple/groom.svg" alt=""></i>
                                        <h3>William Max</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor
                                            vitae nisl. fringilla pellesque amet tempus.</p>
                                        <div class="social">
                                            <ul>
                                                <li><a href="#"><i class="ti-facebook"></i></a></li>
                                                <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                                                <li><a href="#"><i class="ti-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="couple-bg">
                                            <svg viewBox="0 0 500 433" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M500 28.0003C500 28.0003 460 -20.2942 422 11.0001C409.925 20.9443 405.623 37.833 404.858 54.6979C404.084 71.7365 382.445 85.4249 368.836 75.1428C366.964 73.7282 364.83 72.6975 362.559 72.11L357.558 70.8167C331.547 64.0898 305.684 82.2112 303.126 108.956L302.607 114.379C299.705 144.721 269.789 164.837 240.595 156.079L237 155C209.695 139.265 175.332 157.485 173.034 188.914L171.265 213.107C170.157 228.267 157.534 240 142.333 240C140.118 240 137.911 239.747 135.754 239.244L123.945 236.494C95.3837 229.843 68.6684 253.052 71.2621 282.263L72.436 295.484C74.2567 315.988 56.7136 332.954 36.2814 330.449C17.0009 328.085 0 343.128 0 362.553V433H500V28.0003Z"
                                                    fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="shape-1"><img src="assets/images/couple/flower1.png" alt=""></div>
                        <div class="shape-2"><img src="assets/images/couple/flower2.png" alt=""></div>
                    </div>
                </div>
            </div> <!-- end container -->
        </section>
        <!-- end couple-section -->
        <!-- start wpo-story-section -->
        <section class="wpo-story-section section-padding pb-0" id="story">
            <div class="container">
                <div class="wpo-section-title">
                    <h4 class="poort-text poort-in-right">Our Story</h4>
                    <h2 class="poort-text poort-in-right">Our Sweet Love Story</h2>
                </div>
                <div class="wpo-story-wrap">
                    <div class="wpo-story-item">
                        <div class="row">
                            <div class="col col-lg-6 col-12">
                                <div class="wpo-story-img">
                                    <img src="assets/images/story/story-1.jpg" alt="">
                                </div>
                            </div>
                            <div class="col col-lg-6 col-12">
                                <div class="wpo-story-content">
                                    <div class="pin">
                                        <img src="assets/images/story/pin.svg" alt="">
                                    </div>
                                    <i><img src="assets/images/story/f-shape-1.png" alt=""></i>
                                    <h2>First Time We Meet</h2>
                                    <span>12 Feb 2016</span>
                                    <p>Lorem ipsum dolor sit amet, constetur kiy adicng elit. Ultricies nulla mi tempus
                                        mcorper for praesent. Ultricies interdum hy volutpat morbi nam ornare neque elit
                                        leo, diam. Malesuada enim ac amurna tempor asr btyrfgvel duis.</p>
                                    <i><img src="assets/images/story/f-shape-2.png" alt=""></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wpo-story-item">
                        <div class="row">
                            <div class="col col-lg-6 col-12">
                                <div class="wpo-story-img">
                                    <img src="assets/images/story/story-2.jpg" alt="">
                                </div>
                            </div>
                            <div class="col col-lg-6 col-12">
                                <div class="wpo-story-content">
                                    <div class="pin">
                                        <img src="assets/images/story/pin.svg" alt="">
                                    </div>
                                    <i><img src="assets/images/story/f-shape-1.png" alt=""></i>
                                    <h2>Our First Date</h2>
                                    <span>25 Mar 2017</span>
                                    <p>Lorem ipsum dolor sit amet, constetur kiy adicng elit. Ultricies nulla mi tempus
                                        mcorper for praesent. Ultricies interdum hy volutpat morbi nam ornare neque elit
                                        leo, diam. Malesuada enim ac amurna tempor asr btyrfgvel duis.</p>
                                    <i><img src="assets/images/story/f-shape-2.png" alt=""></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wpo-story-item">
                        <div class="row">
                            <div class="col col-lg-6 col-12">
                                <div class="wpo-story-img">
                                    <img src="assets/images/story/story-3.jpg" alt="">
                                </div>
                            </div>
                            <div class="col col-lg-6 col-12">
                                <div class="wpo-story-content">
                                    <div class="pin">
                                        <img src="assets/images/story/pin.svg" alt="">
                                    </div>
                                    <i><img src="assets/images/story/f-shape-1.png" alt=""></i>
                                    <h2>She Said Yes!</h2>
                                    <span>18 Sep 2020</span>
                                    <p>Lorem ipsum dolor sit amet, constetur kiy adicng elit. Ultricies nulla mi tempus
                                        mcorper for praesent. Ultricies interdum hy volutpat morbi nam ornare neque elit
                                        leo, diam. Malesuada enim ac amurna tempor asr btyrfgvel duis.</p>
                                    <i><img src="assets/images/story/f-shape-2.png" alt=""></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- end container -->
            <div class="flower-shape-1">
                <div class="flower-sticky">
                    <img src="assets/images/story/shape1.png" alt="">
                </div>
            </div>
            <div class="flower-shape-2">
                <div class="flower-sticky">
                    <img src="assets/images/story/shape2.png" alt="">
                </div>
            </div>
        </section>
        <!-- end story-section -->

        <!-- start wpo-portfolio-section -->
        <section class="wpo-portfolio-section section-padding pt-0" id="gallery">
            <div class="container-fluid">
                <div class="wpo-section-title">
                    <h4 class="poort-text poort-in-right">Sweet Memories</h4>
                    <h2 class="poort-text poort-in-right">Our Captured Moment</h2>
                </div>
                <div class="gallery-main-wrap">
                    <div class="row align-items-center">
                        <div class="col-lg-2 col-md-6 order-lg-1 order-2">
                            <div class="gallery-side-img wow fadeInLeftSlow" data-wow-duration="1400ms">
                                <div class="img-holder">
                                    <a href="assets/images/portfolio/1.jpg" class="fancybox"
                                        data-fancybox-group="gall-1">
                                        <img src="assets/images/portfolio/1.jpg" alt class="img img-responsive">
                                        <div class="hover-content">
                                            <i class="ti-plus"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 order-lg-2 order-3">
                            <div class="sortable-gallery">
                                <div class="row portfolio-grids style-1 clearfix">
                                    <div class="col-lg-4 col-md-6 col-12 grid">
                                        <div class="img-holder wow fadeInUp" data-wow-duration="1000ms">
                                            <a href="assets/images/portfolio/3.jpg" class="fancybox"
                                                data-fancybox-group="gall-1">
                                                <img src="assets/images/portfolio/3.jpg" alt class="img img-responsive">
                                                <div class="hover-content">
                                                    <i class="ti-plus"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12 grid">
                                        <div class="img-holder wow fadeInUp" data-wow-duration="1200ms">
                                            <a href="assets/images/portfolio/4.jpg" class="fancybox"
                                                data-fancybox-group="gall-1">
                                                <img src="assets/images/portfolio/4.jpg" alt class="img img-responsive">
                                                <div class="hover-content">
                                                    <i class="ti-plus"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12 grid">
                                        <div class="img-holder wow fadeInUp" data-wow-duration="1400ms">
                                            <a href="assets/images/portfolio/5.jpg" class="fancybox"
                                                data-fancybox-group="gall-1">
                                                <img src="assets/images/portfolio/5.jpg" alt class="img img-responsive">
                                                <div class="hover-content">
                                                    <i class="ti-plus"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12 grid">
                                        <div class="img-holder wow fadeInUp" data-wow-duration="1000ms">
                                            <a href="assets/images/portfolio/6.jpg" class="fancybox"
                                                data-fancybox-group="gall-1">
                                                <img src="assets/images/portfolio/6.jpg" alt class="img img-responsive">
                                                <div class="hover-content">
                                                    <i class="ti-plus"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12 grid">
                                        <div class="img-holder wow fadeInUp" data-wow-duration="1200ms">
                                            <a href="assets/images/portfolio/7.jpg" class="fancybox"
                                                data-fancybox-group="gall-1">
                                                <img src="assets/images/portfolio/7.jpg" alt class="img img-responsive">
                                                <div class="hover-content">
                                                    <i class="ti-plus"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12 grid">
                                        <div class="img-holder wow fadeInUp" data-wow-duration="1400ms">
                                            <a href="assets/images/portfolio/8.jpg" class="fancybox"
                                                data-fancybox-group="gall-1">
                                                <img src="assets/images/portfolio/8.jpg" alt class="img img-responsive">
                                                <div class="hover-content">
                                                    <i class="ti-plus"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 order-lg-3 order-2">
                            <div class="gallery-side-img wow fadeInRightSlow" data-wow-duration="1400ms">
                                <div class="img-holder">
                                    <a href="assets/images/portfolio/2.jpg" class="fancybox"
                                        data-fancybox-group="gall-1">
                                        <img src="assets/images/portfolio/2.jpg" alt class="img img-responsive">
                                        <div class="hover-content">
                                            <i class="ti-plus"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> <!-- end container -->
        </section>
        <!-- end wpo-portfolio-section -->

        <!-- start of wpo-contact-section -->
        <section class="wpo-contact-section section-padding pt-0" id="rsvp">
            <div class="container-fluid">
                <div class="contact-wrap">
                    <div class="row">
                        <div class="col col-xl-8 col-lg-7 col-md-12 col-12">
                            <div class="contact-img-wrap">
                                <div class="contact-img wow fadeInLeftSlow" data-wow-duration="1700ms">
                                    <img src="assets/images/rsvp/img-1.png" alt="">
                                </div>
                                <div class="back-shape">
                                    <svg viewBox="0 0 693 954" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15 346.5C15 163.418 163.418 15 346.5 15C529.582 15 678 163.418 678 346.5V939H15V346.5Z"
                                            stroke="#9F7B59" stroke-width="30" />
                                        <rect x="50" y="168" width="30" height="765" fill="#9F7B59" />
                                        <rect x="100" y="106" width="30" height="827" fill="#9F7B59" />
                                        <rect x="150" y="67" width="30" height="866" fill="#9F7B59" />
                                        <rect x="200" y="45" width="30" height="879" fill="#9F7B59" />
                                        <rect x="250" y="23" width="30" height="910" fill="#9F7B59" />
                                        <rect x="300" y="14" width="30" height="919" fill="#9F7B59" />
                                        <rect x="350" y="14" width="30" height="919" fill="#9F7B59" />
                                        <rect x="400" y="14" width="30" height="919" fill="#9F7B59" />
                                        <rect x="450" y="34" width="30" height="899" fill="#9F7B59" />
                                        <rect x="500" y="67" width="30" height="866" fill="#9F7B59" />
                                        <rect x="550" y="100" width="30" height="833" fill="#9F7B59" />
                                        <rect x="600" y="148" width="30" height="785" fill="#9F7B59" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="col col-xl-4 col-lg-5 col-md-12 col-12">
                            <div class="wpo-contact-section-wrapper wow fadeInRightSlow" data-wow-duration="1700ms">
                                <div class="wpo-contact-form-area">
                                    <div class="wpo-section-title">
                                        <h2>Are You Attending?</h2>
                                    </div>
                                    <form method="post" class="contact-validation-active" id="contact-form-main">
                                        <div>
                                            <input type="text" class="form-control" name="name" id="name"
                                                placeholder="Name">
                                        </div>
                                        <div>
                                            <input type="email" class="form-control" name="email" id="email"
                                                placeholder="Email">
                                        </div>
                                        <div class="radio-buttons">
                                            <p>
                                                <input type="radio" id="attend" name="radio-group" checked>
                                                <label for="attend">Yes, I will be there</label>
                                            </p>
                                            <p>
                                                <input type="radio" id="not" name="radio-group">
                                                <label for="not">Sorry, I can’t come</label>
                                            </p>
                                        </div>
                                        <div>
                                            <select name="guest" class="form-control">
                                                <option disabled="disabled" selected>Number Of Guests</option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                                <option>04</option>
                                                <option>05</option>
                                            </select>
                                        </div>
                                        <div>
                                            <input type="text" class="form-control" name="what" id="what"
                                                placeholder="What Will You Be Attending">
                                        </div>
                                        <div>
                                            <select name="meal" class="form-control last">
                                                <option disabled="disabled" selected>Meal Preferences</option>
                                                <option>Chicken Soup</option>
                                                <option>Motton Kabab</option>
                                                <option>Chicken BBQ</option>
                                                <option>Mix Salad</option>
                                                <option>Beef Ribs </option>
                                            </select>
                                        </div>
                                        <div class="submit-area">
                                            <button type="submit" class="theme-btn">RSVP</button>
                                            <div id="c-loader">
                                                <i class="ti-reload"></i>
                                            </div>
                                        </div>
                                        <div class="clearfix error-handling-messages">
                                            <div id="success">Thank you</div>
                                            <div id="error"> Error occurred while sending email. Please try again later.
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="shape-1 wow fadeInLeftSlow" data-wow-duration="2000ms"><img
                            src="assets/images/rsvp/left-shape.png" alt=""></div>
                    <div class="shape-2 wow fadeInRightSlow" data-wow-duration="2000ms"><img
                            src="assets/images/rsvp/right-shape.png" alt=""></div>
                </div>
            </div>
            <div class="bottom-text marquee">
                <h2>We Are Waiting For You to celebrate our Love.</h2>
            </div>
        </section>
        <!-- end of wpo-contact-section -->

        <!-- start wpo-event-section -->
        <section class="wpo-event-section section-padding pt-0" id="event">
            <div class="container">
                <div class="wpo-section-title">
                    <h4 class="poort-text poort-in-right">When & Where</h4>
                    <h2 class="poort-text poort-in-right">Our Wedding Programs</h2>
                </div>
                <div class="wpo-event-main">
                    <div class="event-description">
                        <p>Monday, 12 Apr. 2025, 2.00 PM – 11.00 PM</p>
                        <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                    </div>
                    <div class="wpo-event-wrap">
                        <div class="wpo-event-inner">
                            <div class="wpo-event-item">
                                <div class="wpo-event-text">
                                    <i><img src="assets/images/icon/1.svg" alt=""></i>
                                    <span>Welcome Drinks</span>
                                </div>
                                <div class="wpo-event-time">
                                    <h4>2.00 PM</h4>
                                    <i class="fa fa-heart"></i>
                                </div>
                            </div>
                            <div class="wpo-event-item">
                                <div class="wpo-event-text">
                                    <i><img src="assets/images/icon/2.svg" alt=""></i>
                                    <span>Ceremony</span>
                                </div>
                                <div class="wpo-event-time">
                                    <h4>3.00 PM</h4>
                                    <i class="fa fa-heart"></i>
                                </div>
                            </div>
                            <div class="wpo-event-item">
                                <div class="wpo-event-text">
                                    <i><img src="assets/images/icon/3.svg" alt=""></i>
                                    <span>Party Photos</span>
                                </div>
                                <div class="wpo-event-time">
                                    <h4>5.00 PM</h4>
                                    <i class="fa fa-heart"></i>
                                </div>
                            </div>
                            <div class="wpo-event-item">
                                <div class="wpo-event-text">
                                    <i><img src="assets/images/icon/4.svg" alt=""></i>
                                    <span>Dinner</span>
                                </div>
                                <div class="wpo-event-time">
                                    <h4>7.00 PM</h4>
                                    <i class="fa fa-heart"></i>
                                </div>
                            </div>
                            <div class="wpo-event-item">
                                <div class="wpo-event-text">
                                    <i><img src="assets/images/icon/5.svg" alt=""></i>
                                    <span>Cake Cutting</span>
                                </div>
                                <div class="wpo-event-time">
                                    <h4>9.00 PM</h4>
                                    <i class="fa fa-heart"></i>
                                </div>
                            </div>
                            <div class="wpo-event-item">
                                <div class="wpo-event-text">
                                    <i><img src="assets/images/icon/6.svg" alt=""></i>
                                    <span>First Dance</span>
                                </div>
                                <div class="wpo-event-time">
                                    <h4>10.00 PM</h4>
                                    <i class="fa fa-heart"></i>
                                </div>
                            </div>
                            <div class="wpo-event-item">
                                <div class="wpo-event-text">
                                    <i><img src="assets/images/icon/7.svg" alt=""></i>
                                    <span>Depart</span>
                                </div>
                                <div class="wpo-event-time">
                                    <h4>11.00 PM</h4>
                                    <i class="fa fa-heart"></i>
                                </div>
                            </div>
                            <div class="line"></div>
                        </div>
                        <div class="shape-1"><img src="assets/images/event/shape-1.png" alt=""></div>
                        <div class="shape-2"><img src="assets/images/event/shape-1.png" alt=""></div>
                        <div class="shape-3"><img src="assets/images/event/shape-2.png" alt=""></div>
                    </div>
                </div>

            </div> <!-- end container -->
        </section>

        <!-- end wpo-blog-section -->
        <!-- start wpo-partners-section -->
        <section class="wpo-partners-section section-padding">
            <h2 class="hidden">Partners</h2>
            <div class="container">
                <div class="row">
                    <div class="col col-xs-12">
                        <div class="partner-grids partners-slider owl-carousel">
                            <div class="grid">
                                <img src="assets/images/partners/1.png" alt>
                            </div>
                            <div class="grid">
                                <img src="assets/images/partners/2.png" alt>
                            </div>
                            <div class="grid">
                                <img src="assets/images/partners/3.png" alt>
                            </div>
                            <div class="grid">
                                <img src="assets/images/partners/4.png" alt>
                            </div>
                            <div class="grid">
                                <img src="assets/images/partners/5.png" alt>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- end container -->
        </section>
        <!-- end wpo-partners-section-->

        <!-- start of wpo-site-footer-section -->
        <?php
        $FooterStyle = 'wpo-site-footer';
        ?>
        <?php include './partials/footer.php' ?>
        <!-- end of wpo-site-footer-section -->

    </div>
    <!-- end of page-wrapper -->

    <?php include './partials/script.php' ?>
</body>

</html>