import {useState} from "react";

export function useIncrement(addAmount,initial) {
    const [count, setCount] = useState(initial);

    function increase() {
        setCount(count + addAmount);
    }

    return [count, increase]
}
