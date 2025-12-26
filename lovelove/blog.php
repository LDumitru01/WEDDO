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
        $mainTitle = 'Latest News';
        $Title = 'Home';
        $Title2 = 'Blog';
        ?>
        <?php include './partials/page-header.php' ?>
        <!-- end of hero slider -->

        <!-- start wpo-blog-pg-section -->
        <section class="wpo-blog-pg-section section-padding">
            <div class="container">
                <div class="row">
                    <div class="col col-lg-8">
                        <div class="wpo-blog-content">
                            <div class="post format-standard-image">
                                <div class="entry-media">
                                    <img src="assets/images/blog/img-13.jpg" alt>
                                </div>
                                <div class="entry-meta">
                                    <ul>
                                        <li><i class="fi flaticon-user"></i> By <a href="#">Aliza Anny</a> </li>
                                        <li><i class="fi flaticon-comment-white-oval-bubble"></i> Comments 35 </li>
                                        <li><i class="fi flaticon-calendar-1"></i> 24 Jun 2025</li>
                                    </ul>
                                </div>
                                <div class="entry-details">
                                    <h3><a href="blog-single.php">Best wedding gift you may like & choose.</a></h3>
                                    <p>Consulting is a great career path if you want to build a broad skill set that
                                        includes everything from critical thinking and strategic planning to
                                        communications. If you love rising to a challenge.</p>
                                    <a href="blog-single.php" class="read-more">READ MORE...</a>
                                </div>
                            </div>
                            <div class="post format-standard">
                                <div class="entry-meta">
                                    <ul>
                                        <li><i class="fi flaticon-user"></i> By <a href="#">Aliza Anny</a> </li>
                                        <li><i class="fi flaticon-comment-white-oval-bubble"></i> Comments 35 </li>
                                        <li><i class="fi flaticon-calendar-1"></i> 24 Jun 2025</li>
                                    </ul>
                                </div>
                                <div class="entry-details">
                                    <h3><a href="blog-single.php">Photography is the important part of wedding.</a>
                                    </h3>
                                    <p>Consulting is a great career path if you want to build a broad skill set that
                                        includes everything from critical thinking and strategic planning to
                                        communications. If you love rising to a challenge.</p>
                                    <a href="blog-single.php" class="read-more">READ MORE...</a>
                                </div>
                            </div>

                            <div class="post format-gallery">
                                <div class="entry-media">
                                    <div class="post-slider owl-carousel">
                                        <img src="assets/images/blog/img-14.jpg" alt>
                                        <img src="assets/images/blog/img-15.jpg" alt>
                                    </div>

                                </div>
                                <div class="entry-meta">
                                    <ul>
                                        <li><i class="fi flaticon-user"></i> By <a href="#">Aliza Anny</a> </li>
                                        <li><i class="fi flaticon-comment-white-oval-bubble"></i> Comments 35 </li>
                                        <li><i class="fi flaticon-calendar-1"></i> 24 Jun 2025</li>
                                    </ul>
                                </div>
                                <div class="entry-details">
                                    <h3><a href="blog-single.php">Top 10 wedding fresh flower decoration idea.</a></h3>
                                    <p>Consulting is a great career path if you want to build a broad skill set that
                                        includes everything from critical thinking and strategic planning to
                                        communications. If you love rising to a challenge.</p>
                                    <a href="blog-single.php" class="read-more">READ MORE...</a>
                                </div>
                            </div>
                            <div class="post format-video">
                                <div class="entry-media video-holder">
                                    <img src="assets/images/blog/img-16.jpg" alt>
                                    <a href="https://www.youtube.com/embed/OUB6zKc-Tos" class="video-btn"
                                        data-type="iframe">
                                        <i class="fi flaticon-play"></i>
                                    </a>

                                </div>
                                <div class="entry-meta">
                                    <ul>
                                        <li><i class="fi flaticon-user"></i> By <a href="#">Aliza Anny</a> </li>
                                        <li><i class="fi flaticon-comment-white-oval-bubble"></i> Comments 35 </li>
                                        <li><i class="fi flaticon-calendar-1"></i> 24 Jun 2025</li>
                                    </ul>
                                </div>
                                <div class="entry-details">
                                    <h3><a href="blog-single.php">Photography is the important part of wedding.</a>
                                    </h3>
                                    <p>Consulting is a great career path if you want to build a broad skill set that
                                        includes everything from critical thinking and strategic planning to
                                        communications. If you love rising to a challenge.</p>
                                    <a href="blog-single.php" class="read-more">READ MORE...</a>
                                </div>
                            </div>
                            <div class="pagination-wrapper pagination-wrapper-left">
                                <ul class="pg-pagination">
                                    <li>
                                        <a href="#" aria-label="Previous">
                                            <i class="fi ti-angle-left"></i>
                                        </a>
                                    </li>
                                    <li class="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li>
                                        <a href="#" aria-label="Next">
                                            <i class="fi ti-angle-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col col-lg-4">
                        <?php include './partials/blog-sidebar.php' ?>
                    </div>
                </div>
            </div> <!-- end container -->
        </section>
        <!-- end wpo-blog-pg-section -->

        <!-- start of wpo-site-footer-section -->
        <?php include './partials/footer.php' ?>
        <!-- end of wpo-site-footer-section -->

    </div>
    <!-- end of page-wrapper -->

    <?php include './partials/script.php' ?>
</body>

</html>