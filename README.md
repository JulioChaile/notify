# notify

- [Demo](#demo)
- [Español](#español)
- [English](#english)
 
# Demo
https://juliochaile.github.io/notify/

# Español

## Módulo de Notificaciones Emergentes para la Web

Este repositorio contiene un módulo en JavaScript puro que permite crear fácilmente notificaciones emergentes en la web. Estas notificaciones pueden personalizarse mediante diferentes parámetros y se integran con HTML, CSS y Bootstrap para una experiencia visualmente atractiva.

### Características

- **Facilidad de uso:** Simplemente incluye el archivo JavaScript en tu proyecto y llama a la función para mostrar una notificación emergente.
- **Personalización:** Puedes personalizar la apariencia y el comportamiento de las notificaciones utilizando diversos parámetros.
- **Integración con Bootstrap:** Las notificaciones se integran perfectamente con Bootstrap para una apariencia moderna y consistente.
- **Compatibilidad:** Funciona en todos los navegadores modernos y dispositivos.

### Uso

1. **Incluye los archivos necesarios en tu proyecto:**

   ```html
   <link rel="stylesheet" href="style.css">
   <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
   <script src="index.js"></script>

2. **Llama a la función Notify():**

    ```js
    Notify({text: '¡Hello Word!', time: 3000, close: true, classes: 'custom-class'})
    Notify('¡Hello Word!')
    Notify(
        `<div class="custom-class">
            <h3>¡Hello Word!</h3>

            <p>Lorem ipsum dolor sit amet.</p>
        </div>`
    )

    const { notify, idTimer, hidden } = Notify('Click me!')

    notify.addEventListener('click' => {
        alert('Hellow Word!')
    })

    // Delete notification (optional)
    // hidden()

## Parámetros
- **props**: Un objeto que contiene las propiedades para la notificación o una cadena de texto para enviar la notificación con su contenido.
- **props.text** (opcional): Cadena de texto o cadena HTML que aparecerá dentro de la notificación.
- **props.time** (opcional): Tiempo de duración en pantalla de la notificación en milisegundos.
- **props.close** (opcional): Si es true, se agrega un botón para cerrar la notificación.
- **props.classes** (opcional): Cadena de texto con clases CSS separadas por espacios para personalizar la notificación.

## Contribuciones
¡Las contribuciones son bienvenidas! Si tienes alguna idea para mejorar este módulo de notificaciones emergentes, siéntete libre de crear un pull request.


# English

## Módulo de Notificaciones Emergentes para la Web

This repository contains a pure JavaScript module that allows you to easily create pop-up notifications on the web. These notifications can be customized using different parameters and integrate with HTML, CSS, and Bootstrap for visually appealing experience.

### Features

- **Ease of use:** Simply include the JavaScript file in your project and call the function to display a pop-up notification.
- **Customization:** You can customize the appearance and behavior of notifications using various parameters.
- **Bootstrap Integration:** Notifications seamlessly integrate with Bootstrap for a modern and consistent appearance.
- **Compatibility:** Works on all modern browsers and devices.

### Usage

1. **Include the necessary files in your project:**

   ```html
   <link rel="stylesheet" href="style.css">
   <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
   <script src="index.js"></script>

2. **Call the Notify() function:**

    ```js
    Notify({text: 'Hello Word!', time: 3000, close: true, classes: 'custom-class'})
    Notify('Hello Word!')
    Notify(
        `<div class="custom-class">
            <h3>Hello Word!</h3>

            <p>Lorem ipsum dolor sit amet.</p>
        </div>`
    )

    const { notify, idTimer, hidden } = Notify('Click me!')

    notify.addEventListener('click' => {
        alert('Hellow Word!')
    })

    // Delete notification (optional)
    // hidden()

## Parameters
- props: An object containing properties for the notification or a string to send the notification with its content.
- props.text (opcional): Text string or HTML string that will appear inside the notification.
- props.time (opcional): Duration time on screen of the notification in milliseconds.
- props.close (opcional): If true, a button is added to close the notification.
- props.classes (opcional): Text string with CSS classes separated by spaces to customize the notification.

## Contribuciones
Contributions are welcome! If you have any ideas to improve this pop-up notification module, feel free to create a pull request.