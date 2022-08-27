import React from "react";


export default function HomePage(){

return(
    <>

        <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6 align-self-center">
                                <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h2>Manage Your Employees</h2>
                                            <p>We are a leading provider in the industry </p>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="white-button first-button scroll-to-section">
                                                <a href="/contact">Free Quote <i className="fab fa-apple"></i></a>
                                            </div>
                                            <div class="white-button scroll-to-section">
                                                <a href="/contact">Contact Us <i className="fab fa-google-play"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <img src={require("../../assets/images/slider-dec.png")} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="services" className="services section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                            <h4>Amazing <em>Services &amp; Features</em> for you</h4>
                            <img src={require("../../assets/images/heading-line-dec.png")} alt="" />
                            <p>Lorem ipsum dolor consectetur adipiscing elit sedder williamsburg photo booth quinoa and fashion axe.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="service-item first-service">
                            <div className="icon"></div>
                            <h4>KPI Tracking</h4>
                            <p>Lorem ipsum dolor consectetur adipiscing elit sedder williamsburg photo booth quinoa and fashion axe.</p>
                            <div className="text-button">
                                <a href="/">Read More <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="service-item second-service">
                            <div className="icon"></div>
                            <h4>Leave Administration</h4>
                            <p>Lorem ipsum dolor consectetur adipiscing elit sedder williamsburg photo booth quinoa and fashion axe..</p>
                            <div className="text-button">
                                <a href="/">Read More <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="service-item third-service">
                            <div className="icon"></div>
                            <h4>Claims Management</h4>
                            <p>Lorem ipsum dolor consectetur adipiscing elit sedder williamsburg photo booth quinoa and fashion axe.</p>
                            <div className="text-button">
                                <a href="/">Read More <i class="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="service-item fourth-service">
                            <div className="icon"></div>
                            <h4>24/7 Help &amp; Support</h4>
                            <p>Lorem ipsum dolor consectetur adipiscing elit sedder williamsburg photo booth quinoa and fashion axe.</p>
                            <div className="text-button">
                                <a href="/">Read More <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer id="newsletter">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-heading">
                            <h4>Join our mailing list to receive the latest news </h4>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-3">
                        <form id="search" action="#" method="GET">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <fieldset>
                                        <input type="address" name="address" class="email" placeholder="Email Address..." autocomplete="on" required />
                                    </fieldset>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <fieldset>
                                        <button type="submit" className="main-button">Subscribe Now <i class="fa fa-angle-right"></i></button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="footer-widget">
                            <h4>Contact Us</h4>
                            <p>Nairobi Kenya</p>
                            <p><a href="/">254-730-020-0340</a></p>
                            <p><a href="/">info@company.co</a></p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer-widget">
                            <h4>About Us</h4>
                            <ul>
                                <li><a href="/">About Us </a></li>
                                <li><a href="/">Get Started</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer-widget">
                            <h4>About Our Company</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="copyright-text">
                            <p>Copyright © 2022 IBusiness. All Rights Reserved. </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
)

}