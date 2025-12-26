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
        $mainTitle = 'Cart';
        $Title = 'Home';
        $Title2 = 'Cart';
        ?>
        <?php include './partials/page-header.php' ?>
        <!-- end of hero slider -->

        <!-- cart-area start -->
        <div class="cart-area section-padding">
            <div class="container">
                <div class="form">
                    <div class="cart-wrapper">
                        <div class="row">
                            <div class="col-12">
                                <form action="cart">
                                    <table class="table-responsive cart-wrap">
                                        <thead>
                                            <tr>
                                                <th class="images images-b">Image</th>
                                                <th class="product-2">Product Name</th>
                                                <th class="pr">Quantity</th>
                                                <th class="ptice">Price</th>
                                                <th class="stock">Total Price</th>
                                                <th class="remove remove-b">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="images"><img src="assets/images/cart/img-1.jpg" alt=""></td>
                                                <td class="product">
                                                    <ul>
                                                        <li class="first-cart"> Wedding Gown</li>
                                                        <li>Brand : Gucci</li>
                                                        <li>Size : XL</li>
                                                    </ul>
                                                </td>
                                                <td class="stock">
                                                    <ul class="input-style">
                                                        <li class="quantity cart-plus-minus">
                                                            <input type="text" value="1">
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td class="ptice">$ 250</td>
                                                <td class="stock">$ 250</td>
                                                <td class="action">
                                                    <ul>
                                                        <li class="w-btn"><a data-bs-toggle="tooltip"
                                                                data-bs-html="true" title="Remove from Cart" href="#"><i
                                                                    class="fi ti-trash"></i></a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="images"><img src="assets/images/cart/img-2.jpg" alt=""></td>
                                                <td class="product">
                                                    <ul>
                                                        <li class="first-cart">Bridal Flower</li>
                                                        <li>Brand : Flower</li>
                                                        <li>Size : 5 stick</li>
                                                    </ul>
                                                </td>
                                                <td class="stock">
                                                    <ul class="input-style">
                                                        <li class="quantity cart-plus-minus">
                                                            <input type="text" value="1">
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td class="ptice">$ 350</td>
                                                <td class="stock">$ 350</td>
                                                <td class="action">
                                                    <ul>
                                                        <li class="w-btn"><a data-bs-toggle="tooltip"
                                                                data-bs-html="true" title="Remove to Cart" href="#"><i
                                                                    class="fi ti-trash"></i></a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="images"><img src="assets/images/cart/img-3.jpg" alt=""></td>
                                                <td class="product">
                                                    <ul>
                                                        <li class="first-cart">Bridal Shoes</li>
                                                        <li>Brand : Nike</li>
                                                        <li>Size : XXL</li>
                                                    </ul>
                                                </td>
                                                <td class="stock">
                                                    <ul class="input-style">
                                                        <li class="quantity cart-plus-minus">
                                                            <input type="text" value="1">
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td class="ptice">$ 450</td>
                                                <td class="stock">$ 450</td>
                                                <td class="action">
                                                    <ul>
                                                        <li class="w-btn"><a data-bs-toggle="tooltip"
                                                                data-bs-html="true" title="Remove to Cart" href="#"><i
                                                                    class="fi ti-trash"></i></a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="images"><img src="assets/images/cart/img-4.jpg" alt=""></td>
                                                <td class="product">
                                                    <ul>
                                                        <li class="first-cart">Wedding Cake</li>
                                                        <li>Brand : Bonf</li>
                                                        <li>Size : L</li>
                                                    </ul>
                                                </td>
                                                <td class="stock">
                                                    <ul class="input-style">
                                                        <li class="quantity cart-plus-minus">
                                                            <input type="text" value="1">
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td class="ptice">$ 550</td>
                                                <td class="stock">$ 550</td>
                                                <td class="action">
                                                    <ul>
                                                        <li class="w-btn"><a data-bs-toggle="tooltip"
                                                                data-bs-html="true" title="Remove to Cart" href="#"><i
                                                                    class="fi ti-trash"></i></a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="images"><img src="assets/images/cart/img-5.jpg" alt=""></td>
                                                <td class="product">
                                                    <ul>
                                                        <li class="first-cart">Wedding Rings</li>
                                                        <li>Brand : baraka</li>
                                                        <li>Size : M</li>
                                                    </ul>
                                                </td>
                                                <td class="stock">
                                                    <ul class="input-style">
                                                        <li class="quantity cart-plus-minus">
                                                            <input type="text" value="1">
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td class="ptice">$ 550</td>
                                                <td class="stock">$ 550</td>
                                                <td class="action">
                                                    <ul>
                                                        <li class="w-btn"><a data-bs-toggle="tooltip"
                                                                data-bs-html="true" title="Remove to Cart" href="#"><i
                                                                    class="fi ti-trash"></i></a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </form>
                                <div class="submit-btn-area">
                                    <ul>
                                        <li><a class="theme-btn-s4" href="shop.php">Continue Shopping</a></li>
                                        <li><button type="submit">Update Cart</button></li>
                                    </ul>
                                </div>
                                <div class="cart-product-list">
                                    <ul>
                                        <li>Total product<span>( 05 )</span></li>
                                        <li>Sub Price<span>$2250</span></li>
                                        <li>Vat<span>$50</span></li>
                                        <li>Eco Tax<span>$100</span></li>
                                        <li>Delivery Charge<span>$100</span></li>
                                        <li class="cart-b">Total Price<span>$2500</span></li>
                                    </ul>
                                </div>

                                <div class="submit-btn-area">
                                    <ul>
                                        <li><a class="theme-btn-s4" href="checkout.php">Proceed to Checkout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- cart-area end -->

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