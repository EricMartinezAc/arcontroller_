
import React, { Component } from 'react'

//recursos
import './Inicio.css';

//librerias
import { Alert } from '@mui/material';

//components
import Header from './Partials/Header/Header';
import Main from './Partials/Main/Main'
import Aside from './Partials/Aside/Aside'
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
      severityAlert: 'info'
    }
  }

  CambiarEstadoAlert = CambiarEstadoAlert

  cookies = new Cookies()


  componentDidMount = () => {

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
          <Header />
        </header>
        <section className='section_inicio'>
          <main>
            <Main />
          </main>
          <aside>
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
