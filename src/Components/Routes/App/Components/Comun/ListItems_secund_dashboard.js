import React, { useState, useEffect, Component } from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import FactoryIcon from '@mui/icons-material/Factory';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import BuildIcon from '@mui/icons-material/Build';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import { CloudCircleSharp, CloudDone, CloudQueue } from "@material-ui/icons";
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Divider } from "@mui/material";

class ListItemsSecundDashboard extends Component {

    constructor(props) {
        super(props);
        this.setVisibleDashboard = this.props.setVisibleDashboard
        this.setVisibleDashboardContable = this.props.setVisibleDashboardContable
        this.setVisibleDashboardMtto = this.props.setVisibleDashboardMtto
        this.setViewLocalidades = this.props.setViewLocalidades
        this.setViewRRHH = this.props.setViewRRHH
        this.setViewLogist = this.props.setViewLogist
        this.setViewPlaneacion = this.props.setViewPlaneacion
        this.setViewHSEQ = this.props.setViewHSEQ
        this.setViewMarcoLegal = this.props.setViewMarcoLegal
        this.setViewConfig = this.props.setViewConfig
        this.setViewAyuda = this.props.setViewAyuda
        this.setViewNubeVirtual = this.props.setViewNubeVirtual
    }

    render() {
        return (
            <div>
                <ListSubheader inset>Gestión de activos</ListSubheader>
                <ListItem button onClick={
                    () => {
                        this.setVisibleDashboard('none')
                        this.setVisibleDashboardContable('none')
                        this.setVisibleDashboardMtto('none')
                        this.setViewLocalidades('block')
                        this.setViewRRHH('none')
                        this.setViewLogist('none')
                        this.setViewPlaneacion('none')
                        this.setViewHSEQ('none')
                        this.setViewMarcoLegal('none')
                        this.setViewConfig('none')
                        this.setViewAyuda('none')
                        this.setViewNubeVirtual('none')
                    }}>
                    <ListItemIcon >
                        <FactoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Localidades" />
                </ListItem>
                <ListItem button onClick={
                    () => {
                        this.setVisibleDashboard('none')
                        this.setVisibleDashboardContable('none')
                        this.setVisibleDashboardMtto('none')
                        this.setViewLocalidades('none')
                        this.setViewRRHH('block')
                        this.setViewLogist('none')
                        this.setViewPlaneacion('none')
                        this.setViewHSEQ('none')
                        this.setViewMarcoLegal('none')
                        this.setViewConfig('none')
                        this.setViewAyuda('none')
                        this.setViewNubeVirtual('none')
                    }}>
                    <ListItemIcon>
                        <ManageAccountsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Recursos humanos" />
                </ListItem>
                <ListItem button onClick={
                    () => {
                        this.setVisibleDashboard('none')
                        this.setVisibleDashboardContable('none')
                        this.setVisibleDashboardMtto('none')
                        this.setViewLocalidades('none')
                        this.setViewRRHH('none')
                        this.setViewLogist('none')
                        this.setViewPlaneacion('block')
                        this.setViewHSEQ('none')
                        this.setViewMarcoLegal('none')
                        this.setViewConfig('none')
                        this.setViewAyuda('none')
                        this.setViewNubeVirtual('none')
                    }}>
                    <ListItemIcon>
                        <AccountTreeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Planeación" />
                </ListItem>
                <ListItem button onClick={
                    () => {
                        this.setVisibleDashboard('none')
                        this.setVisibleDashboardContable('none')
                        this.setVisibleDashboardMtto('none')
                        this.setViewLocalidades('none')
                        this.setViewRRHH('none')
                        this.setViewLogist('block')
                        this.setViewPlaneacion('none')
                        this.setViewHSEQ('none')
                        this.setViewMarcoLegal('none')
                        this.setViewConfig('none')
                        this.setViewAyuda('none')
                        this.setViewNubeVirtual('none')
                    }}>
                    <ListItemIcon>
                        <CallSplitIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logística" />
                </ListItem>
                <ListItem button onClick={
                    () => {
                        this.setVisibleDashboard('none')
                        this.setVisibleDashboardContable('none')
                        this.setVisibleDashboardMtto('none')
                        this.setViewLocalidades('none')
                        this.setViewRRHH('none')
                        this.setViewLogist('none')
                        this.setViewPlaneacion('none')
                        this.setViewHSEQ('block')
                        this.setViewMarcoLegal('none')
                        this.setViewConfig('none')
                        this.setViewAyuda('none')
                        this.setViewNubeVirtual('none')
                    }}>
                    <ListItemIcon>
                        < VerifiedUserIcon />
                    </ListItemIcon>
                    <ListItemText primary="HSEQ" />
                </ListItem>
                <ListItem button onClick={
                    () => {
                        this.setVisibleDashboard('none')
                        this.setVisibleDashboardContable('none')
                        this.setVisibleDashboardMtto('none')
                        this.setViewLocalidades('none')
                        this.setViewRRHH('none')
                        this.setViewLogist('none')
                        this.setViewPlaneacion('none')
                        this.setViewHSEQ('none')
                        this.setViewMarcoLegal('block')
                        this.setViewConfig('none')
                        this.setViewAyuda('none')
                        this.setViewNubeVirtual('none')
                    }}>
                    <ListItemIcon >
                        <AccountBalanceIcon />
                    </ListItemIcon>
                    <ListItemText primary="Marco legal" />
                </ListItem>
                <br /><br />
                <Divider />

                <ListSubheader inset>Dispositivo</ListSubheader>
                <ListItem button onClick={
                    () => {
                        this.setVisibleDashboard('none')
                        this.setVisibleDashboardContable('none')
                        this.setVisibleDashboardMtto('none')
                        this.setViewLocalidades('none')
                        this.setViewRRHH('none')
                        this.setViewLogist('none')
                        this.setViewPlaneacion('none')
                        this.setViewHSEQ('none')
                        this.setViewMarcoLegal('none')
                        this.setViewConfig('block')
                        this.setViewAyuda('none')
                        this.setViewNubeVirtual('none')
                    }}>
                    <ListItemIcon >
                        <BuildIcon />
                    </ListItemIcon>
                    <ListItemText primary="Configuraciones" />
                </ListItem>
                <ListItem button onClick={
                    () => {
                        this.setVisibleDashboard('none')
                        this.setVisibleDashboardContable('none')
                        this.setVisibleDashboardMtto('none')
                        this.setViewLocalidades('none')
                        this.setViewRRHH('none')
                        this.setViewLogist('none')
                        this.setViewPlaneacion('none')
                        this.setViewHSEQ('none')
                        this.setViewMarcoLegal('none')
                        this.setViewConfig('none')
                        this.setViewAyuda('none')
                        this.setViewNubeVirtual('block')
                    }}>
                    <ListItemIcon >
                        <CloudQueue />
                    </ListItemIcon>
                    <ListItemText primary="Nube virtual" />
                </ListItem>
                <ListItem button onClick={
                    () => {
                        this.setVisibleDashboard('none')
                        this.setVisibleDashboardContable('none')
                        this.setVisibleDashboardMtto('none')
                        this.setViewLocalidades('none')
                        this.setViewRRHH('none')
                        this.setViewLogist('none')
                        this.setViewPlaneacion('none')
                        this.setViewHSEQ('none')
                        this.setViewMarcoLegal('none')
                        this.setViewConfig('none')
                        this.setViewAyuda('block')
                        this.setViewNubeVirtual('none')
                    }}>
                    <ListItemIcon >
                        <HelpCenterIcon />
                    </ListItemIcon>
                    <ListItemText primary="Ayuda" />
                </ListItem>

                <br /><br />
            </div>
        );
    }

}

export default ListItemsSecundDashboard;