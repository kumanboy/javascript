'use strict'
'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const adv = document.querySelectorAll('.promo__adv img'),
      wrapper = document.querySelector('.promo__bg'),
      genre = wrapper.querySelector('.promo__genre'),
      moviesList = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('form.add'),
      inputVal = addForm.querySelector('.adding__input'),
      checkbox = addForm.querySelector("[type='checkbox']")

    const moviesDB = {
        movies: [
            'Oppenheimer',
            'The Time',
            'Alpomish',
            'Novda',
            'Osmondagi Bolalar',
        ],
    }

    addForm.addEventListener('submit', (event) => {
        event.preventDefault()

        let newMovies = inputVal.value
        const favourite = checkbox.checked

        if (newMovies) {
            if (newMovies.length > 10) {
                newMovies = `${newMovies.substring(0, 10)}...`
            }

            if (favourite) {
                console.log('Sevimli serial qo’shilidi')
            }

            moviesDB.movies.push(newMovies)
            sortArr(moviesDB.movies)

            createMoviesList(moviesDB.movies, moviesList)
        }

        event.target.reset()
    })

    const deleteAdv = (arr) => {
        adv.forEach((item) => {
            item.remove()
        })
    }

    const makeChanges = () => {
        genre.textContent = 'comedy'

        wrapper.style.backgroundImage = 'url("img/1.jpg")'
    }

    const sortArr = (arr) => {
        arr.sort()
    }

    function createMoviesList(movies, parent) {
        parent.innerHTML = ''
        sortArr(movies)

        movies.forEach((item, idx) => {
            parent.innerHTML += `
        <li class="promo__interactive-item">${idx + 1} ${item}
          <div class="delete"></div>
        </li>
      `
        })

        document.querySelectorAll('.delete').forEach((trash, idx) => {
            trash.addEventListener('click', () => {
                trash.parentElement.remove()
                moviesDB.movies.splice(idx, 1)

                createMoviesList(movies, parent)
            })
        })
    }

    sortArr(moviesDB.movies)
    deleteAdv(adv)
    makeChanges()
    createMoviesList(moviesDB.movies, moviesList)
})