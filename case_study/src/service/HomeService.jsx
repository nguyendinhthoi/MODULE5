import axios from "axios";


export const getAll = async (name, page, code) => {
    try {
        let res;
        code === 0 && (res = await axios.get(`http://localhost:8080/facility/?name=${name}&_page=${page}&_limit=5`));
        code === 1 && (res = await axios.get(`http://localhost:8080/customer?fullName_like=${name}&_page=${page}&_limit=5`));
        code === 2 && (res = await axios.get(`http://localhost:8080/contract/?contractNumber_like=${name}&_page=${page}&_limit=5`))
        return res;
    } catch (e) {
        alert("Access Denied");
    }
}
export const getAllByPage = async (page, limit, code) => {
    try {
        let res;
        code === 0 && (res = await axios.get(`http://localhost:8080/facility/?_page=${page}&_limit=${limit}`));
        code === 1 && (res = await axios.get(`http://localhost:8080/customer/?_page=${page}&_limit=${limit}`));
        code === 2 && (res = await axios.get(`http://localhost:8080/contract/?_page=${page}&_limit=${limit}`))
        return res.data
    } catch (e) {
        alert("Access Denied")
    }
}

export const getAllFacility = async (code) => {
    try {
        let res;
        code === 0 && (res = await axios.get("http://localhost:8080/villa"))
        code === 1 && (res = await axios.get("http://localhost:8080/house"))
        code === 2 && (res = await axios.get("http://localhost:8080/room"))
        return res.data

    } catch (e) {
        alert("Access Denied")
    }
}
export const getAllEmployee = async () => {
    try {
        const res = await axios.get("http://localhost:8080/employee")
        return res.data
    } catch (e) {
        alert("Access Denied")
    }
}
export const create = async (data, code) => {
    try {
        let res;
        code === 1 && (res = await axios.post("http://localhost:8080/customer", data))
        code === 2 && (res = await axios.post("http://localhost:8080/contract", data))
        return res
    } catch (e) {
        alert("Access Denied")
    }
}
export const createFacility = async (data, code) => {
    try {
        let res;
        code === 0 && (res = await axios.post("http://localhost:8080/villa", data))
        code === 1 && (res = await axios.post("http://localhost:8080/house", data))
        code === 2 && (res = await axios.post("http://localhost:8080/room", data))
        return res;
    } catch (e) {
        alert("Access Denied")
    }
}
export const findById = async (id, code) => {
    try {
        let res;
        code === 1 && (res = await axios.get(`http://localhost:8080/customer/${id}`))
        code === 2 && (res = await axios.get(`http://localhost:8080/contract/${id}`))
        return res.data
    } catch (e) {
        alert("Access Denied")
    }
}
export const edit = async (data, code) => {
    try {
        let res;
        code === 1 && (res = await axios.put(`http://localhost:8080/customer/${data.id}`, data))
        code === 2 && (res = await axios.put(`http://localhost:8080/contract/${data.id}`, data))
        return res;
    } catch (e) {
        alert("Access Denied")
    }

}


// export const createCustomer = async (data) => {
//     try {
//         const res = await axios.post("http://localhost:8080/customer", data);
//         return res
//     } catch (e) {
//         alert("Access Denied")
//     }
// }
// export const createContract = async (data) => {
//     try {
//         const res = await axios.post("http://localhost:8080/contract", data);
//         return res
//     } catch (e) {
//         alert("Access Denied")
//     }
// }
// export const createFacility = async (data) => {
//     try {
//         const res = await axios.post("http://localhost:8080/facility", data);
//         return res
//     } catch (e) {
//         alert("Access Denied")
//     }
// }
// export const findFacilityById = async (facilityId) => {
//     try {
//         const res = await axios.get(`http://localhost:8080/facility/${facilityId}`);
//         return res.data
//     } catch (e) {
//         alert("Access Denied")
//     }
// }
// export const editFacility = async (data) => {
//     try {
//         const res = await axios.put(`http://localhost:8080/facility/${data.id}`, data);
//         return res
//     } catch (e) {
//         alert("Access Denied")
//     }
// }
// export const findCustomerById = async (customerId) => {
//     try {
//         const res = await axios.get(`http://localhost:8080/customer/${customerId}`);
//         return res.data
//     } catch (e) {
//         alert("Access Denied")
//     }
// }
// export const editCustomer = async (data) => {
//     try {
//         const res = await axios.put(`http://localhost:8080/customer/${data.id}`, data);
//         return res
//     } catch (e) {
//         alert("Access Denied")
//     }
// }
export const deleteCustomer = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:8080/customer/${id}`)
        return res;
    } catch (e) {
        alert("Access Denied");
    }
}
export const deleteFacility = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:8080/facility/${id}`)
        return res;
    } catch (e) {
        alert("Access Denied");
    }
}
export const deleteContract = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:8080/contract/${id}`)
        return res;
    } catch (e) {
        alert("Access Denied");
    }
}


export const getAllCustomerType = async () => {
    try {
        const res = await axios.get("http://localhost:8080/customerType");
        console.log(res)
        return res.data
    } catch (e) {
        alert("Access Denied")
    }
}
