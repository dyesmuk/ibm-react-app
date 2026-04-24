// EmployeeDetails.tsx
// EmployeeDetails.tsx

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EmployeeDetails = () => {

    const { id } = useParams();
    const [employee, setEmployee] = useState<any>({});

    useEffect(() => {
        
        if (!id) return;

        const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`;

        axios.get(apiUrl)
            .then((resp) => {
                console.log(resp.data);
                setEmployee(resp.data);
            })
            .catch((err) => console.error(err));

    }, [id]);

    return (
        <>
            <h2>Employee Details</h2>
            <p><b>ID:</b> {employee?.id}</p>
            <p><b>Name:</b> {employee?.name}</p>
            <p><b>Email:</b> {employee?.email}</p>
            <p><b>Phone:</b> {employee?.phone}</p>
        </>
    );
};

export default EmployeeDetails;