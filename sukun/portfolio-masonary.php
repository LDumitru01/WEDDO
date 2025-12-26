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
        $mainTitle = 'Portfolio Masonry';
        $Title = 'Home';
        $Title2 = 'Portfolio';
        ?>
        <?php include './partials/page-header.php' ?>
        <!-- end of hero slider -->

        <!-- start wpo-portfolio-section -->
        <section class="wpo-portfolio-section section-padding" id="gallery">
            <div class="container">
                <div class="wpo-section-title">
                    <h4 class="poort-text poort-in-right">Sweet Memories</h4>
                    <h2 class="poort-text poort-in-right">Our Captured Moment</h2>
                </div>
                <div class="gallery-main-wrap">
                    <div class="col-lg-12">
                        <div class="sortable-gallery">
                            <div class="row portfolio-grids style-1 clearfix">
                                <div class="col-lg-4 col-md-6 col-12 grid">
                                    <div class="img-holder wow fadeInUp" data-wow-duration="1000ms">
                                        <a href="assets/images/portfolio/19.jpg" class="fancybox"
                                            data-fancybox-group="gall-1">
                                            <img src="assets/images/portfolio/19.jpg" alt class="img img-responsive">
                                            <div class="hover-content">
                                                <i class="ti-plus"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-12 grid">
                                    <div class="img-holder wow fadeInUp" data-wow-duration="1200ms">
                                        <a href="assets/images/portfolio/20.jpg" class="fancybox"
                                            data-fancybox-group="gall-1">
                                            <img src="assets/images/portfolio/20.jpg" alt class="img img-responsive">
                                            <div class="hover-content">
                                                <i class="ti-plus"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-12 grid">
                                    <div class="img-holder wow fadeInUp" data-wow-duration="1400ms">
                                        <a href="assets/images/portfolio/21.jpg" class="fancybox"
                                            data-fancybox-group="gall-1">
                                            <img src="assets/images/portfolio/21.jpg" alt class="img img-responsive">
                                            <div class="hover-content">
                                                <i class="ti-plus"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-12 grid">
                                    <div class="img-holder wow fadeInUp" data-wow-duration="1000ms">
                                        <a href="assets/images/portfolio/22.jpg" class="fancybox"
                                            data-fancybox-group="gall-1">
                                            <img src="assets/images/portfolio/22.jpg" alt class="img img-responsive">
                                            <div class="hover-content">
                                                <i class="ti-plus"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-12 grid">
                                    <div class="img-holder wow fadeInUp" data-wow-duration="1200ms">
                                        <a href="assets/images/portfolio/23.jpg" class="fancybox"
                                            data-fancybox-group="gall-1">
                                            <img src="assets/images/portfolio/23.jpg" alt class="img img-responsive">
                                            <div class="hover-content">
                                                <i class="ti-plus"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-12 grid">
                                    <div class="img-holder wow fadeInUp" data-wow-duration="1400ms">
                                        <a href="assets/images/portfolio/24.jpg" class="fancybox"
                                            data-fancybox-group="gall-1">
                                            <img src="assets/images/portfolio/24.jpg" alt class="img img-responsive">
                                            <div class="hover-content">
                                                <i class="ti-plus"></i>
                                            </div>
                                        </a>
                                    </div>
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