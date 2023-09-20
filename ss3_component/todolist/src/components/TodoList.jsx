import React, {useState} from 'react';

function TodoList() {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");
    const handleAddItem = () => {
        setList(prevState => [...prevState, item]);
        setItem("");
    }
    const handleChange = (event) => {
        setItem(event.target.value);
    }
    return (
        <div>
            <h3>To do list</h3>
            <input value={item} onChange={handleChange} type="text"/>
            <button onClick={handleAddItem}>Submit</button>
            <ul>
                {list.map(element,index => <li key={index}>{element}</li>)}
            </ul>
        </div>
    );
}

export default TodoList;