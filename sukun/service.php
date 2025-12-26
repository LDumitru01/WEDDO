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
        $mainTitle = 'Service';
        $Title = 'Home';
        $Title2 = 'Service';
        ?>
        <?php include './partials/page-header.php' ?>
        <!-- end of hero slider -->
        
        <!-- start wpo-service-section -->
        <section class="wpo-service-section section-padding" id="Service">
            <div class="container">
                <div class="wpo-section-title">
                    <h4 class="poort-text poort-in-right">Our Services</h4>
                    <h2 class="poort-text poort-in-right">What We Offer For You</h2>
                </div>
                <div class="wpo-service-wrap">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="wpo-service-item wow fadeInUp" data-wow-duration="1000ms">
                                <div class="wpo-service-img">
                                    <img src="assets/images/service/img-1.jpg" alt="">
                                </div>
                                <div class="wpo-service-text">
                                    <h3>Wedding Dress</h3>
                                    <p>Aliquet magna menas esmod pelque diam. Maenas massa tincint bidum tidunt. </p>
                                    <a href="service-single.php" class="more">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="wpo-service-item wow fadeInUp" data-wow-duration="1200ms">
                                <div class="wpo-service-img">
                                    <img src="assets/images/service/img-2.jpg" alt="">
                                </div>
                                <div class="wpo-service-text">
                                    <h3>Event Planning</h3>
                                    <p>Aliquet magna menas esmod pelque diam. Maenas massa tincint bidum tidunt. </p>
                                    <a href="service-single.php" class="more">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="wpo-service-item wow fadeInUp" data-wow-duration="1400ms">
                                <div class="wpo-service-img">
                                    <img src="assets/images/service/img-3.jpg" alt="">
                                </div>
                                <div class="wpo-service-text">
                                    <h3>Photography</h3>
                                    <p>Aliquet magna menas esmod pelque diam. Maenas massa tincint bidum tidunt. </p>
                                    <a href="service-single.php" class="more">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="wpo-service-item wow fadeInUp" data-wow-duration="1600ms">
                                <div class="wpo-service-img">
                                    <img src="assets/images/service/img-4.jpg" alt="">
                                </div>
                                <div class="wpo-service-text">
                                    <h3>Cake Design</h3>
                                    <p>Aliquet magna menas esmod pelque diam. Maenas massa tincint bidum tidunt. </p>
                                    <a href="service-single.php" class="more">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- end container -->
        </section>
        <!-- end Service-section -->

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