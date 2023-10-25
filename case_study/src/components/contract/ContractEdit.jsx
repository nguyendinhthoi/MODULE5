import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {Link, useNavigate, useParams} from "react-router-dom";
import * as homeService from "../../service/HomeService.jsx"
import {toast} from "react-toastify";

function ContractEdit() {
    const headingStyle = {
        fontSize: '1.5rem', // Font size for the heading
        margin: '0', // Remove margin for the heading
        letterSpacing: '1px', // Add slight letter-spacing for style
        textTransform: 'uppercase', // Uppercase the heading text
        fontWeight: 'bold', // Make the heading text bold
        color: '#a6682d', // Adjust the text color to complement the background
        textAlign: 'center'
    };
    const formCenter = {
        marginTop: '100px',  // Add margin-top
    }
    const [contract, setContract] = useState(null);
    const {id} = useParams()
    const navigate = useNavigate();

    const findContractById = async (idContract) => {
        const res = await homeService.findById(idContract, 2);
        setContract(res);
    }
    const editContract = async (contract) => {
        const res = await homeService.edit(contract, 2);
        if (res.status === 200) {
            navigate("/contract")
            toast("Edit successfully")
        } else {
            toast.error("Edit Fail")
        }
    }

    useEffect(() => {
        findContractById(id)
    }, [id]);


    const validationSchema = {
        contractNumber: Yup.string()
            .required("Not Empty"),
        startDate: Yup.string()
            .required("Not Empty"),
        endDate: Yup.string()
            .required("Not Empty"),
        totalPayment: Yup.number()
            .required("Not Empty")
            .min(1, "Must be > 0"),
        depositAmount: Yup.number()
            .required("Not Empty")
            .min(1, "Must be > 0")
    }
    const initialValues = {
        ...contract
    }
    return (
        contract && (
            <>
                <h3 style={headingStyle}>Edit Contract</h3>
                <Formik initialValues={initialValues} onSubmit={(values) => {
                    editContract(values)
                }} validationSchema={Yup.object(validationSchema)}
                >
                    <Form className="container" style={formCenter}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="contractNumber" className="form-label">
                                        Contract Number
                                    </label>
                                    <Field type="text" name="contractNumber" id="contractNumber"
                                           className="form-control"/>
                                    <ErrorMessage name="contractNumber" component="div" className="text-danger"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="startDate" className="form-label">
                                        Start Day
                                    </label>
                                    <Field type="date" name="startDate" id="startDate" className="form-control"/>
                                    <ErrorMessage name="startDate" component="div" className="text-danger"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="endDate" className="form-label">
                                        End Day
                                    </label>
                                    <Field type="date" name="endDate" id="endDate" className="form-control"/>
                                    <ErrorMessage name="endDate" component="div" className="text-danger"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="depositAmount" className="form-label">
                                        Deposit Amount
                                    </label>
                                    <Field type="number" name="depositAmount" id="depositAmount"
                                           className="form-control"/>
                                    <ErrorMessage name="depositAmount" component="div" className="text-danger"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="totalPayment" className="form-label">
                                        Total Payment
                                    </label>
                                    <Field type="number" name="totalPayment" id="totalPayment"
                                           className="form-control"/>
                                    <ErrorMessage name="totalPayment" component="div" className="text-danger"/>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                        <Link to="/contract">
                            <button className="btn btn-primary">
                                Back to contract list
                            </button>
                        </Link>
                    </Form>
                </Formik>
            </>
        )
    );
}

export default ContractEdit;