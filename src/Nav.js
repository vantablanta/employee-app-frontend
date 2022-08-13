import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPlus, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'

function Nav() {

    return (
        <div className="container-fluid text-center">
            <ul class="nav mt-5 mb-5 justify-content-center navbar-expand-lg navbar-light bg-light pt-3">
                <li class="nav-item">
                    <p class="nav-link" href="">
                        View Employees
                        <FontAwesomeIcon icon={faEye} style={addIcon} />
                    </p>
                </li>
                <li class="nav-item">
                    <p class="nav-link" href="">
                        Add Employee
                        <FontAwesomeIcon icon={faPlus} style={viewIcon} />
                    </p>
                </li>
                <li class="nav-item">
                    <p class="nav-link" href="">
                        Update Employee Details 
                        <FontAwesomeIcon icon={faPencil} style={updateIcon} />
                    </p>
                </li>
                <li class="nav-item">
                    <p class="nav-link" href="">
                        Delete Employee
                        <FontAwesomeIcon icon={faTrash} style={deleteIcon} />
                    </p>
                </li>
            </ul>
        </div>
    )
}
const viewIcon = {
    paddingLeft: 10,
    color: "green",
    fontSize: 20,
    fontWeight: 600,
}
const addIcon = {
    paddingLeft: 10,
    color: "green",
    fontSize: 20,
    fontWeight: 600,
}

const updateIcon = {
    paddingLeft: 10,
    color: "green",
    fontSize: 20,
    fontWeight: 600,
}
const deleteIcon = {
    paddingLeft: 10,
    color: "red",
    fontSize: 20,
    fontWeight: 600,
}

export default Nav