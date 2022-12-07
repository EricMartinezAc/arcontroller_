import React, { Component } from 'react';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BusinessIcon from '@material-ui/icons/Business';
import InsightsIcon from '@mui/icons-material/Insights';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { ListItem, ListItemIcon } from '@mui/material';
import { ListItemText } from '@material-ui/core';


class ListItemsPrincDashboard extends Component {

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
                {/* Dashboard */}
                <ListItem button onClick={
                    () => {
                        this.setVisibleDashboard('block')
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
                        this.setViewNubeVirtual('none')
                    }}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                {/* contabilidad */}
                <ListItem button onClick={
                    () => {
                        this.setVisibleDashboard('none')
                        this.setVisibleDashboardContable('block')
                        this.setVisibleDashboardMtto('none')
                        this.setViewLocalidades('none')
                        this.setViewRRHH('none')
                        this.setViewLogist('none')
                        this.setViewPlaneacion('none')
                        this.setViewHSEQ('none')
                        this.setViewMarcoLegal('none')
                        this.setViewConfig('none')
                        this.setViewAyuda('none')
                        this.setViewNubeVirtual('none')
                    }} >
                    <ListItemIcon>
                        <InsightsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contabilidad" />
                </ListItem>
                {/* mtto */}
                <ListItem button onClick={
                    () => {
                        this.setVisibleDashboard('none')
                        this.setVisibleDashboardContable('none')
                        this.setVisibleDashboardMtto('block')
                        this.setViewLocalidades('none')
                        this.setViewRRHH('none')
                        this.setViewLogist('none')
                        this.setViewPlaneacion('none')
                        this.setViewHSEQ('none')
                        this.setViewMarcoLegal('none')
                        this.setViewConfig('none')
                        this.setViewAyuda('none')
                        this.setViewNubeVirtual('none')
                    }}>
                    <ListItemIcon>
                        <EngineeringIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mantenimiento" />
                </ListItem>
            </div>
        );
    }
}

export default ListItemsPrincDashboard;
