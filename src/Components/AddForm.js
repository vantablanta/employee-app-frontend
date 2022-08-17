import React, { Component } from 'react';
import Form, {SimpleItem, TabbedItem, Tab, TabPanelOptions} from 'devextreme-react/form';
import DateBox from 'devextreme-react/date-box';
import 'devextreme-react/text-area';



export class AddForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employees: [],
            EmployeeName: "",
            Department: "",
            DateOfJoining: new DateBox(),
            EmployeeCode: 0,
            CompCode: 0,
            CostCenter: 0,   
        }
    }
    
    handleSubmit(event) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ 
                EmployeeName: this.state.EmployeeName,
                Department: this.state.Department,
                DateOfJoining: this.state.DateOfJoining,
                EmployeeCode: this.state.EmployeeCode, 
                CompCode: this.state.CompCode, 
                CostCenter: this.state.CostCenter 
            })
        };
        fetch('https://localhost:7041/api/Employee', requestOptions)
            .then( response =>{
                response.json()
            })
            .then((result) => {
                console.log(result)
            }, (error) => {
                console.log(error)
            })
    

        event.preventDefault()

}

    render() {
        return (
            <div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-menu d-flex justify-content-between ps-2 pt-2 pe-2">
                                <p className='ms-1'>
                                    <img src={require('../assets/admin.png')} alt=""  />
                                    <span className='ps-1 modal-text-span'>Individual WorkPlan</span>
                                </p>
                                <button type="button" className="btn-close me-1" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="modal-header">
                                    <h5 className="modal-title">Create Your Individual WorkPlan</h5>
                                    <p>Annual Individual Workplan-[Cascaded from Departmental Objectives]</p>
                                </div>
                                <div className="mb-3">
                                    <div className="p-2 bd-highlight">
                                        <form onSubmit={this.handleSubmit}>                                        
                                            <Form colCount={1}>
                                                    <TabbedItem>
                                                        <TabPanelOptions />
                                                        <Tab title="Personal Info">
                                                            <SimpleItem dataField="EmployeeName" />
                                                            <SimpleItem dataField="Department" />
                                                            <SimpleItem dataField="DateOfJoining" dataType="date" />
                                                            <SimpleItem dataField="CostCenter" />
                                                            <SimpleItem dataField="EmployeeCode" />
                                                            <SimpleItem dataField="CompCode" />
                                                        </Tab>
                                                        <Tab title="Company Info">
                                                            <SimpleItem dataField="Comapany Name" />
                                                            <SimpleItem dataField="Company Code " />
                                                            <SimpleItem dataField="Date of Registration" dataType="date" />
                                                            <SimpleItem dataField="Headquarters" />
                                                            <SimpleItem dataField="KRA Code" />
                                                            <SimpleItem dataField="Number of Staff" />
                                                        </Tab>
                                                    </TabbedItem>
                                            </Form>
                                            <hr />
                                            <div className='mt-3 text-center'>
                                                <button className='btn btn-light text-primary me-1'>
                                                    <img src={require('../assets/undo.png')} alt=""  />
                                                    <span className='ps-1'>Cancel</span>
                                                </button>
                                                <button className='btn  btn-light text-primary me-1' type='submit' >
                                                    <img src={require('../assets/save.png')} alt="" />
                                                    <span className='ps-1' type="button">Save</span>
                                                </button>
                                                <button className='btn pe-3  btn-light text-primary me-1'>
                                                    <img src={require('../assets/save.png')} alt="" />
                                                    <span className='ps-1'>Submit</span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className='modal-menu'>
                                <p className='ms-1'>New Individual WorkPlan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddForm