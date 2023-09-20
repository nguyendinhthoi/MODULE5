// eslint-disable-next-line no-unused-vars
import React from 'react';

function Employee() {
    const employees = [{
        id: 1,
        fullName: "John Doe",
        dateOfBirth: "1990-05-15",
        idCardNumber: "123456789",
        phoneNumber: "555-123-4567",
        email: "johndoe@example.com",
        qualification: "Bachelor's Degree",
        position: "Software Engineer",
        salary: 75000
    }, {
        id: 2,
        fullName: "Jane Smith",
        dateOfBirth: "1985-08-25",
        idCardNumber: "987654321",
        phoneNumber: "555-987-6543",
        email: "janesmith@example.com",
        qualification: "Master's Degree",
        position: "Data Analyst",
        salary: 60000
    }, {
        id: 3,
        fullName: "Michael Johnson",
        dateOfBirth: "1982-03-10",
        idCardNumber: "567891234",
        phoneNumber: "555-567-8912",
        email: "michael@example.com",
        qualification: "Ph.D.",
        position: "Research Scientist",
        salary: 85000
    }, {
        id: 4,
        fullName: "Sarah Williams",
        dateOfBirth: "1995-11-03",
        idCardNumber: "456789012",
        phoneNumber: "555-456-7890",
        email: "sarah@example.com",
        qualification: "Bachelor's Degree",
        position: "Marketing Specialist",
        salary: 55000
    }, {
        id: 5,
        fullName: "David Brown",
        dateOfBirth: "1988-07-18",
        idCardNumber: "345678901",
        phoneNumber: "555-345-6789",
        email: "david@example.com",
        qualification: "Bachelor's Degree",
        position: "Accountant",
        salary: 60000
    }, {
        id: 6,
        fullName: "Emily Davis",
        dateOfBirth: "1993-02-22",
        idCardNumber: "234567890",
        phoneNumber: "555-234-5678",
        email: "emily@example.com",
        qualification: "Bachelor's Degree",
        position: "Human Resources Manager",
        salary: 65000
    }, {
        id: 7,
        fullName: "William Wilson",
        dateOfBirth: "1980-09-12",
        idCardNumber: "123456789",
        phoneNumber: "555-123-4567",
        email: "william@example.com",
        qualification: "Master's Degree",
        position: "Product Manager",
        salary: 90000
    }, {
        id: 8,
        fullName: "Olivia Lee",
        dateOfBirth: "1991-06-30",
        idCardNumber: "987654321",
        phoneNumber: "555-987-6543",
        email: "olivia@example.com",
        qualification: "Bachelor's Degree",
        position: "Sales Representative",
        salary: 55000
    }, {
        id: 9,
        fullName: "Daniel Miller",
        dateOfBirth: "1987-04-14",
        idCardNumber: "567891234",
        phoneNumber: "555-567-8912",
        email: "daniel@example.com",
        qualification: "Bachelor's Degree",
        position: "Graphic Designer",
        salary: 60000
    }, {
        id: 10,
        fullName: "Ava Taylor",
        dateOfBirth: "1994-12-07",
        idCardNumber: "456789012",
        phoneNumber: "555-456-7890",
        email: "ava@example.com",
        qualification: "Bachelor's Degree",
        position: "Customer Support Specialist",
        salary: 55000
    }];

    return (
        <div className="table-responsive">
        <table className="table table-striped table-bordered zero-configuration">
            <thead>
            <tr>
                <th>STT</th>
                <th>Employee Name</th>
                <th>Birthday</th>
                <th>ID card</th>
                <th>Phone number</th>
                <th>Email</th>
                <th>Qualificattion</th>
                <th>Position</th>
                <th>Salary</th>
            </tr>
            </thead>
            <tbody>
            {employees.map(employee => (
                // eslint-disable-next-line react/jsx-key
                <tr>
                    <td>{employee.id}</td>
                    <td>{employee.fullName}</td>
                    <td>{employee.dateOfBirth}</td>
                    <td>{employee.idCardNumber}</td>
                    <td>{employee.phoneNumber}</td>
                    <td>{employee.email}</td>
                    <td>{employee.qualification}</td>
                    <td>{employee.position}</td>
                    <td>{employee.salary}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>);
}

export default Employee;