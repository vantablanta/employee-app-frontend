import React, { useState, useCallback } from 'react';
import Menu, { Item } from 'devextreme-react/menu';
import CheckBox from 'devextreme-react/check-box';
 

function TopMenu() {
    const [toggle, setToggle] = useState(false);
 
    const onValueChanged = useCallback((e) => {
        setToggle(e.value);
    }, []);
    return (
        <div>
            <Menu className="top-menu" adaptivityEnabled={toggle} >
                <Item icon="home" className="text-light">
                    <h6 className="top-menu-item">Customer Name</h6>
                </Item>
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
                <CheckBox onValueChanged={onValueChanged} />
            </Menu>
        </div>
    )
}


export default TopMenu;