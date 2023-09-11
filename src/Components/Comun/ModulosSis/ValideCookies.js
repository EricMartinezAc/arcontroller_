export default function ValideCookies(route, cookies) {

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

    let resp = { value: false, msj: '', routeTarjet: 'http://localhost:3000/' }
    let dato
    let valide_email = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/



    try {
        //consulta comparación cookies
        //-- si estoy en APP sin token retorne llevame a inicio
        if (route === 'Dashboard' && cookies.get('token') === undefined) resp.msj = 'DEBE LOGUEARSE PARA USAR LA APP'
        if (route === 'Dashboard' && cookies.get('token') !== undefined) {
            resp.value = true
        }

        //--- si estoy en logeo y encuentra un token retorne true y lleveme a App
        if (route === 'Singin' && cookies.get('token') !== undefined) {
            resp.value = true
            resp.msj = 'Ya se encuentra una sesión activa'
            resp.routeTarjet = 'http://localhost:3000/acrcontroller/web/main/Dashboard'
        }






    } catch (error) {
        resp.routeTarjet = 'Inicio'
        resp.msj = `Ha ocurrido un error en validación de datos: ${error}`
    }


    return resp

}
