import React from "react";
import {Link} from "react-router-dom"
export default function LandingNav(){

    return(

        <>
            <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* <!-- ***** Logo Start ***** --> */}
                                <a href="index.html" className="logo">
                                    <img src={require("../../assets/images/logo.png")} alt="Chain App Dev" />
                                </a>
                                {/* <!-- ***** Logo End ***** --> */}

                                {/* <!-- ***** Menu Start ***** --> */}
                                <ul className="nav">
                                    <li className="scroll-to-section"><Link to="/">Home</Link></li>
                                    <li className="scroll-to-section"><Link to="/login">Login</Link></li>
                                    <li className="scroll-to-section"><Link to="/signup">Signup</Link></li>
                                    <li className="scroll-to-section"><Link to="/about">About Us</Link></li>
                                    <li className="scroll-to-section"><a href="/user-manual">User Manual</a></li>
                                    <li><div className="gradient-button"><a id="modal_trigger" href="#modal">Get Started</a></div>
                                    </li>
                                </ul>
                                <a className='menu-trigger' href="/">
                                    <span>Menu</span>
                                </a>
                                {/* <!-- ***** Menu End ***** --> */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}