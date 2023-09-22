// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import * as todoListService from "../service/TodoListService.jsx"
import {Field, Form, Formik} from "formik";
import {toast} from "react-toastify";

function TodoList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        getTodoList();
    }, []);

    const getTodoList = async () => {
        setList(await todoListService.getAll());
    }
    const createTodoList = async (data) => {
        const res = await todoListService.create(data);
        getTodoList();
        if (res.status === 201) {
            toast("Create successfully");
        } else {
            toast("error1");
        }
    }
    return (
        <>
            {/* eslint-disable-next-line no-global-assign */}
            <Formik initialValues={{name: ""}} onSubmit={(values) => {
                createTodoList(values);
            }}>
                <div>
                    <Form>
                        <h3>To do List</h3>
                        <Field name="name" type="text"/>
                        <button type="submit">Submit</button>
                    </Form>
                </div>
            </Formik>
            <ul>
                {list.map((element) => <li key={element.id}>{element.name}</li>)}
            </ul>
        </>

    );
}

export default TodoList;



