// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Field, Form, Formik} from "formik";
import * as libraryService from "../service/LibraryService.jsx";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function LibraryCreate() {
    const navigate = useNavigate();
    const createBook = async (data) => {
        data.quantity = parseInt(data.quantity)
        const res = await libraryService.create(data);
        if (res.status === 201) {
            navigate("/")
            toast("Create successfully");
        } else {
            toast.error("Create Fail");
        }
    }
    return (
        <>
            <h2>Create Book</h2>
            <Formik initialValues={{
                title: "",
                quantity: 0
            }} onSubmit={(values) => {
                createBook(values);
            }}>
                <div>
                    <Form>
                        <label htmlFor="title">Title</label>
                        <Field type="text" id="title" name="title"></Field>
                        <label htmlFor="quantity">Quantity</label>
                        <Field type="number" id="quantity" name="quantity"></Field>
                        <button type="submit">Submit</button>
                    </Form>
                </div>
            </Formik>
        </>
    );
}

export default LibraryCreate;
