'use strict'

const adv = document.querySelectorAll('.promo__adv img'),
  wrapper = document.querySelector('.promo__bg'),
  genre = wrapper.querySelector('.promo__genre'),
  moviesList = document.querySelector('.promo__interactive-list')

const moviesDB = {
    movies: [
        'Oppenheimer',
        'The Time',
        'Alpomish',
        'Novda',
        'Osmondagi Bolalar',
    ],
}

// adv.forEach((item) => {
//     item.remove()
// })

genre.textContent = 'comedy'

// wrapper.style.backgroundImage = 'url("img/1.jpg")'

moviesList.innerHTML = ''

moviesDB.movies.forEach((item, idx) => {
    moviesList.innerHTML += `
    <li class="promo__interactive-item">${idx + 1} ${item}
      <div class="delete"></div>
    </li>
  `
})


