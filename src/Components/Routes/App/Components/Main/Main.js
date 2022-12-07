import { Box, Container, Grid, Paper } from '@material-ui/core';
import clsx from 'clsx';
import React, { Component } from 'react';

import Contabilidad from './Contabilidad/Contabilidad';
import Chart_dashboard from '../../Partial_Dashboard/Chart_dashboard';
import Deposits from '../Deposits_dashboard';
import Orders from '../Orders_dashboard';

import Cookies from 'universal-cookie'

//usos globales
const cookies = new Cookies()


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleDashboard: this.props.visibleDashboard,
            visibleDashboardContable: this.props.visibleDashboardContable
        }
    }
    //globales
    fecha = this.props.fecha
    Sistema = {
        App: cookies.get('resp'),
        emailApp: cookies.get('email_'),
        keyPsApp: cookies.get('keyPs_'),
        sedeApp: cookies.get('sede_')
    }

    //sistema
    ValideCookies = this.props.ValideCookies
    CambiarEstadoAlert = this.props.CambiarEstadoAlert

    //front
    classes = this.props.classes
    fixedHeightPaper = clsx(this.classes.paper, this.classes.fixedHeight);

    // componentDidMount = () => {
    //     this.ValideCookies()
    // }



    render() {

        return (
            <main className={this.classes.content}>

            </main>
        );
    }
}

export default Main;
