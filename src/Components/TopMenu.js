import React from "react";
import Menu, { Item } from 'devextreme-react/menu';

function TopMenu() {
    return (
        <div>
            <h6 style={titleStyle}>Sample Customer</h6>
            <Menu className="top-menu">
                <Item icon="home" className="text-light">
                    <p className="top-menu-item">Home Page</p>
                </Item>
                <Item icon="home" className="text-light">
                    <p className="top-menu-item">Performance Management</p>
                </Item>
                <Item icon="home" className="text-light">
                    <p className="top-menu-item">Enterprise Developement</p>
                </Item>
                <Item icon="home" className="text-light">
                    <p className="top-menu-item">Projects Administration</p>
                </Item>
                <Item icon="home" className="text-light">
                    <p className="top-menu-item">e-Services</p>
                </Item>
                <Item icon="home" className="text-light">
                    <p className="top-menu-item">Asset Management</p>
                </Item>
                <Item icon="home" className="text-light">
                    <p className="top-menu-item">Procure to Pay</p>
                </Item>
                <Item icon="home" className="text-light">
                    <p className="top-menu-item">Inventory Management</p>
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