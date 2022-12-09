const ExprRegulares = {
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    usuario: /^[a-zA-Z]{4,16}$/, // Letras entre 4 a 16,
    extCorreo: /^([^]+)@(\w+).(\w+)$/, // para extraer correo
}


export default function ValideInputREGEXP(input_) {

}