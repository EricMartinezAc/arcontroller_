import { Alert, Box, Typography } from '@mui/material'
import React, { Component } from 'react'

import Login from './Login/Login';
import Registro from './Login/Registro'

export default class Singin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleFormAuth: true,

            //Alert
            estadoAlert: 'none',
            severityAlert: '',
            mensajeAlerta: ''

        }
    }

    CambiarVisibleFormAuth = () => {
        this.setState({ visibleFormAuth: !this.state.visibleFormAuth })
    }



    render() {
        return (
            <Box
                sx={{
                    backgroundColor: '#a9a',
                    width: '100%',
                    height: 'fit-content%',
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr',
                }}
            >
                <button
                    onClick={this.CambiarVisibleFormAuth}
                >prueba</button>
                <Box
                    sx={{
                        widht: '100%',
                        height: 'auto',
                        display: 'flex',
                        justofyContent: 'center',
                        alignContent: 'center',
                        padding: '30px 50px'
                    }}>
                    <Box
                        sx={{
                            display: this.state.visibleFormAuth ? 'none' : 'true'
                        }}
                    >
                        <Box>
                            <Registro
                                estadoLoading={this.state.estadoLoading}
                                estadoAlert={this.state.estadoAlert}
                                ExprRegulares={this.ExprRegulares}
                                mensajeAlerta={this.state.mensajeAlerta}
                                CambiarVisibleFormAuth={this.CambiarVisibleFormAuth}
                                CambiarEstadoLoading={this.CambiarEstadoLoading}
                                CambiarEstadoAlert={this.CambiarEstadoAlert}
                                CambiarFormAuth={this.CambiarFormAuth}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: this.state.visibleFormAuth ? 'true' : 'none'
                        }}
                        className="Content">
                        <Box >
                            <Login
                                estadoLoading={this.state.estadoLoading}
                                estadoAlert={this.state.estadoAlert}
                                mensajeAlerta={this.state.mensajeAlerta}
                                CambiarEstadoLoading={this.CambiarEstadoLoading}
                                CambiarEstadoAlert={this.CambiarEstadoAlert}
                                CambiarFormAuth={this.CambiarFormAuth}
                            />
                        </Box>

                    </Box>
                </Box>

                <Box
                    sx={{
                        backgroundColor: '#ede',
                        width: '100%'
                    }}
                >

                </Box>


            </Box>
        )
    }
}
