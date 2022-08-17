import React from "react";


function TopMenu() {
    return (
        <div>    
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


export default TopMenu;