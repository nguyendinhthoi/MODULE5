// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import * as libraryService from "../service/LibraryService.jsx"

function LibraryDelete(data, status) {
    const [showModal, setShowModal] = useState(status);
    console.log(status)
    const handleDelete = () => {
        libraryService.deleteBook(data.id);
    }

    useEffect(() => {
        if (showModal === true) {
            setShowModal(true);
        } else if (showModal === false) {
            setShowModal(false);
        }
    }, [showModal]);

    return (
        <>
            {showModal && (
                <div className="modal" tabIndex="-1" style={{display: 'block'}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Deletion</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                        onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <p>Do you want to delete?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                        onClick={() => setShowModal(false)}>Close
                                </button>
                                <button type="button" className="btn btn-primary" onClick={handleDelete}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default LibraryDelete;
