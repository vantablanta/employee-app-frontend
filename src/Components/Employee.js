import React, { Component } from 'react';


export class Employee extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employees: [],
        }
    }

    refreshList() {
        fetch('https://localhost:7041/api/Employee')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({ employees: data });
            }, (err) => {
                console.log(err)
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    // changeEmployeeName = (e) => {
    //     this.setState({ EmployeeName: e.target.value });
    // }
    // changeDepartment = (e) => {
    //     this.setState({ Department: e.target.value });
    // }
    // changeDateOfJoining = (e) => {
    //     this.setState({ DateOfJoining: e.target.value });
    // }

    addClick() {
        this.setState({
            modalTitle: "Add Employee",
            EmployeeCode: 0,
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


    // updateClick() {
    //     fetch('https://localhost:7041/api/Employee', {
    //         method: 'PUT',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             EmployeeId: this.state.EmployeeId,
    //             EmployeeName: this.state.EmployeeName,
    //             Department: this.state.Department,
    //             DateOfJoining: this.state.DateOfJoining,
    //         })
    //     })
    //         .then(res => res.json())
    //         .then((result) => {
    //             alert(result);
    //             this.refreshList();
    //         }, (error) => {
    //             alert('Failed');
    //         })
    // }



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
        const { employees } = this.state;
        return (
            <div>
                <button type="button"
                    className="btn btn-primary m-2 float-end add-button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => this.addClick()}>
                    Add Employee
                </button>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th> Employee Code </th>
                            <th> Employee Name </th>
                            <th> Department </th>
                            <th> Cost Center </th>
                            <th> Date Of Joining</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(emp =>
                            <tr key={emp.ID}>
                                <td>{emp.EmployeeCode}</td>
                                <td>{emp.EmployeeName}</td>
                                <td>{emp.Department}</td>
                                <td>{emp.DateOfJoining}</td>
                                <td>{emp.CostCenter}</td>
                                <td>
                                    <button type="button"
                                        className="btn btn-primary mr-1"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => this.editClick(emp)}>
                                    </button>

                                    <button type="button"
                                        className="btn btn-primary mr-1"
                                        onClick={() => this.deleteClick(emp.EmployeeCode)}>
                                    </button>

                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        )
    }
}



export default Employee;