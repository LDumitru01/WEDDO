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
        <section class="wpo-contact-section-s4 section-padding pb-0" id="rsvp">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col col-lg-12 col-md-12 col-12">
                        <div class="wpo-contact-section-wrapper">
                            <div class="wpo-contact-section-inner">
                                <div class="wpo-contact-form-area">
                                    <div class="wpo-section-title">
                                        <h4>Are You Attending?</h4>
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
                            <div class="shape-1"><img class="floating-item wow fadeInLeftSlow" data-wow-duration="1700ms" src="assets/images/contact/shape-1.png" alt=""></div>
                            <div class="shape-2"><img class="floating-item wow fadeInRightSlow" data-wow-duration="1700ms" src="assets/images/contact/shape-2.png" alt=""></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end of wpo-contact-section -->
        <!-- start wpo-event-section -->
        <section class="wpo-event-section section-padding" id="event">
            <div class="container">
                <div class="wpo-section-title">
                    <h4>Our Wedding</h4>
                    <h2>When & Where</h2>
                </div>
                <div class="wpo-event-wrap">
                    <div class="row">
                        <div class="col col-lg-4 col-md-6 col-12">
                            <div class="wpo-event-item">
                                <div class="wpo-event-img">
                                    <img src="assets/images/event/1.jpg" alt="">
                                    <div class="title"><h2>The Reception</h2></div>
                                </div>
                                <div class="wpo-event-text">
                                    <ul>
                                        <li>Monday, 12 Apr. 2025
                                            1:00 PM – 2:30 PM</li>
                                        <li>4517 Washington Ave. Manchester, Kentucky 39495</li>
                                        <li>+1 234-567-8910</li>
                                        <li> <a class="popup-gmaps"
                                                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25211.21212385712!2d144.95275648773628!3d-37.82748510398018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e0!2zTWVsYm91cm5lIFZJQyAzMDA0LCDgpoXgprjgp43gpp_gp43gprDgp4fgprLgpr_gpq_gprzgpr4!5e0!3m2!1sbn!2sbd!4v1503742051881">See
                                                Location</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col col-lg-4 col-md-6 col-12">
                            <div class="wpo-event-item">
                                <div class="wpo-event-img">
                                    <img src="assets/images/event/2.jpg" alt="">
                                    <div class="title"><h2>The Ceremony</h2></div>
                                </div>
                                <div class="wpo-event-text">
                                    <ul>
                                        <li>Monday, 12 Apr. 2025
                                            1:00 PM – 2:30 PM</li>
                                        <li>4517 Washington Ave. Manchester, Kentucky 39495</li>
                                        <li>+1 234-567-8910</li>
                                        <li> <a class="popup-gmaps"
                                                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25211.21212385712!2d144.95275648773628!3d-37.82748510398018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e0!2zTWVsYm91cm5lIFZJQyAzMDA0LCDgpoXgprjgp43gpp_gp43gprDgp4fgprLgpr_gpq_gprzgpr4!5e0!3m2!1sbn!2sbd!4v1503742051881">See
                                                Location</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col col-lg-4 col-md-6 col-12">
                            <div class="wpo-event-item">
                                <div class="wpo-event-img">
                                    <img src="assets/images/event/3.jpg" alt="">
                                    <div class="title"><h2>The Party</h2></div>
                                </div>
                                <div class="wpo-event-text">
                                    <ul>
                                        <li>Monday, 12 Apr. 2025
                                            1:00 PM – 2:30 PM</li>
                                        <li>4517 Washington Ave. Manchester, Kentucky 39495</li>
                                        <li>+1 234-567-8910</li>
                                        <li> <a class="popup-gmaps"
                                                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25211.21212385712!2d144.95275648773628!3d-37.82748510398018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e0!2zTWVsYm91cm5lIFZJQyAzMDA0LCDgpoXgprjgp43gpp_gp43gprDgp4fgprLgpr_gpq_gprzgpr4!5e0!3m2!1sbn!2sbd!4v1503742051881">See
                                                Location</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> <!-- end container -->
        </section>
        <!-- end wpo-event-section -->
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

        <!--  start wpo-contact-map -->
        <section class="wpo-contact-map-section">
            <h2 class="hidden">Contact map</h2>
            <div class="wpo-contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671" allowfullscreen></iframe>
            </div>
        </section>
        <!-- end wpo-contact-map -->

        <!-- start of wpo-site-footer-section -->
        <?php include './partials/footer.php' ?>
        <!-- end of wpo-site-footer-section -->

    </div>
    <!-- end of page-wrapper -->

    <?php include './partials/script.php' ?>
</body>

</html>