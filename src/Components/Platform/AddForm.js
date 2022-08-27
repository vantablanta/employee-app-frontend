import React, { Component } from 'react';import Form, { SimpleItem, TabbedItem, Tab, TabPanelOptions,} from 'devextreme-react/form';
import 'devextreme-react/text-area';

export class AddForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employee: {
                EmployeeName: "Michelle Njeri",
                Department: "Software",
                DateOfJoining: new Date(),
                EmployeeCode: "22",
                CompCode: "23",
                CostCenter: "34",
                Salary: 1000
            }
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {'Content-Type': 'application/json', 'charset': 'utf-8'},
            // ERROR IS HERE : GETTING THE VALUES FROM THE DEVEXTREME FORM 
            body: JSON.stringify({ })
            // 
        };
        fetch('https://localhost:7041/api/Employee', requestOptions)
            .then(response => {
                console.log(response)
            })
        window.location.reload()
    }

    render() {
        const { employee } = this.state;
        return (
            <div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                            <div className="modal-menu d-flex justify-content-between ps-2 pt-2 pe-2">
                                <p className='ms-1'>
                                    <img src={require('../../assets/admin.png')} alt="" className='sub-menu-icon' />
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
                                        <form onSubmit={this.handleSubmit} method="post" actions>
                                            <Form formData={employee} id="form">
                                                <TabbedItem>
                                                    <TabPanelOptions />
                                                    <Tab title="Personal Info">
                                                        <SimpleItem dataField="EmployeeName"/>
                                                        <SimpleItem dataField="Department" />
                                                        <SimpleItem dataField="DateOfJoining" dataType="date" />
                                                        <SimpleItem dataField="CostCenter" />
                                                        <SimpleItem dataField="EmployeeCode" />
                                                        <SimpleItem dataField="CompCode" />
                                                        <SimpleItem dataField="Salary" />
                                                    </Tab>
                                                    <Tab></Tab>
                                                </TabbedItem>
                                            </Form>
                                            <hr />
                                            <div className=" nav justify-content-center">
                                                <button className="btn btn-light add-buttons me-3" type='submit'>
                                                    <img src={require('../../assets/add.png')} alt="" className="sub-menu-icon" />
                                                    Save
                                                </button>
                                                <a className="btn btn btn-light add-buttons" type='button' data-bs-dismiss="modal" 
                                                    href='/' aria-label="Close">
                                                    <img src={require('../../assets/back.png')} alt="" className="sub-menu-icon" />
                                                    Cancel
                                                </a>
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
