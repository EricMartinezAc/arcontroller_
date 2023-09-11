export default class ReqResDatos_API {

    constructor() {
        this.user = ''
        this.pswLogin = ''
        this.token = ''
    }

    SetDatsToAPI = async (user_, pswLogin_, token) => {
        this.user = user_
        this.pswLogin = pswLogin_
        this.token = token
        return await true
    }

    GetDatosToAPI = async () => {
        return await {
            user: this.user,
            pswLogin: this.pswLogin,
            token: this.token
        }
    }


    CargarDatosUserAPI = async (auth1, id_prod, axios) => {
        console.log(`cargando ${auth1}`)

        await axios.get(`http://localhost:2023/api/arcontroller/app/dashboard`, {
            headers: {
                'autorization': `Bearer ${auth1} ${id_prod}`
            }
        }).then(resp => {
            console.log(resp)
        }).catch(err => {
            alert('Error en generación de token:', err)
            setTimeout(() => {
                window.location = `http://localhost:3000/`
            }, 300)
            console.error('Error :', err);
        });
    }

    // SetConexionAPI = () => {
    //     ws.onopen = () => {|
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


}