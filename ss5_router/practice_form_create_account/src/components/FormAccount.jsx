import React from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";

function FormAccount() {
    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                }}
                onSubmit={(values) => {
                    console.log(values);
                    toast("Create successfully");
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Name is required"),
                    email: Yup.string()
                        .required("Email is required")
                        .matches(/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/, "Invalid email format"),
                    phone: Yup.string()
                        .required("Phone is required")
                        .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
                })}
            >
                <div className="container mt-5">
                    <h1>Contact Form</h1>
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <Field type="text" name="name" id="name" className="form-control" />
                            <ErrorMessage name="name" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <Field type="text" name="email" id="email" className="form-control" />
                            <ErrorMessage name="email" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <Field type="text" name="phone" id="phone" className="form-control" />
                            <ErrorMessage name="phone" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <Field as="textarea" name="message" id="message" className="form-control" />
                            <ErrorMessage name="message" component="div" className="text-danger" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                </div>
            </Formik>
        </>
    );
}

export default FormAccount;
