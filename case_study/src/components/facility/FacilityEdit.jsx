// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as homeService from "../../service/HomeService.jsx"
import {Link, useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import * as Yup from "yup"

function ContractEdit() {
    const {id} = useParams()
    const navigate = useNavigate();
    const [facility, setFacility] = useState(null);

    const formCenter = {
        marginTop: '100px',  // Add margin-top
    }

    const findFacility = async (facilityId) => {
        const res = await homeService.findFacilityById(facilityId);
        console.log(res)
        setFacility(res)
        console.log(facility)
    }

    const editFacility = async (data) => {
        const res = await homeService.editFacility(data)
        if (res.status === 200) {
            navigate("/")
            toast("Edited successfully")
        } else {
            toast.error("Create fail")
        }
    }

    useEffect(() => {
        findFacility(id);
    }, [id]);

    const initialValues =
        facility ? {
            id: facility.id,
            name: facility.name,
            size: facility.size,
            numberFloors: facility.numberFloors,
            img: facility.img
        } : {
            name: "",
            size: 0,
            numberFloors: 0,
            img: ""
        }
    if (!facility) {
        return null
    }

    return (
        <>
            <Formik initialValues={
                initialValues
            } onSubmit={(values) => {
                editFacility(values)
            }} validationSchema={Yup.object({
                name: Yup.string()
                    .required("Not Empty")
                    .matches(/^([A-Z][a-z]+)((\s[A-Z][a-z]+)+)*$/, "Dont have number"),
                size: Yup.number()
                    .required("Not Empty")
                    .min(1, "Must be > 0"),
                numberFloors: Yup.number()
                    .required("Not Empty")
                    .min(1, "Must be > 0"),
                img: Yup.string()
                    .required("Not Empty"),
            })}
            >
                <Form className="container" style={formCenter}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Title
                                </label>
                                <Field type="text" name="name" id="contractNumber" className="form-control"/>
                                <ErrorMessage name="name" component="div" className="text-danger"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="size" className="form-label">
                                    Size
                                </label>
                                <Field type="number" name="size" id="size" className="form-control"/>
                                <ErrorMessage name="size" component="div" className="text-danger"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="numberFloors" className="form-label">
                                    Number of Floors
                                </label>
                                <Field type="number" name="numberFloors" id="numberFloors"
                                       className="form-control"/>
                                <ErrorMessage name="numberFloors" component="div" className="text-danger"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="img" className="form-label">
                                    Image
                                </label>
                                <Field type="text" name="img" id="img" className="form-control"/>
                                <ErrorMessage name="img" component="div" className="text-danger"/>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    <Link to="/">
                        <button className="btn btn-primary">
                            Back to customer list
                        </button>
                    </Link>
                </Form>
            </Formik>
        </>
    );

}

export default ContractEdit;