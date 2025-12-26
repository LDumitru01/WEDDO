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
        $mainTitle = 'Pricing';
        $Title = 'Home';
        $Title2 = 'Pricing';
        ?>
        <?php include './partials/page-header.php' ?>
        <!-- end of hero slider -->

        <!-- start wpo-pricing-section -->
        <section class="wpo-pricing-section section-padding">
            <div class="container">
                <div class="wpo-section-title">
                    <h4>Choose Yours</h4>
                    <h2>Wedding Packages</h2>
                </div>
                <div class="wpo-pricing-wrap">
                    <div class="row">
                        <div class="col col-lg-4 col-md-6 col-12">
                            <div class="wpo-pricing-item">
                                <div class="wpo-pricing-top">
                                    <div class="wpo-pricing-text">
                                        <h4>Basic Package</h4>
                                        <h2>$250<span>/Monthly</span></h2>
                                    </div>
                                </div>
                                <div class="shape"><img src="assets/images/pricing/p-shape.svg" alt=""></div>
                                <div class="wpo-pricing-bottom">
                                    <div class="wpo-pricing-bottom-text">
                                        <ul>
                                            <li>Stylish makeup for bride.</li>
                                            <li>Top label arrengement</li>
                                            <li>Amazing meal & breakfast</li>
                                            <li>Manicure & Pedicure</li>
                                            <li>Full body Polish</li>
                                        </ul>
                                        <a class="theme-btn" href="pricing.php">Choose Plan</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-lg-4 col-md-6 col-12">
                            <div class="wpo-pricing-item">
                                <div class="wpo-pricing-top">
                                    <div class="wpo-pricing-text">
                                        <h4>Standard Package</h4>
                                        <h2>$550<span>/Monthly</span></h2>
                                    </div>
                                </div>
                                <div class="shape"><img src="assets/images/pricing/p-shape.svg" alt=""></div>
                                <div class="wpo-pricing-bottom">
                                    <div class="wpo-pricing-bottom-text">
                                        <ul>
                                            <li>Stylish makeup for bride.</li>
                                            <li>Top label arrengement</li>
                                            <li>Amazing meal & breakfast</li>
                                            <li>Manicure & Pedicure</li>
                                            <li>Full body Polish</li>
                                        </ul>
                                        <a class="theme-btn" href="pricing.php">Choose Plan</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-lg-4 col-md-6 col-12">
                            <div class="wpo-pricing-item">
                                <div class="wpo-pricing-top">
                                    <div class="wpo-pricing-text">
                                        <h4>Luxary Package</h4>
                                        <h2>$880<span>/Monthly</span></h2>
                                    </div>
                                </div>
                                <div class="shape"><img src="assets/images/pricing/p-shape.svg" alt=""></div>
                                <div class="wpo-pricing-bottom">
                                    <div class="wpo-pricing-bottom-text">
                                        <ul>
                                            <li>Stylish makeup for bride.</li>
                                            <li>Top label arrengement</li>
                                            <li>Amazing meal & breakfast</li>
                                            <li>Manicure & Pedicure</li>
                                            <li>Full body Polish</li>
                                        </ul>
                                        <a class="theme-btn" href="pricing.php">Choose Plan</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- start wpo-pricing-section -->

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