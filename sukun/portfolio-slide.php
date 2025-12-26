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
        $mainTitle = 'Portfolio Grid';
        $Title = 'Home';
        $Title2 = 'Portfolio';
        ?>
        <?php include './partials/page-header.php' ?>
        <!-- end of hero slider -->

        <!-- start of wpo-screenshot-section -->
        <section class="wpo-portfolio-section-s3 section-padding" id="gallery">
            <h2 class="hidden">hidden</h2>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="swiper-container swiper-main">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide grid">
                                    <div class="img-holder wow fadeInUp" data-wow-duration="1400ms">
                                        <a href="assets/images/portfolio/27.jpg" class="fancybox"
                                            data-fancybox-group="gall-1">
                                            <img src="assets/images/portfolio/27.jpg" alt class="img img-responsive">
                                            <div class="hover-content">
                                                <i class="ti-plus"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="swiper-slide grid">
                                    <div class="img-holder wow fadeInUp" data-wow-duration="1400ms">
                                        <a href="assets/images/portfolio/26.jpg" class="fancybox"
                                            data-fancybox-group="gall-1">
                                            <img src="assets/images/portfolio/26.jpg" alt class="img img-responsive">
                                            <div class="hover-content">
                                                <i class="ti-plus"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="swiper-slide grid">
                                    <div class="img-holder wow fadeInUp" data-wow-duration="1400ms">
                                        <a href="assets/images/portfolio/25.jpg" class="fancybox"
                                            data-fancybox-group="gall-1">
                                            <img src="assets/images/portfolio/25.jpg" alt class="img img-responsive">
                                            <div class="hover-content">
                                                <i class="ti-plus"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="swiper-slide grid">
                                    <div class="img-holder wow fadeInUp" data-wow-duration="1400ms">
                                        <a href="assets/images/portfolio/28.jpg" class="fancybox"
                                            data-fancybox-group="gall-1">
                                            <img src="assets/images/portfolio/28.jpg" alt class="img img-responsive">
                                            <div class="hover-content">
                                                <i class="ti-plus"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="swiper-slide grid">
                                    <div class="img-holder wow fadeInUp" data-wow-duration="1400ms">
                                        <a href="assets/images/portfolio/29.jpg" class="fancybox"
                                            data-fancybox-group="gall-1">
                                            <img src="assets/images/portfolio/29.jpg" alt class="img img-responsive">
                                            <div class="hover-content">
                                                <i class="ti-plus"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end of wpo-screenshot-section -->

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

    <!-- All JavaScript files
    ================================================== -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <!-- Plugins for this template -->
    <script src="assets/js/modernizr.custom.js"></script>
    <script src="assets/js/jquery-plugin-collection.js"></script>
    <script src="assets/js/gsap-active.js"></script>
    <script src="assets/js/3d-swiper.js"></script>
    <!-- Custom script for this template -->
    <script src="assets/js/script.js"></script>
</body>

</html>