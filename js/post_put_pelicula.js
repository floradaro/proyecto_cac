document.addEventListener('DOMContentLoaded', async () => {
    const formNuevaPelicula = document.getElementById('formPelicula');

    formNuevaPelicula.addEventListener('submit', async (event) => {
        event.preventDefault();

        const idPelicula = document.getElementById('id').value;
        const titulo = document.getElementById('titulo').value;
        const genero = document.getElementById('genero').value;
        const duracion = document.getElementById('duracion').value;
        const imagen = document.getElementById('imagen').files[0] || document.getElementById('imagen').getAttribute('data-current-image');

        if (titulo === '' || genero === '' || duracion === '' || !imagen) {
            alert('Todos los campos son obligatorios');
            return;
        }

        let url = 'http://localhost:8080/apisimple/peliculas';
        let method = 'POST';

        const movieData = {
            titulo: titulo,
            genero: genero,
            duracion: duracion,
            imagen: imagen.name 
        };

        if (idPelicula) {
            movieData.idPelicula = idPelicula;
            method = 'PUT';
        }

        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movieData)
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Error al guardar la película');
            }

            const responseData = await response.json();

            if (method === 'POST') {
                if (response.status !== 201) {
                    throw new Error('Error al guardar la película');
                }
                alert('Película agregada correctamente');
            } else {
                if (response.status !== 200) {
                    throw new Error('Error al modificar la película');
                }
                alert('Película modificada correctamente');
            }
            formNuevaPelicula.reset();
            location.reload(); 
        } catch (error) {
            console.error('Error:', error);
            alert('Error al guardar la película');
        }
    });
});
