import React from "react";
import Menu, { Item } from 'devextreme-react/menu';

function TopMenu() {
    return (
        <div>
            <h6 style={titleStyle}>Sample Customer</h6>
            <Menu className="top-menu"    adaptivityEnabled={true}>
                <Item icon="home" className="text-light"> 
                    <p className="top-menu-item">General Accounting</p>
                </Item>
                <Item icon="home" className="text-light">
                    <p className="top-menu-item">Procure To Pay</p>
                </Item>
                <Item icon="home" className="text-light">
                    <p className="top-menu-item">Order to Cash</p>
                </Item>
                <Item icon="home" className="text-light">
                    <p className="top-menu-item">Performance Management</p>
                </Item>
                <Item icon="home" className="text-light">
                    <p className="top-menu-item">Project Administration</p>
                </Item>
                <Item icon="home" className="text-light">
                    <p className="top-menu-item">System Administration</p>
                </Item>
                <Item icon="home" className="text-light">
                    <p className="top-menu-item">Procure to Pay</p>
                </Item>
                <Item icon="home" className="text-light">
                    <p className="top-menu-item">Inventory Management</p>
                </Item>
                <Item icon="home" className="text-light">
                    <p className="top-menu-item">Signout</p>
                </Item>
            </Menu>
        </div>
    )
}
const titleStyle = {
    color: "red",
    paddingBottom: 10,
    paddingTop: 10,
}


export default TopMenu;