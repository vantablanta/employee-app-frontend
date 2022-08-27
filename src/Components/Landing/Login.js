import React from "react";
import {Link} from "react-router-dom"


export default function Login(){

    return (
        <>
        <div className="services:after" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-7 align-self-center pt-5 mt-5">
                                <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                                        <div className="mt-5 form-shadow">
                                            <div className="col-lg-12 pt-5">
                                                <h1 className="text-center">LOGIN</h1>
                                            </div>
                                            <form className="p-5">
                                                <div className="form-group p-2 m-2">
                                                    <input type="email" className="form-control" id="" aria-describedby="emailHelp"
                                                        placeholder="Enter email" />
                                                </div>
                                                <div class="form-group p-2  m-2">
                                                    <input type="password" className="form-control" id="" placeholder="Password" />
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div class="form-group p-2  m-2">
                                                            <input type="checkbox" className="form-check-input" id="" />
                                                            <span className="ps-1">Remember Me</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 float-end">
                                                        <div class="form-group p-2  m-2">
                                                            Forgot Password ? <a href="/">Reset </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                
                                                <button type="submit" className="auth-button  m-2 rounded-pill">Submit</button>
                                            </form>

                                            <p className="ps-5 pb-5">Dont have an account? <Link className="fw-bold"to="/signup">Signup</Link></p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-5 pt-5 mt-5">
                                <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <img src={require("../../assets/images/auth-login.png")} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}