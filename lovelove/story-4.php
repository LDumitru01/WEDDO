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
        $mainTitle = 'Story';
        $Title = 'Home';
        $Title2 = 'Story';
        ?>
        <?php include './partials/page-header.php' ?>
        <!-- end of hero slider -->
        <!-- start wpo-story-section -->
        <section class="wpo-story-section-s4 section-padding" id="story">
            <div class="container">
                <div class="wpo-section-title">
                    <h4>Our Story</h4>
                    <h2>Our Sweet love story</h2>
                </div>
                <div class="wpo-story-wrap">
                    <div class="wpo-story-item">
                        <div class="wpo-story-content-wrap wow fadeInLeftSlow" data-wow-duration="1500ms">
                            <div class="wpo-story-content-img">
                                <img src="assets/images/story/8.jpg" alt="">
                            </div>
                            <div class="wpo-story-content">
                                <div class="wpo-story-content-inner">
                                    <h2>First Time We Meet</h2>
                                    <span>12 Feb 2016</span>
                                    <p>Lorem ipsum dolor sit amet, constetur adicelit. Ultricies nulla mi tempus mcor
                                        for praesent. Malesuada enim ac amurna tempor vel duis.</p>
                                </div>
                            </div>
                        </div>
                        <div class="wpo-story-img-wrap wow fadeInRightSlow" data-wow-duration="1700ms">
                            <div class="wpo-story-img">
                                <img src="assets/images/story/9.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="wpo-story-item">
                        <div class="wpo-story-content-wrap wow fadeInRightSlow" data-wow-duration="1900ms">
                            <div class="wpo-story-content-img">
                                <img src="assets/images/story/11.jpg" alt="">
                            </div>
                            <div class="wpo-story-content">
                                <div class="wpo-story-content-inner">
                                    <h2>Our First Date</h2>
                                    <span>23 Apr 2016</span>
                                    <p>Lorem ipsum dolor sit amet, constetur adicelit. Ultricies nulla mi tempus mcor
                                        for praesent. Malesuada enim ac amurna tempor vel duis.</p>
                                </div>
                            </div>
                        </div>
                        <div class="wpo-story-img-wrap wow fadeInLeftSlow" data-wow-duration="2100ms">
                            <div class="wpo-story-img">
                                <img src="assets/images/story/10.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="wpo-story-item">
                        <div class="wpo-story-content-wrap wow fadeInLeftSlow" data-wow-duration="2300ms">
                            <div class="wpo-story-content-img">
                                <img src="assets/images/story/12.jpg" alt="">
                            </div>
                            <div class="wpo-story-content">
                                <div class="wpo-story-content-inner">
                                    <h2>She Said Yes</h2>
                                    <span>10 Mar 2016</span>
                                    <p>Lorem ipsum dolor sit amet, constetur adicelit. Ultricies nulla mi tempus mcor
                                        for praesent. Malesuada enim ac amurna tempor vel duis.</p>
                                </div>
                            </div>
                        </div>
                        <div class="wpo-story-img-wrap wow fadeInRightSlow" data-wow-duration="1700ms">
                            <div class="wpo-story-img">
                                <img src="assets/images/story/13.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- end container -->
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
        <?php include './partials/footer.php' ?>
        <!-- end of wpo-site-footer-section -->

    </div>
    <!-- end of page-wrapper -->

    <?php include './partials/script.php' ?>
</body>

</html>