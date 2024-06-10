/*-----------MOSTRA Y OCULTAR MENU-----*/
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
/*---------------FIN MENU------------ */
function mostrartipo(medicamento) {
    var main = document.querySelector('main');
    var contenido = '';

    if (medicamento === 'libres') {
        contenido = `
            <h1 style="text-align: center;">¡Bienvenido a Deportes de Resistencia!</h1>
            <div class="video-container">
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/Bby8wFsVSg0?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <p>Descripción de deportes de resistencia. Estos deportes se centran en la resistencia física y la capacidad aeróbica...</p>
            <button onclick="cargarContenido('inicio')">Volver atrás</button>
        `;
    } else if (medicamento === 'recetados') {
        contenido = `
            <h1 style="text-align: center;">¡Bienvenido a Deportes de Fuerza y Potencia!</h1>
            <div class="video-container">
                <iframe width="100%" height="450" src="https://www.youtube.com/embed/Bby8wFsVSg0?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <p>Descripción de deportes de fuerza y potencia. Estos deportes implican el uso de fuerza muscular y explosividad...</p>
            <button onclick="cargarContenido('inicio')">Volver atrás</button>
        `;
    } else if (medicamento === 'controlados') {
        contenido = `
            <h1 style="text-align: center;">¡Bienvenido a Deportes de Agilidad y Habilidad Motriz!</h1>
                <div class="video-container">
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/Bby8wFsVSg0?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <p>Descripcion de deportes de agilidad y habilidad motriz. Estos deportes se centran en la coordinación, la agilidad...</p>
            <button onclick="cargarContenido('inicio')">Volver atrás</button>
        `;
    } else if (medicamento === 'genericos') {
        contenido = `
            <h1 style="text-align: center;">¡Bienvenido a Deportes de Agilidad y Habilidad Motriz!</h1>
                <div class="video-container">
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/Bby8wFsVSg0?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <p>Descripcion de deportes de agilidad y habilidad motriz. Estos deportes se centran en la coordinación, la agilidad...</p>
            <button onclick="cargarContenido('inicio')">Volver atrás</button>
         `;
    } else if (medicamento === 'marca') {
        contenido = `
            <h1 style="text-align: center;">¡Bienvenido a Deportes de Agilidad y Habilidad Motriz!</h1>
                <div class="video-container">
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/Bby8wFsVSg0?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <p>Descripcion de deportes de agilidad y habilidad motriz. Estos deportes se centran en la coordinación, la agilidad...</p>
            <button onclick="cargarContenido('inicio')">Volver atrás</button>
         `;
    } else if (medicamento === 'hospitalarios') {
        contenido = `
            <h1 style="text-align: center;">¡Bienvenido a Deportes de Agilidad y Habilidad Motriz!</h1>
                <div class="video-container">
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/Bby8wFsVSg0?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <p>Descripcion de deportes de agilidad y habilidad motriz. Estos deportes se centran en la coordinación, la agilidad...</p>
            <button onclick="cargarContenido('inicio')">Volver atrás</button>
         `;
    } else if (medicamento === 'suplementos') {
        contenido = `
            <h1 style="text-align: center;">¡Bienvenido a Deportes de Agilidad y Habilidad Motriz!</h1>
                <div class="video-container">
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/Bby8wFsVSg0?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <p>Descripcion de deportes de agilidad y habilidad motriz. Estos deportes se centran en la coordinación, la agilidad...</p>
            <button onclick="cargarContenido('inicio')">Volver atrás</button>
         `;
    } else if (medicamento === 'fitoterapia') {
        contenido = `
            <h1 style="text-align: center;">¡Bienvenido a Deportes de Agilidad y Habilidad Motriz!</h1>
                <div class="video-container">
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/Bby8wFsVSg0?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <p>Descripcion de deportes de agilidad y habilidad motriz. Estos deportes se centran en la coordinación, la agilidad...</p>
            <button onclick="cargarContenido('inicio')">Volver atrás</button>
         `;
    } else if (medicamento === 'homeopaticos') {
        contenido = `
            <h1 style="text-align: center;">¡Bienvenido a Deportes de Agilidad y Habilidad Motriz!</h1>
                <div class="video-container">
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/Bby8wFsVSg0?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <p>Descripcion de deportes de agilidad y habilidad motriz. Estos deportes se centran en la coordinación, la agilidad...</p>
            <button onclick="cargarContenido('inicio')">Volver atrás</button>
         `;
    } else if (medicamento === 'veterinarios') {
        contenido = `
            <h1 style="text-align: center;">¡Bienvenido a Deportes de Agilidad y Habilidad Motriz!</h1>
                <div class="video-container">
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/Bby8wFsVSg0?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <p>Descripcion de deportes de agilidad y habilidad motriz. Estos deportes se centran en la coordinación, la agilidad...</p>
            <button onclick="cargarContenido('inicio')">Volver atrás</button>
         `;
    } else if (medicamento === 'personal') {
        contenido = `
            <h1 style="text-align: center;">¡Bienvenido a Deportes de Agilidad y Habilidad Motriz!</h1>
                <div class="video-container">
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/Bby8wFsVSg0?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <p>Descripcion de deportes de agilidad y habilidad motriz. Estos deportes se centran en la coordinación, la agilidad...</p>
            <button onclick="cargarContenido('inicio')">Volver atrás</button>
         `;
    } else if (medicamento === 'urgencia') {
        contenido = `
            <h1 style="text-align: center;">¡Bienvenido a Deportes de Agilidad y Habilidad Motriz!</h1>
                <div class="video-container">
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/Bby8wFsVSg0?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <p>Descripcion de deportes de agilidad y habilidad motriz. Estos deportes se centran en la coordinación, la agilidad...</p>
            <button onclick="cargarContenido('inicio')">Volver atrás</button>
         `;
    } else if (medicamento === 'especial') {
        contenido = `
            <h1 style="text-align: center;">¡Bienvenido a Deportes de Agilidad y Habilidad Motriz!</h1>
                <div class="video-container">
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/Bby8wFsVSg0?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <p>Descripcion de deportes de agilidad y habilidad motriz. Estos deportes se centran en la coordinación, la agilidad...</p>
            <button onclick="cargarContenido('inicio')">Volver atrás</button>
         `;
    } else if (medicamento === 'avanzadas') {
        contenido = `
            <h1 style="text-align: center;">¡Bienvenido a Deportes de Agilidad y Habilidad Motriz!</h1>
                <div class="video-container">
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/Bby8wFsVSg0?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <p>Descripcion de deportes de agilidad y habilidad motriz. Estos deportes se centran en la coordinación, la agilidad...</p>
            <button onclick="cargarContenido('inicio')">Volver atrás</button>
         `;
    } else if (medicamento === 'diagnostico') {
        contenido = `
            <h1 style="text-align: center;">¡Bienvenido a Deportes de Agilidad y Habilidad Motriz!</h1>
                <div class="video-container">
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/Bby8wFsVSg0?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <p>Descripcion de deportes de agilidad y habilidad motriz. Estos deportes se centran en la coordinación, la agilidad...</p>
            <button onclick="cargarContenido('inicio')">Volver atrás</button>
         `;
    } else if (medicamento === 'magistrales') {
        contenido = `
            <h1 style="text-align: center;">¡Bienvenido a Deportes de Agilidad y Habilidad Motriz!</h1>
                <div class="video-container">
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/Bby8wFsVSg0?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <p>Descripcion de deportes de agilidad y habilidad motriz. Estos deportes se centran en la coordinación, la agilidad...</p>
            <button onclick="cargarContenido('inicio')">Volver atrás</button>
         `;
    }

    main.innerHTML = contenido;
}

function enviarCorreo(e) {
    e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Configuración de EmailJS
    //email.init("am6PjOxJGtF6v654j"); // Reemplaza YOUR_USER_ID con tu ID de usuario de EmailJS

    // Recopilar datos del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    console.log(nombre,email,mensaje)

    axios.post("https://server-farmacy.onrender.com/sendEmail",{nombre,email,mensaje}).then(console.log).catch(console.log)
    // Enviar el correo electrónico utilizando EmailJS
    /*
    email.send("service_ef6i3eb", "template_yxz8nyd", {
        from_name: nombre,
        from_email: email,
        message: mensaje,
    })
    .then(function(response) {
        console.log("Correo enviado con éxito", response);
        alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
        // Puedes redirigir al usuario a una página de confirmación o hacer alguna otra acción aquí
    }, function(error) {
        console.error("Error al enviar el correo", error);
        alert("Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.");
    });*/
    // Limpiar el formulario después del envío
    //document.getElementById("contact-form").reset();
}
//-----------------------------------------------------------
function mostrarServicio(servicio) {
    var main = document.querySelector('main');
    var contenido = '';

    switch (servicio) {
        case 'analisis':
            contenido = `
                <div class="service-container">
                    <h1>Análisis del Sueño</h1>
                    <img src="https://imagenes.elpais.com/resizer/v2/PEVFGMGXRVFI5A4HVB3YLTK7VE.gif?auth=eea540eaf621f79ff9c371b23054c4c5290d6a7f26703384312080445ec0c95e&width=1200" alt="Análisis del Sueño" style="max-width: 100%;">
                    <p>Realizamos un análisis detallado del sueño del atleta utilizando tecnología avanzada de monitoreo, lo que nos permite evaluar la calidad del sueño, la duración, los ciclos de sueño REM y no REM, y detectar posibles trastornos del sueño.</p>
                    <button onclick="cargarContenido('servicios')">Volver atrás</button>
                </div>
            `;
            break;
        case 'asesoramiento':
            contenido = `
                <div class="service-container">
                    <h1>Asesoramiento Personalizado</h1>
                    <img src="https://www.yomeentreno.com/wp-content/uploads/2020/03/Kick-Donkey.gif" alt="Análisis del Sueño" style="max-width: 100%;">
                    <p>Ofrecemos consultas con expertos en sueño y rendimiento deportivo para desarrollar planes personalizados de mejora del sueño, que incluyen estrategias para optimizar el tiempo de descanso, la higiene del sueño y la creación de un ambiente propicio para dormir.</p>
                    <button onclick="cargarContenido('servicios')">Volver atrás</button>
                </div>
            `;
            break;
        case 'entrenamiento':
            contenido = `
                <div class="service-container">
                    <h1>Entrenamiento en Ritmos Circadianos</h1>
                    <img src="https://www.infobae.com/new-resizer/NCriM4U3fd3BFKyLmH34S4qMxNo=/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/2LFI3D6ENJFQHJM6F6FYDYK5TI" alt="Análisis del Sueño" style="max-width: 100%;">
                    <p>Brindamos programas de entrenamiento para ajustar los ritmos circadianos del atleta, especialmente para aquellos que viajan frecuentemente o compiten en diferentes zonas horarias, utilizando técnicas de cronobiología para maximizar la adaptación y minimizar el impacto del desfase horario.</p>
                    <button onclick="cargarContenido('servicios')">Volver atrás</button>
                </div>
            `;
            break;
        case 'seguimiento':
            contenido = `
                <div class="service-container">
                    <h1>Seguimiento y Feedback Continuo</h1>
                    <img src="https://img.huffingtonpost.es/uploads/2023/01/12/63bf48aebd5ce.gif" alt="Análisis del Sueño" style="max-width: 100%;">
                    <p>Establecemos un sistema de seguimiento continuo del progreso del atleta en relación con su sueño y su rendimiento deportivo, proporcionando retroalimentación regular y ajustando los planes de sueño según sea necesario para garantizar una mejora constante en el descanso y el rendimiento.</p>
                    <button onclick="cargarContenido('servicios')">Volver atrás</button>
                </div>
            `;
            break;
            //------------------------------------------ACERCA DE NOSOTROS----------------------
            case 'Edison':
                contenido = `
                    <div class="service-container">
                        <img style="border-radius: 50%; width: 15%; display: block; margin: 0 auto;" src="https://scontent.fuio10-1.fna.fbcdn.net/v/t39.30808-6/426379216_3293036634330033_3850189104314073076_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BWSMyAMFRpcQ7kNvgERheKd&_nc_ht=scontent.fuio10-1.fna&oh=00_AYCpaRbj29EAYwXdF4n6jyOu-mNJ1FJqAGLeE2DHK9mrxg&oe=666BE379" alt="Edison Barrera">
                        <h1 style="text-align: center;">Edison Barrera</h1>
                        <p>Es un desarrollador con amplia experiencia en la creación de aplicaciones innovadoras. Ha trabajado en varios proyectos de alto impacto y se especializa en el desarrollo de soluciones tecnológicas avanzadas para mejorar el rendimiento deportivo.</p>
                        <button onclick="cargarContenido('acerca')">Volver atrás</button>
                    </div>
                `;
            break;
            case 'Jennifer':
                contenido = `
                    <div class="service-container">
                        <img style="border-radius: 50%; width: 15%; display: block; margin: 0 auto;" src="https://scontent.fuio10-1.fna.fbcdn.net/v/t39.30808-6/438086481_7644911172288605_892951878702695438_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=C4l9MwMngjkQ7kNvgFsEk6D&_nc_ht=scontent.fuio10-1.fna&oh=00_AYB0bqazxCNIpzscsFYujqgIDejzgOZbZU3kAa2UG_VWFQ&oe=666BF4AA" alt="Jennifer Faz">
                        <h1 style="text-align: center;">Jennifer Faz</h1>
                        <p>Se especializa en el desarrollo frontend y tiene un gran interés en la experiencia del usuario. Su habilidad para crear interfaces intuitivas y atractivas ha sido clave en la implementación de soluciones innovadoras para nuestros clientes.</p>
                        <button onclick="cargarContenido('acerca')">Volver atrás</button>
                    </div>
                `;
            break;
            case 'Steven':
                contenido = `
                    <div class="service-container">
                        <img style="border-radius: 50%; width: 15%; display: block; margin: 0 auto;" src="https://scontent.fuio10-1.fna.fbcdn.net/v/t39.30808-6/293992534_3108970632709617_1173418998859448657_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0xgZpeF-j8YQ7kNvgG8_8qS&_nc_ht=scontent.fuio10-1.fna&oh=00_AYDNUz6Z2pckxPPqDPMDtR3mLizMkrUSzoG_7bNtrjycyw&oe=666BFC96" alt="Steven Velez">
                        <h1 style="text-align: center;">Steven Velez</h1>
                        <p>Es un desarrollador con amplia experiencia en la creación de aplicaciones innovadoras. Ha trabajado en varios proyectos de alto impacto y se especializa en el desarrollo de soluciones tecnológicas avanzadas para mejorar el rendimiento deportivo.</p>
                        <button onclick="cargarContenido('acerca')">Volver atrás</button>
                    </div>
                `;
            break;
            case 'Alexi':
                contenido = `
                    <div class="service-container">
                        <img style="border-radius: 50%; width: 15%; display: block; margin: 0 auto;" src=" " alt="Alexi Jimenez">
                        <h1 style="text-align: center;">Alexi Jimenez</h1>
                        <p>Es un desarrollador con amplia experiencia en la creación de aplicaciones innovadoras. Ha trabajado en varios proyectos de alto impacto y se especializa en el desarrollo de soluciones tecnológicas avanzadas para mejorar el rendimiento deportivo.</p>
                        <button onclick="cargarContenido('acerca')">Volver atrás</button>
                    </div>
                `;
            break;
        default:
            contenido = '<p>Servicio no encontrado</p>';
            break;
    }

    main.innerHTML = contenido;
}

function volverInicio() {
    // Llama al caso 'inicio' para recargar el contenido inicial
    switchContent('inicio');
}

//


//
// Función para cargar el contenido dinámico en el <main>
function cargarContenido(accion) {
    // Obtener el elemento <main>
    var main = document.querySelector('main');
    // Limpiar cualquier contenido existente en el <main>
    main.innerHTML = '';
    // Dependiendo de la acción seleccionada, cargar el contenido correspondiente
    switch (accion) {
        case 'inicio':
            main.innerHTML = `
                <style>
                    /* Estilos generales */
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    .container {
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 20px;
                    }
                    /* Estilos para el banner */
                    .banner {
                        background-color: #f2f2f2; /* Color de fondo */
                        padding: 100px 0;
                        text-align: center;
                    }
                    .banner h1 {
                        font-size: 3rem;
                        margin-bottom: 20px;
                    }
                    /* Estilos para la sección de características */
                    .features {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        gap: 20px;
                        padding: 80px 0;
                        text-align: center;
                    }
                    .feature {
                        border: 1px solid #ccc;
                        border-radius: 8px;
                        overflow: hidden;
                        background: #fff;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        transition: transform 0.2s, box-shadow 0.2s;
                        cursor: pointer;
                        margin-bottom: 0; /* Quita el margin-bottom ya que gap lo maneja */
                    }
                    .feature:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    }
                    .feature img {
                        width: 100%;
                        height: auto;
                    }
                    .feature h2 {
                        font-size: 1.5em;
                        margin: 10px;
                    }
                    .feature p {
                        margin: 10px;
                    }
                    /* Estilos para el pie de página */
                    footer {
                        background-color: #333;
                        color: #fff;
                        text-align: center;
                        padding: 20px 0;
                    }
                    .video-container {
                        text-align: center;
                        margin: 20px 0;
                    }
                    /* Responsivo */
                    @media (max-width: 1200px) {
                        .features {
                            grid-template-columns: repeat(3, 1fr);
                        }
                    }
                    @media (max-width: 900px) {
                        .features {
                            grid-template-columns: repeat(2, 1fr);
                        }
                    }
                    @media (max-width: 600px) {
                        .features {
                            grid-template-columns: 1fr;
                        }
                    }
                </style>
                <div class="container">
                    <h1 style="text-align: center;">¡Bienvenido a BUENASALUD!</h1>
                    <section class="features">
                        <div class="feature" onclick="mostrartipo('libres')">
                            <img src="https://www.manipuladosviluz.es/wp-content/uploads/2023/09/tipos-de-medicamentos-OTC.jpg" alt="Medicamentos de Venta Libre (Over-the-Counter, OTC)">
                            <h1>Medicamentos de Venta Libre</h1>
                        </div>
                        <div class="feature" onclick="mostrartipo('recetados')">
                            <img src="https://media.istockphoto.com/id/139520608/es/foto/doctor-escribir-salida-rx-receta.jpg?s=612x612&w=0&k=20&c=EGr-Rf-E4YYabaosKtWPYezCEaLfhYlIIaHK5fCKJsM=" alt="Medicamentos Bajo Receta Médica (Prescription-Only Medicines, POM)">
                            <h1>Medicamentos Bajo Receta Médica</h1>
                        </div>
                        <div class="feature" onclick="mostrartipo('controlados')">
                            <img src="https://i.ytimg.com/vi/Kn8K7dPlP9g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAIDctJPS-6uJ16mHyAZcVfai2IGA" alt="Medicamentos Controlados">
                            <h1>Medicamentos Controlados</h1>
                        </div>
                        <div class="feature" onclick="mostrartipo('genericos')">
                            <img src="https://image3.slideserve.com/5656888/medicamentos-genericos-l.jpg" alt="Medicamentos de Venta Libre (Over-the-Counter, OTC)">
                            <h1>Medicamentos Genéricos</h1>
                        </div>
                        <div class="feature" onclick="mostrartipo('marca')">
                            <img src="https://statics-cuidateplus.marca.com/cms/styles/ratio_43/azblob/medicamentos_tema_marcaok.jpg.webp?itok=DEpGZ5OF" alt="Medicamentos de Marca">
                            <h1>Medicamentos de Marca</h1>
                        </div>
                        <div class="feature" onclick="mostrartipo('hospitalarios')">
                            <img src="https://www.hcmarbella.com/wp-content/uploads/2015/01/medicamentos.jpg" alt="Medicamentos de Uso Hospitalario">
                            <h1>Medicamentos de Uso Hospitalario</h1>
                        </div>
                        <div class="feature" onclick="mostrartipo('suplementos')">
                            <img src="https://thefoodtech.com/wp-content/uploads/2020/10/suplementos-alimenticios.jpg" alt="Suplementos Alimenticios y Vitaminas">
                            <h1>Suplementos Alimenticios y Vitaminas</h1>
                        </div>
                        <div class="feature" onclick="mostrartipo('fitoterapia')">
                            <img src="https://www.genesiscare.com/adobe/dynamicmedia/deliver/dm-aid--33373e04-06a0-4f19-9768-f0502bf3cadc/es-oncology-beneficios-de-la-fitoterapia-2-image-ga.jpg?preferwebp=true&&quality=100" alt="Medicamentos de Fitoterapia">
                            <h1>Medicamentos de Fitoterapia</h1>
                        </div>
                        <div class="feature" onclick="mostrartipo('homeopaticos')">
                            <img src="https://assets1.farmaciasanpablo.com.mx/landings/_blog/natural/230310-medicamentoHomeopatico/medicamento-homeopatico-que-es.jpg" alt="Medicamentos Homeopáticos">
                            <h1>Medicamentos Homeopáticos</h1>
                        </div>
                        <div class="feature" onclick="mostrartipo('veterinarios')">
                            <img src="https://t2.uc.ltmcdn.com/es/posts/4/6/4/meloxicam_para_perros_para_que_sirve_y_dosis_50464_orig.jpg" alt="Medicamentos para Uso Veterinario">
                            <h1>Medicamentos para Uso Veterinario</h1>
                        </div>
                        <div class="feature" onclick="mostrartipo('personal')">
                            <img src="https://img.freepik.com/vector-premium/cuidado-personal-higiene-salud-corporal-articulos-productos-bano_8071-4348.jpg" alt="Productos de Cuidado Personal y Salud">
                            <h1>Productos de Cuidado Personal y Salud</h1>
                        </div>
                        <div class="feature" onclick="mostrartipo('urgencia')">
                            <img src="https://i0.wp.com/enfermerodesimulacion.com/wp-content/uploads/2020/07/Copia-de-la-simulaci%C3%B3n-cl%C3%ADnica-no-es-un-juego-3.png?fit=1120%2C630&ssl=1" alt="Medicamentos de Urgencia">
                            <h1>Medicamentos de Urgencia</h1>
                        </div>
                        <div class="feature" onclick="mostrartipo('especial')">
                            <img src="https://www.shutterstock.com/image-vector/3d-realistic-jar-round-pills-260nw-2337616455.jpg" alt="Medicamentos de Venta Especial">
                            <h1>Medicamentos de Venta Especial</h1>
                        </div>
                        <div class="feature" onclick="mostrartipo('avanzadas')">
                            <img src="https://assets-global.website-files.com/63fc754c9c85979aadede3f3/649ade81c47ab4fa25e45d00_gmps%20terapia%20avanzada%20690.jpg" alt="Medicamentos de Terapia Avanzada">
                            <h1>Medicamentos de Terapia Avanzada</h1>
                        </div>
                        <div class="feature" onclick="mostrartipo('diagnostico')">
                            <img src="https://lrdiagnostico.com/wp-content/uploads/2024/04/INICIO-LINEAS-DE-PRODUCTO.jpg" alt="Productos de Diagnóstico">
                            <h1>Productos de Diagnóstico</h1>
                        </div>
                        <div class="feature" onclick="mostrartipo('magistrales')">
                            <img src="https://biohealthy.com.co/wp-content/uploads/2022/03/formulas-magistrales-biohhealthy.jpeg" alt="Preparaciones Magistrales">
                            <h1>Preparaciones Magistrales</h1>
                        </div>
                    </section>
                </div>`;
            break;
        
    case 'servicios':
        main.innerHTML = `
        <style>
            /* Estilos para la sección de servicios */
            .services {
                padding: 80px 0;
                text-align: center;
            }
            .services h2 {
                font-size: 2.5rem;
                margin-bottom: 40px;
            }
            .service-list {
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
                justify-content: center;
            }
            .service-item {
                background-color: #f9f9f9;
                border: 1px solid #ddd;
                border-radius: 10px;
                padding: 20px;
                flex: 1 1 300px;
                max-width: 300px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                transition: transform 0.3s ease;
            }
            .service-item:hover {
                transform: translateY(-10px);
            }
            .service-item img {
                max-width: 100%;
                border-radius: 10px;
                margin-bottom: 15px;
            }
            .service-item h3 {
                font-size: 1.5rem;
                margin-bottom: 10px;
            }
            .service-item p {
                font-size: 1rem;
                color: #666;
            }
        </style>
        <div class="container">
            <section class="services">
                <h2>Nuestros Servicios</h2>
                <div class="service-list">
                    <div class="service-item">
                        <img src="https://gacetadental.com/wp-content/uploads/2022/07/Medicamentos-internet.jpg" alt="Servicio 1">
                        <h3>Venta en Línea de Medicamentos y Productos de Salud</h3>
                        <p>BUENASALUD ofrece a los clientes comprar medicamentos, productos de cuidado personal, suplementos y otros artículos de salud desde la comodidad de sus hogares.</p>
                        <button onclick="mostrarServicio('analisis')">Ver más</button>
                    </div>
                    <div class="service-item">
                        <img src="https://img.freepik.com/vector-premium/consulta-linea-o-concepto-retroalimentacion-laptop-foto-farmaceutica-medicamentos-mano_531064-7414.jpg" alt="Servicio 2">
                        <h3>Consulta Farmacéutica en Línea</h3>
                        <p>BUENASALUD ofrece servicios de consulta y asesoramiento farmacéutico a través de correo electrónico o videoconferencia con farmacéuticos calificados.</p>
                        <button onclick="mostrarServicio('asesoramiento')">Ver más</button>
                    </div>
                    <div class="service-item">
                        <img src="https://tecnosoluciones.com/wp-content/uploads/2023/03/sistemas-de-software-para-centros-de-salud-o-clinicas.png" alt="Servicio 3">
                        <h3>Reserva y Recarga de Medicamentos</h3>
                        <p>BUENASALUD ofrece a los clientes puedan reservar o recargar sus medicamentos recetados a través de la página web de la farmacia. Pueden proporcionar detalles de la receta y programar la recogida en la sucursal más conveniente.</p>
                        <button onclick="mostrarServicio('entrenamiento')">Ver más</button>
                    </div>
                    <div class="service-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVCVuN8lVT_df_5kZ58hbaD3YrtOSXTc-UcK_sKWh33t7WncakESf7rnvyWSiMa_iasLY&usqp=CAU" alt="Servicio 4">
                        <h3>Información sobre Salud y Bienestar</h3>
                        <p>BUENASALUD ofrece recursos y artículos informativos sobre una variedad de temas de salud y bienestar, incluyendo enfermedades comunes, consejos de prevención, estilos de vida saludables y más.</p>
                        <button onclick="mostrarServicio('seguimiento')">Ver más</button>
                    </div>
                </div>
            </section>
        </div>`;
    break;
        case 'contacto':
            main.innerHTML = `
        <style>
            /* Estilos generales */
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 20px;
            }
            /* Estilos para la sección de contacto */
            .contact-info {
                padding: 80px 0;
                text-align: center;
            }
            .contact-info h2 {
                font-size: 2.5rem;
                margin-bottom: 40px;
            }
            .contact-form {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
            }
            .contact-form input, .contact-form textarea {
                width: 100%;
                max-width: 600px;
                padding: 15px;
                border: 1px solid #ddd;
                border-radius: 5px;
                font-size: 1rem;
            }
            .contact-form textarea {
                resize: vertical;
                height: 150px;
            }
            .contact-form button {
                background-color: #333;
                color: white;
                border: none;
                padding: 15px 30px;
                font-size: 1rem;
                border-radius: 5px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }
            .contact-form button:hover {
                background-color: #555;
            }
            .contact-details {
                margin-top: 40px;
                font-size: 1rem;
                color: #666;
            }
            .contact-details p {
                margin-bottom: 10px;
            }
        </style>
        <div class="container">
            <section class="contact-info">
                <img src="https://www.vendedor.ninja/wp-content/uploads/2014/10/email-marketing.jpg" style="width: 30%; display: block; margin: 0 auto; border-radius: 100%;">
                <form id="contact-form" class="contact-form" onsubmit="enviarCorreo(event)">
                    <h2 style="text-align: center;">Información de Contacto</h2>
                    <input id="nombre" type="text" placeholder="Nombre Completo" required>
                    <input id="email" type="email" placeholder="Correo Electrónico" required>
                    <textarea id="mensaje" placeholder="Tu Mensaje" required></textarea>
                    <button type="submit">Enviar</button> <!-- Cambiado el type de button a submit -->
                </form>
                <div class="contact-details">
                    <p><strong>Dirección:</strong> Av. 19 De Mayo y Calavi, Cotopaxi, Ecuador</p>
                    <p><strong>Teléfono:</strong> +593 98 044 6167</p>
                    <p><strong>Email:</strong> BUENASALUD@empresa.com</p>
                </div>
            </section>
        </div>`;
    break;
    case 'acerca':
    main.innerHTML = `
        <style>
            .about-us {
                padding: 80px 0;
                text-align: center;
            }
            .about-us h2 {
                font-size: 2.5rem;
                margin-bottom: 40px;
            }
            .about-content {
                max-width: 800px;
                margin: 0 auto;
                text-align: left;
            }
            .about-content img {
                max-width: 100%;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .about-content p {
                font-size: 1.1rem;
                line-height: 1.6;
                color: #666;
                margin-bottom: 20px;
            }
            .team {
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
                justify-content: center;
            }
            .team-member {
                background-color: #f9f9f9;
                border: 1px solid #ddd;
                border-radius: 10px;
                padding: 20px;
                flex: 1 1 300px;
                max-width: 300px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                transition: transform 0.3s ease;
                text-align: center;
            }
            .team-member:hover {
                transform: translateY(-10px);
            }
            .team-member img {
                max-width: 100%;
                border-radius: 10px;
                margin-bottom: 15px;
            }
            .team-member h3 {
                font-size: 1.5rem;
                margin-bottom: 10px;
            }
            .team-member p {
                font-size: 1rem;
                color: #666;
            }
            .team-member button {
                display: inline-block;
                padding: 10px 20px;
                margin-top: 10px;
                font-size: 1rem;
                color: #fff;
                background-color: #007BFF;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                text-decoration: none;
            }
            .team-member button:hover {
                background-color: #0056b3;
            }
            .developer-details {
                display: none;
                padding: 80px 0;
                text-align: center;
            }
            .developer-details h2 {
                font-size: 2.5rem;
                margin-bottom: 20px;
            }
            .developer-details p {
                font-size: 1.1rem;
                line-height: 1.6;
                color: #666;
                max-width: 800px;
                margin: 0 auto 20px;
            }
            .developer-details img {
                max-width: 100%;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .back-button {
                display: inline-block;
                padding: 10px 20px;
                margin-top: 20px;
                font-size: 1rem;
                color: #fff;
                background-color: #007BFF;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                text-decoration: none;
            }
            .back-button:hover {
                background-color: #0056b3;
            }
        </style>
        <div class="container">
            <section class="about-us">
                <img src="https://farmaciasbuenasalud.cl/wp-content/uploads/2021/01/Logo-Buena-salud-small-fondo-blanco.png" style="width: 30%; border-radius: 50%; display: block; margin: 0 auto;" alt="Nuestra Empresa">
                <h2>Acerca de Nosotros</h2>
                <div class="about-content">
                <p>BUENASALUD es una farmacia comprometida con la salud y el bienestar de nuestros clientes, ofreciendo una amplia gama de productos y servicios para satisfacer sus necesidades médicas y de estilo de vida.</p>
                <p>Nuestro equipo está dedicado a proporcionar atención personalizada y asesoramiento experto, asegurando que cada cliente reciba el mejor cuidado y atención para mejorar su calidad de vida.</p>
                </div>
                <h3>Conoce a nuestro equipo</h3>
                <div class="team">
                    <div class="team-member" onclick="showDeveloperDetails('Edison Barrera', 'DESARROLLADOR', 'Edison Barrera es un desarrollador con amplia experiencia en la creación de aplicaciones innovadoras. Ha trabajado en varios proyectos de alto impacto y se especializa en el desarrollo de soluciones tecnológicas avanzadas para mejorar el rendimiento deportivo.', 'https://scontent.fuio10-1.fna.fbcdn.net/v/t39.30808-6/426379216_3293036634330033_3850189104314073076_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3pdIJ_T0EAoQ7kNvgGXBfXk&_nc_ht=scontent.fuio10-1.fna&oh=00_AYArHEXgB6CiNNg7g1SehMBSt5irm6WLQJBHKDM5zbSw3Q&oe=666005F9')">
                        <img src="https://scontent.fuio10-1.fna.fbcdn.net/v/t39.30808-6/426379216_3293036634330033_3850189104314073076_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BWSMyAMFRpcQ7kNvgERheKd&_nc_ht=scontent.fuio10-1.fna&oh=00_AYCpaRbj29EAYwXdF4n6jyOu-mNJ1FJqAGLeE2DHK9mrxg&oe=666BE379" alt="Edison Barrera">
                        <h3>Edison Barrera</h3>
                        <p>DESARROLLADOR</p>
                        <button onclick="mostrarServicio('Edison')">Ver más</button>
                    </div>
                    <div class="team-member" onclick="showDeveloperDetails('Jennifer Faz', 'DESARROLLADORA', 'Jennifer Faz se especializa en el desarrollo frontend y tiene un gran interés en la experiencia del usuario. Su habilidad para crear interfaces intuitivas y atractivas ha sido clave en la implementación de soluciones innovadoras para nuestros clientes.', 'https://scontent.fuio10-1.fna.fbcdn.net/v/t1.6435-9/175909235_450686772666193_7462438455433646436_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vwH0iWZhUMIQ7kNvgGA3d1p&_nc_ht=scontent.fuio10-1.fna&oh=00_AYBVRx7TBb-xDw3SiCsTIQXHeW_SHzKwo1iYxf5IVCQtWA&oe=6681CC4A')">
                        <img src="https://scontent.fuio10-1.fna.fbcdn.net/v/t39.30808-6/438086481_7644911172288605_892951878702695438_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=C4l9MwMngjkQ7kNvgFsEk6D&_nc_ht=scontent.fuio10-1.fna&oh=00_AYB0bqazxCNIpzscsFYujqgIDejzgOZbZU3kAa2UG_VWFQ&oe=666BF4AA" alt="Jennifer Faz">
                        <h3>Jennifer Faz</h3>
                        <p>DESARROLLADORA</p>
                        <button onclick="mostrarServicio('Jennifer')">Ver más</button>
                    </div>
                    <div class="team-member" onclick="showDeveloperDetails('Steven Velez', 'DESARROLLADOR', 'Steven Velez es un desarrollador con amplia experiencia en la creación de aplicaciones innovadoras. Ha trabajado en varios proyectos de alto impacto y se especializa en el desarrollo de soluciones tecnológicas avanzadas para mejorar el rendimiento deportivo.', 'https://scontent.fuio10-1.fna.fbcdn.net/v/t39.30808-6/426379216_3293036634330033_3850189104314073076_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3pdIJ_T0EAoQ7kNvgGXBfXk&_nc_ht=scontent.fuio10-1.fna&oh=00_AYArHEXgB6CiNNg7g1SehMBSt5irm6WLQJBHKDM5zbSw3Q&oe=666005F9')">
                        <img src="https://scontent.fuio10-1.fna.fbcdn.net/v/t39.30808-6/293992534_3108970632709617_1173418998859448657_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0xgZpeF-j8YQ7kNvgG8_8qS&_nc_ht=scontent.fuio10-1.fna&oh=00_AYDNUz6Z2pckxPPqDPMDtR3mLizMkrUSzoG_7bNtrjycyw&oe=666BFC96" alt="Steven Velez">
                        <h3>Steven Velez</h3>
                        <p>DESARROLLADOR</p>
                        <button onclick="mostrarServicio('Steven')">Ver más</button>
                    </div>
                    <div class="team-member" onclick="showDeveloperDetails('Alexi Jimenez', 'DESARROLLADOR', 'Steven Velez es un desarrollador con amplia experiencia en la creación de aplicaciones innovadoras. Ha trabajado en varios proyectos de alto impacto y se especializa en el desarrollo de soluciones tecnológicas avanzadas para mejorar el rendimiento deportivo.', 'https://scontent.fuio10-1.fna.fbcdn.net/v/t39.30808-6/426379216_3293036634330033_3850189104314073076_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3pdIJ_T0EAoQ7kNvgGXBfXk&_nc_ht=scontent.fuio10-1.fna&oh=00_AYArHEXgB6CiNNg7g1SehMBSt5irm6WLQJBHKDM5zbSw3Q&oe=666005F9')">
                        <img src="https://instagram.fuio10-1.fna.fbcdn.net/v/t51.2885-19/434940037_298363286612379_6155782638737710711_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fuio10-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=W_qPHSE_VOgQ7kNvgHdrP1q&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYAYG5ObnmUmqd-aYoIGnsBOJeGw2TKyQLzFWRxxGhrYuw&oe=666BD655&_nc_sid=8b3546" alt="Alexi Jimenez">
                        <h3>Alexi Jimenez</h3>
                        <p>DESARROLLADOR</p>
                        <button onclick="mostrarServicio('Alexi')">Ver más</button>
                    </div>
                </div>
            </section>
        </div>
        
    `;
    break;


        default:
            // Si la acción no coincide con ninguna, no hacer nada
            break;
    }
}