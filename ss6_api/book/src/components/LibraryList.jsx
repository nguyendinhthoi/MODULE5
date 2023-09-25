// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import * as libraryService from "../service/LibraryService.jsx"
import LibraryDelete from "./LibraryDelete.jsx";

function LibraryList() {
    const [books, setBook] = useState([]);
    const [modalStatus, setModalStatus] = useState(false);
    const [selectedBook, setSelectedBook] = useState()


    useEffect(() => {
        getAllBook();
    }, []);

    const getAllBook = async () => {
        setBook(await libraryService.getAll())
    }

    const deleteModal = (book) => {
        setSelectedBook(book)
        setModalStatus(true);
        console.log(book)
    }
    const closeModal = () => {
        setSelectedBook(null);
        setModalStatus(false);
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
                            <button onClick={() => deleteModal(element)}>Delete</button>
                    </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <LibraryDelete
                show={modalStatus}
                handleClose={closeModal}
                selectedBook={selectedBook}
            ></LibraryDelete>
        </>);
}

export default LibraryList;