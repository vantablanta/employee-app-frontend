import React from 'react';
import List from 'devextreme-react/list.js';
import { navigation } from '../../../data';


class NavigationList extends React.PureComponent {
  render() {
    return (
      <div className="list" style={{width: "200px", height: "650px"}}>
        <img src={require('../../../assets/profiles/person.jpg')} alt="" className='img-fluid pt-1 pb-1' />
        <List
          dataSource={navigation}
          hoverStateEnabled={true}
          activeStateEnabled={true}
          focusStateEnabled={true}
          className="panel-list left-nav" 
           />
      </div>
    );
  }
}

export default NavigationList;

