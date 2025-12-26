<!DOCTYPE html>
<html lang="en">

<?php include './partials/head.php' ?>

<body>

    <!-- start page-wrapper -->
    <div class="page-wrap">
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
        $mainTitle = 'Story';
        $Title = 'Home';
        $Title2 = 'Story';
        ?>
        <?php include './partials/page-header.php' ?>
        <!-- end of hero slider -->
        <!-- start wpo-story-section -->
        <section class="wpo-story-section section-padding pb-0 style-2" id="story">
            <div class="container">
                <div class="wpo-section-title">
                    <h4 class="poort-text poort-in-right">Our Story</h4>
                    <h2 class="poort-text poort-in-right">Our Sweet Love Story</h2>
                </div>
                <div class="wpo-story-wrap">
                    <div class="wpo-story-item">
                        <div class="row">
                            <div class="col col-lg-6 col-12">
                                <div class="wpo-story-img">
                                    <img src="assets/images/story/story-1.jpg" alt="">
                                </div>
                            </div>
                            <div class="col col-lg-6 col-12">
                                <div class="wpo-story-content">
                                    <div class="pin">
                                        <img src="assets/images/story/pin.svg" alt="">
                                    </div>
                                    <i><img src="assets/images/story/f-shape-1.png" alt=""></i>
                                    <h2>First Time We Meet</h2>
                                    <span>12 Feb 2016</span>
                                    <p>Lorem ipsum dolor sit amet, constetur kiy adicng elit. Ultricies nulla mi tempus
                                        mcorper for praesent. Ultricies interdum hy volutpat morbi nam ornare neque elit
                                        leo, diam. Malesuada enim ac amurna tempor asr btyrfgvel duis.</p>
                                    <i><img src="assets/images/story/f-shape-2.png" alt=""></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wpo-story-item">
                        <div class="row">
                            <div class="col col-lg-6 col-12">
                                <div class="wpo-story-img">
                                    <img src="assets/images/story/story-2.jpg" alt="">
                                </div>
                            </div>
                            <div class="col col-lg-6 col-12">
                                <div class="wpo-story-content">
                                    <div class="pin">
                                        <img src="assets/images/story/pin.svg" alt="">
                                    </div>
                                    <i><img src="assets/images/story/f-shape-1.png" alt=""></i>
                                    <h2>Our First Date</h2>
                                    <span>25 Mar 2017</span>
                                    <p>Lorem ipsum dolor sit amet, constetur kiy adicng elit. Ultricies nulla mi tempus
                                        mcorper for praesent. Ultricies interdum hy volutpat morbi nam ornare neque elit
                                        leo, diam. Malesuada enim ac amurna tempor asr btyrfgvel duis.</p>
                                    <i><img src="assets/images/story/f-shape-2.png" alt=""></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wpo-story-item">
                        <div class="row">
                            <div class="col col-lg-6 col-12">
                                <div class="wpo-story-img">
                                    <img src="assets/images/story/story-3.jpg" alt="">
                                </div>
                            </div>
                            <div class="col col-lg-6 col-12">
                                <div class="wpo-story-content">
                                    <div class="pin">
                                        <img src="assets/images/story/pin.svg" alt="">
                                    </div>
                                    <i><img src="assets/images/story/f-shape-1.png" alt=""></i>
                                    <h2>She Said Yes!</h2>
                                    <span>18 Sep 2020</span>
                                    <p>Lorem ipsum dolor sit amet, constetur kiy adicng elit. Ultricies nulla mi tempus
                                        mcorper for praesent. Ultricies interdum hy volutpat morbi nam ornare neque elit
                                        leo, diam. Malesuada enim ac amurna tempor asr btyrfgvel duis.</p>
                                    <i><img src="assets/images/story/f-shape-2.png" alt=""></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- end container -->
            <div class="flower-shape-1">
                <div class="flower-sticky">
                    <img src="assets/images/story/shape1.png" alt="">
                </div>
            </div>
            <div class="flower-shape-2">
                <div class="flower-sticky">
                    <img src="assets/images/story/shape2.png" alt="">
                </div>
            </div>
        </section>
        <!-- end story-section -->

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