import React from 'react';
import List from 'devextreme-react/list.js';
import { navigation } from '../../data';

class NavigationList extends React.PureComponent {
  render() {
    return (
      <div className="list"  style={{width: "200px"}} >
        <img src={require('../../assets/profiles/person.jpg')} alt="" className='img-fluid' />
        <List
          dataSource={navigation}
          hoverStateEnabled={true}
          activeStateEnabled={true}
          focusStateEnabled={true}
          className="panel-list dx-theme-accent-as-background-color" />
      </div>
    );
  }
}

export default NavigationList;


// style={{width: "200px", height: "650px"}}