// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {Field, Form, Formik} from "formik";
import {useNavigate, useParams} from "react-router-dom";
import * as libraryService from "../service/LibraryService.jsx";
import {toast} from "react-toastify";

function LibraryEdit() {
    const param = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const findBookById = async (bookId) => {
        const res = await libraryService.findById(bookId);
        setBook(res)
    }
    const editBook = async (data) => {
        const res = await libraryService.edit(data, param.id);
        if (res.status === 201) {
            navigate("/");
            toast("Edit successfully");
        } else {
            toast.error("Edit fail");
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            if (param.id != null) {
                const bookData = await findBookById(param.id);
                setBook(bookData);
                console.log(bookData)
            }
        };

        fetchData();
    }, [param.id]);


    const initialValues =
        book ? {
                title: book.title,
                quantity: book.quantity
            }
            : {
                title: "",
                quantity: 0
            }


    return (
        <>
            <h2>Edit book</h2>
            <Formik initialValues={
                initialValues
            } onSubmit={(values) => {
                editBook(values);
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

export default LibraryEdit;