import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import MyContext from './context/data/myContext'
import MyState from './context/data/myState'

function App() {
  return  (
    <MyState>
      <RouterProvider router={router}/>
    </MyState>
  )
}

export default App
