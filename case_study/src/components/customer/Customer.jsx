// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import * as homeService from "../../service/HomeService.jsx"
import {Link} from "react-router-dom";
import CustomerDelete from "./CustomerDelete.jsx";
import ReactPaginate from "react-paginate";

function Customer() {
    const [customers, setCustomer] = useState([]);
    const [modalStatus, setModalStatus] = useState(false)
    const [selectedCustomer, setSelectedCustomer] = useState(null)
    const [name, setName] = useState("")
    const [totalPage, setTotalPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(0); // Trang hiện tại

    let limit = 5;

    const deleteModal = (customer) => {
        setModalStatus(true);
        setSelectedCustomer(customer)
    }
    const closeModal = () => {
        getAllCustomer();
        setModalStatus(false);
        setSelectedCustomer(null)
    }

    useEffect(() => {
        getAllCustomer();
    }, [currentPage,name]);




    const getAllCustomer = async () => {
        const customerData = await homeService.getAll(name,currentPage,1);

        const total = customerData.headers["x-total-count"];
        setTotalPage(Math.ceil(total/limit))

        setCustomer(customerData.data.content)
        console.log(customerData)
    }


    const handlePageClick = async (event) => {
        let currentPage = event.selected + 1;
        const customerList = await homeService.getAllByPage(currentPage,limit,1);
        setCustomer(customerList);
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
            <Link to="customerCreate">
                <button className="btn btn-secondary">Create customer</button>
            </Link>
            <input style={search} placeholder="Search Name" type="text"
                   onChange={(event) => setName(event.target.value)}/>

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
                    <th colSpan={3}>Action</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((element, index) => (
                    <tr key={element.id}>
                        <td>{index + 1}</td>
                        <td>{element.fullName}</td>
                        <td>{element.dateOfBirth}</td>
                        <td>{element.gender}</td>
                        <td>{element.idCardNumber}</td>
                        <td>{element.phoneNumber}</td>
                        <td>{element.email}</td>
                        <td>{element.customerType.name}</td>
                        <td>{element.address}</td>
                        <td><Link to={`customerEdit/${element.id}`}>
                            <i className="fa">&#xf044;</i>
                        </Link>
                        </td>
                        <td>
                            <i onClick={() => deleteModal(element)} className="material-icons">&#xe872;</i>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <CustomerDelete
                show={modalStatus}
                selectedCustomer={selectedCustomer}
                handleClose={closeModal}
            ></CustomerDelete>


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

export default Customer;