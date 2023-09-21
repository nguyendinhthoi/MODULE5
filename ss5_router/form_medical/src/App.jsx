import './App.css'
import FormMedical from "./components/FormMedical.jsx";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {

    return (
        <>
            <FormMedical></FormMedical>
            <ToastContainer></ToastContainer>
        </>
    )
}

export default App
