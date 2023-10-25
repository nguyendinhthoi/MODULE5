import React, {useEffect, useState} from 'react';
import Villa from "./villa/Villa.jsx";
import House from "./house/House.jsx";
import Room from "./room/Room.jsx";

function Facility() {
    const [choice, setChoice] = useState(1);


    const handleFacility = (number) => {
        setChoice(number)
    }

    useEffect(() => {
        setChoice(choice)
    }, [choice]);


    return (
        <>

            <button onClick={() => handleFacility(1)} className="btn btn-primary">
                Villa
            </button>
            <button onClick={() => handleFacility(2)} className="btn btn-primary">
                House
            </button>
            <button onClick={() => handleFacility(3)} className="btn btn-primary">
                Room
            </button>
            {
                choice && (
                    (choice === 1) ? <Villa/> : (choice === 2) ? <House/> : (choice === 3) ? <Room/> : null
                )
            }

        </>
    );
}

export default Facility;