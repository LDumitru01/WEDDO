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
        $HeaderStyle = 'wpo-header-style-3';
        ?>
        <?php include './partials/header.php' ?>
        <!-- end of header -->
        <!-- start of hero -->
        <section class="static-hero-s4">
            <div class="hero-container">
                <div class="hero-inner">
                    <div class="container">
                        <div class="coming-soon-section">
                            <div class="row justify-content-center">
                                <div class="col-lg-6">
                                    <div class="coming-soon-text">
                                        <h2>Coming Soon</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut labore et dolore.</p>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <!-- start wpo-wedding-date -->
                                    <div class="wpo-wedding-date">
                                        <h2 class="hidden">some</h2>
                                        <div class="clock-grids">
                                            <div id="clock" data-date="2024/02/09 00:00"></div>
                                        </div>
                                    </div>
                                    <!-- end wpo-wedding-date -->
                                </div>
                                <div class="col-lg-8">
                                    <div class="wpo-coming-contact">
                                        <form method="post" class="contact-validation-active" id="contact-form-main">
                                            <div class="row justify-content-center">
                                                <div class="col-lg-5 col-sm-6 col-12">
                                                    <input type="text" class="form-control" name="name" id="name"
                                                        placeholder="Name*">
                                                </div>
                                                <div class="col-lg-5 col-sm-6 col-12">
                                                    <input type="email" class="form-control" name="email" id="email"
                                                        placeholder="Email">
                                                </div>
                                                <div class="col-lg-2 col-sm-4 col-6">
                                                    <div class="submit-area">
                                                        <button type="submit">Notify Me</button>
                                                        <div id="loader">
                                                            <i class="ti-reload"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clearfix error-handling-messages">
                                                <div id="success">Thank you</div>
                                                <div id="error"> Error occurred while sending email. Please try again
                                                    later. </div>
                                            </div>
                                        </form>
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