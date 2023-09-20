import React, {useState} from 'react';
import {useIncrement} from "../utils/Utils.jsx";


function Count1() {
    const [count,setCount] = useIncrement(2)
    const increase = () => {
        setCount();
    }
    return (
        <div>
            <div>
                <h3>Count : {count}</h3>
                <button type={"submit"} onClick={increase}>Add 2</button>
            </div>
        </div>
    );
}

export default Count1;