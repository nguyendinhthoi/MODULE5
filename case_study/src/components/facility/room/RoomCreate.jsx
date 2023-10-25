// eslint-disable-next-line no-unused-vars
import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as Yup from "yup";
import * as homeService from "../../../service/HomeService.jsx"

function RoomCreate() {
    const navigate = useNavigate();
    const createRoom = async (data) => {
        data.numberFloors = parseInt(data.numberFloors);
        data.cost = parseInt(data.cost)
        data.area = parseInt(data.area)
        const res = await homeService.createFacility(data, 2);
        if (res.status === 201) {
            navigate("/");
            toast("Created successfully");
        } else {
            toast.error("Create failed");
        }
    }
    const initialValues = {
        name: "",
        freeService: "",
        img: "",
        cost: 0, // Add this
        area: 0, // Add this
    }
    const validationSchema = {
        name: Yup.string()
            .required("Required")
            .matches(/^([A-Z][a-z]+)((\s[A-Z][a-z]+)+)*$/, "Should not contain numbers"),
        freeService: Yup.string()
            .required("Required"),
        img: Yup.string()
            .required("Required"),
        cost: Yup.number() // Add this
            .required("Required")
            .min(0, "Must be >= 0"),
        area: Yup.number() // Add this
            .required("Required")
            .min(0, "Must be >= 0"),
    }
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Create Room</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    createRoom(values);
                }}
                validationSchema={Yup.object(validationSchema)}
            >
                <Form>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Title</label>
                                <Field type="text" name="name" id="name" className="form-control"/>
                                <ErrorMessage name="name" component="div" className="text-danger"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="area" className="form-label">Usual Area</label>
                                <Field type="number" name="area" id="area" className="form-control"/>
                                <ErrorMessage name="area" component="div" className="text-danger"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cost" className="form-label">Cost</label>
                                <Field type="number" name="cost" id="cost" className="form-control"/>
                                <ErrorMessage name="cost" component="div" className="text-danger"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="img" className="form-label">Image</label>
                                <Field type="text" name="img" id="img" className="form-control"/>
                                <ErrorMessage name="img" component="div" className="text-danger"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="freeService" className="form-label">Free Service</label>
                                <Field type="text" name="freeService" id="freeService" className="form-control"/>
                                <ErrorMessage name="freeService" component="div" className="text-danger"/>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/" className="btn btn-secondary ms-2">Back to Room list</Link>
                </Form>
            </Formik>
        </div>
    );
}

export default RoomCreate;
