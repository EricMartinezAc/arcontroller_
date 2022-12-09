import React, {
    Component
} from 'react'
import {
    Link, Redirect
} from 'react-router-dom';

//recursos
import Logo from '../../../../Assets/Imgs/logos/logo_632x512.png';
import './Login.css';
import ReqResDatos_auth_API from '../../../Comun/FuncionesSistema/class_authAPI';

//librerias
import Cookies from 'universal-cookie'

const cookies = new Cookies()
const reqResDatos_auth_API = new ReqResDatos_auth_API()

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //propios
            id: 1,
            ExprRegulares: this.props.ExprRegulares,
            windowLoadAuth: false,
            ErrorFormVisible: false,
            //formulario
            emailAuth: '',
            pswLogin: '',
            NoIdent: '',
            clav_prodtc: '',
            area: '',
            datosAPI: null,
            dashboard: false
        }
    }

    //extracción de funciones
    CambiarEstadoLoading = (state_) => this.props.CambiarEstadoLoading(state_)
    CambiarEstadoAlert = (state_, mensajeAlerta_, severityAlert_) => this.props.CambiarEstadoAlert(state_, mensajeAlerta_, severityAlert_)
    CambiarFormAuth = () => this.props.CambiarFormAuth
    RestarApp = () => this.props.RestarApp

    componentDidMount = () => {
        // ws.onmessage = (resp) => {
        //     // esto se invoca automáticamente cuando recibimos un mensaje
        //     let respDataAuth = JSON.parse(resp.data)
        //     this.CambiarEstadoLoading('none')
        //     console.log('respuesta: ', respDataAuth);

        //     if (respDataAuth.resp && respDataAuth.process_ === 'Auth') {

        //         this.CambiarEstadoAlert('block', respDataAuth.mjs, 'success')
        //         try {
        //             cookies.set('resp', respDataAuth.resp, {
        //                 path: '/',
        //                 secure: true,
        //                 sameSite: 'strict',
        //                 maxAge: 36000
        //             })
        //             cookies.set('email_', respDataAuth.__resolve__.user, {
        //                 path: '/',
        //                 secure: true,
        //                 sameSite: 'strict',
        //                 maxAge: 36000
        //             })
        //             cookies.set('product', respDataAuth.__resolve__.product, {
        //                 path: '/',
        //                 secure: true,
        //                 sameSite: 'strict',
        //                 maxAge: 36000
        //             })
        //             cookies.set('area_', respDataAuth.__resolve__.area, {
        //                 path: '/',
        //                 secure: true,
        //                 sameSite: 'strict',
        //                 maxAge: 36000
        //             })
        //             cookies.set('pswUser_', respDataAuth.__resolve__.pswUser, {
        //                 path: '/',
        //                 secure: true,
        //                 sameSite: 'strict',
        //                 maxAge: 36000
        //             })
        //             console.log('cookies almacenadas: ', cookies.get('email_'), cookies.get('area_'), cookies.get('product'));
        //             setTimeout(() => {
        //                 window.location.href = '/Dashboard'
        //             }, 3000);
        //         } catch (error) {
        //             alert('error almacenando cookies')
        //             console.log(error)
        //         }
        //     } else {
        //         this.CambiarEstadoAlert('block', respDataAuth.mjs, 'error')
        //         setTimeout(() => {
        //             window.location.reload()
        //         }, 3000);
        //     }
        // }
        //algo mas
    }

    componentDidUpdate = () => {
        if(this.state.dashboard){
            window.location = 'http://localhost:3000/Dashboard'
        }
    }


    ValidacionFormF = () => {
        // recibo: this.state
        // espera responder: true, false

        //si es un correo
        if (this.state.ExprRegulares.correo.test(this.state.emailAuth)) {
            if (this.state.emailAuth !== undefined ||
                this.state.pswLogin !== undefined ||
                this.state.NoIdent !== undefined ||
                this.state.clav_prodtc !== undefined ||
                this.state.area !== undefined ||

                this.state.emailAuth !== null ||
                this.state.pswLogin !== null ||
                this.state.NoIdent !== null ||
                this.state.clav_prodtc !== null ||
                this.state.area !== null ||

                this.state.emailAuth !== '' ||
                this.state.NoIdent !== '' ||
                this.state.pswLogin !== '' ||
                this.state.clav_prodtc !== '' ||
                this.state.area !== '') {
                if (this.state.ExprRegulares.password.test(this.state.pswLogin)) {
                    return [true, '']
                } else {
                    return [false, 'Ingrese una contraseña válida']
                }
            } else {
                return [false, 'Todos los campos son obligatorios']
            }
        } else {
            return [false, 'La App solo permite ingresar con tu email registrado']
        }

    }


    EnviarDatosAuth = e => {

        e.preventDefault()
        console.log('validando ....')

        //validacion de formulario, retorna arreglo con bool y mjs
        const resultValidacionFormAuth = this.ValidacionFormF()
        console.log(resultValidacionFormAuth)

        /* falló validación de datos */
        if (!resultValidacionFormAuth[0]) {
            console.log(resultValidacionFormAuth[1]);
            this.setState({
                ErrorFormVisible: true
            })
            alert(resultValidacionFormAuth[1])
        }
        /*es true, cumple con los req */
        if (resultValidacionFormAuth[0]) {
            console.log('Valores cumplen con requerimientos de frontend');
            this.setState({
                ErrorFormVisible: false
            })

            //Datos a consultar
            try {
              const consult =  async () => {
                    console.log('1');
                    await reqResDatos_auth_API.SetDatsToAPI({
                        emailAuth: this.state.emailAuth,
                        pswLogin: this.state.pswLogin,
                        NoIdent: this.state.NoIdent,
                        clav_prodtc: this.state.clav_prodtc,
                        area: this.state.area
                    })
                    console.log('2');
                    const datos_ = await reqResDatos_auth_API.GetDatosAuth()
                    console.log('3')
                    const asa = await reqResDatos_auth_API.SendDatsAPI(datos_)
                    console.log('4')
                    this.setState({datosAPI: asa, dashboard: true});
                }
              consult()
              

            } catch (error) {
                alert('error enviando datos al servidor, revise su conexion: ' + error)
                console.log('error enviando datos al servidor, revise su conexion: ', error)
            }

        }
    }

    Onchange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <img alt='logo' className='logo' src={Logo} />

                <h3 className='title'>AUTENTICACIÓN DE GERENTE</h3>

                <form className="FormAuth" onSubmit={this.EnviarDatosAuth}>
                    <input
                        type="text"
                        id="area"
                        name="area"
                        className="form-control input_text_index"
                        placeholder="ÁREA A LA QUE PERTENECE"
                        value={this.state.area}
                        onChange={this.Onchange}
                    />
                    <input
                        type="text"
                        id="emailAuth"
                        name="emailAuth"
                        className="form-control input_text_index"
                        placeholder="INGRESE SU EMAIL"
                        value={this.state.emailAuth}
                        onChange={this.Onchange}
                    />
                    <input
                        type="password"
                        name="pswLogin"
                        id="pswLogin"
                        className="form-control input_text_index"
                        autoComplete="off"
                        placeholder="INGRESE SU CONTRASEÑA"
                        value={this.state.pswLogin}
                        onChange={this.Onchange}
                    />
                    <input
                        type="password"
                        name="NoIdent"
                        id="NoIdent"
                        className="form-control input_text_index"
                        autoComplete="off"
                        placeholder="INGRESE EL CÓDIGO DEL PRODUCTO"
                        value={this.state.NoIdent}
                        onChange={this.Onchange}
                    />
                    <input
                        type="password"
                        name="clav_prodtc"
                        id="clav_prodtc"
                        className="form-control input_text_index"
                        autoComplete="off"
                        placeholder="INGRESE LA CLAVE DEL PRODUCTO"
                        value={this.state.clav_prodtc}
                        onChange={this.Onchange}
                    />
                    <br />
                    <br />
                    <br />
                    <input
                        className="btn btn-success"
                        type="submit"
                        value="CONTINUAR"
                    />
                    <br />

                    <Link to="#" className="footer-text-reg" onClick={this.props.CambiarFormAuth}>
                        Crea un nuevo usuario
                    </Link>
                    <br />
                    <Link className="footer-text-ise" to="#">
                        Creado por ISE engineering group
                    </Link>
                </form>
                <br />
            </div>
        )
    }
}
