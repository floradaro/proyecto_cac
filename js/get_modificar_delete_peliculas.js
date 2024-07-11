//Agregar pelicula
document.addEventListener('DOMContentLoaded', async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const response = await fetch('http://localhost:8080/apisimple/peliculas', options);
    const data = await response.json();
    console.log(data);
    
    const movies = data;
    const tbody = document.getElementById('bodyTablePeliculas');
    
  
    movies.forEach(movie => {
        const tr = document.createElement('tr');
        const idMovie = document.createElement('td');
        idMovie.textContent = movie.idPelicula;
        const tdTitle = document.createElement('td');
        tdTitle.textContent = movie.titulo;
        const tdDuration = document.createElement('td');
        tdDuration.textContent = movie.duracion;
        const tdGenres = document.createElement('td');
        tdGenres.textContent = movie.genero;
        const tdImage = document.createElement('td');
        const img = document.createElement('img');
        img.src = "../assets/img/" + movie.imagen;
        img.width = '150';
        img.alt = movie.titulo;
        tdImage.appendChild(img);
        img.classList.add('img-fluid', 'img-thumbnail');
        
        tr.appendChild(idMovie);
        tr.appendChild(tdTitle);
        tr.appendChild(tdDuration);
        tr.appendChild(tdGenres);
        tr.appendChild(tdImage);
        
        const tdActions = document.createElement('td');
        const btnModify = document.createElement('button');
        btnModify.textContent = 'Modificar';
        btnModify.classList.add('btn', 'btn-warning', 'btn-sm', 'btnModificar');
        
        const btnDelete = document.createElement('button');
        btnDelete.textContent = 'Eliminar';
        btnDelete.classList.add('btn', 'btn-danger', 'btn-sm', 'btnEliminar');
        
        tdActions.appendChild(btnModify);
        tdActions.appendChild(btnDelete);
        tr.appendChild(tdActions);
        tbody.appendChild(tr);
    });


    //Modificar pelicula
    console.log(document.querySelectorAll('.btnModificar'));

    document.querySelectorAll('.btnModificar').forEach(button => {
      
        button.addEventListener('click', async (event) => {
            console.log("hizo click");
            console.log(event);
            console.log(event.target);
            const row = event.target.closest('tr');
            console.log(row);
            const peliculaId = row.querySelector('td:first-child').innerText.trim();
            
            try {
                const response = await fetch(`http://localhost:8080/apisimple/peliculas?id=${peliculaId}`);
                if (!response.ok) {
                    throw new Error('Error al obtener los datos de la película');
                }
                const data = await response.json();
                const movieUnica = data[0];
                console.log(data);
            
                document.getElementById('id').value = movieUnica.idPelicula;
                document.getElementById('titulo').value = movieUnica.titulo;
                document.getElementById('genero').value = movieUnica.genero;
                document.getElementById('duracion').value = movieUnica.duracion;
                window.scrollTo(0,0);
              

            } catch (error) {
                console.error('Error:', error);
            }
        });
    });

    // Eliminar pelicula
    document.querySelectorAll('.btnEliminar').forEach(button => {
        button.addEventListener('click', async (event) => {
            const row = event.target.closest('tr');
            const peliculaId = row.querySelector('td:first-child').innerText.trim();
            try {
                const response = await fetch(`http://localhost:8080/apisimple/peliculas?id=${peliculaId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    alert('Error al eliminar la película');
                    throw new Error('Error al eliminar la película');
                }
                const data = await response.json();
               
                alert('Pelicula eliminada correctamente');
                console.log(data);
                location.reload();
              
            } catch (error) {
                console.error('Error:', error);
            }
        });
    });
});
