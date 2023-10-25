import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import FacilityDelete from "../FacilityDelete.jsx";
import * as homeService from "../../../service/HomeService.jsx"

function Room() {
    const facilityStyle = {
        background: '#F5F5F5', // Soft Gray background color to match header/footer
        color: '#333', // Text color (dark gray)
        fontFamily: 'Arial, sans-serif', // Font family
        padding: '2rem 0', // Padding for content area
    };

    const containerStyle = {
        maxWidth: '960px', // Limit content width for readability
        margin: '0 auto', // Center content horizontally
        padding: '0 20px', // Add spacing to the sides
    };

    const cardStyle = {
        border: '1px solid #ccc', // Add a border to each card
        borderRadius: '8px', // Rounded corners
        marginBottom: '20px', // Spacing between cards
        background: '#F5F5F5', // Soft Gray card background color
    };

    const cardImageStyle = {
        maxWidth: '100%', // Ensure images don't exceed card width
    };

    const cardTitleStyle = {
        fontSize: '1.5rem', // Font size for card titles
        margin: '0', // Remove margin for the card title
    };

    const cardTextStyles = {
        fontSize: '1rem', // Font size for card text
    };
    const [rooms, setRooms] = useState([]);
    const [modalStatus, setModalStatus] = useState(false)
    const [selectedRoom, setSelectedRoom] = useState(null)

    useEffect(() => {
        getAllFacility()
    }, []);

    const getAllFacility = async () => {
        const res = await homeService.getAllFacility(2);
        setRooms(res)
        console.log(res)
    }
    const deleteModal = (room) => {
        setModalStatus(true);
        setSelectedRoom(room);
    }
    const closeModal = () => {
        getAllFacility();
        setModalStatus(false);
        setRooms(null);
    }

    return (
        <>
            <div style={facilityStyle}>
                <Link to="facilityCreate">
                    <button className="btn btn-secondary">Create Service</button>
                </Link>
                <div style={containerStyle}>
                    <h2 style={{textAlign: 'center'}}>Room Service</h2>
                    <div className="row">
                        {rooms.map((element) => (
                            <div key={element.id} className="col-md-4">
                                <div className="card" style={cardStyle}>
                                    <img src={element.img} className="card-img-top" alt="room" style={cardImageStyle}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={cardTitleStyle}>{element.name}</h5>
                                        <span className="d-flex justify-content-between align-items-center">
                                    <p className="card-text"
                                       style={cardTextStyles}>Usual Areas: {element.area} sq. ft</p>
                                             <p className="card-text" style={cardTextStyles}>
                                            <ion-icon name="cash-outline"></ion-icon><b>{element.cost}</b>$
                                        </p>
                                        </span>
                                        <p className="card-text"
                                           style={cardTextStyles}>Free Service: {element.freeService}</p>
                                    </div>
                                    <div className="card-icons">
                                        <Link to={`facilityEdit/${element.id}`}>
                                            <i className="fa">&#xf044;</i>
                                        </Link>
                                        <i className="fa">&#xf06e;</i>
                                        <i onClick={() => deleteModal(element)} className="material-icons">&#xe872;</i>
                                    </div>
                                </div>
                                <FacilityDelete
                                    show={modalStatus}
                                    handleClose={closeModal}
                                    selectedFacility={selectedRoom}
                                ></FacilityDelete>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Room;