import React, { Component } from 'react';
import Form, {
    SimpleItem,
    // GroupItem,
    ButtonItem,
    // TabbedItem,
    // Tab,
    // TabPanelOptions,
    // NumericRule,
    // EmailRule,
    ButtonOptions
} from 'devextreme-react/form';

// import { CheckBox } from 'devextreme-react/check-box';
import 'devextreme-react/text-area';


export class AddForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employees: [],
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        fetch('https://localhost:7041/api/Employee', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                EmployeeName: this.state.EmployeeName,
                Department: this.state.Department,
                DateOfJoining: this.state.DateOfJoining,
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                console.log(this.body)
                this.refreshList();
            }, (error) => {
                console.log(error)
                alert('Failed');
            })
    }

    render() {
        const { employees } = this.state;
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
                                        <form action="" onSubmit={handleSubmit}>
                                            <Form colCount={2}>
                                                <SimpleItem dataField="name" />
                                                <SimpleItem dataField="department" />
                                                <SimpleItem dataField="doj" />
                                                <SimpleItem dataField="costCenter" />
                                            </Form>
                                            <ButtonItem horizontalAlignment="center">
                                                <ButtonOptions text="Submit the Form" useSubmitBehavior={true} />
                                            </ButtonItem>
                                            <hr />
                                            <div className='mt-3 text-center'>
                                                <button className='btn btn-light text-primary me-1'>Cancel</button>
                                                <button className='btn  btn-light text-primary me-1' onClick={this.handleSubmit()}>Save WorkPlan</button>
                                                <button className='btn pe-3  btn-light text-primary me-1'>Submit WorkPlan</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className='modal-menu d-flex justify-content-between p-1'>
                                    <p>New Individual WorkPlan</p>
                                </div>
                                {/* {EmployeeId === 0 ?
                                    <button type="button"
                                        className="btn btn-primary d-flex justify-content-center"
                                        onClick={() => this.createClick()} >Create
                                    </button>
                                 : null}
                                {EmployeeId !== 0 ?
                                    <button type="button"
                                        className="btn btn-primary float-start"
                                        onClick={() => this.updateClick()}
                                    >Update</button>
                                    : null} */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddForm