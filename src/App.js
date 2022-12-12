import React, { Component } from 'react'

//recursos
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material';

//componentes
import Inicio_ from './Components/Routes/Inicio/Inicio'
import Singin_ from './Components/Routes/Singing/Singin';
import Dashboard_ from './Components/Routes/Dashboard/Dashboard';


export default class App extends Component {

  render() {
    return (
      <div className="App">
        < div className='noRenderable' >
          <p>
            Tu dispositivo no cumple con las características necesarias.
            <br />
            <b>Ponte en contacto con el proveedor del servicio.</b>
          </p>
        </div >
        <Router>
          <Routes>
            <Route exact path='/' element={<Inicio_ />}></Route>
            <Route path='/singin' element={<Singin_ />}></Route>
            <Route usuario path='/Dashboard' element={<Dashboard_ />}></Route>
          </Routes>
        </Router>
      </div >
    )
  }
}
