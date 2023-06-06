import React from 'react'
import {Link} from "react-router-dom";
const Home = () => {
  return (
    <>
      
      <header>
        <div className="header-area header-transparent">
            <div className="main-header header-sticky sticky-bar">
                <div className="container">
                    <div className="menu-wrapper d-flex align-items-center justify-content-between">
                        <div className="left-content d-flex align-items-center">
                            <div className="logo mr-45">
                                <a href="https://preview.colorlib.com/theme/jobsco/index.html"><img src="assets/./JobBoard HTML-5 Template_files/logo.png" alt=""/></a>
                            </div>

                            <div className="main-menu d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="borwse_job">Browse Job</Link></li>
                                        <li><Link to="https://preview.colorlib.com/theme/jobsco/#">Page</Link>
                                            <ul className="submenu">
                                                <li><a href="https://preview.colorlib.com/theme/jobsco/blog.html">Blog</a></li>
                                                <li><a href="https://preview.colorlib.com/theme/jobsco/candidate.html">Candidates</a></li>
                                                <li><a href="https://preview.colorlib.com/theme/jobsco/job_details.html">Job Details</a></li>
                                                <li><a href="https://preview.colorlib.com/theme/jobsco/blog_details.html">Blog Details</a></li>
                                                <li><a href="https://preview.colorlib.com/theme/jobsco/elements.html">Element</a></li>
                                            </ul>
                                        </li>
                                        <li><Link to="contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <div className="buttons">
                            <ul>
                                <li className="button-header">
                                    <a href="https://preview.colorlib.com/theme/jobsco/#" className="header-btn mr-10"> <i className="fas fa-phone-alt"></i>Post A Job</a>
                                    <a href="https://preview.colorlib.com/theme/jobsco/login.html" className="btn header-btn2">Log In</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="mobile_menu d-block d-lg-none">
                            <div className="slicknav_menu"><a href="https://preview.colorlib.com/theme/jobsco/#" aria-haspopup="true" role="button" tabindex="0" className="slicknav_btn slicknav_collapsed" ><span className="slicknav_menutxt">MENU</span><span className="slicknav_icon"><span className="slicknav_icon-bar"></span><span className="slicknav_icon-bar"></span><span className="slicknav_icon-bar"></span></span></a>
                                <ul className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{display: "none"}}>
                                    <li><a href="https://preview.colorlib.com/theme/jobsco/index.html" role="menuitem" tabindex="-1">Home</a></li>
                                    <li><a href="https://preview.colorlib.com/theme/jobsco/borwse_job.html" role="menuitem" tabindex="-1">Browse Job</a></li>
                                    <li className="slicknav_collapsed slicknav_parent"><a href="https://preview.colorlib.com/theme/jobsco/#" role="menuitem" aria-haspopup="true" tabindex="-1" className="slicknav_item slicknav_row"><a href="https://preview.colorlib.com/theme/jobsco/#" tabindex="-1">Page</a>
                                        <span className="slicknav_arrow">+</span></a>
                                        <ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{display: "none"}}>
                                            <li><a href="https://preview.colorlib.com/theme/jobsco/blog.html" role="menuitem" tabindex="-1">Blog</a></li>
                                            <li><a href="https://preview.colorlib.com/theme/jobsco/candidate.html" role="menuitem" tabindex="-1">Candidates</a></li>
                                            <li><a href="https://preview.colorlib.com/theme/jobsco/job_details.html" role="menuitem" tabindex="-1">Job Details</a></li>
                                            <li><a href="https://preview.colorlib.com/theme/jobsco/blog_details.html" role="menuitem" tabindex="-1">Blog Details</a></li>
                                            <li><a href="https://preview.colorlib.com/theme/jobsco/elements.html" role="menuitem" tabindex="-1">Element</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="https://preview.colorlib.com/theme/jobsco/contact.html" role="menuitem" tabindex="-1">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <main>

        <div className="slider-area position-relative ">

            <div className="single-sliders slider-height  gray-bg d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-7">
                            <div className="hero-caption">
                                <span>Easiest way to find a perfect job</span>
                                <h1>Find Your Next Dream Job</h1>

                                <div className="slider-btns">
                                    <a href="https://preview.colorlib.com/theme/jobsco/#" className="btn hero-btn">Looking For a Job?</a>
                                    <a href="https://preview.colorlib.com/theme/jobsco/#" className="hero-btn2">Find Talent</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-tittle">
                <h2>jobs</h2>
            </div>

            <div className="hero-img">
                <img src="assets/./JobBoard HTML-5 Template_files/hero-img.png" alt=""/>
            </div>

            <div className="hero-shape bounce-animate">
                <img src="assets/./JobBoard HTML-5 Template_files/hero-shape.png" alt=""/>
            </div>

            <div className="hero-shape2">
                <img src="assets/./JobBoard HTML-5 Template_files/hero-shape2.png" alt=""/>
            </div>
        </div>


        <section className="top-jobs fix ">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-9 col-md-12">

                        <div className="section-tittle section-tittle3 text-center mb-10">
                            <span>1000+</span>
                            <h2>Browse From Our Top Jobs</h2>
                            <p>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes. Placeholder text commonly used.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0">
                <div className="top-job-slider  slick-initialized slick-slider">

                    <div className="slick-list draggable" style={{padding: "0px 60px;"}}>
                    {/* transform: translate3d("-2928px, 0px, 0px") */}
                        <div className="slick-track" style={{opacity: "1", width: "6222px",}}>
                            <div className="single-top-jobs  slick-slide slick-cloned" data-slick-index="-5" aria-hidden="true" tabIndex="-1" style={{width: "336px"}}>
                                <div className="services-ion">
                                    <img src="assets/./JobBoard HTML-5 Template_files/job-iocn2.svg" alt=""/>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="https://preview.colorlib.com/theme/jobsco/#" tabindex="-1">Design &amp; creatives</a></h5>
                                    <p>The automated process starts as soon as your clothes go into.</p>
                                    <a href="https://preview.colorlib.com/theme/jobsco/#" className="product_btn" tabindex="-1">Apply Now</a>
                                </div>
                                <div className="stickers">
                                    <span>Remote</span>
                                </div>
                            </div>
                            <div className="single-top-jobs  slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" tabindex="-1" style={{width: "336px;"}}>
                                <div className="services-ion">
                                    <img src="assets/./JobBoard HTML-5 Template_files/job-iocn3.svg" alt=""/>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="https://preview.colorlib.com/theme/jobsco/#" tabindex="-1">Design &amp; creatives</a></h5>
                                    <p>The automated process starts as soon as your clothes go into.</p>
                                    <a href="https://preview.colorlib.com/theme/jobsco/#" className="product_btn" tabindex="-1">Apply Now</a>
                                </div>
                                <div className="stickers">
                                    <span>Remote</span>
                                </div>
                            </div>
                            <div className="single-top-jobs  slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" tabindex="-1" style={{width: "336px"}}>
                                <div className="services-ion">
                                    <img src="assets/./JobBoard HTML-5 Template_files/job-iocn4.svg" alt=""/>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="https://preview.colorlib.com/theme/jobsco/#" tabindex="-1">Design &amp; creatives</a></h5>
                                    <p>The automated process starts as soon as your clothes go into.</p>
                                    <a href="https://preview.colorlib.com/theme/jobsco/#" className="product_btn" tabindex="-1">Apply Now</a>
                                </div>
                            </div>
                            <div className="single-top-jobs  slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" tabindex="-1" style={{width: "336px"}}>
                                <div className="services-ion">
                                    <img src="assets/./JobBoard HTML-5 Template_files/job-iocn5.svg" alt=""/>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="https://preview.colorlib.com/theme/jobsco/#" tabindex="-1">Design &amp; creatives</a></h5>
                                    <p>The automated process starts as soon as your clothes go into.</p>
                                    <a href="https://preview.colorlib.com/theme/jobsco/#" className="product_btn" tabindex="-1">Apply Now</a>
                                </div>
                            </div>
                            <div className="single-top-jobs  slick-slide slick-cloned slick-center" data-slick-index="-1" aria-hidden="true" tabindex="-1" style={{width: "336px"}}>
                                <div className="services-ion">
                                    <img src="assets/./JobBoard HTML-5 Template_files/job-iocn2.svg" alt=""/>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="https://preview.colorlib.com/theme/jobsco/#" tabindex="-1">Design &amp; creatives</a></h5>
                                    <p>The automated process starts as soon as your clothes go into.</p>
                                    <a href="https://preview.colorlib.com/theme/jobsco/#" className="product_btn" tabindex="-1">Apply Now</a>
                                </div>
                                <div className="stickers">
                                    <span>Remote</span>
                                </div>
                            </div>
                            <div className="single-top-jobs  slick-slide" data-slick-index="0" aria-hidden="true" tabindex="-1" style={{width: "336px"}}>
                                <div className="services-ion">
                                    <img src="assets/./JobBoard HTML-5 Template_files/job-iocn1.svg" alt=""/>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="https://preview.colorlib.com/theme/jobsco/#" tabindex="-1">Design &amp; creatives</a></h5>
                                    <p>The automated process starts as soon as your clothes go into.</p>
                                    <a href="https://preview.colorlib.com/theme/jobsco/#" className="product_btn" tabindex="-1">Apply Now</a>
                                </div>
                            </div>
                            <div className="single-top-jobs  slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" style={{width: "336px"}}>
                                <div className="services-ion">
                                    <img src="assets/./JobBoard HTML-5 Template_files/job-iocn2.svg" alt=""/>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="https://preview.colorlib.com/theme/jobsco/#" tabindex="-1">Design &amp; creatives</a></h5>
                                    <p>The automated process starts as soon as your clothes go into.</p>
                                    <a href="https://preview.colorlib.com/theme/jobsco/#" className="product_btn" tabindex="-1">Apply Now</a>
                                </div>
                                <div className="stickers">
                                    <span>Remote</span>
                                </div>
                            </div>
                            <div className="single-top-jobs  slick-slide" data-slick-index="2" aria-hidden="true" tabindex="-1" style={{width: "336px"}}>
                                <div className="services-ion">
                                    <img src="assets/./JobBoard HTML-5 Template_files/job-iocn3.svg" alt=""/>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="https://preview.colorlib.com/theme/jobsco/#" tabindex="-1">Design &amp; creatives</a></h5>
                                    <p>The automated process starts as soon as your clothes go into.</p>
                                    <a href="https://preview.colorlib.com/theme/jobsco/#" className="product_btn" tabindex="-1">Apply Now</a>
                                </div>
                                <div className="stickers">
                                    <span>Remote</span>
                                </div>
                            </div>
                            <div className="single-top-jobs  slick-slide" data-slick-index="3" aria-hidden="true" tabindex="-1" style={{width: "336px"}}>
                                <div className="services-ion">
                                    <img src="assets/./JobBoard HTML-5 Template_files/job-iocn4.svg" alt=""/>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="https://preview.colorlib.com/theme/jobsco/#" tabindex="-1">Design &amp; creatives</a></h5>
                                    <p>The automated process starts as soon as your clothes go into.</p>
                                    <a href="https://preview.colorlib.com/theme/jobsco/#" className="product_btn" tabindex="-1">Apply Now</a>
                                </div>
                            </div>
                            <div className="single-top-jobs  slick-slide slick-active" data-slick-index="4" aria-hidden="false" tabindex="-1" style={{width: "336px"}}>
                                <div className="services-ion">
                                    <img src="assets/./JobBoard HTML-5 Template_files/job-iocn5.svg" alt=""/>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="https://preview.colorlib.com/theme/jobsco/#" tabindex="0">Design &amp; creatives</a></h5>
                                    <p>The automated process starts as soon as your clothes go into.</p>
                                    <a href="https://preview.colorlib.com/theme/jobsco/#" className="product_btn" tabindex="0">Apply Now</a>
                                </div>
                            </div>
                            <div className="single-top-jobs  slick-slide slick-current slick-active slick-center" data-slick-index="5" aria-hidden="false" tabindex="0" style={{width: "336px"}}>
                                <div className="services-ion">
                                    <img src="assets/./JobBoard HTML-5 Template_files/job-iocn2.svg" alt=""/>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="https://preview.colorlib.com/theme/jobsco/#" tabindex="0">Design &amp; creatives</a></h5>
                                    <p>The automated process starts as soon as your clothes go into.</p>
                                    <a href="https://preview.colorlib.com/theme/jobsco/#" className="product_btn" tabindex="0">Apply Now</a>
                                </div>
                                <div className="stickers">
                                    <span>Remote</span>
                                </div>
                            </div>
                            <div className="single-top-jobs  slick-slide slick-cloned slick-active" data-slick-index="6" aria-hidden="false" tabindex="-1" style={{width: "336px"}}>
                                <div className="services-ion">
                                    <img src="assets/./JobBoard HTML-5 Template_files/job-iocn1.svg" alt=""/>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="https://preview.colorlib.com/theme/jobsco/#" tabindex="0">Design &amp; creatives</a></h5>
                                    <p>The automated process starts as soon as your clothes go into.</p>
                                    <a href="https://preview.colorlib.com/theme/jobsco/#" className="product_btn" tabindex="0">Apply Now</a>
                                </div>
                            </div>
                            <div className="single-top-jobs  slick-slide slick-cloned slick-active" data-slick-index="7" aria-hidden="false" tabindex="-1" style={{width: "336px"}}>
                                <div className="services-ion">
                                    <img src="assets/./JobBoard HTML-5 Template_files/job-iocn2.svg" alt=""/>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="https://preview.colorlib.com/theme/jobsco/#" tabindex="0">Design &amp; creatives</a></h5>
                                    <p>The automated process starts as soon as your clothes go into.</p>
                                    <a href="https://preview.colorlib.com/theme/jobsco/#" className="product_btn" tabindex="0">Apply Now</a>
                                </div>
                                <div className="stickers">
                                    <span>Remote</span>
                                </div>
                            </div>
                            <div className="single-top-jobs  slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" tabindex="-1" style={{width: "336px"}}>
                                <div className="services-ion">
                                    <img src="assets/./JobBoard HTML-5 Template_files/job-iocn3.svg" alt=""/>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="https://preview.colorlib.com/theme/jobsco/#" tabindex="-1">Design &amp; creatives</a></h5>
                                    <p>The automated process starts as soon as your clothes go into.</p>
                                    <a href="https://preview.colorlib.com/theme/jobsco/#" className="product_btn" tabindex="-1">Apply Now</a>
                                </div>
                                <div className="stickers">
                                    <span>Remote</span>
                                </div>
                            </div>
                            <div className="single-top-jobs  slick-slide slick-cloned" data-slick-index="9" aria-hidden="true" tabindex="-1" style={{width: "336px"}}>
                                <div className="services-ion">
                                    <img src="assets/./JobBoard HTML-5 Template_files/job-iocn4.svg" alt=""/>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="https://preview.colorlib.com/theme/jobsco/#" tabindex="-1">Design &amp; creatives</a></h5>
                                    <p>The automated process starts as soon as your clothes go into.</p>
                                    <a href="https://preview.colorlib.com/theme/jobsco/#" className="product_btn" tabindex="-1">Apply Now</a>
                                </div>
                            </div>
                            <div className="single-top-jobs  slick-slide slick-cloned" data-slick-index="10" aria-hidden="true" tabindex="-1" style={{width: "336px"}}>
                                <div className="services-ion">
                                    <img src="assets/./JobBoard HTML-5 Template_files/job-iocn5.svg" alt=""/>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="https://preview.colorlib.com/theme/jobsco/#" tabindex="-1">Design &amp; creatives</a></h5>
                                    <p>The automated process starts as soon as your clothes go into.</p>
                                    <a href="https://preview.colorlib.com/theme/jobsco/#" className="product_btn" tabindex="-1">Apply Now</a>
                                </div>
                            </div>
                            <div className="single-top-jobs  slick-slide slick-cloned" data-slick-index="11" aria-hidden="true" tabindex="-1" style={{width: "336px"}}>
                                <div className="services-ion">
                                    <img src="assets/./JobBoard HTML-5 Template_files/job-iocn2.svg" alt=""/>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="https://preview.colorlib.com/theme/jobsco/#" tabindex="-1">Design &amp; creatives</a></h5>
                                    <p>The automated process starts as soon as your clothes go into.</p>
                                    <a href="https://preview.colorlib.com/theme/jobsco/#" className="product_btn" tabindex="-1">Apply Now</a>
                                </div>
                                <div className="stickers">
                                    <span>Remote</span>
                                </div>
                            </div>
                        </div>
                    </div>










                </div>
            </div>
        </section>


        <section className="about-area gray-bg section-padding2">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-xl-6 col-lg-7 col-md-10">
                        <div className="support-location-img">
                            <img src="./JobBoard HTML-5 Template_files/about.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-10">
                        <div className="right-caption">

                            <div className="section-tittle section-tittle3">
                                <h2>We Build Lasting Relationships Between Candidates &amp; Businesses</h2>
                            </div>
                            <div className="support-caption">
                                <p className="pera-top">The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes. Placeholder text commonly used.</p>
                                <p className="mb-45">Automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes. Placeholder text commonly used.</p>
                                <a href="https://preview.colorlib.com/theme/jobsco/#" className="btn about-btn">Find Talent</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-tittle">
                    <h2>Talents</h2>
                </div>
            </div>
        </section>


        <section className="job-category section-padding">
            <div className="container">

                <div className="row justify-content-center mb-55">
                    <div className="col-xl-8">
                        <div className="section-tittle section-tittle3 text-center">
                            <h2>Browse From Top Categories</h2>
                            <p>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes. Placeholder text commonly used.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-cat">
                            <div className="cat-icon">
                                <img src="./JobBoard HTML-5 Template_files/top-cat1.svg" alt=""/>
                            </div>
                            <div className="cat-cap">
                                <h5><a href="https://preview.colorlib.com/theme/jobsco/#">Design &amp; creatives</a></h5>
                                <p>The automated process starts as soon as your clothes go into.</p>
                                <a href="https://preview.colorlib.com/theme/jobsco/#" className="view_btn">Browse Job</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-cat">
                            <div className="cat-icon">
                                <img src="./JobBoard HTML-5 Template_files/top-cat2.svg" alt=""/>
                            </div>
                            <div className="cat-cap">
                                <h5><a href="https://preview.colorlib.com/theme/jobsco/#">Finance</a></h5>
                                <p>The automated process starts as soon as your clothes go into.</p>
                                <a href="https://preview.colorlib.com/theme/jobsco/#" className="view_btn">Browse Job</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-cat">
                            <div className="cat-icon">
                                <img src="./JobBoard HTML-5 Template_files/top-cat3.svg" alt=""/>
                            </div>
                            <div className="cat-cap">
                                <h5><a href="https://preview.colorlib.com/theme/jobsco/#">Marketing</a></h5>
                                <p>The automated process starts as soon as your clothes go into.</p>
                                <a href="https://preview.colorlib.com/theme/jobsco/#" className="view_btn">Browse Job</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-cat">
                            <div className="cat-icon">
                                <img src="./JobBoard HTML-5 Template_files/top-cat4.svg" alt=""/>
                            </div>
                            <div className="cat-cap">
                                <h5><a href="https://preview.colorlib.com/theme/jobsco/#">Health/Medical</a></h5>
                                <p>The automated process starts as soon as your clothes go into.</p>
                                <a href="https://preview.colorlib.com/theme/jobsco/#" className="view_btn">Browse Job</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-cat">
                            <div className="cat-icon">
                                <img src="./JobBoard HTML-5 Template_files/top-cat5.svg" alt=""/>
                            </div>
                            <div className="cat-cap">
                                <h5><a href="https://preview.colorlib.com/theme/jobsco/#">Corporate</a></h5>
                                <p>The automated process starts as soon as your clothes go into.</p>
                                <a href="https://preview.colorlib.com/theme/jobsco/#" className="view_btn">Browse Job</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-cat">
                            <div className="cat-icon">
                                <img src="./JobBoard HTML-5 Template_files/top-cat6.svg" alt=""/>
                            </div>
                            <div className="cat-cap">
                                <h5><a href="https://preview.colorlib.com/theme/jobsco/#">Copywriting</a></h5>
                                <p>The automated process starts as soon as your clothes go into.</p>
                                <a href="https://preview.colorlib.com/theme/jobsco/#" className="view_btn">Browse Job</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <div className="testimonial-area">
            <div className="container">
                <div className="testimonial-wrapper">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="h1-testimonial-active dot-style slick-initialized slick-slider slick-dotted">

                                <div className="slick-list draggable">
                                {/* transform: "translate3d(-1526px, 0px, 0px)" */}
                                    <div className="slick-track" style={{opacity: 1, width: "5341 px",}}>
                                        <div className="single-testimonial position-relative slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabindex="-1" style={{width: "763px"}}>
                                            <div className="testimonial-caption">
                                                <img src="./JobBoard HTML-5 Template_files/quotes-sign.png" alt="" className="quotes-sign"/>
                                                <p>"The automated process starts as soon as your clothe go into the machine. This site outcome is gleaming clothe. Placeholder text commonly used. In publishing and graphic.</p>
                                            </div>

                                            <div className="testimonial-founder d-flex align-items-center">
                                                <div className="founder-img">
                                                    <img src="./JobBoard HTML-5 Template_files/testimonial.png" alt=""/>
                                                </div>
                                                <div className="founder-text">
                                                    <span>Robart Brown</span>
                                                    <p>Creative designer at Colorlib</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-testimonial position-relative slick-slide" data-slick-index="0" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide10" aria-describedby="slick-slide-control10" style={{width: "763px"}}>
                                            <div className="testimonial-caption">
                                                <img src="assets/./JobBoard HTML-5 Template_files/quotes-sign.png" alt="" className="quotes-sign"/>
                                                <p>"The automated process starts as soon as your clothe go into the machine. This site outcome is gleaming clothe. Placeholder text commonly used. In publishing and graphic.</p>
                                            </div>

                                            <div className="testimonial-founder d-flex align-items-center">
                                                <div className="founder-img">
                                                    <img src="assets/./JobBoard HTML-5 Template_files/testimonial.png" alt=""/>
                                                </div>
                                                <div className="founder-text">
                                                    <span>Robart Brown</span>
                                                    <p>Creative designer at Colorlib</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-testimonial position-relative slick-slide slick-current slick-active" aria-hidden="false" tabindex="0" role="tabpanel" id="slick-slide11" aria-describedby="slick-slide-control11" style={{width: "763px"}}>
                                            <div className="testimonial-caption"> 
                                                <img src="assets/./JobBoard HTML-5 Template_files/quotes-sign.png" alt="" className="quotes-sign"/>
                                                <p>"The automated process starts as soon as your clothe go into the machine. This site outcome is gleaming clothe. Placeholder text commonly used. In publishing and graphic.</p>
                                            </div>

                                            <div className="testimonial-founder d-flex align-items-center">
                                                <div className="founder-img">
                                                    <img src="assets/./JobBoard HTML-5 Template_files/testimonial.png" alt=""/>
                                                </div>
                                                <div className="founder-text">
                                                    <span>Robart Brown</span>
                                                    <p>Creative designer at Colorlib</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-testimonial position-relative slick-slide" data-slick-index="2" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide12" aria-describedby="slick-slide-control12" style={{width: "763px"}}>
                                            <div className="testimonial-caption">
                                                <img src="./JobBoard HTML-5 Template_files/quotes-sign.png" alt="" className="quotes-sign"/>
                                                <p>"The automated process starts as soon as your clothe go into the machine. This site outcome is gleaming clothe. Placeholder text commonly used. In publishing and graphic.</p>
                                            </div>

                                            <div className="testimonial-founder d-flex align-items-center">
                                                <div className="founder-img">
                                                    <img src="./JobBoard HTML-5 Template_files/testimonial.png" alt=""/>
                                                </div>
                                                <div className="founder-text">
                                                    <span>Robart Brown</span>
                                                    <p>Creative designer at Colorlib</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-testimonial position-relative slick-slide slick-cloned" data-slick-index="3" aria-hidden="true" tabindex="-1" style={{width: "763px"}}>
                                            <div className="testimonial-caption">
                                                <img src="./JobBoard HTML-5 Template_files/quotes-sign.png" alt="" className="quotes-sign"/>
                                                <p>"The automated process starts as soon as your clothe go into the machine. This site outcome is gleaming clothe. Placeholder text commonly used. In publishing and graphic.</p>
                                            </div>

                                            <div className="testimonial-founder d-flex align-items-center">
                                                <div className="founder-img">
                                                    <img src="./JobBoard HTML-5 Template_files/testimonial.png" alt=""/>
                                                </div>
                                                <div className="founder-text">
                                                    <span>Robart Brown</span>
                                                    <p>Creative designer at Colorlib</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-testimonial position-relative slick-slide slick-cloned" data-slick-index="4" aria-hidden="true" tabindex="-1" style={{width: "763px"}}>
                                            <div className="testimonial-caption">
                                                <img src="./JobBoard HTML-5 Template_files/quotes-sign.png" alt="" className="quotes-sign"/>
                                                <p>"The automated process starts as soon as your clothe go into the machine. This site outcome is gleaming clothe. Placeholder text commonly used. In publishing and graphic.</p>
                                            </div>

                                            <div className="testimonial-founder d-flex align-items-center">
                                                <div className="founder-img">
                                                    <img src="./JobBoard HTML-5 Template_files/testimonial.png" alt=""/>
                                                </div>
                                                <div className="founder-text">
                                                    <span>Robart Brown</span>
                                                    <p>Creative designer at Colorlib</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-testimonial position-relative slick-slide slick-cloned" data-slick-index="5" aria-hidden="true" tabindex="-1" style={{width: "763px"}}>
                                            <div className="testimonial-caption">
                                                <img src="./JobBoard HTML-5 Template_files/quotes-sign.png" alt="" className="quotes-sign"/>
                                                <p>"The automated process starts as soon as your clothe go into the machine. This site outcome is gleaming clothe. Placeholder text commonly used. In publishing and graphic.</p>
                                            </div>

                                            <div className="testimonial-founder d-flex align-items-center">
                                                <div className="founder-img">
                                                    <img src="./JobBoard HTML-5 Template_files/testimonial.png" alt=""/>
                                                </div>
                                                <div className="founder-text">
                                                    <span>Robart Brown</span>
                                                    <p>Creative designer at Colorlib</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                                <ul className="slick-dots" style={{display: "block"}} role="tablist">
                                    <li className="" role="presentation"><button type="button" role="tab" id="slick-slide-control10" aria-controls="slick-slide10" aria-label="1 of 3" tabindex="-1">1</button></li>
                                    <li role="presentation" className="slick-active"><button type="button" role="tab" id="slick-slide-control11" aria-controls="slick-slide11" aria-label="2 of 3" tabindex="0" aria-selected="true">2</button></li>
                                    <li role="presentation" className=""><button type="button" role="tab" id="slick-slide-control12" aria-controls="slick-slide12" aria-label="3 of 3" tabindex="-1">3</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="t-shape">
                        <img src="./JobBoard HTML-5 Template_files/testimonial-shape.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>

    </main>
    <footer>
        <div className="footer-area footer-padding gray-bg">
            <div className="footer-wrapper ">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-caption mb-50">
                                <div className="single-footer-caption mb-30">

                                    <div className="footer-logo mb-25">
                                        <a href="https://preview.colorlib.com/theme/jobsco/index.html"><img src="./JobBoard HTML-5 Template_files/logo2_footer.png" alt=""/></a>
                                    </div>
                                    <div className="footer-tittle">
                                        <div className="footer-pera">
                                            <p>The automated process starts as soon as your clothes go into the machine.The outcome is gleaming clothes.</p>
                                        </div>
                                    </div>
                                    <div className="footer-social">
                                        <a href="https://preview.colorlib.com/theme/jobsco/#"><i className="fab fa-instagram"></i></a>
                                        <a href="https://bit.ly/sai4ull"><i className="fab fa-facebook-f"></i></a>
                                        <a href="https://preview.colorlib.com/theme/jobsco/#"><i className="fab fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-tittle">
                                    <h4>Useful links</h4>
                                    <ul>
                                        <li><a href="https://preview.colorlib.com/theme/jobsco/#">Design &amp; creatives</a></li>
                                        <li><a href="https://preview.colorlib.com/theme/jobsco/#">Telecommunication</a></li>
                                        <li><a href="https://preview.colorlib.com/theme/jobsco/#">Restaurant</a></li>
                                        <li><a href="https://preview.colorlib.com/theme/jobsco/#">Programing</a></li>
                                        <li><a href="https://preview.colorlib.com/theme/jobsco/#">Architecture</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-tittle">
                                    <h4>Subscribe Newsletter</h4>
                                    <p>Subscribe newsletter to get updates about new jobs.</p>
                                </div>

                                <div className="footer-form">
                                    <div id="mc_embed_signup">
                                        <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscribe_form relative mail_part" novalidate="true">
                                            <input type="email" name="EMAIL" id="newsletter-form-email" placeholder="  Enter your email"/>
                                            <div className="form-icon">
                                                <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm">
Subscribe
</button>
                                            </div>
                                            <div className="mt-10 info"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="footer-border">
                            <div className="row d-flex align-items-center">
                                <div className="col-xl-12 ">
                                    <div className="footer-copy-right text-center">
                                        <p>Copyright ©
                                            <script>
                                                document.write(new Date().getFullYear());
                                            </script>2023 All rights reserved | This template is made with <i className="fa fa-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com/" target="_blank" rel="nofollow noopener">Colorlib</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <div id="back-top" style={{display: "block"}}>
        <a title="Go to Top" href="https://preview.colorlib.com/theme/jobsco/#"> <i className="fas fa-level-up-alt"></i></a>
    </div>


   
    <script defer="" src="./JobBoard HTML-5 Template_files/v52afc6f149f6479b8c77fa569edb01181681764108816" integrity="sha512-jGCTpDpBAYDGNYR5ztKt4BQPGef1P0giN6ZGVUi835kFF88FOmmn8jBQWNgrNd8g/Yu421NdgWhwQoaOPFflDw==" data-cf-beacon="{&quot;rayId&quot;:&quot;7c084f97ca3e7a13&quot;,&quot;token&quot;:&quot;cd0b4b3a733644fc843ef0b185f98241&quot;,&quot;version&quot;:&quot;2023.4.0&quot;,&quot;si&quot;:100}"
        crossorigin="anonymous"></script>


    </>
  )
}

export default Home
