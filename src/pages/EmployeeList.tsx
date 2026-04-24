import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Employee {
    id: number;
    name: string;
}
const EmployeeList = () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const [employeeList, setEmployeeList] = useState<Employee[]>([]);
    useEffect(() => {
        axios.get(apiUrl)
            .then((resp) => {
                console.log(resp.data);
                setEmployeeList(resp.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);
    return (
        <>
            <h2>EmployeeList Component</h2>
            <div>
                {employeeList.map((emp) => (
                    <div key={emp.id}>
                        {emp.name} <Link to={`/employee/${emp.id}`}>{emp.name}</Link>
                    </div>
                ))}
            </div>
        </>
    );
}
export default EmployeeList;



