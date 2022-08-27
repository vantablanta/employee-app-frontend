import React from "react";
import  {Link } from "react-router-dom"

export default function Signup(){

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
                                                <h1 className="text-center">SIGNUP</h1>
                                            </div>
                                            <form class="row g-3 p-4">
                                                <div class="col-md-6 pt-2 pb-3">
                                                    <input type="name" class="form-control" id="" placeholder="Enter name"/>
                                                </div>
                                                <div class="col-md-6 pt-2 pb-3">
                                                    <input type="email" class="form-control" id="" placeholder="Enter email"/>
                                                </div>
                                                <div class="col-md-6 pt-2 pb-3">
                                                    <input type="name" class="form-control" id="" placeholder="Enter job title"/>
                                                </div>
                                                <div class="col-md-6 pt-2 pb-3">
                                                    <input type="email" class="form-control" id="" placeholder="Enter organization"/>
                                                </div>
                                                <div class="col-md-4 pt-2 pb-3">
                                                    <input type="telephone" class="form-control" id="inputAddress" placeholder="Enter phone number"/>
                                                </div>
                                                <div class="col-md-4 pt-2 pb-3">
                                                    <select id="inputState" class="form-select">
                                                        <option selected>Choose Country...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-4 pt-2 pb-3">
                                                    <input type="text" class="form-control" id="" placeholder="Enter Zip"/>
                                                </div>
                                                <div class="col-md-6 pt-2 pb-3">
                                                    <input type="email" class="form-control" id="" placeholder="Enter passsword"/>
                                                </div>
                                                <div class="col-md-6 pt-2 pb-3">
                                                    <input type="email" class="form-control" id="" placeholder="Confirm Password"/>
                                                </div>
                                                <div class="col-12 pt-2 pb-3">
                                                    <button type="submit" class="auth-button m-2 rounded-pill">Sign in</button>
                                                    <p className="pb-5 float-end">Already have an account? <Link className="fw-bold"to="/login">Login</Link></p>
                                                </div>
                                            </form>
                                           
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-5 pt-5 mt-5">
                                <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <img src={require("../../assets/images/auth-signup.png")} alt="" />
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