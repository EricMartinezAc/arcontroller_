import React, {
    Component
} from 'react'

//librerias
import Cookies from 'universal-cookie'
import {
    Box
} from '@mui/material'
import axios from 'axios'

//recursos
import Logo from '../../../../Assets/Imgs/logos/logo_632x512.png';
import './Login.css';
import ReqResDatos_auth_API from '../../../Comun/ModulosSis/class_authAPI';
import Loading from '../../../Comun/Loading'
import AlertDialogs from '../../../Comun/DescriptionAlerts';

//métodos
import {
    ValideInputPassword,
    ValideInputEmail,
    ValideInputUsuario
} from '../../../Comun/ModulosSis/ValideInputREGEXP';
import {
    AsigneCookies
} from '../../../Comun/ModulosSis/AsigneCookies';

const cookies = new Cookies()
const reqResDatos_auth_API = new ReqResDatos_auth_API()

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //formulario
            id_prod: '',
            user: '',
            pswLogin: ''
        }
    }

    CambiarEstadoDescriptionAlerts = this.props.CambiarEstadoDescriptionAlerts
    CambiarEstadoLoading = this.props.CambiarEstadoLoading


    ValidacionFormAuth = () => {
        return ValideInputUsuario(this.state.user) &&
            ValideInputPassword(this.state.pswLogin) &&
            ValideInputPassword(this.state.id_prod) ? true :
            false
    }

    EnviarDatosAuth = async e => {

        e.preventDefault()

        this.CambiarEstadoLoading()
        if (this.ValidacionFormAuth()) {
            try {
                //Datos a consultar
                await reqResDatos_auth_API.SetDatsToAPI(
                    this.state.user,
                    this.state.pswLogin,
                    this.state.id_prod
                )
                await console.log('Preparación de usuario completa')

                //envio de datos
                setTimeout(async () => {
                    let RespAPI = await reqResDatos_auth_API.SendDatsAPI('auth', axios)
                    await this.CambiarEstadoLoading()
                    if (await RespAPI.value.valor === 400) {
                        await AsigneCookies(
                            this.state.user,
                            this.state.pswLogin,
                            this.state.id_prod,
                            RespAPI.value.resp,
                            cookies
                        )
                        await reqResDatos_auth_API.GetAPP(RespAPI.value.respt, axios)

                    } else {
                        await this.CambiarEstadoDescriptionAlerts(
                            true,
                            'warning',
                            'AUTENTICACIÓN DE USUARIO',
                            'Recuerda limpiar las cookies de tu browser y tener control sobre ellas. ',
                            RespAPI.value.msj
                        )
                    }
                }, 2000);



            } catch (error) {
                alert('error enviando datos al servidor, revise su conexion: ' + error)
                console.log('error enviando datos al servidor, revise su conexion: ', error)
            }
        } else {
            alert('Datos ingresados no cumplen requerimientos')
            setTimeout(() => {
                window.location = 'http://localhost:3000/Singin'
            }, 5000)
        }


    }

    Onchange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return ( <
            Box sx = {
                {
                    display: 'block',
                    padding: '0 auto',
                    margin: '0 auto',
                    textAlign: 'center',
                    color: '#232'
                }
            } >
            <
            img alt = 'logo'
            className = 'logo'
            src = {
                Logo
            }
            />

            <
            h3 className = 'title_' > AUTENTICACIÓN < /h3>

            <
            form className = "FormAuth"
            onSubmit = {
                this.EnviarDatosAuth
            } >

            <
            input type = "text"
            name = "id_prod"
            id = "id_prod"
            value = {
                this.state.id_prod
            }
            className = "form-control input_text_index"
            autoComplete = "off"
            placeholder = "CLAVE DE PRODUCTO"
            onChange = {
                this.Onchange
            }
            /> <
            input type = "text"
            id = "user"
            name = "user"
            className = "form-control input_text_index"
            placeholder = "INGRESE SU USUARIO"
            value = {
                this.state.user
            }
            onChange = {
                this.Onchange
            }
            /> <
            input type = "password"
            name = "pswLogin"
            id = "pswLogin"
            className = "form-control input_text_index"
            autoComplete = "off"
            placeholder = "CONTRASEÑA DE USUARIO"
            value = {
                this.state.pswLogin
            }
            onChange = {
                this.Onchange
            }
            />

            <
            br / >
            <
            br / >
            <
            br / >
            <
            input className = "btn btn-success"
            type = "submit"
            value = "CONTINUAR" /
            >
            <
            br / >

            <
            /form> <
            br / >
            <
            /Box>
        )
    }
}