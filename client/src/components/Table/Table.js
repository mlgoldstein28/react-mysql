import Navbar from "../Navbar/Navbar"
import Axios from 'axios';
import { useState } from "react";

export default function Table() {
    const [employeeList, setEmployeeList] = useState([])


    const getEmployees = () => {
        Axios.get('http://localhost:3001/employees').then((response) => {
            setEmployeeList(response.data)
        }).then(response => {console.log(employeeList)})
    }

        const renderEmployees = () => {
            return employeeList.map((employee, index) => (
                <tbody key={index}>
                    <tr>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.age}</td>
                        <td>{employee.country}</td>
                        <td>{employee.position}</td>
                        <td>{employee.wage}</td>
                    </tr>
                </tbody>
            ))
        };

    return (
        <div>
            <Navbar />
            <div className="m-3">
                <div onClick={getEmployees} className="btn btn-primary m-auto">Show Employees</div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Country</th>
                            <th>Position</th>
                            <th>Wage</th>
                        </tr>
                    </thead>
                    {renderEmployees()}
                </table>
            </div>
        </div>
    )
}