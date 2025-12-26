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
        <section class="wpo-portfolio-section pt-120 pb-0 section-padding">
            <div class="container">
                <div class="wpo-section-title">
                    <h4>Amazing Work</h4>
                    <h2>FEATURED WEDDING STORY</h2>
                </div>
                <div class="sortable-gallery">
                    <div class="gallery-filters"></div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="portfolio-grids gallery-container clearfix">
                                <div class="grid wow fadeInUp" data-wow-duration="1000ms">
                                    <div class="img-holder">
                                        <img src="assets/images/portfolio/1.jpg" alt="">
                                        <div class="portfolio-content">
                                            <h4><a href="portfolio-single.php">Alia & Robert</a></h4>
                                            <span>Chaina - 14 Sep 2019</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid wow fadeInUp" data-wow-duration="1300ms">
                                    <div class="img-holder">
                                        <img src="assets/images/portfolio/2.jpg" alt="">
                                        <div class="portfolio-content">
                                            <h4><a href="portfolio-single.php">Rihanna & William</a></h4>
                                            <span>Austria - 28 Oct 2020</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid wow fadeInUp" data-wow-duration="1600ms">
                                    <div class="img-holder">
                                        <img src="assets/images/portfolio/4.jpg" alt="">
                                        <div class="portfolio-content">
                                            <h4><a href="portfolio-single.php">Kate & Johnthan</a></h4>
                                            <span>London - 22 June 2025</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid wow fadeInUp" data-wow-duration="1900ms">
                                    <div class="img-holder">
                                        <img src="assets/images/portfolio/3.jpg" alt="">
                                        <div class="portfolio-content">
                                            <h4><a href="portfolio-single.php">Sarah & Daniel</a></h4>
                                            <span>Singapore - 16 May 2025</span>
                                        </div>
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
        <?php include './partials/footer.php' ?>
        <!-- end of wpo-site-footer-section -->

    </div>
    <!-- end of page-wrapper -->

    <?php include './partials/script.php' ?>
</body>

</html>