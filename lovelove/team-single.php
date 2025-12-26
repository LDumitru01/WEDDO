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
        
        <!-- .team-pg-area start -->
        <div class="team-pg-area section-padding">
            <div class="container">
                <div class="team-info-wrap">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="team-info-img">
                                <img src="assets/images/at-single.jpg" alt="">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="team-info-text">
                                <h2>Maria D’Soza</h2>
                                <ul>
                                    <li>Position: <span>Planner</span></li>
                                    <li>Planner Service:<span>Photography, Wedding Ceremony</span></li>
                                    <li>Experience:<span>12 Years</span></li>
                                    <li>Address:<span>Millington, Ave, TN 38053</span></li>
                                    <li>Phone:<span>+00 568 746 987</span></li>
                                    <li>Email:<span>youremail@gmail.com</span></li>
                                    <li>Fax:<span>568 746 987</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="exprience-area">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="exprience-wrap">
                                <h2>Personal Experience</h2>
                                <p>The purpose of lorem ipsum is to create a natural looking block oftext (sentence,
                                    paragraph, page, etc.) that doesn't distract from thelayout. A practice not without
                                    controversy, laying out pages withmeaningless filler text can be very useful when
                                    the focus is meantto be on design, not content.There are many variations of passages
                                    of Lorem Ipsum available.</p>
                                <p>But the majority have suffered alteration in some form, by injected humour, or
                                    randomised words which don’t look even slightly believable. If you are going to use
                                    a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing
                                    hidden in the middle of text generators on the Internet tend to repeat.</p>
                            </div>
                            <div class="education-area ex-wiget">
                                <h2>Education</h2>
                                <ul>
                                    <li>There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form, by injected humour.</li>
                                    <li>If you are going to use a passage of Lorem Ipsum.</li>
                                    <li>Very popular during the Renaissance. </li>
                                    <li>Many desktop publishing packages and web page editors now.</li>
                                </ul>
                            </div>
                            <div class="language-area ex-wiget">
                                <h2>Language</h2>
                                <ul>
                                    <li>French(fluent), English (fluent), Greek , chinese.</li>
                                </ul>
                            </div>
                            <div class="wpo-contact-area ex-wiget">
                                <h2>Contact Me</h2>
                                <div class="quote-form">
                                    <form>
                                        <div class="form-group half-col">
                                            <input type="text" class="form-control" placeholder="Name:" name="name">
                                        </div>
                                        <div class="form-group half-col">
                                            <input type="email" class="form-control" placeholder="Email:" name="email">
                                        </div>
                                        <div class="form-group half-col">
                                            <input type="text" class="form-control" placeholder="Subject:"
                                                name="subject">
                                        </div>
                                        <div class="form-group half-col">
                                            <input type="text" class="form-control" placeholder="Your Address:"
                                                name="address">
                                        </div>
                                        <div class="form-group full-col">
                                            <textarea class="form-control" name="note"
                                                placeholder="Description..."></textarea>
                                        </div>
                                        <div class="form-group full-col">
                                            <button class="btn theme-btn-s4" type="submit">Get In Touch</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- .team-pg-area end -->

        <!-- start of wpo-site-footer-section -->
        <?php include './partials/footer.php' ?>
        <!-- end of wpo-site-footer-section -->

    </div>
    <!-- end of page-wrapper -->

    <?php include './partials/script.php' ?>
</body>

</html>