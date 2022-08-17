import React, { Component } from "react";
import Menu, {Item} from "devextreme-react/menu";

export class LeftNav extends Component {
    constructor(props) {
        super(props);
        this.menus = ["Menu 1", "Menu 2"];
        this.state = {
          selectedItems: [this.menus[0]],
          multiple: false,
          collapsible: false,
          animationDuration: 300,
        };

    }
    render() {
        return (
            <div>
                <div className="profile">
                <img src={require('../../assets/profiles/person.jpg')} alt="" className="w-100 mt-1" />
                </div>
                <hr />
                <div className="menu">
                <Menu orientation="vertical" adaptivityEnabled={true}>
                    <Item>Project Initiation</Item>
                    <Item>Project Planning</Item>
                    <Item>Project Planning</Item>
                    <Item >Project Closure</Item>
                    <Item>M&E DashBoards</Item>
                    <Item>Reporting and Analysis</Item>
                    <Item>Master Setups</Item>
                </Menu>
                </div>
            </div>
        )
    }
}


export default LeftNav;