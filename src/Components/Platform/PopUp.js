import React from 'react'; 
import {Popup} from 'devextreme-react/popup';
import DataGrid, { Column} from 'devextreme-react/data-grid';

//   const renderContent = () =>  {
//       return (
//          <div>
             
//         <DataGrid dataSource={this.notifications}>
//                      {/* <Column dataField="ID" dataType="string" headerFilter={true} allowSorting={true}/> */}
//                      <Column dataField="Notification" dataType="string" allowFiltering={true} headerFilter={true} />
//                      {/* <Column dataField="Count" dataType="string" allowFiltering={true} headerFilter={true} /> */}

//         </DataGrid>
//         </div>
     
//     )
//  }
 
class PopUp extends React.Component {
    constructor(props) {
        super(props);
 
        this.state = {
            isPopupVisible: true,
            notifications : []
        };
 
        this.onHiding = this.onHiding.bind(this);
    }

    refreshNotifications() {
        fetch('https://localhost:7041/api/Notification')
            .then(response => response.json())
            .then(data => {
                this.setState({ notifications: data });
            }, (err) => {
                console.log(err)
            });
    }

    renderContent = () =>  {
        return (
           <div>
                
          <DataGrid dataSource={this.notifications}>
                       {/* <Column dataField="ID" dataType="string" headerFilter={true} allowSorting={true}/> */}
                       <Column dataField="Notification" dataType="string" allowFiltering={true} headerFilter={true} />
                       {/* <Column dataField="Count" dataType="string" allowFiltering={true} headerFilter={true} /> */}
   
          </DataGrid>
           </div>
        
       )
    }
 
    onHiding() {
        this.setState({
            isPopupVisible: false
        });
    }
 
    render() {
  
        return (
            <div>
                <Popup
                visible={this.state.isPopupVisible}
                title="Your Notifications"
                contentRender={this.renderContent}
                onHiding={this.onHiding}
                position="right bottom"
                width={300}
                height={300} 
                
                
            />
           
            </div>
           

            
        );
    }
}
 

 
export default PopUp;
