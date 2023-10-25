// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import * as homeService from '../../service/HomeService.jsx';
import {Link} from "react-router-dom";
import ContractDelete from "./ContractDelete.jsx";
import ReactPaginate from "react-paginate";

function Contracts() {
    const [contracts, setContract] = useState([]);
    const [selectedContract, setSelectedContract] = useState(null)
    const [modalStatus, setModalStatus] = useState(false)
    const [name, setName] = useState("")
    const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
    const [totalPage, setTotalPage] = useState(0)

    let limit = 5;

    const deleteModal = (contract) => {
        setModalStatus(true)
        setSelectedContract(contract)
    }
    const closeModal = () => {
        getAllContracts()
        setModalStatus(false)
        setSelectedContract(null)
    }

    useEffect(() => {
        getAllContracts();
    }, [currentPage, name]);


    const getAllContracts = async () => {
        const contractsData = await homeService.getAll(name, currentPage, 2);
        const total = contractsData.headers["x-total-count"];
        setTotalPage(Math.ceil(total / 5))

        setContract(contractsData.data);
    };
    const handlePageClick = async (event) => {
        let currentPage = event.selected + 1;
        const contractList = await homeService.getAllByPage(currentPage, limit, 2);
        setContract(contractList);
    }


    const tableStyle = {
        color: '#333', // Text color (dark gray)
        fontFamily: 'Arial, sans-serif', // Font family
        textAlign: 'center'
    };
    const search = {
        float: "right"
    }

    return (
        <div className="table-responsive">
            <Link to="contractCreate">
                <button className="btn btn-secondary">Create contract</button>
            </Link>
            <input style={search} placeholder="Search Contract Number" type="text"
                   onChange={(event) => setName(event.target.value)}/>
            <table className="table table-striped table-bordered table-hover" style={tableStyle}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Contract Number</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Deposit Amount</th>
                    <th>Total Payment</th>
                    <th>Employee Name</th>
                    <th colSpan={2}>Action</th>
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
                        <td>{contract.employee.name}</td>
                        <td><Link to={`contractEdit/${contract.id}`}>
                            <i className="fa">&#xf044;</i>
                        </Link>
                        </td>
                        <td>
                            <i onClick={() => deleteModal(contract)} className="material-icons">&#xe872;</i>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <ContractDelete
                show={modalStatus}
                selectedContract={selectedContract}
                handleClose={closeModal}
            ></ContractDelete>

            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageCount={totalPage}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}

                containerClassName={"pagination justify-content-center"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </div>
    );
}

export default Contracts;
