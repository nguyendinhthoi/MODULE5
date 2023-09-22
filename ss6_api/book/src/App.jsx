import './App.css'
import LibraryList from "./components/LibraryList.jsx";
import {Route, Routes} from "react-router-dom";
import LibraryCreate from "./components/LibraryCreate.jsx";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
function App() {

    return (
        <>
            <Routes>
                <Route path="" element={<LibraryList/>}></Route>
                <Route path="/create" element={<LibraryCreate/>}></Route>
            </Routes>
            <ToastContainer></ToastContainer>
        </>
    )
}

export default App
