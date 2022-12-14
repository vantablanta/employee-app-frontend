import React, { Component } from 'react';

import DataGrid, { Column, Grouping, GroupPanel, Pager, Paging, SearchPanel, Selection, 
    FilterRow, HeaderFilter, FilterPanel, FilterBuilderPopup, Scrolling, Editing, Summary, TotalItem, 
    Export, ColumnChooser} from 'devextreme-react/data-grid';

import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver-es';
import { jsPDF } from 'jspdf';
import { exportDataGrid } from 'devextreme/excel_exporter';
// import { exportDataGrid } from 'devextreme/pdf_exporter';

import SubMenu from '../Platform/Menus/SubMenu';

// const exportFormats = ['pdf', 'xlsx'];

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

        this.filterOperations = ['contains', '='];

        this.state = {
            employees: [],
            showFilterRow: true,
            showHeaderFilter: true,
            currentFilter: this.applyFilterTypes[0].key,
            filterValue: 'Pending'

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

    // DONT DELETE!
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

    onExporting(e) {
        const workbook = new Workbook();
        const doc = new jsPDF();
        const worksheet = workbook.addWorksheet('Main sheet');
    
        exportDataGrid({
            jsPDFDocument: doc,
            component: e.component,
            worksheet,
            indent: 5,
            autoFilterEnabled: true,
        }).then(() => {
            workbook.xlsx.writeBuffer().then((buffer) => {
                saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
            // doc.save('Companies.pdf');
          });
        });
        e.cancel = true;
      }

    startEdit = (e) => {
        if (e.rowType === "data") {
            e.component.editRow(e.rowIndex);
        }
    }

    render() {
        const { employees } = this.state;
        const pageSizes = [10, 25, 50, 100];

        return (
            <div >
                <SubMenu/>

                <DataGrid dataSource={employees} allowColumnReordering={true} rowAlternationEnabled={false} showBorders={true}
                    onContentReady={this.onContentReady}  keyExpr="EmployeeCode"  hoverStateEnabled={true} 
                    showColumnHeaders= {true} onExporting={this.onExporting} onRowDblClick={this.startEdit} columnHidingEnabled={true}>

                    <FilterPanel visible={true} />

                    <GroupPanel visible={true} />
                    <SearchPanel visible={true} highlightCaseSensitive={true} />
                    <Grouping autoExpandAll={true} />
                    <Pager
                        allowedPageSizes={pageSizes}
                        showInfo={true}
                        showNavigationButtons={true}
                        showPageSizeSelector={true}
                        visible={true} />

                    <Selection mode="multiple"  data-bs-toggle="modal" data-bs-target="#exampleModal" />

                    <HeaderFilter visible={true} />

                    <FilterRow visible={true} />

                    <FilterBuilderPopup position={"right"} />
                    <HeaderFilter visible={true} />
                    <Scrolling mode="infinite" />

                    <ColumnChooser enabled={true} mode="select" />

                    <Column dataField="Salary" caption="Salary"dataType="number" format="currency" alignment="left" allowSorting={true}  />
                    <Column dataField="EmployeeCode" dataType="string" headerFilter={true} allowSorting={true}/>
                    <Column dataField="EmployeeName" dataType="string" allowFiltering={true} headerFilter={true} />
                    <Column dataField="Department" dataType="string" allowFiltering={true} headerFilter={true} />
                    <Column dataField="DateOfJoining" dataType="date" allowFiltering={true} headerFilter={true} />
                    <Column dataField="CompCode" dataType="string" allowFiltering={true} headerFilter={true}  />
                    <Column dataField="CostCenter" dataType="string"  allowFiltering={true} headerFilter={true} />

                    <Summary>
                        <TotalItem  column="Salary" summaryType="sum"/>
                    </Summary>

                    <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
                    <Paging defaultPageSize={10} />

                    <Editing mode="popup" allowUpdating={false} allowDeleting={false} allowAdding={false} />
                    <Export enabled={true} allowExportSelectedData={true}  />
                
                </DataGrid>

            </div>
        )
    }
}



export default Employee;