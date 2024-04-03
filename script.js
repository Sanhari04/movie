const moviesData = [
    { title: 'Movie 1', director: 'Director 1', year: 2020 },
    { title: 'Movie 2', director: 'Director 2', year: 2021 },
    { title: 'Movie 3', director: 'Director 3', year: 2022 },
];

function createMovieCard(movie) {
    const card = document.createElement('div');
    card.classList.add('movie-card');

    const title = document.createElement('h2');
    title.textContent = movie.title;

    const director = document.createElement('p');
    director.textContent = 'Director: ' + movie.director;

    const year = document.createElement('p');
    year.textContent = 'Year: ' + movie.year;

    card.appendChild(title);
    card.appendChild(director);
    card.appendChild(year);

    return card;
}

const moviesContainer = document.getElementById('movies');
moviesData.forEach(movie => {
    const card = createMovieCard(movie);
    moviesContainer.appendChild(card);
});
