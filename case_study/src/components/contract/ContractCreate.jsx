// eslint-disable-next-line no-unused-vars
import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as homeService from "../../service/HomeService.jsx"
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as Yup from "yup"


function ContractCreate() {
    const navigate = useNavigate();
    const createContract = async (data) => {
        const res = await homeService.createContract(data)
        if (res.status === 201) {
            navigate("/contract")
            toast("Created successfully")
        } else {
            toast.error("Create fail")
        }
    }
    const formCenter = {
        marginTop: '100px',  // Add margin-top
    }
    return (
        <>
            <Formik initialValues={{
                contractNumber: "",
                startDate: "",
                endDate: "",
                depositAmount: 0,
                totalPayment: 0,
            }} onSubmit={(values) => {
                createContract(values)
            }} validationSchema={Yup.object({
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
            })}
            >
                <Form className="container" style={formCenter}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="contractNumber" className="form-label">
                                    Contract Number
                                </label>
                                <Field type="text" name="contractNumber" id="contractNumber" className="form-control"/>
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
                                <Field type="number" name="depositAmount" id="depositAmount" className="form-control"/>
                                <ErrorMessage name="depositAmount" component="div" className="text-danger"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="totalPayment" className="form-label">
                                    Total Payment
                                </label>
                                <Field type="number" name="totalPayment" id="totalPayment" className="form-control"/>
                                <ErrorMessage name="totalPayment" component="div" className="text-danger"/>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    <Link to="/contract">
                        <button className="btn btn-primary">
                            Back to customer list
                        </button>
                    </Link>
                </Form>
            </Formik>
        </>
    );
}

export default ContractCreate;