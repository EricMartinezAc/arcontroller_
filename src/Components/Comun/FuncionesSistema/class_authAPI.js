class ReqResDatos_auth_API {

    constructor() {
        this.area = ''
        this.emailAuth = ''
        this.pswLogin = ''
        this.NoIdent = ''
        this.clav_prodtc = ''
    }

    SetDatsToAPI = async (datos_) => {
        this.area = datos_.area
        this.emailAuth = datos_.emailAuth
        this.pswLogin = datos_.pswLogin
        this.NoIdent = datos_.NoIdent
        this.clav_prodtc = datos_.clav_prodtc
        console.log(`seteados datos para ${this.NoIdent}`)
        return await true
    }

    GetDatosAuth = async () => {
        console.log('cons');
        return await {
            area: this.area,
            emailAuth: this.emailAuth,
            pswLogin: this.pswLogin,
            NoIdent: this.NoIdent,
            clav_prodtc: this.clav_prodtc
        }
    }

    // SetConexionAPI = () => {
    //     ws.onopen = () => {
    //         console.log('conexion abierta..')
    //     }
    //     ws.onerror = () => {
    //         console.log('Error de conexion websocket <--> App')
    //         alert('Error de conexion websocket <--> App')
    //         setTimeout(() => {
    //             window.location = '/'
    //         }, 7000);
    //     }
    //     return ws
    // }

    SendDatsAPI = async (datos) => {
        console.log(`solicitando credenciales para ${this.emailAuth} en ${this.NoIdent}`)
        const path_auth_API = 'https://arcbackendapi.up.railway.app:5817/api/arcontroller/users/auth'
        let constr_ = {
            area_: datos.area,
            emailAuth_: datos.emailAuth,
            pswLogin_: datos.pswLogin,
            NoIdent_: datos.NoIdent,
            clav_prodtc_: datos.clav_prodtc,
        }
        let return_ = null
        await fetch(path_auth_API, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                'access-control-allow-origin': '*'
            },
            body: JSON.stringify({
                process_: 'auth',
                datos_: constr_
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                return_ = data
            })

        return await return_

    }

}



module.exports = ReqResDatos_auth_API