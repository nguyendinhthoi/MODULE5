// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import * as libraryService from "../service/LibraryService.jsx"

function LibraryList() {
    const [books, setBook] = useState([]);

    useEffect(() => {
        getAllBook();
    }, []);

    const getAllBook = async () => {
        setBook(await libraryService.getAll())
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
                    books.map( (element) => (
                    <tr key={element.id}>
                        <td>{element.title}</td>
                        <td>{element.quantity}</td>
                        <td>
                    <span>
                        <Link to={"/edit"}>
                            <button>Edit</button>
                        </Link>
                    </span>
                            <span>
                        <Link to={"/delete"}>
                            <button>Delete</button>
                        </Link>
                    </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>);
}

export default LibraryList;