// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import * as libraryService from "../service/LibraryService.jsx"
import LibraryDelete from "./LibraryDelete.jsx";

function LibraryList() {
    const [books, setBook] = useState([]);
    const [deleteButtonId, setDeleteButtonId] = useState(null);
    const [modalStatus, setModalStatus] = useState(false);

    useEffect(() => {
        getAllBook();
    }, []);

    const getAllBook = async () => {
        setBook(await libraryService.getAll())
    }

    const deleteModal = (id) => {
        setDeleteButtonId(id);
        setModalStatus(true);
    }

    return (
        <>
            <h2>Library</h2>
            <Link to="/create">Add new book</Link>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    books.map((element) => (
                        <tr key={element.id}>
                            <td>{element.title}</td>
                            <td>{element.quantity}</td>
                            <td>
                    <span>
                        <Link to={`/edit/${element.id}`}>
                            <button>Edit</button>
                        </Link>
                            <button onClick={()=>deleteModal(element.id)}>Delete</button>
                    </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {deleteButtonId != null && (<LibraryDelete data = {deleteButtonId} status ={modalStatus}></LibraryDelete>)}

        </>);
}

export default LibraryList;