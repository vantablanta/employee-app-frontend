import React from "react";
import Drawer from "devextreme-react/drawer";
import Toolbar from "devextreme-react/toolbar";
import NavigationList from "./NavigationList.js";
import Employee from "../Employee.js";
import TopMenu from "./TopMenu.js";


class LeftNav extends React.Component {
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
        <div className="container-fluid">
            <div className="row">
            <div className="top-menu">
                    <TopMenu/>
                </div>
                <div className="">
                    <Toolbar items={this.toolbarItems} />
                </div>
            </div>
        </div>
        <Drawer opened={opened}openedStateMode={openedStateMode}position={position}  revealMode={revealMode} component={NavigationList} 
            closeOnOutsideClick={this.onOutsideClick} >    
            <div className="ps-3">
                <Employee/>
            </div>
        </Drawer>
        
      </div>
    );
  }
}


export default LeftNav;