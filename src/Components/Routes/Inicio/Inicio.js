
import React, { Component } from 'react'

//recursos
import './Inicio.css';

//librerias
import { Alert } from '@mui/material';

//components
import Header from './Partials/Header/Header';
import Main from './Partials/Main/Main'
import Aside from './Partials/Aside/Aside'
import AlertCookies from '../Comun/Politicas/cookies/AlertCookies'
import Footer from './Partials/Footer/Footer';

//funcionaidades
import Cookies from 'universal-cookie'
import ValideCookies from '../../Comun/FuncionesSistema/ValideCookies'

import { CambiarEstadoLoading, CambiarEstadoAlert } from '../../Comun/FuncionesSistema/AlertDialogs';
import ValideInputREGEXP from '../../Comun/FuncionesSistema/ValideInputREGEXP';


//componentes

export default class Inicio extends Component {

  constructor() {
    super();
    this.state = {
      //de componenetes
      estadoAlert: 'none',
      mensajeAlerta: '',
      severityAlert: 'info',

      stat_acept_cookies: false,
      stat_inicio_sesion: true,
    }
  }

  cookies = new Cookies()
  CambiarEstadoAlert = CambiarEstadoAlert


  PermitirInicioSesion = (value) => {
    this.setState({
      stat_inicio_sesion: value
    })
  }

  AceptacionCookies = () => {
    this.cookies.set('aceptLegacy', true, {
      path: '/',
      secure: true,
      sameSite: 'strict',
      maxAge: 360000
    })
    this.setState({ stat_acept_cookies: true })
    this.setState({ stat_inicio_sesion: true })

  }

  componentDidMount = () => {
    this.cookies.remove('aceptLegacy', {
      path: '/',
      secure: true,
      sameSite: 'strict',
      maxAge: 36000
    })
    if (this.cookies.get('sesionActiva')) {
      window.location = '/Dashboard'
    }
  }

  componentDidUpdate = () => {
    if (this.state.loginAuth) {
      ValideCookies('inicio', this.cookies, this.CambiarEstadoAlert)
    }
  }


  render() {
    return (
      <React.Fragment>
        <header>
          <Header
            stat_inicio_sesion={this.state.stat_inicio_sesion}
          />
        </header>
        <section className='section_alertCookies'
          style={{
            display: this.state.stat_acept_cookies ? 'none' : 'block'
          }}>
          <AlertCookies
            AceptacionCookies={this.AceptacionCookies}
            PermitirInicioSesion={this.PermitirInicioSesion}
          />
        </section>
        <section className='section_inicio'>
          <main>
            <Main />
          </main>
          <aside className='aside_inicio'>
            <Aside />
          </aside>
        </section>
        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    )
  }
}
