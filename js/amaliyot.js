'use strict';

// const numberOFMovies = +prompt("Nechta kino ko'rdingiz?","5");
//
// const moviesDB = {
//     count: numberOFMovies,
//     names:{},
//     actors:{},
//     genres:[],
//     private:false
// }
//
// const  a = prompt("Oxirgi ko'rgan filmingiz?", "Oppenheimer"),
//   b = +prompt("Necha baxo berasiz?", "9"),
//   c = prompt("Oxirgi ko'rgan filmingiz?", "Barbie"),
//   d = +prompt("Necha baxo berasiz?", "7");
//
// moviesDB.names[a] = b;
// moviesDB.names[c] = d;
//
// console.log(moviesDB)


//Loops

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
// for (let i = 0; i < 2; i++) {
//     const a = prompt("Oxirgi ko’rgan filmingiz?" ),
//       b = +prompt("Necha baxo berasiz?");
//
//     if (a !== null && b !== null && a !== "" && b !== "") {
//         moviesDB.movies[a] = b;
//         console.log("done");
// }else{
//     console.log("error");
//     i--;
// }
// if(moviesDB.count < 5){
//     console.log("Kam kino ko’ribiz");
// }else if (moviesDB.count > 5 && moviesDB.count < 10){
//     console.log("Siz classik tamoshabin ekansiz");
// }else{
//     console.log("Siz kinoga kasal ekansiz");
// }
// console.log(moviesDB);}

//Functions

let numberOfMovies;

//errorlar ishlatamiz hamda kodni kuchaytiramiz

function movieApp(){
    numberOfMovies= +prompt("Nechta kino ko'rdingiz?","5")

    while (numberOfMovies == "" || numberOfMovies == null || isNaN(numberOfMovies)){
        numberOfMovies= +prompt("Iltimos to'g'ri qiymt kiriting! Nechta kino ko'rdingiz?","5")
    }
}
movieApp();

const moviesDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

function queryForUser() {
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
    }
}

queryForUser();

function levelValue(){
    if(moviesDB.count < 5){  //kodni optimizatsiya qilish kk
        console.log("Kam kino ko’ribiz");
    }else if (moviesDB.count > 5 && moviesDB.count < 10){
        console.log("Siz classik tamoshabin ekansiz");
    }else{
        console.log("Siz kinoga kasal ekansiz");
    }
}

levelValue();

function showDb(hidden){
    if (!hidden){
        console.log(moviesDB);
    }
}

showDb(moviesDB.private);

function addGenres(){
    for (let i = 0; i <= 2; i++) {
        const genre = prompt( `Yaxshi ko'rgan janringiz? ${i+1}` );
        moviesDB.genres[i] = genre;
    }
}

addGenres();


