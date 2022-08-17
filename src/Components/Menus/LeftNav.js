// import Menu, { Item } from 'devextreme-react/menu';
// import CheckBox from 'devextreme-react/check-box';
 

// function TopMenu() {
//     const [toggle, setToggle] = useState(false);
 
//     const onValueChanged = useCallback((e) => {
//         setToggle(e.value);
//     }, []);
//     return (
//         <div>








//             {/* <Menu className="container-fluid top-menu" adaptivityEnabled={toggle} >
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
//             </Menu> */}
//         </div>
//     )
// }

// const openedStateModes = ["push", "shrink", "overlap"];
// const positions = ["left", "right"];
// const revealModes = ["slide", "expand"];


import React from "react";

import Drawer from "devextreme-react/drawer";
import Toolbar from "devextreme-react/toolbar";
import NavigationList from "./NavigationList.js";



class TopMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      opened: true,
      openedStateMode: "shrink",
      revealMode: "slide",
      position: "left"
    };

    this.toolbarItems = [
      {
        widget: "dxButton",
        location: "before",
        options: {
          icon: "menu",
          onClick: () => this.setState({ opened: !this.state.opened })
        }
      }
    ];

    this.onOpenedStateModeChanged = this.onOpenedStateModeChanged.bind(this);
    this.onRevealModeChanged = this.onRevealModeChanged.bind(this);
    this.onPositionChanged = this.onPositionChanged.bind(this);
    this.onPositionChanged = this.onPositionChanged.bind(this);
    this.onOutsideClick = this.onOutsideClick.bind(this);
  }

  onOpenedStateModeChanged({ value }) {
    this.setState({ openedStateMode: value });
  }

  onRevealModeChanged({ value }) {
    this.setState({ revealMode: value });
  }

  onPositionChanged({ value }) {
    this.setState({ position: value });
  }

  onOutsideClick() {
    this.setState({ opened: false });
  }

  render() {
    const { opened, openedStateMode, position, revealMode } = this.state;

    return (
      <div>
        <Toolbar items={this.toolbarItems} />
        <Drawer
          opened={opened}
          openedStateMode={openedStateMode}
          position={position}
          revealMode={revealMode}
          component={NavigationList}
          closeOnOutsideClick={this.onOutsideClick}
        >
        </Drawer>
      </div>
    );
  }
}


export default TopMenu;