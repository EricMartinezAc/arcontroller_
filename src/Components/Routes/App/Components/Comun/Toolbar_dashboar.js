
import React, { Component } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import rutaImgLogoPNG from '../../../../../Assets/Imgs/logos/logo_153x124.png'


export default class Dashb_toolbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            API_DATA_MASTER_NOTIFICATIONS: 0,
            API_DATA_MASTER_MESSAGES: 0
        }

        this.fecha = this.props.fecha
        this.classes = this.props.classes_
        this.handleDrawerOpen = this.props.handleDrawerOpen_
        this.openIconb = this.props.open_
        this.Sistema = this.props.Sistema        
        this.RestarApp = this.props.RestarApp
        this.CambiarEstadoAlert = this.props.CambiarEstadoAlert
    }

    MonstrarNotificaiones = () => {
        return true
    }
    MostrarMensajes = () => {
        return true
    }


    render() {

        return (
            <React.Fragment>
                <Toolbar className={this.classes.toolbar}>
                    {/* boton de menu icono */}
                    <IconButton
                        edge="start"
                        aria-label="open drawer"
                        onClick={this.handleDrawerOpen}
                        className={clsx(this.classes.menuButton, this.openIconb && this.classes.menuButtonHidden)}
                    >
                        <img alt='logo' style={{ width: 50, borderRadius: '0', marginRight: 30, marginTop: 4 }} src={rutaImgLogoPNG} />
                    </IconButton>
                    {/* //tittle */}
                    <Typography style={{fontFamily: 'Poppins'}} component="h1" variant="h6" noWrap className={this.classes.title}>
                        {this.Sistema.emailApp} / {this.Sistema.areaApp}
                    </Typography>
                    {/* barra de Notificaciones */}
                    <IconButton >
                        <Badge badgeContent={this.state.API_DATA_MASTER_NOTIFICATIONS} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton >
                        <Badge badgeContent={this.state.API_DATA_MASTER_MESSAGES} color="secondary">
                            <MessageIcon />
                        </Badge>
                    </IconButton>
                    <IconButton onClick={this.RestarApp} >
                        <PowerSettingsNewIcon />
                    </IconButton>
                </Toolbar>
            </React.Fragment>
        );
    }
}

