import React, { Component } from 'react';

import DataGrid, { Column, Grouping, GroupPanel, Pager, Paging, SearchPanel, Selection } from 'devextreme-react/data-grid';
import AddButton from './AddButton';
export class Employee extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employees: [],
        };

        //this.onSelectionChanged = this.onSelectionChanged.bind(this);
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

    // changeEmployeeName = (e) => {
    //     this.setState({ EmployeeName: e.target.value });
    // }
    // changeDepartment = (e) => {
    //     this.setState({ Department: e.target.value });
    // }
    // changeDateOfJoining = (e) => {
    //     this.setState({ DateOfJoining: e.target.value });
    // }

    // addClick() {
    //     this.setState({
    //         modalTitle: "Add Employee",
    //         EmployeeCode: "0",
    //         EmployeeName: "",
    //         Department: "",
    //     });
    // }


    editClick(emp) {
        this.setState({
            modalTitle: "Edit Employee",
            EmployeeId: emp.EmployeeId,
            EmployeeName: emp.EmployeeName,
            Department: emp.Department,
            DateOfJoining: emp.DateOfJoining,
        });
    }


    // createClick() {
    //     fetch('https://localhost:7041/api/Employee', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             EmployeeName: this.state.EmployeeName,
    //             Department: this.state.Department,
    //             DateOfJoining: this.state.DateOfJoining,
    //         })
    //     })
    //         .then(res => res.json())
    //         .then((result) => {
    //             alert(result);
    //             console.log(this.body)
    //             this.refreshList();
    //         }, (error) => {
    //             console.log(error)
    //             alert('Failed');
    //         })
    // }


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



    deleteClick(id) {
        if (window.confirm('Are you sure?')) {
            fetch("https://localhost:7041/api/Employee/" + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then((result) => {
                    alert(result);
                    this.refreshList();
                }, (error) => {
                    alert('Failed');
                })
        }
    }

    render() {
        const { employees } = this.state;
        const pageSizes = [10, 25, 50, 100];

        return (
            <div>
                <AddButton/>
                <DataGrid dataSource={employees} allowColumnReordering={true} rowAlternationEnabled={false} showBorders={true}
                    onContentReady={this.onContentReady}  keyExpr="EmployeeCode"  hoverStateEnabled={true}>
                    <GroupPanel visible={true} />
                    <SearchPanel visible={true} highlightCaseSensitive={true} />
                    <Grouping autoExpandAll={false} />

                    <Selection mode="single" />
                    <Column dataField="Employees" groupIndex={0} />
                    <Column dataField="Salary" caption="Salary"dataType="number" format="currency" alignment="right" />
                    <Column dataField="EmployeeCode" dataType="string" />
                    <Column dataField="EmployeeName" dataType="string" />
                    <Column dataField="Department" dataType="string" />
                    <Column dataField="DateOfJoining" dataType="date" />
                    <Column dataField="CompCode" dataType="string" width={150} />
                    <Column dataField="CostCenter" dataType="string" width={150} />

                    <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
                    <Paging defaultPageSize={10} />
                    
                </DataGrid>
            </div>
        )
    }
}



export default Employee;