export default function ValideCookies(route, cookies, keyDatosCookies) {

    /**
     * INSPECCIONA LAS CREDENCIALES COOKIES
     * REQUERIMIENTO:
     ** ONSULTA SI TIENES COOKIES ALMACENADAS DE SESIÓN ANTERIOR
     ** SI ESTAS EN RUTA INICIO Y TIENES COOKIES ALMACENADAS, TE ENRUTA A DASHBOARD. SINO NO HACE NADA
     ** SI ESTAS EN RUTA DASHBOARD Y TIENES COOKIES ALMACENADAS, CREA Y RETORNA UNA VARIABLE 
     CON LOS DATOS, SINO, TE ENRUTA A INICIO.
     ** EN AMBOS CASOS, RETORNA UN MENSAJE INFORMACIÓN PARA MOSTRAR AL CLIENTE
     ** VERIFICAR LOS DATOS ENCONTRADOS EN LAS COOKIES
     * REQUERIMIENTOS DEL SISTEMA
     ** RETORNA DICCIONARIO CON:
            VALOR(1,0) PARA ESPECIFICAR SI ENCONTRÓ O NO COOKIES ALMACENADAS
            MENSAJE INFORMACIÓN PARA MOSTRAR AL CLIENTE
            RUTA A DONDE DEBE ESTAR DADO EJECUCIÓN DEL PROCESO
     */

    let resp = { value: false, msj: '', routeTarjet: '' }
    let dato
    let valide_email = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

    try {
        //consulta comparación cookies
        for (let i = 0; i < keyDatosCookies.length; i++) {
            dato = cookies.get(keyDatosCookies[i])
        }

        if (dato !== undefined) {//si encuentra datos de sesión activa
            console.log(`datos de cookies ${dato}`)

            //confirmación de datos almacenados 
            if (dato[0] && valide_email.test(dato[1])) { //si aceptó políticas previo y el correo es de tipo email
                //ES LEGAL LA SESIÓN
                resp.value = true
                route === 'Inicio' || route === 'Singin' ? resp.msj = 'Sesión ya se encuentra activa. Redirigiendo...' : resp.msj = `Bienvenido de nuevo ${dato[2]}`
                route === 'Inicio' || route === 'Singin' ? resp.routeTarjet = 'Dashboard' : resp.routeTarjet = ''
            }
            else {
                //NO ES LEGAL LA SESIÓN
                dato.map((d) => cookies.remove(d))
                resp.value = false
                resp.msj = 'Cookies almacenadas caducaron. Se resetea APP'
                resp.routeTarjet = 'Inicio'
            }
        }

    } catch (error) {
        resp.routeTarjet = 'Inicio'
        resp.msj = `Ha ocurrido un error en validación de datos: ${error}`
    }


    return resp

}
