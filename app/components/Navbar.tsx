
import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import '../components/'
const Navbar = () => {
  return (
 <main>
    
     <header className="header header-6">
           
            <div className="header-middle">
                <div className="container">
                    <div className="header-left">
                        <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
                            <a href="#" className="search-toggle" role="button"><i className="icon-search"></i></a>
                          {/* <form action="#" method="get">
                                <div className="header-search-wrapper search-wrapper-wide"
                                style="background-color:#BBBBBB ;"  >
                                    <label for="q" className="sr-only">جستجو</label>
                                    <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                                    <input type="search" className="form-control" style="background-color:#BBBBBB ;" name="q" id="q"
                                        placeholder="جستجوی محصولات ..." required>
                                </div>
                            </form>   */}
                        </div>
                    </div>
                    <div className="header-center">
                        <a href="index10.html" className="logo">
                            {/* <Image src="public/images/male-worker-with-bulldozer-sand-quarry.jpg" alt="Molla Logo" width="82" height="20"/> */}
                        </a>
                    </div>

                    <div className="header-right">
                        <a href="wishlist.html" className="wishlist-link">
                            {/* <i className="icon-heart-o" style="color:#E3FCBF;"></i> */}
                            <span className="wishlist-count">3</span>
                            <span className="wishlist-txt text-white">لیست علاقه مندی</span>
                        </a>

                        <div className="dropdown cart-dropdown">
                            <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false" data-display="static">
                                {/* <i className="icon-shopping-cart" style="color: #E3FCBF;"></i> */}
                                <span className="cart-count">2</span>
                                <span className="cart-txt text-white">164,000 تومان</span>
                            </a>

                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-cart-products">
                                    <div className="product">
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <a href="product.html">کتونی ورزشی مخصوص دویدن رنگ بژ</a>
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1 x </span>
                                                84,000 تومان
                                            </span>
                                        </div>

                                        <figure className="product-image-container">
                                            <a href="product.html" className="product-image">
                                                {/* <Image src='public/images/male-worker-with-bulldozer-sand-quarry.jpg' alt="محصول"/> */}
                                            </a>
                                        </figure>
                                        <Link href="/" className="btn-remove" title="حذف محصول"><i className="icon-close"></i></Link>
                                    </div>

                                    <div className="product">
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <a href="product.html">لباس زنانه آبی</a>
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1 x </span>
                                                76,000 تومان
                                            </span>
                                        </div>

                                        <figure className="product-image-container">
                                            <a href="product.html" className="product-image">
                                                {/* <Image src="public/images/male-worker-with-bulldozer-sand-quarry.jpg" alt="محصول"/> */}
                                            </a>
                                        </figure>
                                        <a href="#" className="btn-remove" title="حذف محصول"><i className="icon-close"></i></a>
                                    </div>
                                </div>

                                <div className="dropdown-cart-total">
                                    <span>مجموع</span>

                                    <span className="cart-total-price">160,000 تومان</span>
                                </div>

                                <div className="dropdown-cart-action">
                                    <a href="cart.html" className="btn btn-primary">مشاهده سبد خرید</a>
                                    <a href="checkout.html" className="btn btn-outline-primary-2"><span>پرداخت</span><i
                                            className="icon-long-arrow-left"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="header-bottom sticky-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-auto col-lg-3 col-xl-3 col-xxl-2 header-left">
                            <div className="dropdown category-dropdown show is-on" data-visible="true">
                                <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="true" data-display="static"
                                    title="فهرست دسته بندی ها">
                                    فهرست دسته بندی ها
                                </a>

                                <div className="dropdown-menu show">
                                    <nav className="side-nav">
                                        <ul className="menu-vertical sf-arrows">
                                            <li className="megamenu-container">
                                                <Link className="sf-with-ul" href="/"><i className="icon-laptop"></i>لوازم
                                                    الکترونیکی</Link>

                                                <div className="megamenu">
                                                    <div className="row no-gutters">
                                                        <div className="col-md-8">
                                                            <div className="menu-col">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="menu-title">کامپیوتر و لپ تاپ</div>
                                                                       
                                                                        <ul>
                                                                            <li><a href="#">دسکتاپ</a></li>
                                                                            <li><a href="#">مانیتور</a></li>
                                                                            <li><a href="#">لپ تاپ</a></li>
                                                                            <li><a href="#">آی پد و تب لت</a></li>
                                                                            <li><a href="#">هارد و فضای ذخیره سازی</a>
                                                                            </li>
                                                                            <li><a href="#">پرینتر و دستگاه کپی</a></li>
                                                                            <li><a href="#">لوازم جانبی</a></li>
                                                                        </ul>

                                                                        <div className="menu-title">تلویزیون و ویدیو پلیر
                                                                        </div>
                                                                  
                                                                        <ul>
                                                                            <li><a href="#">تلویزیون ها</a></li>
                                                                            <li><a href="#">لوازم صوتی</a></li>
                                                                            <li><a href="#">پرژکتور</a></li>
                                                                            <li><a href="#">دستگاه های پخش ویدیو</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <div className="menu-title">موبایل</div>
                                                                     
                                                                        <ul>
                                                                            <li><a href="#">تلفن هوشمند</a></li>
                                                                            <li><a href="#">هدفون و هندزفری</a></li>
                                                                            <li><a href="#">قاب و کاور</a></li>
                                                                            <li><a href="#">شارژر </a></li>
                                                                        </ul>

                                                                        <div className="menu-title">دوربین دیجیتال</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <div className="banner banner-overlay">
                                                                <a href="category.html" className="banner banner-menu">
                                                                    {/* <Image src="public/images/male-worker-with-bulldozer-sand-quarry.jpg"
                                                                        alt="بنر"/> */}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="megamenu-container">
                                                <a className="sf-with-ul" href="#"><i className="icon-couch"></i>مبلمان</a>

                                                <div className="megamenu">
                                                    <div className="row no-gutters">
                                                        <div className="col-md-8">
                                                            <div className="menu-col">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="menu-title">اتاق خواب</div>
                                                                     
                                                                        <ul>
                                                                            <li><a href="#">تخت خواب</a></li>
                                                                            <li><a href="#">چراغ خواب</a></li>
                                                                            <li><a href="#">میز</a></li>
                                                                        </ul>

                                                                        <div className="menu-title">اتاق نشیمن</div>
                                                                   
                                                                        <ul>
                                                                            <li><a href="#">میز قهوه</a></li>
                                                                            <li><a href="#">صندلی</a></li>
                                                                            <li><a href="#">میز</a></li>
                                                                        </ul>
                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <div className="menu-title">دفتر</div>
                                                                     
                                                                        <ul>
                                                                            <li><a href="#">صندلی</a></li>
                                                                            <li><a href="#">میز</a></li>
                                                                        </ul>

                                                                        <div className="menu-title">آشپزخانه</div>
                                                                   
                                                                        <ul>
                                                                            <li><a href="#">میز نهارخوری</a></li>
                                                                            <li><a href="#">کابینت</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <div className="banner banner-overlay">
                                                                <a href="category.html" className="banner banner-menu">
                                                                    {/* <Image src="public/images/male-worker-with-bulldozer-sand-quarry.jpg"
                                                                        alt="بنر"/> */}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="megamenu-container">
                                                <a className="sf-with-ul" href="#"><i
                                                        className="icon-concierge-bell"></i>آشپزی</a>

                                                <div className="megamenu">
                                                    <div className="menu-col">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <div className="menu-title">لوازم پخت و پز</div>
                                                           
                                                                <ul>
                                                                    <li><a href="#">قابلمه</a></li>
                                                                    <li><a href="#">لوازم الکترونیکی</a></li>
                                                                    <li><a href="#">پاقو</a></li>
                                                                </ul>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="menu-title">ظروف</div>
                                                              -
                                                                <ul>
                                                                    <li><a href="#">بشقاب</a></li>
                                                                    <li><a href="#">فنجان</a></li>
                                                                    <li><a href="#">قوه خوری</a></li>
                                                                    <li><a href="#">سینی</a></li>
                                                                    <li><a href="#">نمکو فلفل پاش</a></li>
                                                                </ul>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="menu-title">لوازم الترونیکی</div>
                                                             
                                                                <ul>
                                                                    <li><a href="#">ماکروویو</a></li>
                                                                    <li><a href="#">قهوه ساز</a></li>
                                                                    <li><a href="#">میکسر</a></li>
                                                                    <li><a href="#">آرام پز</a></li>
                                                                    <li><a href="#">تستر</a></li>
                                                                    <li><a href="#">مخلوط کن</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="row menu-banners">
                                                            <div className="col-md-4">
                                                                <div className="banner">
                                                                    <a href="#">
                                                                        {/* <Image src="public/images/male-worker-with-bulldozer-sand-quarry.jpg"
                                                                            alt="image"/> */}
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="banner">
                                                                    <a href="#">
                                                                        {/* <Image src="public/images/male-worker-with-bulldozer-sand-quarry.jpg"
                                                                            alt="image"/> */}
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="banner">
                                                                    <a href="#">
                                                                        {/* <Image src="public/images/male-worker-with-bulldozer-sand-quarry.jpg"
                                                                            alt="image"/> */}
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="megamenu-container">
                                                <a className="sf-with-ul" href="#"><i className="icon-tshirt"></i>لباس</a>

                                                <div className="megamenu">
                                                    <div className="row no-gutters">
                                                        <div className="col-md-8">
                                                            <div className="menu-col">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="menu-title">زنانه</div>
                                                         
                                                                        <ul>
                                                                            <li><a href="#"><strong>محصولات
                                                                                        جدید</strong></a></li>
                                                                            <li><a href="#"><strong>بیشترین
                                                                                        فروش</strong></a></li>
                                                                            <li><a href="#"><strong>ویژه</strong></a>
                                                                            </li>
                                                                            <li><a href="#">لباس</a></li>
                                                                            <li><a href="#">کفش</a></li>
                                                                            <li><a href="#">کیف</a></li>
                                                                            <li><a href="#">لوازم جانبی</a></li>
                                                                        </ul>
                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <div className="menu-title">مردانه</div>
                                                                 
                                                                        <ul>
                                                                            <li><a href="#"><strong>محصولات
                                                                                        جدید</strong></a></li>
                                                                            <li><a href="#"><strong>بیشترین
                                                                                        فروش</strong></a></li>
                                                                            <li><a href="#"><strong>ویژه</strong></a>
                                                                            </li>
                                                                            <li><a href="#">لباس</a></li>
                                                                            <li><a href="#">کفش</a></li>
                                                                            <li><a href="#">کیف</a></li>
                                                                            <li><a href="#">لوازم جانبی</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <div className="banner banner-overlay">
                                                                <a href="category.html" className="banner banner-menu">
                                                                    {/* <Image src="public/images/male-worker-with-bulldozer-sand-quarry.jpg"
                                                                        alt="بنر"/> */}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="menu-col menu-brands">
                                                        <div className="row">
                                                            <div className="col-lg-2">
                                                                <a href="#" className="brand">
                                                                    {/* <Image src="public/images/male-worker-with-bulldozer-sand-quarry.jpg"
                                                                        alt="نام برند"/> */}
                                                                </a>
                                                            </div>

                                                            <div className="col-lg-2">
                                                                <a href="#" className="brand">
                                                                    {/* <Image src="public/images/male-worker-with-bulldozer-sand-quarry.jpg"
                                                                        alt="نام برند"/> */}
                                                                </a>
                                                            </div>

                                                            <div className="col-lg-2">
                                                                <a href="#" className="brand">
                                                                    {/* <Image src="public/images/male-worker-with-bulldozer-sand-quarry.jpg"
                                                                        alt="نام برند"/> */}
                                                                </a>
                                                            </div>

                                                            <div className="col-lg-2">
                                                                <a href="#" className="brand">
                                                                    {/* <Image src="public/images/male-worker-with-bulldozer-sand-quarry.jpg"
                                                                        alt="نام برند"/> */}
                                                                </a>
                                                            </div>

                                                            <div className="col-lg-2">
                                                                <a href="#" className="brand">
                                                                    {/* <Image src="public/images/male-worker-with-bulldozer-sand-quarry.jpg"
                                                                        alt="نام برند"/> */}
                                                                </a>
                                                            </div>

                                                            <div className="col-lg-2">
                                                                <a href="#" className="brand">
                                                                    {/* <Image src="public/images/male-worker-with-bulldozer-sand-quarry.jpg"
                                                                        alt="نام برند"/> */}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li><a href="#"><i className="icon-blender"></i>لوازم خانگی</a></li>
                                            <li><a href="#"><i className="icon-heartbeat"></i>زیبایی و سلامت</a></li>
                                            <li><a href="#"><i className="icon-shoe-prints"></i>کفش و پوتین</a></li>
                                            <li><a href="#"><i className="icon-map-signs"></i>مسافرت</a></li>
                                            <li><a href="#"><i className="icon-mobile-alt"></i>تلفن هوشمند</a></li>
                                            <li><a href="#"><i className="icon-tv"></i>تلویزیون و لوازم صوتی</a></li>
                                            <li><a href="#"><i className="icon-gift"></i>هدیه</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-xl-4 col-xxl-6 header-center">
                            <nav className="main-nav">
                                <ul className="menu sf-arrows">
                                    <li className="megamenu-container active">
                                        <a href="index10.html" className="sf-with-ul">خانه</a>

                                        <div className="megamenu demo">
                                            <div className="menu-col">
                                                <div className="menu-title">دمو خود را انتخاب کنید</div>
                                  

                                                <div className="demo-list">
                                                    <div className="demo-item">
                                                        <a href="index-3.html">
                                                            {/* <span className="demo-bg"
                                                                style="background-image: url(assets/images/menu/demos/3.jpg);"></span> */}
                                                            <span className="demo-title">01 - فروشگاه لوازم الکترونیکی</span>
                                                        </a>

                                                    </div>

                                                    <div className="demo-item">
                                                        <a href="index-2-2.html">
                                                            {/* <span className="demo-bg"
                                                                style="background-image: url(assets/images/menu/demos/2.jpg);"></span> */}
                                                            <span className="demo-title">02 - فروشگاه مبلمان</span>
                                                        </a>
                                                    </div>

                                                    <div className="demo-item">
                                                        <a href="index-3.html">
                                                            {/* <span className="demo-bg"
                                                                style="background-image: url(assets/images/menu/demos/1.jpg);"></span> */}
                                                            <span className="demo-title">03 - فروشگاه مبلمان</span>
                                                        </a>
                                                    </div>

                                                    <div className="demo-item">
                                                        <a href="index-4.html">
                                                            {/* <span className="demo-bg"
                                                                style="background-image: url(assets/images/menu/demos/4.jpg);"></span> */}
                                                            <span className="demo-title">04 - فروشگاه لوازم الکترونیکی</span>
                                                        </a>
                                                    </div>

                                                    <div className="demo-item">
                                                        <a href="index-5.html">
                                                            {/* <span className="demo-bg"
                                                                style="background-image: url(assets/images/menu/demos/5.jpg);"></span> */}
                                                            <span className="demo-title">05 - فروشگاه مد و لباس</span>
                                                        </a>
                                                    </div>

                                                    <div className="demo-item">
                                                        <a href="index-6.html">
                                                            {/* <span className="demo-bg"
                                                                style="background-image: url(assets/images/menu/demos/6.jpg);"></span> */}
                                                            <span className="demo-title">06 - فروشگاه مد و لباس</span>
                                                        </a>
                                                    </div>

                                                    <div className="demo-item">
                                                        <a href="index-7.html">
                                                            {/* <span className="demo-bg"
                                                                style="background-image: url(assets/images/menu/demos/7.jpg);"></span> */}
                                                            <span className="demo-title">07 - فروشگاه مد و لباس</span>
                                                        </a>
                                                    </div>

                                                    <div className="demo-item">
                                                        <a href="index-8.html">
                                                            {/* <span className="demo-bg"
                                                                style="background-image: url(assets/images/menu/demos/8.jpg);"></span> */}
                                                            <span className="demo-title">08 - فروشگاه مد و لباس</span>
                                                        </a>
                                                    </div>

                                                    <div className="demo-item">
                                                        <a href="index-9.html">
                                                            {/* <span className="demo-bg"
                                                                style="background-image: url(assets/images/menu/demos/9.jpg);"></span> */}
                                                            <span className="demo-title">09 - فروشگاه مد و لباس</span>
                                                        </a>
                                                    </div>

                                                    <div className="demo-item">
                                                        <a href="index-10.html">
                                                            {/* <span className="demo-bg"
                                                                style="background-image: url(assets/images/menu/demos/10.jpg);"></span> */}
                                                            <span className="demo-title">10 - فروشگاه کفش</span>
                                                        </a>
                                                    </div>

                                                    <div className="demo-item hidden">
                                                        <a href="index-11.html">
                                                            {/* <span className="demo-bg"
                                                                style="background-image: url(assets/images/menu/demos/11.jpg);"></span> */}
                                                            <span className="demo-title">11 - فروشگاه مبل</span>
                                                        </a>
                                                    </div>

                                                    <div className="demo-item hidden">
                                                        <a href="index-12.html">
                                                            {/* <span className="demo-bg"
                                                                style="background-image: url(assets/images/menu/demos/12.jpg);"></span> */}
                                                            <span className="demo-title">12 - فروشگاه مد</span>
                                                        </a>
                                                    </div>

                                                    <div className="demo-item hidden">
                                                        <a href="index-13.html">
                                                            {/* <span className="demo-bg"
                                                                style="background-image: url(assets/images/menu/demos/13.jpg);"></span> */}
                                                            <span className="demo-title">13 - بازار</span>
                                                        </a>
                                                    </div>

                                                    <div className="demo-item hidden">
                                                        <a href="index-14.html">
                                                            {/* <span className="demo-bg"
                                                                style="background-image: url(assets/images/menu/demos/14.jpg);"></span> */}
                                                            <span className="demo-title">14 - بازار تمام عرض</span>
                                                        </a>
                                                    </div>

                                                    <div className="demo-item hidden">
                                                        <a href="index-15.html">
                                                            {/* <span className="demo-bg"
                                                                style="background-image: url(assets/images/menu/demos/15.jpg);"></span> */}
                                                            <span className="demo-title">15 - مد و زیبایی</span>
                                                        </a>
                                                    </div>

                                                    <div className="demo-item hidden">
                                                        <a href="index-16.html">
                                                            {/* <span className="demo-bg"
                                                                style="background-image: url(assets/images/menu/demos/16.jpg);"></span> */}
                                                            <span className="demo-title">16 - مد و زیبایی</span>
                                                        </a>
                                                    </div>

                                                    <div className="demo-item hidden">
                                                        <a href="index-17.html">
                                                            {/* <span className="demo-bg"
                                                                style="background-image: url(assets/images/menu/demos/17.jpg);"></span> */}
                                                            <span className="demo-title">17 - فروشگاه مد و لباس</span>
                                                        </a>
                                                    </div>

                                                    <div className="demo-item hidden">
                                                        <a href="index-18.html">
                                                            {/* <span className="demo-bg"
                                                                style="background-image: url(assets/images/menu/demos/18.jpg);"></span> */}
                                                            <span className="demo-title">18 - fashion store (with
                                                                sidebar)</span>
                                                        </a>
                                                    </div>

                                                    <div className="demo-item hidden">
                                                        <a href="index-19.html">
                                                            {/* <span className="demo-bg"
                                                                style="background-image: url(assets/images/menu/demos/19.jpg);"></span> */}
                                                            <span className="demo-title">19 - فروشگاه بازی</span>
                                                        </a>
                                                    </div>

                                                    <div className="demo-item hidden">
                                                        <a href="index-20.html">
                                                            {/* <span className="demo-bg"
                                                                style="background-image: url(assets/images/menu/demos/20.jpg);"></span> */}
                                                            <span className="demo-title">20 - فروشگاه کتاب</span>
                                                        </a>
                                                    </div>

                                                    <div className="demo-item hidden">
                                                        <a href="index-21.html">
                                                            {/* <span className="demo-bg"
                                                                style="background-image: url(assets/images/menu/demos/21.jpg);"></span> */}
                                                            <span className="demo-title">21 - فروشگاه ورزشی</span>
                                                        </a>
                                                    </div>

                                                    <div className="demo-item hidden">
                                                        <a href="index-22.html">
                                                            {/* <span className="demo-bg"
                                                                style="background-image: url(assets/images/menu/demos/22.jpg);"></span> */}
                                                            <span className="demo-title">22 - فروشگاه ابزار</span>
                                                        </a>
                                                    </div>

                                                    <div className="demo-item hidden">
                                                        <a href="index-23.html">
                                                            {/* <span className="demo-bg"
                                                                style="background-image: url(assets/images/menu/demos/23.jpg);"></span> */}
                                                            <span className="demo-title">23 - fashion left navigation
                                                                store</span>
                                                        </a>
                                                    </div>

                                                    <div className="demo-item hidden">
                                                        <a href="index-24.html">
                                                            {/* <span className="demo-bg"
                                                                style="background-image: url(assets/images/menu/demos/24.jpg);"></span> */}
                                                            <span className="demo-title">24 - فروشگاه ورزشی</span>
                                                        </a>
                                                    </div>

                                                </div>

                                                <div className="megamenu-action text-center">
                                                    <a href="#"
                                                        className="btn btn-outline-primary-2 view-all-demos"><span>مشاهده همه دموها</span><i className="icon-long-arrow-left"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="category.html" className="sf-with-ul">فروشگاه</a>

                                        <div className="megamenu megamenu-md">
                                            <div className="row no-gutters">
                                                <div className="col-md-8">
                                                    <div className="menu-col">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="menu-title">فروشگاه با سایدبار</div>
                                                             
                                                                <ul>
                                                                    <li><a href="category-list.html">فروشگاه لیست</a>
                                                                    </li>
                                                                    <li><a href="category-2cols.html">فروشگاه 2
                                                                            ستونه</a>
                                                                    </li>
                                                                    <li><a href="category.html">فروشگاه 3 ستونه</a></li>
                                                                    <li><a href="category-4cols.html">فروشگاه 4
                                                                            ستونه</a>
                                                                    </li>
                                                                    <li><a href="category-market.html"><span>فروشگاه
                                                                                بازار<span
                                                                                    className="tip tip-new">جدید</span></span></a>
                                                                    </li>
                                                                </ul>

                                                                <div className="menu-title">فروشگاه بدون سایدبار</div>
                                                            
                                                                <ul>
                                                                    <li><a href="category-boxed.html"><span>فروشگاه با
                                                                                حالت
                                                                                باکس<span
                                                                                    className="tip tip-hot">ویژه</span></span></a>
                                                                    </li>
                                                                    <li><a href="category-fullwidth.html">فروشگاه تمام
                                                                            صفحه</a></li>
                                                                </ul>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="menu-title">دسته بندی محصولات</div>
                                                            
                                                                <ul>
                                                                    <li><a href="product-category-boxed.html">دسته بندی
                                                                            محصولات با حالت باکس</a></li>
                                                                    <li><a href="product-category-fullwidth.html"><span>دسته
                                                                                بندی محصولات تمام صفحه<span
                                                                                    className="tip tip-new">جدید</span></span></a>
                                                                    </li>
                                                                </ul>
                                                                <div className="menu-title">صفحات فروشگاه</div>
                                                              
                                                                <ul>
                                                                    <li><a href="cart.html">سبد خرید</a></li>
                                                                    <li><a href="checkout.html">پرداخت</a></li>
                                                                    <li><a href="wishlist.html">لیست علاقه مندی ها</a>
                                                                    </li>
                                                                    <li><a href="dashboard.html">داشبورد</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="banner banner-overlay">
                                                        <a href="category.html" className="banner banner-menu">
                                                            {/* <Image src="public/images/male-worker-with-bulldozer-sand-quarry.jpg" alt="بنر"/> */}

                                                            <div className="banner-content banner-content-top">
                                                                <div className="banner-title text-white">آخرین
                                                                    <br />شانس<br /><span><strong>فروش</strong></span></div>
                                                            
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="product.html" className="sf-with-ul">محصول</a>

                                        <div className="megamenu megamenu-sm">
                                            <div className="row no-gutters">
                                                <div className="col-md-6">
                                                    <div className="menu-col">
                                                        <div className="menu-title">جزئیات محصول</div>
                                                    
                                                        <ul>
                                                            <li><a href="product.html">پیش فرض</a></li>
                                                            <li><a href="product-centered.html">توضیحات وسط چین</a></li>
                                                            <li><a href="product-extended.html"><span>توضیحات
                                                                        گسترده<span
                                                                            className="tip tip-new">جدید</span></span></a>
                                                            </li>
                                                            <li><a href="product-gallery.html">گالری</a></li>
                                                            <li><a href="product-sticky.html">اطلاعات چسبیده</a></li>
                                                            <li><a href="product-sidebar.html">صفحه جمع با سایدبار</a>
                                                            </li>
                                                            <li><a href="product-fullwidth.html">تمام صفحه</a></li>
                                                            <li><a href="product-masonry.html">اطلاعات چسبیده</a></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="banner banner-overlay">
                                                        <a href="category.html">
                                                            {/* <Image src="public/images/male-worker-with-bulldozer-sand-quarry.jpg" alt="بنر"/> */}

                                                            <div className="banner-content banner-content-bottom">
                                                                <div className="banner-title text-white">محصولات
                                                                    جدید<br /><span><strong>بهار 1399</strong></span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#" className="sf-with-ul">صفحات </a>

                                        <ul>
                                            <li>
                                                <a href="about.html" className="sf-with-ul">درباره ما</a>

                                                <ul>
                                                    <li><a href="about.html">درباره ما 01</a></li>
                                                    <li><a href="about-2.html">درباره ما 02</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="contact.html" className="sf-with-ul">تماس با ما</a>

                                                <ul>
                                                    <li><a href="contact.html">تماس با ما 01</a></li>
                                                    <li><a href="contact-2.html">تماس با ما 02</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="login.html">ورود</a></li>
                                            <li><a href="faq.html">سوالات متداول</a></li>
                                            <li><a href="404.html">خطای 404</a></li>
                                            <li><a href="coming-soon.html">به زودی</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="blog.html" className="sf-with-ul">اخبار</a>

                                        <ul>
                                            <li><a href="blog.html">کلاسیک</a></li>
                                            <li><a href="blog-listing.html">لیست</a></li>
                                            <li>
                                                <a href="#">شبکه بندی</a>
                                                <ul>
                                                    <li><a href="blog-grid-2cols.html">2 ستونه</a></li>
                                                    <li><a href="blog-grid-3cols.html">3 ستونه</a></li>
                                                    <li><a href="blog-grid-4cols.html">4 ستونه</a></li>
                                                    <li><a href="blog-grid-sidebar.html">با سایدبار</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">سایز های مختلف</a>
                                                <ul>
                                                    <li><a href="blog-masonry-2cols.html">2 ستونه</a></li>
                                                    <li><a href="blog-masonry-3cols.html">3 ستونه</a></li>
                                                    <li><a href="blog-masonry-4cols.html">4 ستونه</a></li>
                                                    <li><a href="blog-masonry-sidebar.html">با سایدبار</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">ماسک</a>
                                                <ul>
                                                    <li><a href="blog-mask-grid.html">نوع 1</a></li>
                                                    <li><a href="blog-mask-masonry.html">نوع 2</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">پست تکی</a>
                                                <ul>
                                                    <li><a href="single.html">پیش فرض با سایدبار</a></li>
                                                    <li><a href="single-fullwidth.html">تمام صفحه بدون سایدبار</a></li>
                                                    <li><a href="single-fullwidth-sidebar.html">تمام صفحه باسایدبار</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="elements-list.html" className="sf-with-ul">عناصر </a>

                                        <ul>
                                            <li><a href="elements-products.html">محصولات</a></li>
                                            <li><a href="elements-typography.html">تایپوگرافی</a></li>
                                            <li><a href="elements-titles.html">عناوین</a></li>
                                            <li><a href="elements-banners.html">بنرها</a></li>
                                            
                                            <li><a href="elements-product-category.html">دسته بندی محصولات</a></li>
                                            <li><a href="elements-video-banners.html">بنرهای ویدیویی</a></li>
                                            <li><a href="elements-buttons.html">دکمه ها</a></li>
                                            <li><a href="elements-accordions.html">آکاردئون</a></li>
                                            <li><a href="elements-tabs.html">تب ها</a></li>
                                            <li><a href="elements-testimonials.html">توصیف و نقل قول</a></li>
                                            <li><a href="elements-blog-posts.html">اخبار</a></li>
                                            <li><a href="elements-portfolio.html">نمونه کار</a></li>
                                            <li><a href="elements-cta.html">پاسخ به عمل</a></li>
                                            <li><a href="elements-icon-boxes.html">باکس های آیکون</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>
        </header>
 </main>
  )
};

export default Navbar;