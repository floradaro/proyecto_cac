console.log('Script cargado');
document.addEventListener('DOMContentLoaded', () => {
    const API_SERVER = 'https://api.themoviedb.org/3';
    const options = {
        method: 'GET', 
        headers: {
            accept: 'application/json', 
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'
        }
    };

    const cargarPeliculasTendencia = async (page = 1) => {
        try {
            const response = await fetch(`${API_SERVER}/movie/popular?page=${page}`, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json(); 
            const movies = data.results.slice(0, 12); // Tomar solo 3 películas por página
            console.log(movies);
            const peliculasSection = document.getElementById('peliculasSection');
            peliculasSection.innerHTML = '';

            movies.forEach(movie => {
                const ancla = document.createElement('a');
                ancla.href = './pages/detalle.html';
                const pelicula = document.createElement('div');
                pelicula.classList.add('pelicula');
                const img = document.createElement('img');
                img.classList.add('imgTendencia');

                img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                img.alt = movie.title;
                img.loading = 'lazy';
              
                ancla.appendChild(pelicula);
                pelicula.appendChild(img);
                peliculasSection.appendChild(ancla);
            });

            peliculasSection.setAttribute('data-page', page);
        } catch (error) {
            console.error('Error al obtener las películas:', error);
        }
    };

    const botonAnterior = document.getElementById('botonAnterior');
    const botonSiguiente = document.getElementById('botonSiguiente');
    const peliculasSection = document.getElementById('peliculasSection');
    
    if (botonAnterior) {
        botonAnterior.addEventListener('click', () => {
            let currentPage = Number(peliculasSection.getAttribute('data-page'));
            if (currentPage <= 1) return;
            cargarPeliculasTendencia(currentPage - 1);
        });
    }

    if (botonSiguiente) {
        botonSiguiente.addEventListener('click', () => {
            let currentPage = Number(peliculasSection.getAttribute('data-page'));
            cargarPeliculasTendencia(currentPage + 1);
        });
    }

    cargarPeliculasTendencia();
});
