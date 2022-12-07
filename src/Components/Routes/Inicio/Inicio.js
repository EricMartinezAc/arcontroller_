
import React, { Component } from 'react'

//funcionaidades
import Cookies from 'universal-cookie'
import ValideCookies from '../../Comun/FuncionesSistema/ValideCookies'

//recursos
import './Inicio.css';

//librerias
import { Alert } from '@mui/material';

//componentes
import Login from './Partials/Login';
import Registro from './Partials/Registro';

export default class Inicio extends Component {

  constructor() {
    super();
    this.state = {
      //de componenetes
      visibleFormAuth: true,
      estadoLoading: 'none',
      estadoAlert: 'none',
      mensajeAlerta: '',
      severityAlert: 'info'
    }
  }

  cookies = new Cookies()

  ExprRegulares = {
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    usuario: /^[a-zA-Z]{4,16}$/, // Letras entre 4 a 16,
    extCorreo: /^([^]+)@(\w+).(\w+)$/, // para extraer correo
  }

  CambiarEstadoLoading = (state_) => {
    if (state_ === 'block') {
      console.log('espere por favor..');
    }
    if (state_ === 'none') {
      console.log('respuesta recibida');
    }
    this.setState({ estadoLoading: state_ })
  }
  CambiarEstadoAlert = (state_, mensajeAlerta_, severityAlert_) => {
    this.setState({ estadoAlert: state_, mensajeAlerta: mensajeAlerta_, severityAlert: severityAlert_ })
  }
  CambiarFormAuth = () => { this.setState({ visibleFormAuth: !this.state.visibleFormAuth }) }

  componentDidMount = () => {
    ValideCookies('inicio', this.cookies, this.CambiarEstadoAlert)
  }


  render() {

    if (this.state.visibleFormAuth) {

      return (
        <div>
          <div className="Content">
            <Alert
              style={{ display: this.state.estadoAlert, width: '60%', position: 'absolute', top: '10px', zIndex: '100' }}
              severity={this.state.severityAlert}
            >{this.state.mensajeAlerta}
            </Alert>
            <div className='authContent'>
              <Login
                estadoLoading={this.state.estadoLoading}
                estadoAlert={this.state.estadoAlert}
                ExprRegulares={this.ExprRegulares}
                mensajeAlerta={this.state.mensajeAlerta}
                CambiarEstadoLoading={this.CambiarEstadoLoading}
                CambiarEstadoAlert={this.CambiarEstadoAlert}
                CambiarFormAuth={this.CambiarFormAuth}
              />
            </div>

          </div>
        </div>
      )
    }
    if (this.state.visibleFormAuth === false) {
      return (
        <div>
          <div className="Content">
            <Alert
              style={{ display: this.state.estadoAlert, width: '60%', position: 'absolute', top: '10px', zIndex: '100' }}
              severity={this.state.severityAlert}
            >{this.state.mensajeAlerta}
            </Alert>
            <div className='authContent'>
              <Registro
                estadoLoading={this.state.estadoLoading}
                estadoAlert={this.state.estadoAlert}
                ExprRegulares={this.ExprRegulares}
                mensajeAlerta={this.state.mensajeAlerta}
                CambiarEstadoLoading={this.CambiarEstadoLoading}
                CambiarEstadoAlert={this.CambiarEstadoAlert}
                CambiarFormAuth={this.CambiarFormAuth}
              />
            </div>
          </div>
        </div>
      )
    }
  }
}
