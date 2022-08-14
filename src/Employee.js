import React, { Component } from 'react';

export class Employee extends Component {

    constructor(props) {
        super(props);

        this.state = {
            departments: [],
            employees: [],
            modalTitle: "",
            EmployeeId: 0,
            EmployeeName: "",
            Department: "",
            DateOfJoining: "",
        }
    }

    refreshList() {

        fetch('https://localhost:7041/api/Employee')
            .then(response => response.json())
            .then(data => {
                this.setState({ employees: data });
            }, (err) => {
                console.log(err)
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    changeEmployeeName = (e) => {
        this.setState({ EmployeeName: e.target.value });
    }
    changeDepartment = (e) => {
        this.setState({ Department: e.target.value });
    }
    changeDateOfJoining = (e) => {
        this.setState({ DateOfJoining: e.target.value });
    }

    addClick() {
        this.setState({
            modalTitle: "Add Employee",
            EmployeeId: 0,
            EmployeeName: "",
            Department: "",
        });
    }
    // editClick(emp) {
    //     this.setState({
    //         modalTitle: "Edit Employee",
    //         EmployeeId: emp.EmployeeId,
    //         EmployeeName: emp.EmployeeName,
    //         Department: emp.Department,
    //         DateOfJoining: emp.DateOfJoining,
    //     });
    // }

    createClick() {
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


    updateClick() {
        fetch('https://localhost:7041/api/Employee', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                EmployeeId: this.state.EmployeeId,
                EmployeeName: this.state.EmployeeName,
                Department: this.state.Department,
                DateOfJoining: this.state.DateOfJoining,
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                this.refreshList();
            }, (error) => {
                alert('Failed');
            })
    }

    // deleteClick(id) {
    //     if (window.confirm('Are you sure?')) {
    //         fetch(variables.API_URL + 'employee/' + id, {
    //             method: 'DELETE',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //             .then(res => res.json())
    //             .then((result) => {
    //                 alert(result);
    //                 this.refreshList();
    //             }, (error) => {
    //                 alert('Failed');
    //             })
    //     }
    // }

    render() {
        const {
            employees,
            modalTitle,
            EmployeeId,
            EmployeeName,
            Department,
            DateOfJoining,
        } = this.state;

        return (
            <div>

                <button type="button"
                    className="btn btn-primary m-2 float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => this.addClick()}>
                    Add Employee
                </button>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                EmployeeId
                            </th>
                            <th>
                                EmployeeName
                            </th>
                            <th>
                                Department
                            </th>
                            <th>
                                DOJ
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(emp =>
                            <tr key={emp.EmployeeId}>
                                <td>{emp.EmployeeId}</td>
                                <td>{emp.EmployeeName}</td>
                                <td>{emp.Department}</td>
                                <td>{emp.DateOfJoining}</td>
                                <td>
                                    <button type="button"
                                        className="btn btn-light mr-1"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => this.editClick(emp)}>
                                    </button>

                                    <button type="button"
                                        className="btn btn-light mr-1"
                                        onClick={() => this.deleteClick(emp.EmployeeId)}>
                                    </button>

                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{modalTitle}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="d-flex flex-row bd-highlight mb-3">
                                    <div className="p-2 w-50 bd-highlight">
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">Emp Name</span>
                                            <input type="text" className="form-control"
                                                value={EmployeeName}
                                                onChange={this.changeEmployeeName} />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">Department</span>
                                            <input type="text" className="form-control"
                                                value={Department}
                                                onChange={this.changeDepartment} />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">DOJ</span>
                                            <input type="date" className="form-control"
                                                value={DateOfJoining}
                                                onChange={this.changeDateOfJoining} />
                                        </div>
                                    </div>
                                </div>
                                {EmployeeId === 0 ?
                                    <button type="button"
                                        className="btn btn-primary float-start"
                                        onClick={() => this.createClick()}
                                    >Create</button>
                                    : null}
                                {EmployeeId !== 0 ?
                                    <button type="button"
                                        className="btn btn-primary float-start"
                                        onClick={() => this.updateClick()}
                                    >Update</button>
                                    : null}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Employee;