import './App.css'
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import {Route, Routes} from "react-router-dom";
import Employee from "./components/employee/Employee.jsx";
import Contracts from "./components/contract/Contracts.jsx";
import Customer from "./components/customer/Customer.jsx";
import CustomerCreate from "./components/customer/CustomerCreate.jsx";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import ContractCreate from "./components/contract/ContractCreate.jsx";
import FacilityCreate from "./components/facility/FacilityCreate.jsx";
import FacilityEdit from "./components/facility/FacilityEdit.jsx";
import CustomerEdit from "./components/customer/CustomerEdit.jsx";
import CustomerDelete from "./components/customer/CustomerDelete.jsx";
import ContractDelete from "./components/contract/ContractDelete.jsx";
import Villa from "./components/facility/villa/Villa.jsx";
import Facility from "./components/facility/Facility.jsx";
import ContractEdit from "./components/contract/ContractEdit.jsx";
function App() {
  return (
    <>
        <Header></Header>
        <Routes>
            <Route path="/" element={<Facility/>}></Route>
            <Route path="/facilityCreate" element={<FacilityCreate/>}></Route>
            <Route path="/facilityEdit/:id" element={<FacilityEdit/>}></Route>
            <Route path="/employee" element={<Employee/>}></Route>
            <Route path="/customer" element={<Customer/>}></Route>
            <Route path="/customer/customerCreate" element={<CustomerCreate/>}></Route>
            <Route path="/customer/customerEdit/:id" element={<CustomerEdit/>}></Route>
            <Route path="/customer/customerDelete/:id" element={<CustomerDelete/>}></Route>
            <Route path="/contract" element={<Contracts/>}></Route>
            <Route path="/contract/contractCreate" element={<ContractCreate/>}></Route>
            <Route path="/contract/contractEdit/:id" element={<ContractEdit/>}></Route>
            <Route path="/contract/contractDelete/:id" element={<ContractDelete/>}></Route>

        </Routes>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
    </>
  )
}

export default App
