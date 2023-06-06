import React from 'react'
import {Link} from "react-router-dom";
const Header = () => {
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


    </>
  )
}

export default Header
