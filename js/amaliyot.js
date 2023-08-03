'use strict';

// const numberOfMovies = +prompt("Nechta kino ko’rdingiz?","5");
//
// const moviesDB = {
//     count: numberOfMovies,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false
// }
//
// const a = prompt("Oxirgi ko’rgan filmingiz?" ),
//
//   b = +prompt("Necha baxo berasiz?"),
//
//   c = prompt("Yaxshi ko’rgan filmingiz?" ),
//
//   d = +prompt("Necha baxo berasiz?");
//
// moviesDB.movies[a] = b;
// moviesDB.movies[c] = d;
//
// console.log(moviesDB);

//Loops

const numberOfMovies = +prompt("Nechta kino ko’rdingiz?","5");

const moviesDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

for (let i = 0; i < 2; i++) {
    const a = prompt("Oxirgi ko’rgan filmingiz?" ),
      b = +prompt("Necha baxo berasiz?");

    if (a !== null && b !== null && a !== "" && b !== "") {
        moviesDB.movies[a] = b;
        console.log("done");
}else{
    console.log("error");
    i--;
}
if(moviesDB.count < 5){
    console.log("Kam kino ko’ribiz");
}else if (moviesDB.count > 5 && moviesDB.count < 10){
    console.log("Siz classik tamoshabin ekansiz");
}else{
    console.log("Siz kinoga kasal ekansiz");
}
console.log(moviesDB);}
