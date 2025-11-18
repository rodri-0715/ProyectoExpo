// Esta función muestra o oculta el menú de navegación
function toggleMenu() {
    var menu = document.getElementById("dropdownMenu"); // Obtiene el menú desplegable usando su ID
    menu.style.display = menu.style.display === "block" ? "none" : "block"; // Si el menú está visible, lo oculta; si está oculto, lo muestra
}

// Esta función alterna entre español e inglés al hacer clic en el icono de traducción
function alternarIdioma() {
    let idiomaActual = localStorage.getItem('idiomaSeleccionado') || 'es'; // Lee el idioma actual guardado en localStorage, por defecto 'es'
    let nuevoIdioma = idiomaActual === 'es' ? 'en' : 'es'; // Si el idioma actual es 'es', cambia a 'en'; si es 'en', cambia a 'es'
    localStorage.setItem('idiomaSeleccionado', nuevoIdioma); // Guarda el nuevo idioma en localStorage
    aplicarIdioma(nuevoIdioma); // Llama a la función que aplica el nuevo idioma a los textos de la página
}

// Esta función aplica el idioma actual a los textos marcados con atributos data-es y data-en
function aplicarIdioma(idioma) {
    const elementos = document.querySelectorAll('[data-es]'); // Selecciona todos los elementos que tienen atributo data-es (todos los que son traducibles)
    elementos.forEach(el => { // Recorre cada uno de esos elementos
        el.innerText = el.dataset[idioma]; // Cambia el texto interno al idioma especificado ('es' o 'en')
    });
}

// Esta función se ejecuta automáticamente cuando la página se carga completamente
document.addEventListener('DOMContentLoaded', () => {
    const idiomaGuardado = localStorage.getItem('idiomaSeleccionado') || 'es'; // Obtiene el idioma guardado previamente o usa 'es' si no hay ninguno
    aplicarIdioma(idiomaGuardado); // Aplica ese idioma al cargar la página para mantener la preferencia del usuario
});

// 'es' español 
// 'en' ingles 


