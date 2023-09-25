// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import * as homeService from "../../service/HomeService.jsx"

function Facility() {
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

    const [facility, setFacility] = useState([])
    useEffect(() => {
        getAllFromFacility()
    }, []);
    const getAllFromFacility =async () => {
        const facility = await homeService.getAllFromFacility()
        setFacility(facility);
    }
    return (
        <div style={facilityStyle}>
            <div style={containerStyle}>
                <h2 style={{ textAlign: 'center' }}>Our Facilities</h2>
                <div className="row">
                    {facility.map((element) => (
                        <div key={element.id} className="col-md-4">
                            <div className="card" style={cardStyle}>
                                <img src={element.img} className="card-img-top" alt="Room" style={cardImageStyle} />
                                <div className="card-body">
                                    <h5 className="card-title" style={cardTitleStyle}>{element.name}</h5>
                                    <p className="card-text" style={cardTextStyles}>Room size: {element.size} sq. ft</p>
                                </div>
                                <div className="card-icons">
                                    <i className="fa">&#xf044;</i>
                                    <i className="fa">&#xf06e;</i>
                                    <i className="material-icons">&#xe872;</i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Facility;
