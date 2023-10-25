// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as homeService from "../../service/HomeService.jsx"
import {Link, useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import * as Yup from "yup"

function CustomerEdit() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [customer, setCustomer] = useState(null)
    const [customerType, setCustomerType] = useState([])


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
    const findCustomerById = async (customerId) => {
        const res = await homeService.findById(customerId,1)
        setCustomer(res)
    }
    const editCustomer = async (data) => {
        let newCustomer = {
            ...data,
            customerType: JSON.parse(data.customerType)
        }
        const res = await homeService.edit(newCustomer,1)
        if (res.status === 200) {
            navigate("/customer")
            toast("Edited successfully")
        } else {
            toast.error("Create fail")
        }
    }
    const getAllCustomerType = async () => {
        const res = await homeService.getAllCustomerType();
        setCustomerType(res);
    }

    useEffect(() => {
        getAllCustomerType();
        findCustomerById(id)
    }, [id]);


    const initialValues = customer ? {
            ...customer,
            customerType: JSON.stringify(customer.customerType),
        } :
        {
            fullName: "",
            dateOfBirth: "",
            gender: "Male",
            idCardNumber: "",
            phoneNumber: "",
            email: "",
            customerType: "Member",
            address: ""
        }
    const validationSchema = {
        fullName: Yup.string()
            .required("Not Empty")
            .matches(/^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/, "Must capitalize the first letter"),
        dateOfBirth: Yup.string()
            .required("Not Empty"),
        idCardNumber: Yup.string()
            .required("Not Empty")
            .matches(/^\d{9}|\d{12}$/, "9 or 12 numbers"),
        phoneNumber: Yup.string()
            .required("Not Empty")
            .matches(/^(?:\(\d+\)\+)?(09[01]\d{7}|(84)\+09[01]\d{7})$/, "The phone number must be " +
                "in the correct format 090xxxxxxx or 091xxxxxxx or (84)+90xxxxxxx or (84)+91xxxxxxx"),
        address: Yup.string()
            .required("Not Empty"),
        email: Yup.string()
            .required("Email is required")
            .matches(/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/, "Invalid email address"),
    }

    return (
        customer && (
            <>
                <h3 style={headingStyle}>Edit Customer</h3>
                <Formik initialValues={
                    initialValues
                } onSubmit={(values) => {
                    editCustomer(values)
                }} validationSchema={Yup.object(validationSchema)}
                >
                    <Form className="container" style={formCenter}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Full Name
                                    </label>
                                    <Field type="text" name="fullName" id="name" className="form-control"/>
                                    <ErrorMessage name="fullName" component="div" className="text-danger"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Gender</label>
                                    <div className="form-check">
                                        <Field
                                            type="radio"
                                            name="gender"
                                            id="gender1"
                                            value="Male"
                                            className="form-check-input"
                                        />
                                        <label htmlFor="gender1" className="form-check-label">
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <Field
                                            type="radio"
                                            name="gender"
                                            id="gender2"
                                            value="Female"
                                            className="form-check-input"
                                        />
                                        <label htmlFor="gender2" className="form-check-label">
                                            Female
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="phoneNumber" className="form-label">
                                        Phone Number
                                    </label>
                                    <Field type="text" name="phoneNumber" id="phoneNumber" className="form-control"/>
                                    <ErrorMessage name="phoneNumber" component="div" className="text-danger"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dateOfBirth" className="form-label">
                                        Birthday
                                    </label>
                                    <Field type="date" name="dateOfBirth" id="dateOfBirth" className="form-control"/>
                                    <ErrorMessage name="dateOfBirth" component="div" className="text-danger"/>
                                </div>
                            </div>
                            <div className="col-md-6">


                                <div className="mb-3">
                                    <label htmlFor="idCardNumber" className="form-label">
                                        ID Card
                                    </label>
                                    <Field type="text" name="idCardNumber" id="idCardNumber" className="form-control"/>
                                    <ErrorMessage name="idCardNumber" component="div" className="text-danger"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <Field type="text" name="email" id="email" className="form-control"/>
                                    <ErrorMessage name="email" component="div" className="text-danger"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Customer Type</label>
                                    <div>
                                        <Field
                                            as="select"
                                            name="customerType"
                                        >
                                            {customerType.map((type) => (
                                                <option key={type.id}
                                                        value={JSON.stringify(type)}
                                                        selected={JSON.stringify(type) === initialValues.customerType ? "selected" : ""
                                                        }>{type.name}</option>
                                            ))}
                                        </Field>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">
                                        Address
                                    </label>
                                    <Field type="text" name="address" id="address" className="form-control"/>
                                    <ErrorMessage name="address" component="div" className="text-danger"/>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                        <Link to="/customer">
                            <button className="btn btn-primary">
                                Back to customer list
                            </button>
                        </Link>
                    </Form>
                </Formik>
            </>
        )
    );
}

export default CustomerEdit;