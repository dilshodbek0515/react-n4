import "./Todolist.css"
import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { FaTrash } from "react-icons/fa";
const Todolist = () => {
    const [text, setText] = useState("")
    const [data, setData] = useState([])
    const [editId, setEditId] = useState(null)
    const [editTask, setEditTask] = useState("")
    const refresh = (event) => {
        event.preventDefault()
        if (!text.trim()) {
            return null
        }
        let date = new Date()
        let newTodos = {
            id: uuidv4(),
            text,
            time: `${date.getHours()} : ${date.getMinutes()}`
        }

        setData([...data, newTodos])
        setText("")
    }

    const Delete = (id) => {
        console.log(id);
        setData(data.filter(item => item.id !== id))
    }

    return (
        <div className='my-0 m-auto w-[600px] h-[600px] rounded-xl bg-slate-400 flex items-center flex-col gap-8 p-5'>
            <form onSubmit={refresh} action="" className="w-[400px] h-[50px] flex rounded-xl">
                <input value={text} onChange={(e) => setText(e.target.value)} type="text" className="text-blue-500 h-full flex-1 border-transparent outline-none bg-white rounded-s-xl px-5" placeholder="Enter your task!" />
                <button className="border border-black w-32 h-full border-transparent rounded-e-xl bg-blue-700 text-white hover:opacity-50">Create</button>
            </form>
            <div className="w-[540px] h-full overflow-auto rounded-xl shadow-2xl bg-slate-300 p-7 flex flex-col gap-10">
                {
                    data?.map((item) => (
                        <div className="CREATE flex items-center justify-between" key={item.id}>
                            <span className="bg-green-500 rounded-lg w-32 h-auto py-1 px-2 flex-wrap break-normal break-all text-white">{item.text}</span>
                            <button className="bg-yellow-400 rounded-lg w-[80px] h-[30px] flex justify-center items-center text-white">Edit</button>
                            <span className="bg-blue-700 rounded-lg w-[80px] h-[30px] flex justify-center items-center text-white">{item.time}</span>
                            <button className="bg-red-600 rounded-lg w-[80px] h-[30px] flex justify-center items-center text-white" onClick={() => Delete(item.id)}><FaTrash /></button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Todolist