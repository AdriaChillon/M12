function filtrarProyectos(lenguaje) {
    var proyectos = document.querySelectorAll('.proyecto');

    proyectos.forEach(proyecto => {
        var proyectoLenguaje = proyecto.getAttribute('data-lenguaje');

        if (lenguaje === 'todos' || proyectoLenguaje === lenguaje) {
            proyecto.classList.add('visible'); // Mostrar proyecto
        } else {
            proyecto.classList.remove('visible'); // Ocultar proyecto
        }
    });
}

window.onload = function () {
    filtrarProyectos('todos');
};
