const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMuvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    privat: false
};

const answerOne = prompt('Один из последних просмотренных фильмов?', ''),
      answerTwo = prompt('На сколько оцените его?', ''),
      answerThird = prompt('Один из последних просмотренных фильмов?', ''),
      answerFour = prompt('На сколько оцените его?', '');

personalMuvieDB.movies[answerOne] = answerTwo;
personalMuvieDB.movies[answerThird] = answerFour;

console.log(personalMuvieDB);

