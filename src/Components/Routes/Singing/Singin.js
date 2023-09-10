import { AssistWalkerTwoTone } from '@mui/icons-material';
import { Alert, Box, Button, Grid, Link, Stack, Typography } from '@mui/material'
import React, { Component } from 'react'
import Cookies from 'universal-cookie'

import ValideCookies from '../../Comun/ModulosSis/ValideCookies'

import Login from './Login/Login';
import Registro from './Login/Registro'
import AlertDialogs from '../../Comun/DescriptionAlerts';
import Loading from '../../Comun/Loading';

export default class Singin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleFormAuth: true,
            //loading
            estadoAlert: 'none',
            mensajeAlerta: '',
            severityAlert: 'info',
            //alertDialog
            state_loading: false,
            stateAlertDialogs: true,
            AlertSeverity: '',
            AlertTilte: '',
            AlertMsjLow: '',
            AlertMsjHight: ''
        }
    }

    //VALIDACIÓN DE COOKIES
    cookies = new Cookies()
    resptValideCookies = ValideCookies('Singin', this.cookies, ['aceptLegacy', 'resp', 'email_', 'product', 'pswUser_', 'area_',])


    //FUNCIONALIDAD PARA CLIENTES
    CambiarVisibleFormAuth = () => this.setState({ visibleFormAuth: !this.state.visibleFormAuth })
    CambiarEstadoDescriptionAlerts = (
        stateAlertDialogs_, AlertSeverity_, AlertTilte_,
        AlertMsjLow_, AlertMsjHight_) => {
        this.setState({
            stateAlertDialogs: stateAlertDialogs_,
            AlertSeverity: AlertSeverity_,
            AlertTilte: AlertTilte_,
            AlertMsjLow: AlertMsjLow_,
            AlertMsjHight: AlertMsjHight_
        })
    }
    CambiarEstadoLoading = () => { this.setState({ state_loading: !this.state.state_loading }) }


    componentDidMount = () => {
        //VALIDACIÓN DE COOKIES
        if (this.resptValideCookies.value && this.resptValideCookies.msj.length > 3) {
            this.CambiarEstadoDescriptionAlerts(
                true, 'warning', 'APLICACIÓN VERIFICADA',
                'Recuerda limpiar las cookies de tu browser y tener control sobre ellas',
                this.resptValideCookies.msj
            )
            setTimeout(() => {
                window.location = `http://localhost:3000/${this.resptValideCookies.routeTarjet}`
            }, 3000)
        }
        if (!this.resptValideCookies.value && this.resptValideCookies.msj.length > 3) {
            this.CambiarEstadoDescriptionAlerts(
                true, 'warning', 'APLICACIÓN VERIFICADA',
                'Recuerda limpiar las cookies de tu browser y tener control sobre ellas',
                this.resptValideCookies.msj
            )
            setTimeout(() => {
                window.location = `http://localhost:3000/${this.resptValideCookies.routeTarjet}`
            }, 3000)
        }
    }

    componentDidUpdate = () => {
        if (this.state.stateAlertDialogs) setTimeout(() => this.CambiarEstadoDescriptionAlerts(false, '', '', '', ''), 6500)
        console.log(this.cookies.getAll())
    }

    render() {
        return (
            <Grid container
                sx={{
                    backgroundColor: '#a9a',
                    height: 'auto',
                    //`repeat(auto-fit, minmax('150px', '1fr'))`
                }}
            >

                {/* ALERTAS */}
                <Box
                    sx={{
                        display: this.state.state_loading ? 'block' : 'none',
                        backgroundColor: 'rgba(238, 221, 238, 0.742)',
                        zIndex: 110,
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Loading />
                </Box>
                <Box
                    sx={{
                        display: this.state.stateAlertDialogs ? 'flex' : 'none',
                        width: '100%',
                        height: '60%',
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

                {/* AUTH */}
                <Grid
                    sx={{
                        padding: '0 5%'
                    }}
                    item md={5} xs={12}>

                    <Box
                        sx={{
                            display: this.state.visibleFormAuth ? 'none' : 'true'
                        }}
                    >
                        <Box>
                            <Registro
                                CambiarEstadoDescriptionAlerts={this.CambiarEstadoDescriptionAlerts}
                                CambiarEstadoLoading={this.CambiarEstadoLoading}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: this.state.visibleFormAuth ? 'true' : 'none'
                        }}
                    >
                        <Box >
                            <Login
                                CambiarEstadoDescriptionAlerts={this.CambiarEstadoDescriptionAlerts}
                                CambiarEstadoLoading={this.CambiarEstadoLoading}
                            />
                        </Box>

                    </Box>


                </Grid>

                <Grid
                    sx={{
                        backgroundColor: '#ede'
                    }}
                    item md={7} xs={12}
                >

                    <Box
                        borderLeft={3}
                        borderColor='#989'
                        sx={{
                            padding: '50px 100px 0 100px',
                            height: '100vh'

                        }}
                    >
                        <Typography
                            variant='h6'
                            sx={{
                                width: '100%'
                            }}
                        >
                            {this.state.visibleFormAuth ? 'Si desea incorporar un nuevo usuario' : 'Inicie sesión con usuario registrado'}
                            <Link sx={{ marginLeft: '5px' }} onClick={this.CambiarVisibleFormAuth} >clic aquí</Link>
                        </Typography>

                    </Box>

                </Grid>



            </Grid >
        )
    }
}
