import axios from "axios";

export const getAll = async () => {
    try {
        const res = await axios.get("http://localhost:8081/todoList");
        return res.data;
    } catch (e) {
        alert("error")
    }
}


export const create = async (data) => {
    try {
        const res = await axios.post("http://localhost:8081/todoList", data);
        return res;
    } catch (e) {
        alert("error1")
    }
}