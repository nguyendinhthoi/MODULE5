
import './App.css'
import TodoList from "./components/TodoList.jsx";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
function App() {
    return (
        <>
            <TodoList></TodoList>
            <ToastContainer></ToastContainer>
        </>
    )
}

export default App
