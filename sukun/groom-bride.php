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
        $mainTitle = 'Bridesmaids & Groomsmen';
        $Title = 'Home';
        $Title2 = 'Bridesmaids & Groomsmen';
        ?>
        <?php include './partials/page-header.php' ?>
        <!-- end of hero slider -->
        
        <!-- start wpo-team-section -->
        <section class="wpo-team-section section-padding">
            <div class="container">
                <div class="wpo-section-title">
                    <h4 class="poort-text poort-in-right">Top Guest</h4>
                    <h2 class="poort-text poort-in-right">Bridesmaids & Groomsman</h2>
                </div>
                <div class="wpo-team-wrap">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="wpo-team-item wow fadeInUp" data-wow-duration="1200ms">
                                <div class="team-img-wrap">
                                    <div class="wpo-team-img">
                                        <img src="assets/images/team/img-1.jpg" alt="">
                                    </div>
                                </div>
                                <div class="wpo-team-text">
                                    <h3>Jenny Wilson</h3>
                                    <span>Bridemaids</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="wpo-team-item wow fadeInUp" data-wow-duration="1400ms">
                                <div class="team-img-wrap">
                                    <div class="wpo-team-img">
                                        <img src="assets/images/team/img-2.jpg" alt="">
                                    </div>
                                </div>
                                <div class="wpo-team-text">
                                    <h3>Robert Fox</h3>
                                    <span>Groomsman</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="wpo-team-item wow fadeInUp" data-wow-duration="1600ms">
                                <div class="team-img-wrap">
                                    <div class="wpo-team-img">
                                        <img src="assets/images/team/img-3.jpg" alt="">
                                    </div>
                                </div>
                                <div class="wpo-team-text">
                                    <h3>Annette Black</h3>
                                    <span>Groomsman</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="wpo-team-item wow fadeInUp" data-wow-duration="1800ms">
                                <div class="team-img-wrap">
                                    <div class="wpo-team-img">
                                        <img src="assets/images/team/img-4.jpg" alt="">
                                    </div>
                                </div>
                                <div class="wpo-team-text">
                                    <h3>Jerome Bell</h3>
                                    <span>Bridemaids</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- end container -->
        </section>
        <!-- end wpo-team-section -->

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