import { Alert, AppBar, Box, Divider, Drawer, Grid, IconButton, List } from '@mui/material';
import React, { Component } from 'react'

//recursos
import './Dashboard.css';
import Cookies from 'universal-cookie'
import ValideCookies from '../../Comun/ModulosSis/ValideCookies'
import RestarApp from '../../Comun/ModulosSis/RestarApp';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import clsx from 'clsx';

//componentes
//-Header
import ToolbarDashboard from '../Comun/Toolbar_dashboard';
import ListItemsPrincDashboard from '../Comun/ListItems_princ_dashboard';
import ListItemsSecundDashboard from '../Comun/ListItems_secund_dashboard';

//-Main
import ViewAyuda from './Components/viewAyuda/View';
import ViewConfig from './Components/viewConfig/View';
import ViewDashboard from './Components/viewDashboard/View';
import ViewDashboardContable from './Components/viewDashboardContable/View';
import ViewDashboardMtto from './Components/viewDashboardMtto/View';
import ViewHSEQ from './Components/viewHSEQ/View';
import ViewLocalidades from './Components/viewLocalidades/View';
import ViewLogist from './Components/viewLogistica/View';
import ViewMarcoLegal from './Components/viewMarcoLeg/View';
import ViewNubeVirtual from './Components/viewNubeVirtual/View';
import ViewPlaneacion from './Components/viewPlaneacion/View';
import ViewRRHH from './Components/viewRRHH/View';

import Footer from '../Comun/Footer/Footer.js'


export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openDrawer: 'none',
            estadoAlert: 'none',
            mensajeAlerta: '',
            severityAlert: 'success',
            visibleVentana:
            {
                viewDashboard: 'block',
                viewDashboardContable: 'none',
                viewDashboardMtto: 'none',
                viewLocalidades: 'none',
                viewRRHH: 'none',
                viewLogist: 'none',
                viewPlaneacion: 'none',
                viewHSEQ: 'none',
                viewMarcoLegal: 'none',
                viewConfig: 'none',
                viewAyuda: 'none',
                viewNubeVirtual: 'none'
            }
        }
    }

    //variables globales
    cookies = new Cookies()
    fecha = {
        dia: String(new Date(Date.now()).getDate()),
        mes: String(new Date(Date.now()).getMonth() + 1),
        anio: String(new Date(Date.now()).getFullYear())
    }
    keyDatosCookies = ['resp', 'email_', 'product', 'pswUser_', 'area_',]

    //funciones globales
    CambiarEstadoAlert(stateAlert_, mensajeAlerta_, severityAlert_) {
        this.setState({
            estadoAlert: stateAlert_,
            mensajeAlerta: mensajeAlerta_,
            severityAlert: severityAlert_
        })
        setTimeout(() => {
            this.setState({
                estadoAlert: 'none',
                mensajeAlerta: '',
                severityAlert: 'info'
            })
        }, 3000);
    }


    //funciones del sistema
    handleDrawer = () => {
        this.state.openDrawer === 'none' ? this.setState({ openDrawer: 'block' }) : this.setState({ openDrawer: 'none' })
    }

    handleWindow = (value) => {
        console.log(value)
        if (value === 0) {
            this.setState({
                visibleVentana: {
                    viewDashboard: 'block',
                    viewDashboardContable: 'none',
                    viewDashboardMtto: 'none',
                    viewLocalidades: 'none',
                    viewRRHH: 'none',
                    viewLogist: 'none',
                    viewPlaneacion: 'none',
                    viewHSEQ: 'none',
                    viewMarcoLegal: 'none',
                    viewConfig: 'none',
                    viewAyuda: 'none',
                    viewNubeVirtual: 'none'
                }
            })
        }
        if (value === 1) {
            this.setState({
                visibleVentana: {
                    viewDashboard: 'none',
                    viewDashboardContable: 'block',
                    viewDashboardMtto: 'none',
                    viewLocalidades: 'none',
                    viewRRHH: 'none',
                    viewLogist: 'none',
                    viewPlaneacion: 'none',
                    viewHSEQ: 'none',
                    viewMarcoLegal: 'none',
                    viewConfig: 'none',
                    viewAyuda: 'none',
                    viewNubeVirtual: 'none'
                }
            })
        }
        if (value === 2) {
            this.setState({
                visibleVentana: {
                    viewDashboard: 'none',
                    viewDashboardContable: 'none',
                    viewDashboardMtto: 'block',
                    viewLocalidades: 'none',
                    viewRRHH: 'none',
                    viewLogist: 'none',
                    viewPlaneacion: 'none',
                    viewHSEQ: 'none',
                    viewMarcoLegal: 'none',
                    viewConfig: 'none',
                    viewAyuda: 'none',
                    viewNubeVirtual: 'none'
                }
            })
        }
        if (value === 3) {
            this.setState({
                visibleVentana: {
                    viewDashboard: 'none',
                    viewDashboardContable: 'none',
                    viewDashboardMtto: 'none',
                    viewLocalidades: 'block',
                    viewRRHH: 'none',
                    viewLogist: 'none',
                    viewPlaneacion: 'none',
                    viewHSEQ: 'none',
                    viewMarcoLegal: 'none',
                    viewConfig: 'none',
                    viewAyuda: 'none',
                    viewNubeVirtual: 'none'
                }
            })
        }
        if (value === 4) {
            this.setState({
                visibleVentana: {
                    viewDashboard: 'none',
                    viewDashboardContable: 'none',
                    viewDashboardMtto: 'none',
                    viewLocalidades: 'none',
                    viewRRHH: 'block',
                    viewLogist: 'none',
                    viewPlaneacion: 'none',
                    viewHSEQ: 'none',
                    viewMarcoLegal: 'none',
                    viewConfig: 'none',
                    viewAyuda: 'none',
                    viewNubeVirtual: 'none'
                }
            })
        }
        if (value === 5) {
            this.setState({
                visibleVentana: {
                    viewDashboard: 'none',
                    viewDashboardContable: 'none',
                    viewDashboardMtto: 'none',
                    viewLocalidades: 'none',
                    viewRRHH: 'none',
                    viewLogist: 'block',
                    viewPlaneacion: 'none',
                    viewHSEQ: 'none',
                    viewMarcoLegal: 'none',
                    viewConfig: 'none',
                    viewAyuda: 'none',
                    viewNubeVirtual: 'none'
                }
            })
        }
        if (value === 6) {
            this.setState({
                visibleVentana: {
                    viewDashboard: 'none',
                    viewDashboardContable: 'none',
                    viewDashboardMtto: 'none',
                    viewLocalidades: 'none',
                    viewRRHH: 'none',
                    viewLogist: 'none',
                    viewPlaneacion: 'block',
                    viewHSEQ: 'none',
                    viewMarcoLegal: 'none',
                    viewConfig: 'none',
                    viewAyuda: 'none',
                    viewNubeVirtual: 'none'
                }
            })
        }
        if (value === 7) {
            this.setState({
                visibleVentana: {
                    viewDashboard: 'none',
                    viewDashboardContable: 'none',
                    viewDashboardMtto: 'none',
                    viewLocalidades: 'none',
                    viewRRHH: 'none',
                    viewLogist: 'none',
                    viewPlaneacion: 'none',
                    viewHSEQ: 'block',
                    viewMarcoLegal: 'none',
                    viewConfig: 'none',
                    viewAyuda: 'none',
                    viewNubeVirtual: 'none'
                }
            })
        }
        if (value === 8) {
            this.setState({
                visibleVentana: {
                    viewDashboard: 'none',
                    viewDashboardContable: 'none',
                    viewDashboardMtto: 'none',
                    viewLocalidades: 'none',
                    viewRRHH: 'none',
                    viewLogist: 'none',
                    viewPlaneacion: 'none',
                    viewHSEQ: 'none',
                    viewMarcoLegal: 'block',
                    viewConfig: 'none',
                    viewAyuda: 'none',
                    viewNubeVirtual: 'none'
                }
            })
        }
        if (value === 9) {
            this.setState({
                visibleVentana: {
                    viewDashboard: 'none',
                    viewDashboardContable: 'none',
                    viewDashboardMtto: 'none',
                    viewLocalidades: 'none',
                    viewRRHH: 'none',
                    viewLogist: 'none',
                    viewPlaneacion: 'none',
                    viewHSEQ: 'none',
                    viewMarcoLegal: 'none',
                    viewConfig: 'block',
                    viewAyuda: 'none',
                    viewNubeVirtual: 'none'
                }
            })
        }
        if (value === 10) {
            this.setState({
                visibleVentana: {
                    viewDashboard: 'none',
                    viewDashboardContable: 'none',
                    viewDashboardMtto: 'none',
                    viewLocalidades: 'none',
                    viewRRHH: 'none',
                    viewLogist: 'none',
                    viewPlaneacion: 'none',
                    viewHSEQ: 'none',
                    viewMarcoLegal: 'none',
                    viewConfig: 'none',
                    viewAyuda: 'block',
                    viewNubeVirtual: 'none'
                }
            })
        }
        if (value === 11) {
            this.setState({
                visibleVentana: {
                    viewDashboard: 'none',
                    viewDashboardContable: 'none',
                    viewDashboardMtto: 'none',
                    viewLocalidades: 'none',
                    viewRRHH: 'none',
                    viewLogist: 'none',
                    viewPlaneacion: 'none',
                    viewHSEQ: 'none',
                    viewMarcoLegal: 'none',
                    viewConfig: 'none',
                    viewAyuda: 'none',
                    viewNubeVirtual: 'block'
                }
            })
        }
    }

    componentDidMount = () => {
        this.cookies.set('resp', 'true', {
            path: '/',
            secure: true,
            sameSite: 'strict',
            maxAge: 36000
        })
        this.cookies.set('email_', 'email_', {
            path: '/',
            secure: true,
            sameSite: 'strict',
            maxAge: 36000
        })
        this.cookies.set('product', 'product', {
            path: '/',
            secure: true,
            sameSite: 'strict',
            maxAge: 36000
        })
        this.cookies.set('pswUser_', 'pswUser_', {
            path: '/',
            secure: true,
            sameSite: 'strict',
            maxAge: 36000
        })
        this.cookies.set('area_', 'area_', {
            path: '/',
            secure: true,
            sameSite: 'strict',
            maxAge: 36000
        })
        //RestarApp(this.cookies, this.keyDatosCookies,3)
        const resptValideCookies = ValideCookies('Dashboard', this.cookies, this.keyDatosCookies)
        if (resptValideCookies.value) {
            this.CambiarEstadoAlert('block', resptValideCookies.msj, 'info')
        } else {
            this.CambiarEstadoAlert('block', resptValideCookies.msj, 'error')
        }
    }

    componentDidUpdate = () => {


    }

    render() {
        return (
            <Box>
                <Alert
                    style={{
                        display: this.state.estadoAlert,
                        zIndex: 100,
                        width: '100%',
                        position: 'absolute',
                        top: '40%'
                    }}
                    severity={this.state.severityAlert}
                >{this.state.mensajeAlerta}
                </Alert>
                <header>
                    <ToolbarDashboard
                        RestarApp={RestarApp}
                        cookies={this.cookies}
                        keyDatosCookies={this.keyDatosCookies}
                        fecha={this.fecha}
                        handleDrawer={this.handleDrawer}
                        openDrawer={this.state.openDrawer}
                        ValideCookies={this.ValideCookies}
                        CambiarEstadoAlert={this.CambiarEstadoAlert.bind(this)}
                    />
                </header>
                {/* Menú lateral barra */}
                <Grid container spacing={0}>
                    <Grid item xs={2}>
                        <aside>
                            <Drawer
                                style={{ display: this.state.openDrawer }}
                                variant="temporary"
                                open={true}
                            >
                                <div>
                                    <IconButton onClick={this.handleDrawer}>
                                        <ChevronLeftIcon />
                                    </IconButton>
                                </div>
                                <Divider />
                                <List>
                                    <ListItemsPrincDashboard
                                        handleWindow={this.handleWindow.bind(this)}
                                    />
                                </List>
                                <Divider />
                                <List>
                                    <ListItemsSecundDashboard
                                        handleWindow={this.handleWindow.bind(this)}
                                    />
                                </List>
                            </Drawer>
                        </aside>
                    </Grid>
                    <Grid item xs={12}>
                        <main className='mainContainer'>
                            <Box style={{ display: this.state.visibleVentana.viewDashboard }}>
                                <ViewDashboard />
                            </Box>
                            <Box style={{ display: this.state.visibleVentana.viewDashboardContable }}>
                                <ViewDashboardContable />
                            </Box>
                            <Box style={{ display: this.state.visibleVentana.viewDashboardMtto }}>
                                <ViewDashboardMtto />
                            </Box>
                            
                
                            <Box style={{ display: this.state.visibleVentana.viewLocalidades }}>
                                <ViewLocalidades />
                            </Box>
                            <Box style={{ display: this.state.visibleVentana.viewRRHH }}>
                                <ViewRRHH />
                            </Box>
                            <Box style={{ display: this.state.visibleVentana.viewLogist }}>
                                <ViewLogist />
                            </Box>
                            <Box style={{ display: this.state.visibleVentana.viewPlaneacion }}>
                                <ViewPlaneacion />
                            </Box>
                            <Box style={{ display: this.state.visibleVentana.viewHSEQ }}>
                                <ViewHSEQ />
                            </Box>
                            <Box style={{ display: this.state.visibleVentana.viewMarcoLegal }}>
                                <ViewMarcoLegal />
                            </Box>
                            <Box style={{ display: this.state.visibleVentana.viewConfig }}>
                                <ViewConfig />
                            </Box>
                            <Box style={{ display: this.state.visibleVentana.viewAyuda }}>
                                <ViewAyuda />
                            </Box>
                            <Box style={{ display: this.state.visibleVentana.viewMarcoLegal }}>
                                <ViewMarcoLegal />
                            </Box>
                        </main>
                    </Grid>


                </Grid>

                <footer>
                    <Footer />
                </footer>
            </Box>

        )
    }
}
