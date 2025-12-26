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
        <div class="invitation-header style-2">
            <a class="back-btn" href="index.php"><i class="ti-back-left"></i></a>
        </div>
        <!-- end of header -->
        <!-- start of hero -->
        <section class="wpo-coming-soon-area"
            style="background: url(./assets/images/slider/invitation-3.jpg) no-repeat center center;  background-size: cover;">
            <div class="hero-container">
                <div class="hero-inner">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-12">
                                <div class="wpo-event-wrap wow fadeInLeftSlow" data-wow-duration="1200ms">
                                    <div class="wpo-event-item">
                                        <div class="coming-soon-section">
                                            <div class="row justify-content-center">
                                                <div class="col-lg-8">
                                                    <div class="coming-soon-text">
                                                        <h2>Coming Soon</h2>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                            do eiusmod
                                                            tempor
                                                            incididunt ut labore et dolore.</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <!-- start wpo-wedding-date -->
                                                    <div class="wpo-wedding-date">
                                                        <h2 class="hidden">some</h2>
                                                        <div class="clock-grids">
                                                            <div id="clock"></div>
                                                        </div>
                                                    </div>
                                                    <!-- end wpo-wedding-date -->
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="wpo-coming-contact">
                                                        <form method="post" class="contact-validation-active"
                                                            id="contact-form-main">
                                                            <div class="row justify-content-center">
                                                                <div class="col-lg-5 col-sm-6 col-12">
                                                                    <input type="text" class="form-control" name="name"
                                                                        id="name" placeholder="Name*">
                                                                </div>
                                                                <div class="col-lg-5 col-sm-6 col-12">
                                                                    <input type="email" class="form-control"
                                                                        name="email" id="email" placeholder="Email">
                                                                </div>
                                                                <div class="col-lg-2 col-sm-4 col-6">
                                                                    <div class="submit-area">
                                                                        <button type="submit">Submit</button>
                                                                        <div id="loader">
                                                                            <i class="ti-reload"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="clearfix error-handling-messages">
                                                                <div id="success">Thank you</div>
                                                                <div id="error"> Error occurred while sending email.
                                                                    Please try again
                                                                    later. </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="frame-shape-1"><img src="assets/images/slider/invitation-shape-1.png" alt="">
                                    </div>
                                    <div class="frame-shape-2"><img src="assets/images/slider/invitation-shape-2.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end of hero slider -->
    </div>
    <!-- end of page-wrapper -->

    <?php include './partials/script.php' ?>
</body>

</html>