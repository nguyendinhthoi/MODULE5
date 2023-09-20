import {useState} from "react";

export function useIncrement(addAmount) {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + addAmount);
    }

    return [count, increase]
}
