import axios from "axios";

export async function getAllFromContracts() {
    try {
        const res = await axios.get("http://localhost:8080/contract");
        return res.data
    } catch (e){
        alert("Access Denied")
    }
}


export const getAllFromCustomer = async () => {
    try {
        const res = await axios.get("http://localhost:8080/customer");
        return res.data
    } catch (e){
        alert("Access Denied")
    }
}
export const getAllFromFacility = async () => {
    try {
        const res = await axios.get("http://localhost:8080/facility");
        return res.data
    } catch (e){
        alert("Access Denied")
    }
}