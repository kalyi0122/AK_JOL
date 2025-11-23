import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { myRouter } from './router'
// import Header from './components/Header/Header'
// import { API } from "./API/Data"
// import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}

export default App
