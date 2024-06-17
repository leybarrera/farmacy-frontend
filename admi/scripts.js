// Función para mostrar/ocultar el menú principal en pantallas pequeñas
function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    var menuIcon = document.querySelector(".menu-icon");

    // Alternar clase activa para el icono de las tres barras
    menuIcon.classList.toggle("active");

    // Mostrar/ocultar el menú de navegación
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
}

// Función para mostrar/ocultar el menú de ajustes
function toggleSettings() {
    var settingsDropdown = document.getElementById("settings-dropdown");

    // Mostrar/ocultar el menú de ajustes
    if (settingsDropdown.style.display === "block") {
        settingsDropdown.style.display = "none";
    } else {
        settingsDropdown.style.display = "block";
    }
}

// Función para cerrar sesión (suponiendo que tengas una función para esto)
function cerrarSesion() {
    // Lógica para cerrar sesión
    console.log("Cerrando sesión...");
}
