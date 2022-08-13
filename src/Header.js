import React from "react";

function Header(props){
    return(
        <div className="container">
            <header>
                <h1 style={headerStyles}>{props.title}</h1>
            </header>
        </div>
    )
}


// CSS IN JS 
const headerStyles = {
    color: "blue",
    fontWeight: 600
}


export default Header