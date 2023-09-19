import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentInfoComponent from "./components/StudentInfoComponent.jsx";

function App() {
    const student = [
        {
            id: '1',
            name: 'Nguyen Van A',
            age: '29',
            address: 'Quang Ngai'
        },
        {
            id: '2',
            name: 'Nguyen Van B',
            age: '29',
            address: 'Quang Ngai'
        },
        {
            id: '3',
            name: 'Nguyen Van C',
            age: '29',
            address: 'Quang Ngai'
        }
    ]
    return (
        <>
            <StudentInfoComponent student={student}></StudentInfoComponent>
        </>
    )
}

export default App
