import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPlus, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Nav() {

    return (
        <div className="container-fluid text-center">
            <ul className="nav mt-5 mb-5 justify-content-center navbar-expand-lg navbar-light bg-light pt-3">
                <Link className="nav-item" to={"view"}>
                    <p className="nav-link">
                        View Employees
                        <FontAwesomeIcon icon={faEye} style={addIcon} />
                    </p>
                </Link>
                <Link className="nav-item" to={"add"}>
                    <p className="nav-link">
                        Add Employee
                        <FontAwesomeIcon icon={faPlus} style={viewIcon} />
                    </p>
                </Link>
                <Link className="nav-item" to={"update"}>
                    <p className="nav-link">
                        Update Employee Details 
                        <FontAwesomeIcon icon={faPencil} style={updateIcon} />
                    </p>
                </Link>
                <Link className="nav-item" to={"delete"}>
                    <p className="nav-link">
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