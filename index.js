//import { PRE } from "./constants"

const PRE = {
    error: 'Hubo un error al procesar la solicitud, inténtelo nuevamente',
    exito: 'La operación se realizó exitosamente',
    completar: 'Debe completar todos los campos para continuar',
    requeridos: 'Debe completar los campos requeridos para continuar',
    archivo_success: '¡Archivo generado!',
    busqueda_fail: 'La busqueda no produjo resultados',
    auth_fail: 'Su sesión ha expirado, vuelva a iniciar para continuar',
    per_fail: 'No tienes los permisos necesarios para realizar esta acción',
    fail: 'Ocurrió un error inesperado.'
}

/**
 * Crea una notificacion emergente desde abajo, se le puede enviar una cadena o un html en forma de cadena
 * Bootstrap 4.5
 * 
 * @param   {object|string}     props           Propiedades para la notificacion, si es una cadena se envia la notificacion con su contenido
 * @param   {string=}           props.text      Cadena de texto o cadena html que aparecera dentro de la notificacion
 * @param   {string=}           props.type      Si se envia esta propiedad se creara una notificacion predeterminada
 *                                              error: 'Hubo un error al procesar la solicitud, inténtelo nuevamente',
 *                                              exito: 'La operación se realizó exitosamente',
 *                                              completar: 'Debe completar todos los campos para continuar',
 *                                              requeridos: 'Debe completar los campos requeridos para continuar',
 *                                              busqueda_fail: 'La busqueda no produjo resultados'',
 *                                              auth_fail: 'Su sesión ha expirado, vuelva a iniciar para continuar',
 *                                              per_fail: 'No tienes los permisos necesarios para realizar esta acción',
 *                                              fail: 'Ocurrió un error inesperado.'
 * @param   {number=}           props.time      Tiempo de duracion en pantalla de la notificacion
 * @param   {boolean=}          props.close     Si la propiedad "close" es true se agrega un boton para cerrar la notificacion
 * @param   {string=}           props.classes   Cadena de texto con clases css separadas por espacios para personalizar la notificacion
 */
function Notify (props) {
    let text = typeof props === 'string'
        ? props
        : props.text

    const type = props.type || ''

    const time = typeof props.time === 'number'
        ? props.time
        : 5000

    const classes = props.classes || ''
    
    let check = true
    let containerNotify

    // Verifico si hay un contenedor de notificaciones creado, si es asi lo obtengo y si no, lo creo
    if (document.getElementById('container-notify')) {
        containerNotify = document.getElementById('container-notify')
    } else {
        // Creo un contenedor que ocupe todo el ancho, con display flex y flex column para que las notificaciones se apilen
        containerNotify = document.createElement('div')
        containerNotify.id = 'container-notify'
        containerNotify.className = "fixed-bottom d-flex flex-column"

        // Añado el contenedor como hijo directo del body
        const body = document.getElementsByTagName('body')[0]
        body.appendChild(containerNotify)
    }

    // Creo la notificacion
    const notify = document.createElement('div')

    notify.className = 'notify-container notify-show mt-1'
    notify.innerHTML = `<div class="relative-position bg-black notify p-2 text-center d-flex align-items-center justify-content-center ${classes}">
                            ${PRE[type] || text}
                        </div>`

    // Añado la notificacion al contenedor
    containerNotify.appendChild(notify)

    // Si la propiedad "close" es true agrego un boton para cerrar la notificacion 
    if (props.close) {
        const cerrar = document.createElement('div')
    
        cerrar.innerHTML = 'X'
        cerrar.className = 'absolute text-mini badge-top-right badge badge-pill badge-danger cursor-pointer'

        // Seteo el evento de click en el boton
        cerrar.onclick = () => {
            notify.classList.add('notify-hidden')
            setTimeout(() => {
                if (check) {
                    containerNotify.removeChild(notify)
                    check = false
                }
            }, 1000)
        }
        
        notify.children[0].appendChild(cerrar)
    }
    
    // Obtengo la altura de la notificacion y seteo la variable CSS --n-height, la cual es usada para la animacion
    const heightNotify = notify.children[0].clientHeight

    document.documentElement.style.setProperty('--n-height', heightNotify + 'px')

    const hidden = () => {
        if (notify) {
            notify.classList.add('notify-hidden')
            setTimeout(() => {
                if (check) {
                    containerNotify.removeChild(notify)
                    check = false
                }
            }, 1000)
        }
    }

    // La notificacion dura 5 segundos y luego se oculta usando la clase notify-hidden, cuando la animacion de ocultar termina se remueve la notificacion del DOM
    const idTimer = setTimeout(hidden, time)

    return { notify, idTimer, hidden }
}

// Dev
window.Notify = Notify

//export default Notify