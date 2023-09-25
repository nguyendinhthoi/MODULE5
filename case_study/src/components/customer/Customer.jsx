// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import * as homeService from "../../service/HomeService.jsx"
import {Link} from "react-router-dom";

function Customer() {
    const [customers, setCustomer] = useState([]);

    useEffect(() => {
        getAllCustomer();
    }, []);

    const getAllCustomer = async () => {
        const customerData = await homeService.getAllFromCustomer();
        setCustomer(customerData)
    }
    const tableStyle = {
        color: '#333', // Text color (dark gray)
        fontFamily: 'Arial, sans-serif', // Font family
        textAlign: 'center'
    };
    return (
        <div className="table-responsive">
            <Link to="customerCreate"><button className="btn btn-secondary">Create customer</button></Link>
            <table className="table table-striped table-bordered table-hover" style={tableStyle}>
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
                {customers.map((element, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{element.fullName}</td>
                        <td>{element.dateOfBirth}</td>
                        <td>{element.gender}</td>
                        <td>{element.idCardNumber}</td>
                        <td>{element.phoneNumber}</td>
                        <td>{element.email}</td>
                        <td>{element.customerType}</td>
                        <td>{element.address}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Customer;