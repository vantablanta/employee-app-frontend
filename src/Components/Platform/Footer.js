import React, {Component} from "react";

class Footer extends Component{
    render(){
        return (
            <div className="footer">    
                <hr className="yellow-footer-line"/>
                <div className="footer-display">
                    <p className="text-center">
                        <small className="footer-text">
                            <a href="/" className="text-light"> Privacy Policy </a>
                            <span className="fs-5 text-light p-1">.</span>
                            <a href="/" className="text-light"> Terms & Conditions</a>
                        </small>    
                    </p>
                </div>        
            </div>
        )
    }
}

export default Footer;