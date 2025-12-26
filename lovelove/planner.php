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
        $mainTitle = 'Our Planners';
        $Title = 'Home';
        $Title2 = 'Planners';
        ?>
        <?php include './partials/page-header.php' ?>
        <!-- end of hero slider -->
        
        <!-- start wpo-team-section -->
        <section class="wpo-team-section section-padding">
            <div class="container">
                <div class="wpo-section-title">
                    <h4>Our Organizers</h4>
                    <h2>Awesome Team Member</h2>
                </div>
                <div class="wpo-team-wrap">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="wpo-team-item wow fadeInUp" data-wow-duration="1000ms">
                                <div class="wpo-team-img">
                                    <img src="assets/images/team/img-1.jpg" alt="">
                                </div>
                                <div class="wpo-team-text">
                                    <h3><a href="team-single.php">Margarate Bennet</a></h3>
                                    <span>Dress Designer</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="wpo-team-item wow fadeInUp" data-wow-duration="1200ms">
                                <div class="wpo-team-img">
                                    <img src="assets/images/team/img-2.jpg" alt="">
                                </div>
                                <div class="wpo-team-text">
                                    <h3><a href="team-single.php">Robert William</a></h3>
                                    <span>Wedding Planner</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="wpo-team-item wow fadeInUp" data-wow-duration="1400ms">
                                <div class="wpo-team-img">
                                    <img src="assets/images/team/img-3.jpg" alt="">
                                </div>
                                <div class="wpo-team-text">
                                    <h3><a href="team-single.php">Henry D’suza</a></h3>
                                    <span>Assistant</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="wpo-team-item wow fadeInUp" data-wow-duration="1600ms">
                                <div class="wpo-team-img">
                                    <img src="assets/images/team/img-4.jpg" alt="">
                                </div>
                                <div class="wpo-team-text">
                                    <h3><a href="team-single.php">Jenefer Abram</a></h3>
                                    <span>Lead Assistant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- end container -->
        </section>
        <!-- end wpo-team-section -->

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