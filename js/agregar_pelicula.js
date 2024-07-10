document.addEventListener('DOMContentLoaded', () =>{
    const form = document.getElementById('formPelicula');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const titulo = document.getElementById('titulo').value;
        const genero = document.getElementById('genero').value;
        const duracion = document.getElementById('duracion').value;
        const imagen = document.getElementById('imagen').value;

        // verificar campos vacios

        // si algino de los campos esta vacio se muestra un mmsj de error en el div correspondiente al input
    });
});