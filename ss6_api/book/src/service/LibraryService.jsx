import axios from "axios";

export const getAll = async () => {
    try {
        const res = await axios.get("http://localhost:8080/library")
        return res.data;
    } catch (e) {
        alert("Not have data");
    }
}

export const create = async (data) => {
    try {
        const res = await axios.post("http://localhost:8080/library", data)
        return res;
    } catch (e) {
        alert("Data is invalid");
    }
}

export const findById = async (bookId) => {
    try {
        const res = await axios.get(`http://localhost:8080/library/${bookId}`)
        return res.data;
    } catch (e) {
        alert("ID not found");
    }
};
export const edit = async (data) => {
    try {
        const res = await axios.put(`http://localhost:8080/library/${data.id}`, data)
        return res;
    } catch (e) {
        alert("Edit sai");
    }
};
export const deleteBook = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:8080/library/${id}`)
        return res;
    } catch (e) {
        alert("Delete fail");
    }
}

