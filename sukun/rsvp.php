<!DOCTYPE html>
<html lang="en">

<?php include './partials/head.php' ?>

<body>

    <!-- start page-wrapper -->
    <div class="page-wrapper">
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
        <?php
        $mainTitle = 'R.S.V.P';
        $Title = 'Home';
        $Title2 = 'RSVP';
        ?>
        <?php include './partials/page-header.php' ?>
        <!-- end of hero slider -->
        <!-- start of wpo-contact-section -->
        <section class="wpo-contact-section section-padding" id="rsvp">
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

        <!-- start wpo-partners-section -->
        <section class="wpo-partners-section section-padding pt-0">
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