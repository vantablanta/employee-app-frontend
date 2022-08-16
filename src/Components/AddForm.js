import React, { Component } from 'react';
import Form, {SimpleItem} from 'devextreme-react/form';
import DateBox from "devextreme/ui/date_box";
import 'devextreme-react/text-area';


export class AddForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employees: [],
            EmployeeName: "",
            Department: "",
            DateOfJoining: "",
            EmployeeCode: 0,
            CompCode: 0,
            CostCenter: 0,        
        }
        this.now = new Date();
    }
    
    // handleSubmit() {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    //         body: JSON.stringify({ 
    //             EmployeeName: this.state.EmployeeName,
    //             Department: this.state.Department,
    //             DateOfJoining: this.state.DateOfJoining,
    //             EmployeeCode: this.state.EmployeeCode, 
    //             CompCode: this.state.CompCode, 
    //             CostCenter: this.state.CostCenter 
    //         })
    //     };
    //     fetch('https://localhost:7041/api/Employee', requestOptions)
    //         .then(async response =>{
    //             await response.json()
    //             console.log(response)
    //         })
    //         .then((result) => {
    //             console.log(result)
    //         }, (error) => {
    //             console.log(error)
    //         })
    // }

    render() {
        return (
            <div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-menu d-flex justify-content-between ps-2 pt-2 pe-2">
                                <p>Individual WorkPlan</p>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="modal-header">
                                    <h5 className="modal-title">Create Your Individual WorkPlan</h5>
                                    <p>Annual Individual Workplan-[Cascaded from Departmental Objectives]</p>
                                </div>
                                <div className="mb-3">
                                    <div className="p-2 bd-highlight">
                                        <form>
                                            <Form colCount={2}>
                                                <SimpleItem dataField="EmployeeName"  />
                                                <SimpleItem dataField="Department" />
                                                {/* <DateBox defaultValue={this.now} type="date" /> */}
                                                <SimpleItem dataField="DateOfJoining" />
                                                <SimpleItem dataField="CostCenter" />
                                                <SimpleItem dataField="EmployeeCode" />
                                                <SimpleItem dataField="CompCode" />

                                            </Form>
                                            <hr />
                                            <div className='mt-3 text-center'>
                                                <button className='btn btn-light text-primary me-1'>
                                                    <img src={require('../assets/undo.png')} alt=""  />
                                                    <span className='ps-1'>Cancel</span>
                                                </button>
                                                <button className='btn  btn-light text-primary me-1'>
                                                    <img src={require('../assets/save.png')} alt="" />
                                                    <span className='ps-1' type="submit">Save</span>
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
                                <p>New Individual WorkPlan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddForm