
import React, { Component, Fragment } from 'react'

import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
//import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Alert from '@mui/material/Alert';

//recursos
import Cookies from 'universal-cookie'
import clsx from 'clsx';

//funciones del sistema
import ValideCookies from '../../../Comun/FuncionesSistema/ValideCookies'

//Manejo de datos on API

//partials

//--> header
import Dashb_toolbar from "../Components/Comun/Toolbar_dashboar";
import ListItems_princ_dashboard from '../Components/Comun/ListItems_princ_dashboard';
import ListItems_secund_dashboard from '../Components/Comun/ListItems_secund_dashboard';
//-->contenido
import Chart_contableMeses_dashboard from '../Partial_Dashboard/Chart_contableMeses_dashboard';
import Chart_donu_otsCurso_vs_otProgr from '../Partial_Dashboard/Chart_donu_otsCurso_vs_otProgr';
import Chart_bar_OTs_gastoInsumos_ganancias_mes from '../Partial_Dashboard/Chart_bar_OTs_gastoInsumos_ganancias_mes';
import Datos_OTsPendientes from '../Partial_Dashboard/Datos_OTsPendientes';
import Orders_Dashboard from '../Partial_Dashboard/Orders_dashboard';
//-->App
import Contabilidad from '../Components/Main/Contabilidad/Contabilidad';
import Mtto from '../Components/Main/Mantenimiento/Mtto';
import Localidades from '../Components/Main/Operaciones/Localidades/Localidades';
import RRHH from '../Components/Main/Operaciones/RRHH/RRHH';
import Planeacion from '../Components/Main/Operaciones/MarcoLegal/MarcoLegal';
import Config from '../Components/Main/Operaciones/Config/Config';
import NubeVirtual from '../Components/Main/Operaciones/NubeVirtual/NubeVirtual';
import Ayuda from '../Components/Main/Operaciones/Ayuda/Ayuda';
import Logistica from '../Components/Main/Operaciones/LOGIS/Logistica';
import HSEQ from '../Components/Main/Operaciones/HSEQ/HSEQ';
import MarcoLegal from '../Components/Main/Operaciones/MarcoLegal/MarcoLegal';

export default class ContainerApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Sistema: {},
            //-->visual alerts
            estadoAlert:'none',
            mensajeAlerta: '',
            severityAlert: 'info',
            //-->visualización de mains
            visibleDashboard: 'block',
            visibleDashboardContable: 'none',
            visibleDashboardMtto: 'none',
            viewLocalidades: 'none',
            viewRRHH: 'none',
            viewPlaneacion: 'none',
            viewLogist: 'none',
            viewHSEQ: 'none',
            viewMarcoLegal: 'none',
            viewConfig: 'none',
            viewNubeVirtual: 'none',
            viewAyuda: 'none'
        }
    }

    
    //usos globales
    cookies = new Cookies()
    
    fecha = {
        dia: String(new Date(Date.now()).getDate()),
        mes: String(new Date(Date.now()).getMonth() + 1),
        año: String(new Date(Date.now()).getFullYear())
    }
    fech = new Date(Date.now()).toDateString()

    classes = this.props.classes
    open= this.props.open
    estadoAlert= this.props.estadoAlert
    fixedHeightPaper= this.props.fixedHeightPaper

    severityAlert= this.props.severityAlert
    Dashb_toolbar= this.props.Dashb_toolbar
    
    async CambiarEstadoAlert(stateAlert_, mensajeAlerta_, severityAlert_) {
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

    RestarApp() {
        this.cookies.remove('resp', {
            path: '/',
            secure: true,
            sameSite: 'strict',
            maxAge: 36000
        })
        this.cookies.remove('email_', {
            path: '/',
            secure: true,
            sameSite: 'strict',
            maxAge: 36000
        })
        this.cookies.remove('product', {
            path: '/',
            secure: true,
            sameSite: 'strict',
            maxAge: 36000
        })
        this.cookies.remove('pswUser_', {
            path: '/',
            secure: true,
            sameSite: 'strict',
            maxAge: 36000
        })
        this.cookies.remove('area_', {
            path: '/',
            secure: true,
            sameSite: 'strict',
            maxAge: 36000
        })
        this.CambiarEstadoAlert('block', 'Cerrando App', 'error')
        console.log('app cerrada');
        setTimeout(() => {
            window.location = '/'
        }, 3000);
    }
    SolicitarDatosIniciales(){
        this.ReqResDatos_initial.SetDatsToAPI(
            {
                proceso_: 'APP/controllers/InitializeDatas', 
                datos_: {
                    a: this.state.Sistema.emailApp,
                    b: this.state.Sistema.pswUser_,
                    c: this.state.Sistema.keyPsApp,
                    d: this.state.Sistema.areaApp
                }
            }
        )
        this.ReqResDatos_initial.SendDatsAPI()
    }
    
    componentDidMount = () => {

        this.setState ({
            //extracción datos this.cookies
        Sistema: {
            App: this.cookies.get('resp'),
            emailApp: this.cookies.get('email_'),
            keyPsApp: this.cookies.get('product'),
            areaApp: this.cookies.get('area_'),
            pswUser_: this.cookies.get('pswUser_')
        }
        })
        // let ws = this.ReqResDatos_initial.SetConexionAPI() 
        // ws.onmessage = resp => {
        //     let res_ReqResDatos_initial = JSON.parse(resp.data)
        //     console.log(res_ReqResDatos_initial);
        // }
        setTimeout(() => {
            this.SolicitarDatosIniciales()
        }, 2000);

    }
    

  render() {
    return (
      <React.Fragment>
        <header>
            <AppBar position="absolute" className={clsx(this.classes.appBar, this.open && this.classes.appBarShift)}>
                <Alert
                    style={{ display: this.state.estadoAlert, zIndex: 100, width: '100%', position: 'absolute', top: '50%', zIndex: '100' }}
                    severity={this.state.severityAlert}
                >{this.state.mensajeAlerta}
                </Alert>
                <Dashb_toolbar
                    RestarApp={this.RestarApp}
                    fecha={this.fecha}
                    classes_={this.classes}
                    handleDrawerOpen_={this.handleDrawerOpen}
                    open_={this.open}
                    Sistema={this.state.Sistema}
                    ValideCookies={this.ValideCookies}
                    CambiarEstadoAlert={this.CambiarEstadoAlert}
                    />
            </AppBar>
        </header>
        {/* Menú lateral barra */}
        <aside>
            <Drawer
                style={{ height: '100%' }}
                variant="permanent"
                classes={{
                    paper: clsx(this.classes.drawerPaper, !this.open && this.classes.drawerPaperClose),
                }}
                open={this.open}
            >
                <div className={this.classes.toolbarIcon}>
                    <IconButton onClick={this.handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItems_princ_dashboard
                        visibleDashboard={this.visibleDashboard}
                        visibleDashboardContable={this.visibleDashboardContable}
                        visibleDashboardMtto={this.visibleDashboardMtto}
                        viewLocalidades={this.viewLocalidades}
                        viewRRHH={this.viewRRHH}
                        viewLogist={this.viewLogist}
                        viewPlaneacion={this.viewPlaneacion}
                        viewHSEQ={this.viewHSEQ}
                        viewMarcoLegal={this.viewMarcoLegal}
                        viewConfig={this.viewConfig}
                        viewAyuda={this.viewAyuda}
                        viewNubeVirtual={this.viewNubeVirtual}
                    />
                </List>
                <Divider />
                <List>
                    <ListItems_secund_dashboard
                        visibleDashboard={this.visibleDashboard}
                        visibleDashboardContable={this.visibleDashboardContable}
                        visibleDashboardMtto={this.visibleDashboardMtto}
                        viewLocalidades={this.viewLocalidades}
                        viewRRHH={this.viewRRHH}
                        viewLogist={this.viewLogist}
                        viewPlaneacion={this.viewPlaneacion}
                        viewHSEQ={this.viewHSEQ}
                        viewMarcoLegal={this.viewMarcoLegal}
                        viewConfig={this.viewConfig}
                        viewAyuda={this.viewAyuda}
                        viewNubeVirtual={this.viewNubeVirtual}
                    />
                </List>
            </Drawer>
        </aside>
        {/* contenido */}
        <main style={{ background: 'gray', width: '100%' }} >
            <div className={this.classes.appBarSpacer} />
            <Container style={{ background: 'gray', width: '100%' }} maxWidth="lg" className={this.classes.container}>
                <div style={{ display: this.state.visibleDashboard, width: '100%' }}>
                    <Grid container spacing={3}>
                        {/* Chart contable */}
                        <Grid item xs={12} md={8} lg={6}>
                            <Paper className={this.fixedHeightPaper} style={{ height: 350 }}>
                                <Chart_contableMeses_dashboard
                                    fecha={this.fecha}
                                    Sistema={this.state.Sistema}
                                    CambiarEstadoAlert={this.CambiarEstadoAlert}
                                />
                            </Paper>
                        </Grid>
                        {/* chart ots en curso vs programadas */}
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={this.fixedHeightPaper} style={{ height: 350 }}>
                                <Chart_donu_otsCurso_vs_otProgr
                                    fecha={this.fecha}
                                    Sistema={this.state.Sistema}
                                    CambiarEstadoAlert={this.CambiarEstadoAlert}
                                />
                            </Paper>
                        </Grid>
                        {/* datos ot pendientes */}
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={this.fixedHeightPaper} style={{ height: 350 }}>
                                <Datos_OTsPendientes
                                    fecha={this.fecha}
                                    Sistema={this.state.Sistema}
                                    CambiarEstadoAlert={this.CambiarEstadoAlert}
                                />
                            </Paper>
                        </Grid>


                        {/* chart stock inventario vrs consumido */}
                        <Grid item xs={12} md={8} lg={4}>
                            <Paper className={this.fixedHeightPaper} style={{ height: 250 }}>
                                <Chart_bar_OTs_gastoInsumos_ganancias_mes
                                    fecha={this.fecha}
                                    Sistema={this.state.Sistema}
                                    CambiarEstadoAlert={this.CambiarEstadoAlert}
                                />
                            </Paper>
                        </Grid>
                        {/* datos coste actual de inventario */}
                        <Grid item xs={12} md={8} lg={4}>
                            <Paper className={this.fixedHeightPaper} style={{ height: 250 }}>
                                <Datos_OTsPendientes
                                    fecha={this.fecha}
                                    Sistema={this.state.Sistema}
                                    CambiarEstadoAlert={this.CambiarEstadoAlert}
                                />
                            </Paper>
                        </Grid>
                        {/* chart ot mes vs gasto inventario vs ganancia */}
                        <Grid item xs={12} md={8} lg={4}>
                            <Paper className={this.fixedHeightPaper} style={{ height: 250 }}>
                                <Chart_bar_OTs_gastoInsumos_ganancias_mes
                                    fecha={this.fecha}
                                    Sistema={this.state.Sistema}
                                    CambiarEstadoAlert={this.CambiarEstadoAlert}
                                />
                            </Paper>
                        </Grid>
                        {/* Recent Orders */}
                        <Grid item xs={12}>
                            <Paper className={this.classes.paper}>
                                <Orders_Dashboard />
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
                <div style={{ display: this.visibleDashboardContable, width: '100%' }}>
                    <Contabilidad />
                </div>
                <div style={{ display: this.visibleDashboardMtto, width: '100%' }}>
                    <Mtto />
                </div>
                <div style={{ display: this.viewLocalidades, width: '100%' }}>
                    <Localidades />
                </div>
                <div style={{ display: this.viewRRHH, width: '100%' }}>
                    <RRHH />
                </div>
                <div style={{ display: this.viewPlaneacion, width: '100%' }}>
                    <Planeacion />
                </div>
                <div style={{ display: this.viewLogist, width: '100%' }}>
                    <Logistica />
                </div>
                <div style={{ display: this.viewHSEQ, width: '100%' }}>
                    <HSEQ />
                </div>
                <div style={{ display: this.viewMarcoLegal, width: '100%' }}>
                    <MarcoLegal />
                </div>
                <div style={{ display: this.viewConfig, width: '100%' }}>
                    <Config />
                </div>
                <div style={{ display: this.viewNubeVirtual, width: '100%' }}>
                    <NubeVirtual />
                </div>
                <div style={{ display: this.viewAyuda, width: '100%' }}>
                    <Ayuda />
                </div>
            </Container>

        </main>
      </React.Fragment>
    )
  }
}
