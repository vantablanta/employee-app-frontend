import React, { Component } from 'react';

import DataGrid, { Column, Grouping, GroupPanel, Pager, Paging, SearchPanel, Selection, 
    FilterRow, HeaderFilter} from 'devextreme-react/data-grid';

import AddButton from './AddButton';
export class Employee extends Component {

    constructor(props) {
        super(props);

        this.applyFilterTypes = [{
            key: 'auto',
            name: 'Immediately',
          }, {
            key: 'onClick',
            name: 'On Button Click',
          }];

        this.state = {
            employees: [],
            showFilterRow: true,
            showHeaderFilter: true,
            currentFilter: this.applyFilterTypes[0].key,

        };
        this.dataGrid = null;
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
                    onContentReady={this.onContentReady}  keyExpr="EmployeeCode"  hoverStateEnabled={true} filterRow={true} 
                    showColumnHeaders= {true} id="gridContainer">

                    <FilterRow visible={this.state.showFilterRow}
                        applyFilter={this.state.currentFilter} />

                    <GroupPanel visible={true} />
                    <SearchPanel visible={true} highlightCaseSensitive={true} />
                    <Grouping autoExpandAll={false} />

                    <Selection mode="single" />
                    {/* <Column dataField="Employees" groupIndex={0} /> */}
                    <FilterRow visible={true} />
                    <HeaderFilter visible={true} />
                    {/* <Column allowFiltering={false} /> */}
                    <Column dataField="Salary" caption="Salary"dataType="number" format="currency" alignment="right" allowSorting={true}  />
                    <Column dataField="EmployeeCode" dataType="string" headerFilter={true} allowSorting={true}/>
                    <Column dataField="EmployeeName" dataType="string" allowFiltering={true} headerFilter={true} />
                    <Column dataField="Department" dataType="string" allowFiltering={true} headerFilter={true} />
                    <Column dataField="DateOfJoining" dataType="date" allowFiltering={true} headerFilter={true} />
                    <Column dataField="CompCode" dataType="string" allowFiltering={true} headerFilter={true}  />
                    <Column dataField="CostCenter" dataType="string"  allowFiltering={true} headerFilter={true} />

                    <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
                    <Paging defaultPageSize={10} />

                </DataGrid>


            </div>
        )
    }
}



export default Employee;