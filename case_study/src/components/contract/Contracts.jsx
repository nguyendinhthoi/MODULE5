// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import * as homeService from '../../service/HomeService.jsx';

function Contracts() {
    const [contracts, setContract] = useState([]);

    useEffect(() => {
        getAllContracts();
    }, []);

    const getAllContracts = async () => {
        const contractsData = await homeService.getAllFromContracts();
        setContract(contractsData);
    };

    const tableStyle = {
        color: '#333', // Text color (dark gray)
        fontFamily: 'Arial, sans-serif', // Font family
        textAlign: 'center'
    };

    return (
        <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover" style={tableStyle}>
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
                {contracts.map((contract, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <tr key={index}>
                        <td>{index + 1}</td>
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
