import React, {useState} from 'react';
import VillaCreate from "./villa/VillaCreate.jsx";
import HouseCreate from "./house/HouseCreate.jsx";
import RoomCreate from "./room/RoomCreate.jsx";

function FacilityCreate() {
    const [choice, setChoice] = useState(1)
    const handleCreate = (number) => {
        setChoice(number);
    }
    return (<>
            <button onClick={() => handleCreate(1)} className="btn btn-primary">
                Villa
            </button>
            <button onClick={() => handleCreate(2)} className="btn btn-primary">
                House
            </button>
            <button onClick={() => handleCreate(3)} className="btn btn-primary">
                Room
            </button>
            {choice && ((choice === 1) ? <VillaCreate/> : (choice === 2) ? <HouseCreate/> : (choice === 3) ?
                    <RoomCreate/> : null)}
        </>);
}

export default FacilityCreate;