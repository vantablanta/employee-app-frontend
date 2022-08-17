import React, { useState } from 'react';


import {Popup} from 'devextreme-react/popup';

// import { Button } from 'devextreme-react/button';

 const renderContent = () =>  {
     return (
        <div>
             <p> You have not updated your KPIs for the last three months</p>
             <p> You have not updated your Tmesheets for the last three months</p>
             <p> Some of your subordinates have not completed workplans for the current financial year</p>

        </div>
     
    )
}
 
class PopUp extends React.Component {
    constructor(props) {
        super(props);
 
        this.state = {
            isPopupVisible: true
        };
 
        this.onHiding = this.onHiding.bind(this);
    }
 
    onHiding() {
        this.setState({
            isPopupVisible: false
        });
    }
 
    render() {
        return (
           
            <Popup
                visible={this.state.isPopupVisible}
                title="Your Notificatins"
                contentRender={renderContent}
                onHiding={this.onHiding}
                position="bottom"
                width={300}
                height={300} 
                
                
            />
        );
    }
}
 

 
export default PopUp;