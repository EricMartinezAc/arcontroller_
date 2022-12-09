export const CambiarEstadoLoading = (state_) => {
    this.setState({ estadoLoading: state_ })
}
export const CambiarEstadoAlert = (state_, mensajeAlerta_, severityAlert_) => {
    this.setState({ estadoAlert: state_, mensajeAlerta: mensajeAlerta_, severityAlert: severityAlert_ })
}