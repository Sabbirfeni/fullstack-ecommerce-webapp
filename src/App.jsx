import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import MyContext from './context/data/myContext'
import MyState from './context/data/myState'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
function App() {
  return  (
    <MyState>
      <RouterProvider router={router}/>
      <ToastContainer />
    </MyState>
  )
}

export default App
