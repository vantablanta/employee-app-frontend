import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPlus, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Nav() {

    return (
        <div className="container-fluid text-center">
            <ul class="nav mt-5 mb-5 justify-content-center navbar-expand-lg navbar-light bg-light pt-3">
                <Link class="nav-item" to={"view"}>
                    <p class="nav-link">
                        View Employees
                        <FontAwesomeIcon icon={faEye} style={addIcon} />
                    </p>
                </Link>
                <Link class="nav-item" to={"add"}>
                    <p class="nav-link">
                        Add Employee
                        <FontAwesomeIcon icon={faPlus} style={viewIcon} />
                    </p>
                </Link>
                <Link class="nav-item" to={"update"}>
                    <p class="nav-link">
                        Update Employee Details 
                        <FontAwesomeIcon icon={faPencil} style={updateIcon} />
                    </p>
                </Link>
                <Link class="nav-item" to={"delete"}>
                    <p class="nav-link">
                        Delete Employee
                        <FontAwesomeIcon icon={faTrash} style={deleteIcon} />
                    </p>
                </Link>
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