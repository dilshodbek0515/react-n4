import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Todolist from "./components/todolist/Todolist"
function App() {
  const inc = () => {
    toast.error("world")
  }
  return (
    <>
      <Todolist />
      <ToastContainer />
    </>
  )
}

export default App
