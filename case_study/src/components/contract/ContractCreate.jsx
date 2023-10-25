// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as homeService from "../../service/HomeService.jsx"
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as Yup from "yup"
import employee from "../employee/Employee.jsx";
import {getAllEmployee} from "../../service/HomeService.jsx";


function ContractCreate() {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getAllEmployee()
    }, []);
    const getAllEmployee = async () => {
        const res = await homeService.getAllEmployee()
        setEmployees(res)
    }

    const createContract = async (data) => {
        const newContract = {
            ...data,
            employee: JSON.parse(data.employee)
        }
        const res = await homeService.create(newContract, 2)
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
    const headingStyle = {
        fontSize: '1.5rem', // Font size for the heading
        margin: '0', // Remove margin for the heading
        letterSpacing: '1px', // Add slight letter-spacing for style
        textTransform: 'uppercase', // Uppercase the heading text
        fontWeight: 'bold', // Make the heading text bold
        color: '#a6682d', // Adjust the text color to complement the background
        textAlign: 'center'
    };
    const validationSchema = {
        contractNumber: Yup.string()
            .required("Not Empty"), startDate: Yup.string()
            .required("Not Empty"), endDate: Yup.string()
            .required("Not Empty"), totalPayment: Yup.number()
            .required("Not Empty")
            .min(1, "Must be > 0"), depositAmount: Yup.number()
            .required("Not Empty")
            .min(1, "Must be > 0")
    }
    const initialValues = {
        contractNumber: "", startDate: "", endDate: "", depositAmount: 0, totalPayment: 0,
    }
    return (<>
        <h3 style={headingStyle}>Create Contract</h3>
        <Formik initialValues={initialValues} onSubmit={(values) => {
            createContract(values)
        }} validationSchema={Yup.object(validationSchema)}
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
                        <div className="mb-3">
                            <label htmlFor="employee" className="form-label">
                                Employee
                            </label>
                            <Field as="select" name="employee" id="employee" className="form-control">
                                {employees.map((employee) => (
                                    <option key={employee.id} value={JSON.stringify(employee)}>{employee.name}</option>
                                ))}
                            </Field>
                            <ErrorMessage name="employee" component="div" className="text-danger"/>
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
    </>);
}

export default ContractCreate;