
import React, { Component } from 'react';
import clsx from 'clsx';
import rutaImgLogoPNG from '../../../Assets/Imgs/logos/logo_153x124.png'
import { Badge, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Colores from '../../Comun/ModulosGen/Colores';
import { CameraEnhance } from '@mui/icons-material';


export default class Dashb_toolbard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            API_DATA_MASTER_NOTIFICATIONS: 0,
            API_DATA_MASTER_MESSAGES: 0
        }

        this.fecha = this.props.fecha
        this.handleDrawer = this.props.handleDrawer
        this.openDrawer = this.props.openDrawer
        this.RestarApp = this.props.RestarApp
        this.cookies = this.props.cookies
        this.keyDatosCookies = this.props.keyDatosCookies
        this.CambiarEstadoAlert = this.props.CambiarEstadoAlert
    }

    MonstrarNotificaiones = () => {
        return true
    }
    MostrarMensajes = () => {
        return true
    }
    CerrarApp = () => {
        this.RestarApp(this.cookies, this.keyDatosCookies, 3)
        this.CambiarEstadoAlert('block', 'La aplicación a cerrado de forma segura', 'info')                   
    }

    componentDidMount = () => {

    }


    render() {

        return (
            <React.Fragment>
                <Toolbar
                    sx={{
                        background: Colores.azul,
                    }}
                >
                    {/* boton de menu icono */}
                    <IconButton
                        edge="start"
                        aria-label="open drawer"
                        onClick={this.handleDrawer}
                        className={clsx(this.openDrawer)}
                    >
                        <img alt='logo' style={{ width: 50, borderRadius: '0', marginRight: 30, marginTop: 4 }} src={rutaImgLogoPNG} />
                    </IconButton>
                    <Grid direction="row" justifyContent="flex-end" container spacing={1}>
                        {/* //tittle */}
                        <Grid item xs={8}>
                            <Typography style={{ fontFamily: 'Poppins' }} component="h1" variant="h6" noWrap >
                                {this.cookies.get('email_') || 'Invitado'} / 
                                {this.cookies.get('area_') || 'Sin Área'}
                            </Typography>
                        </Grid>
                        {/* barra de Notificaciones */}
                        <Grid item lg={1}>
                            <IconButton >
                                <Badge badgeContent={this.state.API_DATA_MASTER_NOTIFICATIONS} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Grid>
                        {/* barra de mensajes */}
                        <Grid item lg={1}>
                            <IconButton >
                                <Badge badgeContent={this.state.API_DATA_MASTER_MESSAGES} color="secondary">
                                    <MessageIcon />
                                </Badge>
                            </IconButton>
                        </Grid>
                        {/* Boton apagado */}
                        <Grid item lg={1}>
                            <IconButton onClick={this.CerrarApp} >
                                <PowerSettingsNewIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </React.Fragment>
        );
    }
}

