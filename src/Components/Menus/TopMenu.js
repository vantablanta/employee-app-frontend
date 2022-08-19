import React, {Component} from "react";
import Menu from "devextreme-react/menu";
import {menus} from "../../data";

class TopMenu extends Component {
  constructor(props) {
    super(props);
    this.menus = menus;
    this.showSubmenuModes = [
      {
        name: "onHover",
        delay: { show: 0, hide: 500 }
      },
      {
        name: "onClick",
        delay: { show: 0, hide: 300 }
      }
    ];
    this.state = {
      showFirstSubmenuModes: this.showSubmenuModes[1],
      orientation: "horizontal",
      hideSubmenuOnMouseLeave: false,
      currentProduct: null
    };
    this.itemClick = this.itemClick.bind(this);
    this.showSubmenuModeChanged = this.showSubmenuModeChanged.bind(this);
    this.orientationChanged = this.orientationChanged.bind(this);
    this.hideSubmenuOnMouseLeaveChanged = this.hideSubmenuOnMouseLeaveChanged.bind(
      this
    );
  }

  render() {
    const {
      showFirstSubmenuModes,
      orientation,
      hideSubmenuOnMouseLeave
    } = this.state;
    return (
        <div className="top-menu">
            <h3 className="float-start">Customer Name</h3>
            <div className="d-flex justify-content-end">
                {/* <form className="d-flex me-5">
                    <input className="form-control mt-1 mb-1" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-sm btn-outline-primary ms-1 text-light" type="submit"><FaSearch/></button>
                </form> */}
                <div className="mt-1">
                    <Menu
                      dataSource={this.menus}
                      displayExpr="name"
                      showFirstSubmenuMode={showFirstSubmenuModes}
                      orientation={orientation}
                      hideSubmenuOnMouseLeave={hideSubmenuOnMouseLeave}
                      onItemClick={this.itemClick}
                      // adaptivityEnabled={true}
                     />
                </div>
            </div>
        </div>
    );
  }

  itemClick(e) {
    if (e.itemData.price) {
      this.setState({
        currentProduct: e.itemData
      });
    }
  }

  showSubmenuModeChanged(e) {
    this.setState({
      showFirstSubmenuModes: e.value
    });
  }

  orientationChanged(e) {
    this.setState({
      orientation: e.value
    });
  }

  hideSubmenuOnMouseLeaveChanged(e) {
    this.setState({
      hideSubmenuOnMouseLeave: e.value
    });
  }
}

export default TopMenu;





















// import Menu, { Item } from 'devextreme-react/menu';
// import CheckBox from 'devextreme-react/check-box';
// import React, {useCallback, useState} from "react";

// function TopMenu() {
//     const [toggle, setToggle] = useState(false);
 
//     const onValueChanged = useCallback((e) => {
//         setToggle(e.value);
//     }, []);
//     return (
//         <div>
//             <Menu className="container-fluid top-menu" adaptivityEnabled={toggle} >
//                 <Item icon="home" className="text-light">
//                     <h6 className="top-menu-item">Customer Name</h6>
//                 </Item>
//                 <Item icon="home" className="text-light">
//                     <p className="top-menu-item">General Accounting</p>
//                 </Item>
//                 <Item icon="home" className="text-light">
//                     <p className="top-menu-item">Procure To Pay</p>
//                 </Item>
//                 <Item icon="home" className="text-light">
//                     <p className="top-menu-item">Order to Cash</p>
//                 </Item>
//                 <Item icon="home" className="text-light">
//                     <p className="top-menu-item">Performance Management</p>
//                 </Item>
//                 <Item icon="home" className="text-light">
//                     <p className="top-menu-item">Project Administration</p>
//                 </Item>
//                 <Item icon="home" className="text-light">
//                     <p className="top-menu-item">System Administration</p>
//                 </Item>
//                 <Item icon="home" className="text-light">
//                     <p className="top-menu-item">Procure to Pay</p>
//                 </Item>
//                 <Item icon="home" className="text-light">
//                     <p className="top-menu-item">Inventory Management</p>
//                 </Item>
//                 <Item icon="home" className="text-light">
//                     <p className="top-menu-item">Signout</p>
//                 </Item>
//                 <CheckBox onValueChanged={onValueChanged} />
//             </Menu>
//         </div>
//     )
// }


// export default TopMenu;

