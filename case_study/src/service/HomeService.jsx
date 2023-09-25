import axios from "axios";



export const getAllFromContracts = async () => {
    try {
        const res = await axios.get("http://localhost:8080/contract");
        return res.data
    } catch (e) {
        alert("Access Denied")
    }
}
export const getAllFromCustomer = async () => {
    try {
        const res = await axios.get("http://localhost:8080/customer");
        return res.data
    } catch (e) {
        alert("Access Denied")
    }
}
export const getAllFromFacility = async () => {
    try {
        const res = await axios.get("http://localhost:8080/facility");
        return res.data
    } catch (e) {
        alert("Access Denied")
    }
}
export const createCustomer = async (data) => {
    try {
        const res = await axios.post("http://localhost:8080/customer",data);
        return res
    } catch (e) {
        alert("Access Denied")
    }
}
export const createContract = async (data) => {
    try {
        const res = await axios.post("http://localhost:8080/contract",data);
        return res
    } catch (e) {
        alert("Access Denied")
    }
}
export const createFacility = async (data) => {
    try {
        const res = await axios.post("http://localhost:8080/facility",data);
        return res
    } catch (e) {
        alert("Access Denied")
    }
}
export const findFacilityById = async (facilityId) => {
    try {
        const res = await axios.get(`http://localhost:8080/facility/${facilityId}`);
        return res.data
    } catch (e) {
        alert("Access Denied")
    }
}
export const editFacility = async (data) => {
    try {
        const res = await axios.put(`http://localhost:8080/facility/${data.id}`,data);
        return res
    } catch (e) {
        alert("Access Denied")
    }
}
export const findCustomerById = async (customerId) => {
    try {
        const res = await axios.get(`http://localhost:8080/customer/${customerId}`);
        return res.data
    } catch (e) {
        alert("Access Denied")
    }
}
export const editCustomer = async (data) => {
    try {
        const res = await axios.put(`http://localhost:8080/customer/${data.id}`,data);
        return res
    } catch (e) {
        alert("Access Denied")
    }
}