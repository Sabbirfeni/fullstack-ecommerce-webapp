import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import MyContext from './context/data/myContext'
import MyState from './context/data/myState'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@mui/material/styles';
import { colorTheme } from './theme/colorTheme'

function App() {
  return  (
    <MyState>
      <ThemeProvider theme={colorTheme}>
        <RouterProvider router={router}/>
        <ToastContainer />
      </ThemeProvider>
    </MyState>
  )
}

export default App
