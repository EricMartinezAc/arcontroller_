
import React, { Component } from 'react'

//recursos
import './Inicio.css';

//librerias

//components

import Loading from '../../Comun/Loading';
import Header from './Partials/Header/Header';
import Main from './Partials/Main/Main'
import Aside from './Partials/Aside/Aside'
import AlertCookies from '../Comun/Politicas/cookies/AlertCookies'
import Footer from './Partials/Footer/Footer';

//funcionaidades
import Cookies from 'universal-cookie'
import ValideCookies from '../../Comun/FuncionesSistema/ValideCookies'


import AlertDialogs from '../../Comun/DescriptionAlerts';
import ValideInputREGEXP from '../../Comun/FuncionesSistema/ValideInputREGEXP';
import { Box } from '@mui/material';



//componentes

export default class Inicio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //de componenetes
      estadoAlert: 'none',
      mensajeAlerta: '',
      severityAlert: 'info',

      state_loading: false,
      stateAlertDialogs: false,
      AlertSeverity: null,
      AlertTilte: null,
      AlertMsjLow: null,
      AlertMsjHight: null,

      stat_acept_cookies: false,
      stat_inicio_sesion: false,
    }
  }

  cookies = new Cookies()
  CambiarEstadoDescriptionAlerts(stateAlertDialogs_, AlertSeverity_, AlertTilte_, AlertMsjLow_, AlertMsjHight_) {
    console.log(
      stateAlertDialogs_ + AlertSeverity_ + AlertTilte_ + AlertMsjLow_ + AlertMsjHight_
    );
    this.setState({
      stateAlertDialogs: stateAlertDialogs_,
      AlertSeverity: AlertSeverity_,
      AlertTilte: AlertTilte_,
      AlertMsjLow: AlertMsjLow_,
      AlertMsjHight: AlertMsjHight_
    })
  }

  CambiarEstadoLoading = () => { this.setState({ state_loading: !this.state.state_loading }) }

  AceptacionCookies = () => {
    this.cookies.set('aceptLegacy', true, {
      path: '/',
      secure: true,
      sameSite: 'strict',
      maxAge: 360000
    })
    this.setState({ stat_acept_cookies: true })
    this.setState({ stat_inicio_sesion: true })
    this.CambiarEstadoDescriptionAlerts(
      true, 'success', 'Políticas de manejo de datos',
      'Ahora puedes usar al aplicación.',
      'Da clic en inicio de seión para continuar'
    )
  }
  DenegarCookies = () => {
    this.CambiarEstadoDescriptionAlerts(
      true, 'warning', 'Políticas de manejo de datos',
      'Lo sentimos, las cookies son necesarias para el funcionamiento del sistema',
      'Puedes ver y usar otros servicios'
    )
  }

  componentDidMount = () => {
    if (this.state.stateAlertDialogs) {
      setTimeout(() => {
        this.setState({ stateAlertDialogs: false })
      }, 3000);
    }
    this.cookies.remove('aceptLegacy', {
      path: '/',
      secure: true,
      sameSite: 'strict',
      maxAge: 36000
    })
    if (this.cookies.get('sesionActiva')) {
      this.CambiarEstadoDescriptionAlerts(
        true, 'success', 'Sesión acctiva',
        'Ya se ecuentra una sesión activa como ',
        this.cookies.get('email')
      )
      setTimeout(() => {
        window.location = '/Dashboard'
      }, 3000);
    }

  }

  componentDidUpdate = () => {
    setTimeout(() => {
      this.CambiarEstadoDescriptionAlerts(false, '', '', '', '')
    }, 4000);
  }


  render() {
    return (
      <React.Fragment>
        <Box
          sx={{
            display: this.state.state_loading ? 'flex' : 'none',
            backgroundColor: 'rgba(238, 221, 238, 0.742)',
            zIndex: 10,
            position: 'absolute',
            width: '100%',
            height: '125%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Loading />
        </Box>
        <Box
          sx={{
            display: this.state.stateAlertDialogs ? 'flex' : 'none',
            zIndex: 10,
            width: '100%',
            height: '60%',
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          < AlertDialogs
            AlertSeverity={this.state.AlertSeverity}
            AlertTilte={this.state.AlertTilte}
            AlertMsjLow={this.state.AlertMsjLow}
            AlertMsjHight={this.state.AlertMsjHight}
          />
        </Box>
        <header>
          <Header
            CambiarEstadoLoading={this.CambiarEstadoLoading}
            stat_inicio_sesion={this.state.stat_inicio_sesion}
          />
        </header>
        <section className='section_alertCookies'
          style={{
            display: this.state.stat_acept_cookies ? 'none' : 'block'
          }}>
          <AlertCookies
            CambiarEstadoDescriptionAlerts={this.CambiarEstadoDescriptionAlerts}
            AceptacionCookies={this.AceptacionCookies}
            DenegarCookies={this.DenegarCookies}
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
