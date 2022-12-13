import React, { Component } from 'react'
import { Link } from 'react-router-dom';

//recursos
//import './Registro.css';
import Logo from '../../../../Assets/Imgs/logos/logo_632x512.png';

//librerias
import Cookies from 'universal-cookie'
import * as XLSX from 'xlsx';

const cookies = new Cookies()
export default class Registro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //propios
            id: 2,
            windowLoadAuth: false,
            ErrorFormVisible: false,
            ExprRegulares: this.props.ExprRegulares,
            //formulario
            emailRegister: '',
            pswRegtr: '',
            area: '',
            identProduct: '',
            pswProduct: '',
            fileInput: '',
            fileDatas: null
        }
    }
    //extracción de funciones
    CambiarEstadoLoading = (state_) => this.props.CambiarEstadoLoading(state_)
    CambiarEstadoAlert = (state_, mensajeAlerta_, severityAlert_) => this.props.CambiarEstadoAlert(state_, mensajeAlerta_, severityAlert_)
    CambiarFormAuth = () => this.props.CambiarFormAuth
    RestarApp = () => this.props.RestarApp

    ValidacionFormR = () => {

        if (this.state.ExprRegulares.correo.test(this.state.emailRegister)) {
            if (
                this.state.emailRegister !== undefined ||
                this.state.pswRegtr !== undefined ||
                this.state.identProduct !== undefined ||
                this.state.pswProduct !== undefined ||
                this.state.area !== undefined ||
                // this.state.fileDatas !== undefined ||

                this.state.emailRegister !== null ||
                this.state.pswRegtr !== null ||
                this.state.identProduct !== null ||
                this.state.pswProduct !== null ||
                this.state.area !== null ||
                // this.state.fileDatas !== null ||

                this.state.emailRegister !== '' ||
                this.state.pswRegtr !== '' ||
                this.state.identProduct !== '' ||
                this.state.pswProduct !== '' ||
                this.state.area !== '' //||
                // this.state.fileDatas !== '' ||
                //this.state.fileDatas.length !== 0
            ) {
                if (this.state.ExprRegulares.password.test(this.state.pswRegtr)) {
                    return [true, '']
                } else {
                    return [false, 'Ingrese una contraseña válida']
                }
            } else {
                return [false, 'Todos los campos son obligatorios']
            }
        } else {
            return [false, 'Debe ingresar un correo válido']
        }
    }

    componentDidMount() {

        //    ws.onmessage = (resp) => {
        //     // esto se invoca automáticamente cuando recibimos un mensaje
        //     let respDataRegtr = JSON.parse(resp.data)
        //     this.CambiarEstadoLoading('none')
        //     console.log('respuesta: ', respDataRegtr);

        //     if (respDataRegtr.resp && respDataRegtr.process_ === 'Regtr') {

        //         // info = {
        //         //     process_: 'Regtr',
        //         //     resp: !false,
        //         //     mjs: `Registro ${datos.a}: registrado ok`,
        //         //     __resolve__: {
        //         //         user: datos.a,
        //         //         product: datos.c,
        //         //         area: datos.e,
        //         //         datosSede: docDatas_.sedes
        //         //     }
        //         // }

        //         this.CambiarEstadoAlert('block', respDataRegtr.mjs, 'success')
        //         try {
        //             cookies.set('resp', respDataRegtr.resp, { path: '/', secure: true, sameSite: 'strict', maxAge: 36000 })
        //             cookies.set('email_', respDataRegtr.__resolve__.user, { path: '/', secure: true, sameSite: 'strict', maxAge: 36000 })
        //             cookies.set('product', respDataRegtr.__resolve__.product, { path: '/', secure: true, sameSite: 'strict', maxAge: 36000 })
        //             cookies.set('area_', respDataRegtr.__resolve__.area, { path: '/', secure: true, sameSite: 'strict', maxAge: 36000 })
        //             cookies.set('pswUser_', respDataRegtr.__resolve__.pswUser, { path: '/', secure: true, sameSite: 'strict', maxAge: 36000 })
        //             console.log('cookies almacenadas: ', cookies.get('email_'), cookies.get('area_'), cookies.get('product'));
        //             setTimeout(() => {
        //                 window.location.href = '/Dashboard'
        //             }, 3000);
        //         } catch (error) {
        //             alert('error almacenando cookies')
        //             console.log(error)
        //         }
        //     } else {
        //         this.CambiarEstadoAlert('block', respDataRegtr.mjs, 'error')
        //         setTimeout(() => {
        //             window.location.reload()
        //         }, 3000);
        //     }
        //     };
    }

    EnviarDatosReg = e => {
        e.preventDefault()

        console.log('validando ....')

        //validacion de formulario, retorna arreglo con bool y mjs
        const resultValidacionFormReg = this.ValidacionFormR()

        /* falló validación de datos */
        if (!resultValidacionFormReg[0]) {
            console.log(resultValidacionFormReg[1]);
            this.setState({
                ErrorFormVisible: true
            })
            alert(resultValidacionFormReg[1])
        }
        /*es true, cumple con los req */
        if (resultValidacionFormReg[0]) {
            console.log('Valores cumplen con requerimientos de frontend');
            this.setState({
                ErrorFormVisible: false
            })
            try {
                // setTimeout(() => {
                //     ReqResDatos_registroUser.SetDatsToAPI(
                //         {
                //             proceso_:'Regtr',
                //             datos_: {
                //                 a: this.state.emailRegister,
                //                 b: this.state.pswRegtr,
                //                 c: this.state.identProduct,
                //                 d: this.state.pswProduct,
                //                 e: this.state.area//,
                //                 // f: this.state.fileDatas
                //             }
                //         }
                //     )
                //     ReqResDatos_registroUser.SendDatsAPI()
                // }, 1);

            } catch (error) {
                alert('error enviando datos al servidor, revise su conexion: ' + e)
                console.log('error enviando datos al servidor, revise su conexion: ', e)
            }
        }
    }


    // TransformDataExcelToJSON = (refFile) => {
    //     const promise = new Promise((resolve, reject) => {
    //         const fileReader = new FileReader();
    //         fileReader.readAsArrayBuffer(refFile);

    //         fileReader.onload = (e) => {
    //             const buffer = e.target.result;
    //             const wbooks = XLSX.read(buffer, { type: "buffer" });
    //             const wsname = wbooks.SheetNames[0];
    //             const wsName = wbooks.Sheets[wsname];
    //             const datosEnJSON = XLSX.utils.sheet_to_json(wsName);
    //             resolve(datosEnJSON);
    //         };

    //         fileReader.onerror = (error) => {
    //             reject(error);
    //         };
    //     });

    //     promise.then((result) => {
    //         this.setState({
    //             fileDatas: result,
    //         });
    //     });

    // }

    Onchange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

        // if (e.target.name === 'fileInput') {
        //     this.TransformDataExcelToJSON(e.target.files[0])
        // }
    }

    render() {
        return (
            <div>
                <img alt='logo' className='logo' src={Logo} />

                <h3 className='title'>REGISTRO DE NUEVOS GERENTES</h3>

                <form className="FormRegtr" onSubmit={this.EnviarDatosReg}>
                    <input
                        type="text"
                        id="area"
                        name="area"
                        className="form-control input_text_index"
                        placeholder="ASIGNAR AL ÁREA"
                        value={this.state.area}
                        onChange={this.Onchange}
                    />
                    <input
                        type="text"
                        id="emailRegister"
                        name="emailRegister"
                        className="form-control input_text_index"
                        placeholder="INGRESE SU EMAIL"
                        value={this.state.emailRegister}
                        onChange={this.Onchange}
                    />
                    <input
                        type="password"
                        name="pswRegtr"
                        id="pswRegtr"
                        className="form-control input_text_index"
                        autoComplete="off"
                        placeholder="INGRESA TU CONTRASEÑA"
                        value={this.state.pswRegtr}
                        onChange={this.Onchange}
                    />
                    <input
                        type="password"
                        name="identProduct"
                        id="identProduct"
                        className="form-control input_text_index"
                        autoComplete="off"
                        placeholder="INGRESA NÚM DE IDENTIFCACIÓN DE PRODUCTO"
                        value={this.state.identProduct}
                        onChange={this.Onchange}
                    />
                    <br />
                    <input
                        type="password"
                        name="pswProduct"
                        id="pswProduct"
                        className="form-control input_text_index"
                        autoComplete="off"
                        placeholder="INGRESA LA CLAVE DEL PRODUCTO"
                        value={this.state.pswProduct}
                        onChange={this.Onchange}
                    />
                    {/* <br />
                    <div className='fileInput'>
                        <label>Agrege sus localidades a cargo</label>
                        <br />
                        <br />
                        <input
                            type="file" ref={this.fileInputE}
                            name="fileInput"
                            id="fileInput"
                            className=" form-control input_text_index"
                            autoComplete="off"
                            placeholder="INGRESA fileInput"
                            value={this.state.fileInput}
                            onChange={this.Onchange}
                        />
                    </div> */}
                    <br />
                    <br />
                    <input
                        className="btn btn-success"
                        type="submit"
                        value="REGISTRAR"
                    />
                    <br />
                    <Link className="footer-text-aut"
                        to="#"
                        onClick={this.props.CambiarFormAuth}
                    >
                        Ingresa con un usuario existente
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
