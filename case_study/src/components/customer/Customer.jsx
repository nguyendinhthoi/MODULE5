// eslint-disable-next-line no-unused-vars
import React from 'react';

function Customer() {
    const customers = [
        {
            id: 1,
            fullName: "John Smith",
            dateOfBirth: "1990-01-15",
            gender: "Male",
            idCardNumber: "123456789",
            phoneNumber: "123-456-7890",
            email: "johnsmith@example.com",
            customerType: "Regular",
            address: "123 Main Street, New York, NY 10001, USA"
        },
        {
            id: 2,
            fullName: "Mary Johnson",
            dateOfBirth: "1985-05-20",
            gender: "Female",
            idCardNumber: "987654321",
            phoneNumber: "987-654-3210",
            email: "maryjohnson@example.com",
            customerType: "VIP",
            address: "456 Oak Avenue, Los Angeles, CA 90001, USA"
        },
        {
            id: 3,
            fullName: "Robert Williams",
            dateOfBirth: "1992-11-10",
            gender: "Male",
            idCardNumber: "567891234",
            phoneNumber: "567-891-2340",
            email: "robertwilliams@example.com",
            customerType: "Regular",
            address: "789 Elm Street, Chicago, IL 60001, USA"
        },
        {
            id: 4,
            fullName: "Susan Davis",
            dateOfBirth: "1988-03-03",
            gender: "Female",
            idCardNumber: "456789012",
            phoneNumber: "456-789-0120",
            email: "susandavis@example.com",
            customerType: "VIP",
            address: "101 Pine Road, San Francisco, CA 94101, USA"
        },
        {
            id: 5,
            fullName: "Michael Brown",
            dateOfBirth: "1985-07-18",
            gender: "Male",
            idCardNumber: "345678901",
            phoneNumber: "345-678-9010",
            email: "michaelbrown@example.com",
            customerType: "Regular",
            address: "202 Maple Street, Houston, TX 77001, USA"
        },
        {
            id: 6,
            fullName: "Laura Taylor",
            dateOfBirth: "1993-02-22",
            gender: "Female",
            idCardNumber: "234567890",
            phoneNumber: "234-567-8900",
            email: "laurataylor@example.com",
            customerType: "VIP",
            address: "303 Cedar Avenue, Miami, FL 33101, USA"
        },
        {
            id: 7,
            fullName: "James Wilson",
            dateOfBirth: "1980-09-12",
            gender: "Male",
            idCardNumber: "123456789",
            phoneNumber: "123-456-7890",
            email: "jameswilson@example.com",
            customerType: "Regular",
            address: "404 Birch Road, Atlanta, GA 30301, USA"
        },
        {
            id: 8,
            fullName: "Emily Lee",
            dateOfBirth: "1991-06-30",
            gender: "Female",
            idCardNumber: "987654321",
            phoneNumber: "987-654-3210",
            email: "emilylee@example.com",
            customerType: "VIP",
            address: "505 Oak Street, Seattle, WA 98101, USA"
        },
        {
            id: 9,
            fullName: "Daniel Miller",
            dateOfBirth: "1987-04-14",
            gender: "Male",
            idCardNumber: "567891234",
            phoneNumber: "567-891-2340",
            email: "danielmiller@example.com",
            customerType: "Regular",
            address: "606 Elm Avenue, Denver, CO 80201, USA"
        },
        {
            id: 10,
            fullName: "Olivia Clark",
            dateOfBirth: "1994-12-07",
            gender: "Female",
            idCardNumber: "456789012",
            phoneNumber: "456-789-0120",
            email: "oliviaclark@example.com",
            customerType: "VIP",
            address: "707 Cedar Road, Phoenix, AZ 85001, USA"
        }
    ];

    return (
        <div className="table-responsive">
            <table className="table table-striped table-bordered zero-configuration">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Customer Name</th>
                    <th>Birthday</th>
                    <th>Gender</th>
                    <th>ID card</th>
                    <th>Phone number</th>
                    <th>Email</th>
                    <th>Customer type</th>
                    <th>Address</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {customers.map(customer => (
                    // eslint-disable-next-line react/jsx-key
                    <tr>
                        <td>{customer.id}</td>
                        <td>{customer.fullName}</td>
                        <td>{customer.dateOfBirth}</td>
                        <td>{customer.gender}</td>
                        <td>{customer.phoneNumber}</td>
                        <td>{customer.email}</td>
                        <td>{customer.customerType}</td>
                        <td>{customer.address}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>);
}

export default Customer;