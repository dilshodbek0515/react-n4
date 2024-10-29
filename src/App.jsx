import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  const inc = () => {
    toast("Hello world")
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button onClick={inc}>Toastify</button>
      <ToastContainer />
    </>
  )
}

export default App
