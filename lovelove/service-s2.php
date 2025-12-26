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
        <section class="wpo-Service-section-s2 section-padding">
            <h2 class="hidden">some</h2>
            <div class="container-fluid">
                <div class="wpo-Service-wrap">
                    <div class="service-slider owl-carousel">
                        <div class="wpo-Service-item">
                            <div class="wpo-Service-img">
                                <img src="assets/images/service/img-1.jpg" alt="">
                            </div>
                            <div class="wpo-Service-text">
                                <a href="service-single.php">Wedding Dress</a>
                            </div>
                        </div>
                        <div class="wpo-Service-item">
                            <div class="wpo-Service-img">
                                <img src="assets/images/service/img-2.jpg" alt="">
                            </div>
                            <div class="wpo-Service-text">
                                <a href="service-single.php">Event Planning</a>
                            </div>
                        </div>
                        <div class="wpo-Service-item">
                            <div class="wpo-Service-img">
                                <img src="assets/images/service/img-3.jpg" alt="">
                            </div>
                            <div class="wpo-Service-text">
                                <a href="service-single.php">Photography</a>
                            </div>
                        </div>
                        <div class="wpo-Service-item">
                            <div class="wpo-Service-img">
                                <img src="assets/images/service/img-6.jpg" alt="">
                            </div>
                            <div class="wpo-Service-text">
                                <a href="service-single.php">Wedding Registry</a>
                            </div>
                        </div>
                        <div class="wpo-Service-item">
                            <div class="wpo-Service-img">
                                <img src="assets/images/service/img-5.jpg" alt="">
                            </div>
                            <div class="wpo-Service-text">
                                <a href="service-single.php">Fine Decor</a>
                            </div>
                        </div>
                        <div class="wpo-Service-item">
                            <div class="wpo-Service-img">
                                <img src="assets/images/service/img-4.jpg" alt="">
                            </div>
                            <div class="wpo-Service-text">
                                <a href="service-single.php">Cake Design</a>
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