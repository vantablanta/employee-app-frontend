import React, { Component } from "react";

export class AddButton extends Component {

    render() {
        return (
            <div>
                <button type="button"
                    className="btn btn-sm btn-primary m-2 add-button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                    Add Employee
                </button>
            </div>
        )
    }
}


export default AddButton;


