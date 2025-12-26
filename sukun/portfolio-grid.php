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

        <!-- start wpo-portfolio-section -->
        <section class="wpo-portfolio-section section-padding" id="gallery">
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