import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import Header from './components/Header'
import Search from "./components/Search"


function App() {


  return (
    <div className='container'>
      
        <Header />
        <Search />

    </div>
  )
}

export default App
