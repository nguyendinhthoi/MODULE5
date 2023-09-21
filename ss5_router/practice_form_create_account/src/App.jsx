import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormAccount from "./components/FormAccount.jsx";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
function App() {
    return (
        <>
            <FormAccount/>
            <ToastContainer></ToastContainer>
        </>
    )
}

export default App
