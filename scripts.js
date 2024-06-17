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
            <div class="producto">
                <img src="ruta/a/imagen1.jpg" alt="Producto Libre">
                <div class="descripcion">
                    <h2>Producto Libre</h2>
                    <p>Descripción detallada del producto libre.</p>
                    <p>Precio: $XX.XX</p>
                    <button onclick="agregarAlCarrito('Producto Libre')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; margin-right: 10px;">Agregar a Carrito</button>
                </div>
            </div> 
            <button onclick="cargarContenido('inicio')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #6c757d; border: none; border-radius: 5px; cursor: pointer; text-decoration: none;">Volver atrás</button>
        `;
    } else if (medicamento === 'recetados') {
        contenido = `
            <div class="producto">
                <img src="ruta/a/imagen2.jpg" alt="Producto Recetado">
                <div class="descripcion">
                    <h2>Producto Recetado</h2>
                    <p>Descripción detallada del producto recetado.</p>
                    <p>Precio: $YY.YY</p>
                    <button onclick="agregarAlCarrito('Producto Recetado')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; margin-right: 10px;">Agregar a Carrito</button>
                </div>
            </div>
            <button onclick="cargarContenido('inicio')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #6c757d; border: none; border-radius: 5px; cursor: pointer; text-decoration: none;">Volver atrás</button>
        `;
    } else if (medicamento === 'controlados') {
        contenido = `
            <div class="producto">
                <img src="ruta/a/imagen3.jpg" alt="Producto Controlado">
                <div class="descripcion">
                    <h2>Producto Controlado</h2>
                    <p>Descripción detallada del producto controlado.</p>
                    <p>Precio: $ZZ.ZZ</p>
                    <button onclick="agregarAlCarrito('Producto Controlado')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; margin-right: 10px;">Agregar a Carrito</button>
                </div>
            </div>
            <button onclick="cargarContenido('inicio')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #6c757d; border: none; border-radius: 5px; cursor: pointer; text-decoration: none;">Volver atrás</button>
        `;
    } else if (medicamento === 'genericos') {
        contenido = `
            <div class="producto">
                <img src="ruta/a/imagen4.jpg" alt="Producto Genérico">
                <div class="descripcion">
                    <h2>Producto Genérico</h2>
                    <p>Descripción detallada del producto genérico.</p>
                    <p>Precio: $AA.AA</p>
                    <button onclick="agregarAlCarrito('Producto Genérico')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; margin-right: 10px;">Agregar a Carrito</button>
                </div>
            </div>
            <button onclick="cargarContenido('inicio')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #6c757d; border: none; border-radius: 5px; cursor: pointer; text-decoration: none;">Volver atrás</button>
        `;
    } else if (medicamento === 'marca') {
        contenido = `
            <div class="producto">
                <img src="ruta/a/imagen5.jpg" alt="Producto de Marca">
                <div class="descripcion">
                    <h2>Producto de Marca</h2>
                    <p>Descripción detallada del producto de marca.</p>
                    <p>Precio: $BB.BB</p>
                    <button onclick="agregarAlCarrito('Producto de Marca')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; margin-right: 10px;">Agregar a Carrito</button>
                </div>
            </div>
            <button onclick="cargarContenido('inicio')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #6c757d; border: none; border-radius: 5px; cursor: pointer; text-decoration: none;">Volver atrás</button>
        `;
    } else if (medicamento === 'hospitalarios') {
        contenido = `
            <div class="producto">
                <img src="ruta/a/imagen6.jpg" alt="Producto Hospitalario">
                <div class="descripcion">
                    <h2>Producto Hospitalario</h2>
                    <p>Descripción detallada del producto hospitalario.</p>
                    <p>Precio: $CC.CC</p>
                    <button onclick="agregarAlCarrito('Producto Hospitalario')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; margin-right: 10px;">Agregar a Carrito</button>
                </div>
            </div>
            <button onclick="cargarContenido('inicio')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #6c757d; border: none; border-radius: 5px; cursor: pointer; text-decoration: none;">Volver atrás</button>
        `;
    } else if (medicamento === 'suplementos') {
        contenido = `
            <div class="producto">
                <img src="ruta/a/imagen7.jpg" alt="Producto de Suplemento">
                <div class="descripcion">
                    <h2>Suplemento</h2>
                    <p>Descripción detallada del suplemento.</p>
                    <p>Precio: $DD.DD</p>
                    <button onclick="agregarAlCarrito('Producto de Suplemento')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; margin-right: 10px;">Agregar a Carrito</button>
                </div>
            </div>
            <button onclick="cargarContenido('inicio')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #6c757d; border: none; border-radius: 5px; cursor: pointer; text-decoration: none;">Volver atrás</button>
        `;
    } else if (medicamento === 'fitoterapia') {
        contenido = `
            <div class="producto">
                <img src="ruta/a/imagen8.jpg" alt="Producto de Fitoterapia">
                <div class="descripcion">
                    <h2>Producto de Fitoterapia</h2>
                    <p>Descripción detallada del producto de fitoterapia.</p>
                    <p>Precio: $EE.EE</p>
                    <button onclick="agregarAlCarrito('Producto de Fitoterapia')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; margin-right: 10px;">Agregar a Carrito</button>
                </div>
            </div>
            <button onclick="cargarContenido('inicio')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #6c757d; border: none; border-radius: 5px; cursor: pointer; text-decoration: none;">Volver atrás</button>
        `;
    }   else if (medicamento === 'homeopaticos') {
        contenido = `
            <div class="producto">
                <img src="https://assets1.farmaciasanpablo.com.mx/landings/_blog/natural/230310-medicamentoHomeopatico/medicamento-homeopatico-que-es.jpg" alt="Medicamentos Homeopáticos">
                <div class="descripcion">
                    <h2>Medicamentos Homeopáticos</h2>
                    <p>Descripción detallada de los medicamentos homeopáticos.</p>
                    <p>Precio: $FF.FF</p>
                    <button onclick="agregarAlCarrito('Medicamentos Homeopáticos')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; margin-right: 10px;">Agregar a Carrito</button>
                </div>
            </div>
            <button onclick="cargarContenido('inicio')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #6c757d; border: none; border-radius: 5px; cursor: pointer; text-decoration: none;">Volver atrás</button>
        `;
    } else if (medicamento === 'veterinarios') {
        contenido = `
            <div class="producto">
                <img src="https://t2.uc.ltmcdn.com/es/posts/4/6/4/meloxicam_para_perros_para_que_sirve_y_dosis_50464_orig.jpg" alt="Medicamentos para Uso Veterinario">
                <div class="descripcion">
                    <h2>Medicamentos para Uso Veterinario</h2>
                    <p>Descripción detallada de los medicamentos para uso veterinario.</p>
                    <p>Precio: $GG.GG</p>
                    <button onclick="agregarAlCarrito('Medicamentos para Uso Veterinario')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; margin-right: 10px;">Agregar a Carrito</button>
                </div>
            </div>
            <button onclick="cargarContenido('inicio')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #6c757d; border: none; border-radius: 5px; cursor: pointer; text-decoration: none;">Volver atrás</button>
        `;
    } else if (medicamento === 'personal') {
        contenido = `
            <div class="producto">
                <img src="https://img.freepik.com/vector-premium/cuidado-personal-higiene-salud-corporal-articulos-productos-bano_8071-4348.jpg" alt="Productos de Cuidado Personal y Salud">
                <div class="descripcion">
                    <h2>Productos de Cuidado Personal y Salud</h2>
                    <p>Descripción detallada de los productos de cuidado personal y salud.</p>
                    <p>Precio: $HH.HH</p>
                    <button onclick="agregarAlCarrito('Productos de Cuidado Personal y Salud')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; margin-right: 10px;">Agregar a Carrito</button>
                </div>
            </div>
            <button onclick="cargarContenido('inicio')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #6c757d; border: none; border-radius: 5px; cursor: pointer; text-decoration: none;">Volver atrás</button>
        `;
    } else if (medicamento === 'urgencia') {
        contenido = `
            <div class="producto">
                <img src="https://i0.wp.com/enfermerodesimulacion.com/wp-content/uploads/2020/07/Copia-de-la-simulaci%C3%B3n-cl%C3%ADnica-no-es-un-juego-3.png?fit=1120%2C630&ssl=1" alt="Medicamentos de Urgencia">
                <div class="descripcion">
                    <h2>Medicamentos de Urgencia</h2>
                    <p>Descripción detallada de los medicamentos de urgencia.</p>
                    <p>Precio: $II.II</p>
                    <button onclick="agregarAlCarrito('Medicamentos de Urgencia')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; margin-right: 10px;">Agregar a Carrito</button>
                </div>
            </div>
            <button onclick="cargarContenido('inicio')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #6c757d; border: none; border-radius: 5px; cursor: pointer; text-decoration: none;">Volver atrás</button>
        `;
    } else if (medicamento === 'especial') {
        contenido = `
            <div class="producto">
                <img src="https://www.shutterstock.com/image-vector/3d-realistic-jar-round-pills-260nw-2337616455.jpg" alt="Medicamentos de Venta Especial">
                <div class="descripcion">
                    <h2>Medicamentos de Venta Especial</h2>
                    <p>Descripción detallada de los medicamentos de venta especial.</p>
                    <p>Precio: $JJ.JJ</p>
                    <button onclick="agregarAlCarrito('Medicamentos de Venta Especial')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; margin-right: 10px;">Agregar a Carrito</button>
                </div>
            </div>
            <button onclick="cargarContenido('inicio')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #6c757d; border: none; border-radius: 5px; cursor: pointer; text-decoration: none;">Volver atrás</button>
        `;
    } else if (medicamento === 'avanzadas') {
        contenido = `
            <div class="producto">
                <img src="https://assets-global.website-files.com/63fc754c9c85979aadede3f3/649ade81c47ab4fa25e45d00_gmps%20terapia%20avanzada%20690.jpg" alt="Medicamentos de Terapia Avanzada">
                <div class="descripcion">
                    <h2>Medicamentos de Terapia Avanzada</h2>
                    <p>Descripción detallada de los medicamentos de terapia avanzada.</p>
                    <p>Precio: $KK.KK</p>
                    <button onclick="agregarAlCarrito('Medicamentos de Terapia Avanzada')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; margin-right: 10px;">Agregar a Carrito</button>
                </div>
            </div>
            <button onclick="cargarContenido('inicio')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #6c757d; border: none; border-radius: 5px; cursor: pointer; text-decoration: none;">Volver atrás</button>
        `;
    } else if (medicamento === 'diagnostico') {
        contenido = `
            <div class="producto">
                <img src="https://lrdiagnostico.com/wp-content/uploads/2024/04/INICIO-LINEAS-DE-PRODUCTO.jpg" alt="Productos de Diagnóstico">
                <div class="descripcion">
                    <h2>Productos de Diagnóstico</h2>
                    <p>Descripción detallada de los productos de diagnóstico.</p>
                    <p>Precio: $MM.MM</p>
                    <button onclick="agregarAlCarrito('Productos de Diagnóstico')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; margin-right: 10px;">Agregar a Carrito</button>
                </div>
            </div>
            <button onclick="cargarContenido('inicio')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #6c757d; border: none; border-radius: 5px; cursor: pointer; text-decoration: none;">Volver atrás</button>
        `;
    } else if (medicamento === 'magistrales') {
        contenido = `
            <div class="producto">
                <img src="https://biohealthy.com.co/wp-content/uploads/2022/03/formulas-magistrales-biohhealthy.jpeg" alt="Preparaciones Magistrales">
                <div class="descripcion">
                    <h2>Preparaciones Magistrales</h2>
                    <p>Descripción detallada de las preparaciones magistrales.</p>
                    <p>Precio: $NN.NN</p>
                    <button onclick="agregarAlCarrito('Preparaciones Magistrales')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; margin-right: 10px;">Agregar a Carrito</button>
                </div>
            </div>
            <button onclick="cargarContenido('inicio')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #6c757d; border: none; border-radius: 5px; cursor: pointer; text-decoration: none;">Volver atrás</button>
        `;
    } 
    else {
        // Si no se reconoce el tipo de medicamento, se muestra un mensaje de error o manejo adecuado
        contenido = `<p>No se encontraron productos para la categoría seleccionada.</p>`;
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
        case 'venta':
            contenido = `
                <div class="service-container">
                    <h1>BUENASALUD: Tu Farmacia Online de Confianza</h1>
                    <img src="https://blogs.portafolio.co/desde-la-red/wp-content/uploads/sites/75/2019/11/Requisitos-legales-para-vender-medicamentos-en-una-farmacia-online.jpg" alt="Farmacia Online" style="max-width: 100%;">
                    <p>En BUENASALUD, nos apasiona cuidar de ti y de tu familia. Somos más que una farmacia en línea; somos tu aliado en salud. Nuestra misión es hacer que el acceso a medicamentos y productos de bienestar sea seguro, conveniente y asequible, todo desde la comodidad de tu hogar.</p>
                    <ul>
                        <li><strong>🌟 Variedad y Calidad Garantizada:</strong> Ofrecemos una amplia gama de medicamentos, productos de salud y cuidado personal de marcas reconocidas, asegurando que encuentres exactamente lo que necesitas para tu bienestar.</li>
                        <li><strong>🚀 Comodidad y Rapidez:</strong> Navega fácilmente por nuestro sitio web intuitivo, realiza tu pedido en unos pocos clics y recibe tus productos en la puerta de tu casa en tiempo récord.</li>
                        <li><strong>💬 Asesoramiento Profesional:</strong> Nuestro equipo de farmacéuticos y especialistas en salud está siempre disponible para brindarte el mejor consejo y responder a tus preguntas.</li>
                        <li><strong>🔒 Seguridad y Confidencialidad:</strong> Priorizamos tu seguridad y privacidad. Todos los procesos de compra y pago están protegidos con tecnología de vanguardia.</li>
                        <li><strong>🎁 Promociones Exclusivas:</strong> Disfruta de descuentos especiales y promociones en tus productos favoritos. Además, ofrecemos programas de fidelidad y suscripción.</li>
                        <li><strong>🌱 Compromiso con la Comunidad:</strong> Nos esforzamos por promover una vida saludable y sostenible. A través de programas de educación en salud y alianzas con organizaciones locales, apoyamos el bienestar de nuestra comunidad.</li>
                    </ul>
                    <button onclick="cargarContenido('servicios')" style="display: inline-block; padding: 10px 20px; margin-top: 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none;">Volver atrás</button>
                </div>
            `;
            break;
        case 'consulta':
            contenido = `
                <div class="service-container">
                    <h1>Consulta Farmacéutica en Línea</h1>
                    <img src="https://static.vecteezy.com/system/resources/previews/008/157/669/non_2x/online-pharmacy-concept-pharmacist-gives-pill-customer-buys-medication-in-smartphone-screen-online-doctor-consultation-remote-drugstore-illustration-healthcare-banner-for-app-web-vector.jpg" alt="Consulta Farmacéutica en Línea" style="max-width: 100%;">
                    <p>En BUENASALUD, ofrecemos un servicio de <strong>Consulta Farmacéutica en Línea</strong> diseñado para brindarte asesoramiento personalizado y profesional sobre tus necesidades de salud. Ya sea que tengas preguntas sobre medicamentos, necesitas orientación sobre tratamientos, o requieres consejos para el cuidado de tu salud, nuestros expertos farmacéuticos están a un clic de distancia.</p>
                    <ul>
                        <li><strong>👨‍⚕️ Asesoramiento Profesional:</strong> Habla directamente con nuestros farmacéuticos licenciados que te proporcionarán información precisa y recomendaciones basadas en tu historial médico y situación actual.</li>
                        <li><strong>💊 Gestión de Medicamentos:</strong> Obtén orientación sobre el uso correcto de tus medicamentos, dosificaciones, interacciones, y efectos secundarios para asegurar que tu tratamiento sea seguro y efectivo.</li>
                        <li><strong>🩺 Soluciones Personalizadas:</strong> Recibe planes de salud personalizados que pueden incluir recomendaciones sobre suplementos, ajustes en el estilo de vida y otras estrategias para mejorar tu bienestar.</li>
                        <li><strong>📅 Acceso Conveniente:</strong> Agenda tu consulta en línea en el momento que más te convenga, sin necesidad de salir de casa. Nos adaptamos a tu horario.</li>
                        <li><strong>🔒 Confidencialidad Garantizada:</strong> Todos los detalles de tu consulta son tratados con la más estricta confidencialidad y privacidad, utilizando sistemas seguros para proteger tu información.</li>
                    </ul>
                    <button onclick="cargarContenido('servicios')" style="display: inline-block; padding: 10px 20px; margin-top: 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none;">Volver atrás</button>
                </div>
            `;
            break;
        case 'reserva':
            contenido = `
                <div class="service-container">
                    <h1>Reserva y Recarga de Medicamentos</h1>
                    <img src="https://static.vecteezy.com/system/resources/previews/005/961/619/non_2x/online-pharmacy-word-concepts-banner-medication-medicine-eshopping-online-consultant-presentation-website-isolated-lettering-typography-idea-with-linear-icons-outline-illustration-vector.jpg" alt="Reserva y Recarga de Medicamentos" style="max-width: 100%;">
                    <p>Con el servicio de <strong>Reserva y Recarga de Medicamentos</strong> de BUENASALUD, nunca más tendrás que preocuparte por quedarte sin tus medicamentos esenciales. Simplificamos la gestión de tus tratamientos médicos, permitiéndote reservar tus medicamentos con antelación y programar recargas automáticas para garantizar que siempre tengas lo que necesitas a mano.</p>
                    <ul>
                        <li><strong>🗓️ Reserva Fácil:</strong> Planifica y reserva tus medicamentos con anticipación, evitando la preocupación de olvidarte de tus reposiciones.</li>
                        <li><strong>🔄 Recarga Automática:</strong> Establece recargas automáticas para tus medicamentos habituales, asegurando un suministro constante sin interrupciones.</li>
                        <li><strong>💼 Gestión de Prescripciones:</strong> Nuestro sistema te ayuda a gestionar tus recetas médicas y mantener un historial de tus medicamentos, facilitando su renovación.</li>
                        <li><strong>📦 Entrega a Domicilio:</strong> Disfruta de la comodidad de recibir tus medicamentos directamente en tu puerta, con opciones de entrega rápida y segura.</li>
                        <li><strong>🔔 Recordatorios y Notificaciones:</strong> Recibe recordatorios oportunos para tus recargas y notificaciones cuando tus pedidos estén listos para ser enviados.</li>
                    </ul>
                    <button onclick="cargarContenido('servicios')" style="display: inline-block; padding: 10px 20px; margin-top: 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none;">Volver atrás</button>
                </div>
            `;
            break;
        case 'informacion':
            contenido = `
                <div class="service-container">
                    <h1>Información sobre Salud y Bienestar</h1>
                    <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528" alt="Información sobre Salud y Bienestar" style="max-width: 100%;">
                    <p>En BUENASALUD, estamos comprometidos con tu bienestar integral. Nuestro servicio de <strong>Información sobre Salud y Bienestar</strong> te ofrece acceso a recursos confiables y actualizados para que puedas tomar decisiones informadas sobre tu salud. Desde artículos y guías hasta consejos de expertos, te proporcionamos el conocimiento que necesitas para llevar un estilo de vida saludable.</p>
                    <ul>
                        <li><strong>📚 Artículos y Guías:</strong> Explora una amplia gama de artículos sobre salud, nutrición, ejercicio y bienestar emocional, escritos por profesionales y especialistas en cada área.</li>
                        <li><strong>🩺 Consejos de Expertos:</strong> Recibe recomendaciones y consejos prácticos directamente de nuestros farmacéuticos y expertos en salud, basados en las últimas investigaciones y tendencias.</li>
                        <li><strong>📊 Actualizaciones Médicas:</strong> Mantente al día con las noticias más recientes en el ámbito de la salud, incluidas nuevas terapias, avances en medicamentos, y cambios en las recomendaciones de salud pública.</li>
                        <li><strong>🔍 Recursos Educativos:</strong> Accede a guías detalladas y recursos educativos que te ayudan a comprender mejor diversas condiciones de salud y cómo manejarlas eficazmente.</li>
                        <li><strong>💬 Comunidad y Soporte:</strong> Participa en foros y grupos de apoyo donde puedes compartir experiencias, hacer preguntas y obtener apoyo de otros usuarios y profesionales de la salud.</li>
                    </ul>
                    <button onclick="cargarContenido('servicios')" style="display: inline-block; padding: 10px 20px; margin-top: 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none;">Volver atrás</button>
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
                        <button onclick="cargarContenido('acerca')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; margin-right: 10px;">Volver atrás</button>
                    </div>
                `;
            break;
            case 'Jennifer':
                contenido = `
                    <div class="service-container">
                        <img style="border-radius: 50%; width: 15%; display: block; margin: 0 auto;" src="https://scontent.fuio10-1.fna.fbcdn.net/v/t39.30808-6/438086481_7644911172288605_892951878702695438_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=C4l9MwMngjkQ7kNvgFsEk6D&_nc_ht=scontent.fuio10-1.fna&oh=00_AYB0bqazxCNIpzscsFYujqgIDejzgOZbZU3kAa2UG_VWFQ&oe=666BF4AA" alt="Jennifer Faz">
                        <h1 style="text-align: center;">Jennifer Faz</h1>
                        <p>Se especializa en el desarrollo frontend y tiene un gran interés en la experiencia del usuario. Su habilidad para crear interfaces intuitivas y atractivas ha sido clave en la implementación de soluciones innovadoras para nuestros clientes.</p>
                        <button onclick="cargarContenido('acerca')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; margin-right: 10px;">Volver atrás</button>
                    </div>
                `;
            break;
            case 'Steven':
                contenido = `
                    <div class="service-container">
                        <img style="border-radius: 50%; width: 15%; display: block; margin: 0 auto;" src="https://scontent.fuio10-1.fna.fbcdn.net/v/t39.30808-6/293992534_3108970632709617_1173418998859448657_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0xgZpeF-j8YQ7kNvgG8_8qS&_nc_ht=scontent.fuio10-1.fna&oh=00_AYDNUz6Z2pckxPPqDPMDtR3mLizMkrUSzoG_7bNtrjycyw&oe=666BFC96" alt="Steven Velez">
                        <h1 style="text-align: center;">Steven Velez</h1>
                        <p>Es un desarrollador con amplia experiencia en la creación de aplicaciones innovadoras. Ha trabajado en varios proyectos de alto impacto y se especializa en el desarrollo de soluciones tecnológicas avanzadas para mejorar el rendimiento deportivo.</p>
                        <button onclick="cargarContenido('acerca')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; margin-right: 10px;">Volver atrás</button>
                    </div>
                `;
            break;
            case 'Alexi':
                contenido = `
                    <div class="service-container">
                        <img style="border-radius: 50%; width: 15%; display: block; margin: 0 auto;" src="https://scontent.fuio10-1.fna.fbcdn.net/v/t39.30808-6/448090660_439526802235644_4585318733155341554_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Vm82C-B33NIQ7kNvgGD-yEg&_nc_ht=scontent.fuio10-1.fna&oh=00_AYD5S9sJ_VXMtIhcfErzc08lzxZXOCMvJNRqZu-f2_9k0A&oe=666E7801" alt="Alexi Jimenez">
                        <h1 style="text-align: center;">Alexi Jimenez</h1>
                        <p>Es un desarrollador con amplia experiencia en la creación de aplicaciones innovadoras. Ha trabajado en varios proyectos de alto impacto y se especializa en el desarrollo de soluciones tecnológicas avanzadas para mejorar el rendimiento deportivo.</p>
                        <button onclick="cargarContenido('acerca')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; margin-right: 10px;">Volver atrás</button>
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
                        <button onclick="mostrarServicio('venta')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; margin-right: 10px;">Ver más</button>
                    </div>
                    <div class="service-item">
                        <img src="https://img.freepik.com/vector-premium/consulta-linea-o-concepto-retroalimentacion-laptop-foto-farmaceutica-medicamentos-mano_531064-7414.jpg" alt="Servicio 2">
                        <h3>Consulta Farmacéutica en Línea</h3>
                        <p>BUENASALUD ofrece servicios de consulta y asesoramiento farmacéutico a través de correo electrónico o videoconferencia con farmacéuticos calificados.</p>
                        <button onclick="mostrarServicio('consulta')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; margin-right: 10px;">Ver más</button>
                    </div>
                    <div class="service-item">
                        <img src="https://tecnosoluciones.com/wp-content/uploads/2023/03/sistemas-de-software-para-centros-de-salud-o-clinicas.png" alt="Servicio 3">
                        <h3>Reserva y Recarga de Medicamentos</h3>
                        <p>BUENASALUD ofrece a los clientes puedan reservar o recargar sus medicamentos recetados a través de la página web de la farmacia. Pueden proporcionar detalles de la receta y programar la recogida en la sucursal más conveniente.</p>
                        <button onclick="mostrarServicio('reserva')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; margin-right: 10px;">Ver más</button>
                    </div>
                    <div class="service-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVCVuN8lVT_df_5kZ58hbaD3YrtOSXTc-UcK_sKWh33t7WncakESf7rnvyWSiMa_iasLY&usqp=CAU" alt="Servicio 4">
                        <h3>Información sobre Salud y Bienestar</h3>
                        <p>BUENASALUD ofrece recursos y artículos informativos sobre una variedad de temas de salud y bienestar, incluyendo enfermedades comunes, consejos de prevención, estilos de vida saludables y más.</p>
                        <button onclick="mostrarServicio('informacion')" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; margin-right: 10px;">Ver más</button>
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
                padding: 10px;
                flex: 1 1 60px;
                max-width: 170px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                transition: transform 0.3s ease;
                text-align: center;
            }
            .team-member:hover {
                transform: translateY(-10px);
            }
            .team-member img {
                max-width: 50%;
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
                        <img src="https://scontent.fuio10-1.fna.fbcdn.net/v/t39.30808-6/448090660_439526802235644_4585318733155341554_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Vm82C-B33NIQ7kNvgGD-yEg&_nc_ht=scontent.fuio10-1.fna&oh=00_AYD5S9sJ_VXMtIhcfErzc08lzxZXOCMvJNRqZu-f2_9k0A&oe=666E7801" alt="Alexi Jimenez">
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