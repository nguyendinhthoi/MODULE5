import React, {useState} from 'react';
import {useIncrement} from "../utils/Utils.jsx";

function Count() {
    const addAmount = 1;
    const initial = 0;

    const [count, setCount] = useIncrement(addAmount,initial)
    const increase = () => {
        setCount()
    }
    return (
        <div>
            <h3>Count : {count}</h3>
            <button type={"submit"} onClick={increase}>Add 1</button>
        </div>
    );
}

export default Count;