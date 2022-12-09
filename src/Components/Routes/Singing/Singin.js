import React, { Component } from 'react'

export default class Singin extends Component {
    render() {
        if (this.state.visibleFormAuth) {

            return (
                <div>
                    <div className="Content">
                        <Alert
                            style={{ display: this.state.estadoAlert, width: '60%', position: 'absolute', top: '10px', zIndex: '100' }}
                            severity={this.state.severityAlert}
                        >{this.state.mensajeAlerta}
                        </Alert>
                        <div className='authContent'>
                            <Login
                                estadoLoading={this.state.estadoLoading}
                                estadoAlert={this.state.estadoAlert}
                                ExprRegulares={this.ExprRegulares}
                                mensajeAlerta={this.state.mensajeAlerta}
                                CambiarEstadoLoading={this.CambiarEstadoLoading}
                                CambiarEstadoAlert={this.CambiarEstadoAlert}
                                CambiarFormAuth={this.CambiarFormAuth}
                            />
                        </div>

                    </div>
                </div>
            )
        }
        if (this.state.visibleFormAuth === false) {
            return (
                <div>
                    <div className="Content">
                        <Alert
                            style={{ display: this.state.estadoAlert, width: '60%', position: 'absolute', top: '10px', zIndex: '100' }}
                            severity={this.state.severityAlert}
                        >{this.state.mensajeAlerta}
                        </Alert>
                        <div className='authContent'>
                            <Registro
                                estadoLoading={this.state.estadoLoading}
                                estadoAlert={this.state.estadoAlert}
                                ExprRegulares={this.ExprRegulares}
                                mensajeAlerta={this.state.mensajeAlerta}
                                CambiarEstadoLoading={this.CambiarEstadoLoading}
                                CambiarEstadoAlert={this.CambiarEstadoAlert}
                                CambiarFormAuth={this.CambiarFormAuth}
                            />
                        </div>
                    </div>
                </div>
            )
        }




    }
}
