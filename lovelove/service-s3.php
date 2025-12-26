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
        
        <!-- start wpo-Service-section -->
        <section class="wpo-Service-section-s3 section-padding" id="Service">
            <div class="container">
                <div class="wpo-Service-wrap">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="wpo-Service-item wow fadeInUp" data-wow-duration="1000ms">
                                <div class="wpo-Service-img">
                                    <img src="assets/images/service/img-7.jpg" alt="">
                                </div>
                                <div class="wpo-Service-text">
                                    <h2>Our Best 
                                        Services</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="wpo-Service-item wow fadeInUp" data-wow-duration="1200ms">
                                <div class="wpo-Service-img">
                                    <img src="assets/images/service/img-8.jpg" alt="">
                                </div>
                                <div class="wpo-Service-text">
                                    <a href="service-single.php">Bridal Dress</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="wpo-Service-item wow fadeInUp" data-wow-duration="1400ms">
                                <div class="wpo-Service-img">
                                    <img src="assets/images/service/img-9.jpg" alt="">
                                </div>
                                <div class="wpo-Service-text">
                                    <a href="service-single.php">Bridal Makeup</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="wpo-Service-item wow fadeInUp" data-wow-duration="1600ms">
                                <div class="wpo-Service-img">
                                    <img src="assets/images/service/img-10.jpg" alt="">
                                </div>
                                <div class="wpo-Service-text">
                                    <a href="service-single.php">Photography</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="wpo-Service-item wow fadeInUp" data-wow-duration="1800ms">
                                <div class="wpo-Service-img">
                                    <img src="assets/images/service/img-11.jpg" alt="">
                                </div>
                                <div class="wpo-Service-text">
                                    <a href="service-single.php">Mehendi Art</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="wpo-Service-item wow fadeInUp" data-wow-duration="2000ms">
                                <div class="wpo-Service-img">
                                    <img src="assets/images/service/img-12.jpg" alt="">
                                </div>
                                <div class="wpo-Service-text">
                                    <a href="service-single.php">Catering Services</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="wpo-Service-item wow fadeInUp" data-wow-duration="2200ms">
                                <div class="wpo-Service-img">
                                    <img src="assets/images/service/img-13.jpg" alt="">
                                </div>
                                <div class="wpo-Service-text">
                                    <a href="service-single.php">Decoration</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="wpo-Service-item wow fadeInUp" data-wow-duration="2400ms">
                                <div class="wpo-Service-img">
                                    <img src="assets/images/service/img-14.jpg" alt="">
                                </div>
                                <div class="wpo-Service-text">
                                    <a href="service-single.php">Groom Ware</a>
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
        <?php include './partials/footer.php' ?>
        <!-- end of wpo-site-footer-section -->

    </div>
    <!-- end of page-wrapper -->

    <?php include './partials/script.php' ?>
</body>

</html>