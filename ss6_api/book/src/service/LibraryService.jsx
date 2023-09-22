import axios from "axios";


export const getAll = async () => {
    try {
        const res = await axios.get("http://localhost:8080/library")
        return res.data;
    } catch (e) {
        alert("Not have data")
    }
}

export const create = async (data) => {
    try {
        const res = await axios.post("http://localhost:8080/library", data)
        return res;
    } catch (e) {
        alert("Data is invalid")
    }
}