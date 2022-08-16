import React from "react";
import Menu, { Item } from 'devextreme-react/menu';
import AddForm from "./AddForm";

function SubMenu() {
    const addClick = ()=>{    
        console.log("CLicked")
    }

    return (
        <div>
            <div id="container-fluid">
                <p className="page-heading rounded ps-2">Individual WorkPlan</p>
                <Menu className="sub-menu rounded">
                    <Item>
                        <p className="sub-menu-item" >Find</p>
                    </Item>
                    <Item icon="home" className="text-light">
                        <p className="sub-menu-item">Delete</p>
                    </Item>
                    <Item icon="home" className="text-light">
                        <p className="sub-menu-item">Export</p>
                    </Item>
                    <Item icon="home" className="text-light">
                        <p className="sub-menu-item">Print Report</p>
                    </Item>
                    <Item icon="home" className="text-light">
                        <p className="sub-menu-item">Close</p>
                    </Item>
                    <Item icon="home" className="text-light">
                        <p className="sub-menu-item">Help</p>
                    </Item>
                </Menu>
            </div>

            <AddForm/>
        </div>
    )
}


export default SubMenu;