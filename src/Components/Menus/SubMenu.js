import React from "react";
import Menu, { Item } from 'devextreme-react/menu';
import AddForm from "../AddForm";

function SubMenu() {

    return (
        <div>
            <div id="container-fluid">
                <p className="page-heading rounded ps-2">Individual WorkPlan</p>
                <Menu className="sub-menu rounded">
                    <Item className="text-light d-flex">
                        <p className="sub-menu-item" >
                            <img src={require('../../assets/add.png')} alt="" />
                            <span>Add</span>
                        </p>
                    </Item>
                    <Item className="text-light d-flex">
                        <p className="sub-menu-item" >
                            <img src={require('../../assets/inquiries.png')} alt="" />
                            <span>Find</span>
                        </p>
                    </Item>
                    <Item icon="home" className="text-light d-flex">
                        <p className="sub-menu-item">
                            <img src={require('../../assets/delete.png')} alt=""  />
                           <span>Delete</span>
                        </p>
                    </Item>
                    <Item icon="home" className="text-light d-flex">
                        <p className="sub-menu-item">
                            <img src={require('../../assets/export.png')} alt="" />
                            <span>Export</span>
                        </p>
                    </Item>
                    <Item icon="home" className="text-light d-flex">
                        <p className="sub-menu-item">
                            <img src={require('../../assets/print.png')} alt="" />
                            <span>Print Report</span>
                        </p>
                    </Item>
                    <Item icon="home" className="text-light d-flex">
                        <p className="sub-menu-item">
                            <span>Close</span>
                        </p>
                    </Item>
                    <Item icon="home" className="text-light d-flex">
                        <p className="sub-menu-item">
                            <img src={require('../../assets/help.png')} alt="" />
                            <span>Help</span>
                        </p>
                    </Item>
                </Menu>
            </div>

            <AddForm/>
        </div>
    )
}


export default SubMenu;