document.addEventListener('DOMContentLoaded', async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const response = await fetch('http://localhost:8080/app/peliculas', options);
    const data = await response.json();
    console.log(data);

    const movies = data;
  
    const tbody = document.getElementById('contenedorPeliculasLista');
    // recorremos todas las peliculas
    movies.forEach(movie => {
        const ancla = document.createElement('a');
        ancla.href = './pages/detalle.html';
        const pelicula = document.createElement('div');
        pelicula.classList.add('pelicula');
        const img = document.createElement('img');
        img.classList.add('imgApi');

        img.src = img.src = "../assets/img/" + movie.imagen;
        img.alt = movie.titulo;
        img.loading = 'lazy';
              
        ancla.appendChild(pelicula);
        pelicula.appendChild(img);
        peliculasSection.appendChild(ancla);

    });
});