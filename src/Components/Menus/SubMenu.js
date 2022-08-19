import React from "react";
import Menu, { Item } from 'devextreme-react/menu';
import AddForm from "../AddForm";
import {} from "react-icons/fa"

function SubMenu() {

    return (
        <div>
            <div id="container-fluid">
                <p className="page-heading rounded ps-2">Individual WorkPlan</p>
                <Menu className="sub-menu rounded"  adaptivityEnabled={true}  inn>
                    <Item className="text-light d-flex">
                        <p className="sub-menu-item" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <img src={require('../../assets/plus.png')} alt="" className="sub-menu-icon" />
                            <span>Add</span>
                        </p>
                    </Item>
                    <Item className="text-light d-flex">
                        <p className="sub-menu-item" >
                            <img src={require('../../assets/find.png')} alt="" className="sub-menu-icon" />
                            <span>Find</span>
                        </p>
                    </Item>
                    <Item icon="home" className="text-light d-flex">
                        <p className="sub-menu-item">
                            <img src={require('../../assets/cancel.png')} alt=""className="sub-menu-icon" />
                           <span>Delete</span>
                        </p>
                    </Item>
                    <Item icon="home" className="text-light d-flex">
                        <p className="sub-menu-item">
                            <img src={require('../../assets/export.png')} alt="" className="sub-menu-icon"/>
                            <span>Export</span>
                        </p>
                    </Item>
                    <Item icon="home" className="text-light d-flex">
                        <p className="sub-menu-item">
                            <img src={require('../../assets/printer.png')} alt="" className="sub-menu-icon" />
                            <span>Print Report</span>
                        </p>
                    </Item>
                    <Item icon="home" className="text-light d-flex">
                        <p className="sub-menu-item">
                        <img src={require('../../assets/close.png')} alt="" className="sub-menu-icon"/>
                            <span>Close</span>
                        </p>
                    </Item>
                    <Item icon="home" className="text-light d-flex">
                        <p className="sub-menu-item">
                            <img src={require('../../assets/question.png')} alt=""  className="sub-menu-icon"/>
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