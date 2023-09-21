// eslint-disable-next-line no-unused-vars
import React from 'react';

function Contracts() {
    const contracts = [
        {
            id: 1,
            contractNumber: "CON-12345",
            startDate: "2023-01-15",
            endDate: "2023-12-31",
            depositAmount: 5000,
            totalPayment: 25000
        },
        {
            id: 2,
            contractNumber: "CON-54321",
            startDate: "2023-02-10",
            endDate: "2023-11-30",
            depositAmount: 6000,
            totalPayment: 28000
        },
        {
            id: 3,
            contractNumber: "CON-98765",
            startDate: "2023-03-05",
            endDate: "2023-10-15",
            depositAmount: 4500,
            totalPayment: 22000
        },
        {
            id: 4,
            contractNumber: "CON-45678",
            startDate: "2023-04-20",
            endDate: "2023-09-30",
            depositAmount: 5500,
            totalPayment: 27000
        },
        {
            id: 5,
            contractNumber: "CON-78901",
            startDate: "2023-05-12",
            endDate: "2023-08-31",
            depositAmount: 4800,
            totalPayment: 23000
        },
        {
            id: 6,
            contractNumber: "CON-23456",
            startDate: "2023-06-25",
            endDate: "2023-07-20",
            depositAmount: 5200,
            totalPayment: 26000
        },
        {
            id: 7,
            contractNumber: "CON-56789",
            startDate: "2023-07-30",
            endDate: "2023-12-15",
            depositAmount: 4900,
            totalPayment: 24000
        },
        {
            id: 8,
            contractNumber: "CON-87654",
            startDate: "2023-08-18",
            endDate: "2023-11-10",
            depositAmount: 5300,
            totalPayment: 27000
        },
        {
            id: 9,
            contractNumber: "CON-32109",
            startDate: "2023-09-08",
            endDate: "2023-10-25",
            depositAmount: 4600,
            totalPayment: 22000
        },
        {
            id: 10,
            contractNumber: "CON-65432",
            startDate: "2023-10-05",
            endDate: "2023-09-20",
            depositAmount: 5100,
            totalPayment: 25000
        }
    ];

    return (
        <div className="table-responsive">
            <table className="table table-striped table-bordered zero-configuration">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Contract Number</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Deposit Amount</th>
                    <th>Total Payment</th>
                </tr>
                </thead>
                <tbody>
                {contracts.map(contract => (
                    // eslint-disable-next-line react/jsx-key
                    <tr>
                        <td>{contract.id}</td>
                        <td>{contract.contractNumber}</td>
                        <td>{contract.startDate}</td>
                        <td>{contract.endDate}</td>
                        <td>{contract.depositAmount}</td>
                        <td>{contract.totalPayment}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Contracts;