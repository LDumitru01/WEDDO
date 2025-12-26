<!DOCTYPE html>
<html lang="en">

<?php include './partials/head.php' ?>

<body>

    <!-- start page-wrapper -->
    <div class="page-wrappers">
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
        $mainTitle = 'Portfolio Single';
        $Title = 'Home';
        $Title2 = 'Portfolio';
        ?>
        <?php include './partials/page-header.php' ?>
        <!-- end of hero slider -->
        
        <!-- start wpo-portfolio-single-section -->
        <section class="wpo-portfolio-single-section section-padding">
            <div class="container">
                <div class="portfolio-single-wrap">
                    <div class="row">
                        <div class="col-lg-7 col-12">
                            <div class="portfolio-single-img-wrap">
                                <div class="portfolio-single-img wow fadeInUp" data-wow-duration="1300ms">
                                    <img src="assets/images/portfolio-single/1.jpg" alt="">
                                </div>
                                <div class="portfolio-single-img wow fadeInUp" data-wow-duration="1500ms">
                                    <img src="assets/images/portfolio-single/2.jpg" alt="">
                                </div>
                                <div class="portfolio-single-img wow fadeInUp" data-wow-duration="1700ms">
                                    <img src="assets/images/portfolio-single/3.jpg" alt="">
                                </div>
                                <div class="portfolio-single-img wow fadeInUp" data-wow-duration="1900ms">
                                    <img src="assets/images/portfolio-single/4.jpg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 col-12">
                            <div class="portfolio-single-sitebar wow fadeInRightSlow" data-wow-duration="1700ms">
                                <div class="portfolio-single-text">
                                    <h2>Marriage For Life</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere amet tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam.</p>
                                    <div class="wpo-portfolio-single-content-des">
                                        <ul>
                                            <li>Location :<span>3724 Linda Street,  London</span></li>
                                            <li>Client :<span>Jonson Oliva</span></li>
                                            <li>Photographer :<span>Harry Johnson</span></li>
                                            <li>Project Type :<span>Photography</span></li>
                                            <li>Duration : <span>6 Month</span></li>
                                            <li>Tag :<span>Wedding, Planner, Bride, Groom</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- end container -->
        </section>
        <!-- end wpo-portfolio-single-section -->

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