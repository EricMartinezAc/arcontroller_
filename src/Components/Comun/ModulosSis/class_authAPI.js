export default class ReqResDatos_auth_API {

    constructor() {
        this.user = ''
        this.pswLogin = ''
        this.id_prod = ''
    }

    SetDatsToAPI = async (user_, pswLogin_, id_prod_) => {
        this.user = user_
        this.pswLogin = pswLogin_
        this.id_prod = id_prod_
        return await true
    }

    GetDatosAuth = async () => {
        return await {
            user: this.user,
            pswLogin: this.pswLogin,
            id_prod: this.id_prod
        }
    }


    SendDatsAPI = async (proceso, axios) => {
        console.log(`solicitando credenciales para ${this.user} en ${this.id_prod}`)
        const path_API = `http://localhost:2023/api/arcontroller/users/${proceso}`
        //'https://arcbackendapi.up.railway.app:6662/api/arcontroller/users/auth'
        //+
        //https://arcbackendapi.up.railway.app:5817/api/arcontroller/users/auth'

        const datos = await this.GetDatosAuth()

        let return_ = null

        await axios.post(path_API, {
                process_: proceso,
                datos_: datos
            })
            .then(response => {
                return_ = {
                    value: response.data
                }
            })
            .catch(error => {
                console.log(error);
            });

        // await fetch(path_auth_API, {
        //     method: "POST",
        //     mode: "cors",
        //     headers: {
        //         "Content-Type": "application/json",
        //         'access-control-allow-origin': '*'
        //     },
        //     body: JSON.stringify({
        //         process_: 'auth',
        //         datos_: constr_
        //     })
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        //     return_ = data
        // })

        return await return_

    }

    GetAPP = async (auth1, axios) => {
        console.log(`transfiriendo a APP`)

        await axios.get(`http://localhost:2023/api/arcontroller/app/dashboard`, {
            headers: {
                'autorization': `Bearer ${auth1}`
            }
        }).then(resp => {
            console.log(resp.data.valor)
            setTimeout(() => {
                window.location = `http://localhost:3000/acrcontroller/web/main/Dashboard`
            }, 300)
        }).catch(err => {
            alert('Error en generación de token')
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