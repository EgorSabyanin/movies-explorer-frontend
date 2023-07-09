import { SHORT_MOVIES } from '../constants/constants';

/**
 * @name findMoviesByQuery
 * @param {array} movies список фильмов
 * @param {string} query поисковый запрос
 * @returns коллекция найденных фильмов по запросу
 */
export function findMoviesByQuery(movies, query) {
  const foundMovies = movies.filter((movie) => {
    const searchQuery = query.toLowerCase().trim();

    const movieNameRU = String(movie.nameRU).toLowerCase().trim();
    const movieNameEn = String(movie.nameEN).toLowerCase().trim();
    return (
      movieNameRU.indexOf(searchQuery) !== -1 ||
      movieNameEn.indexOf(searchQuery) !== -1
    );
  });
  return foundMovies;
}

/**
 * @ name findShortMovies
 * @param {*} movies список фильмов
 * @returns коллекция найденных фильмов по продолжительности в минутах
 */
export function findShortMovies(movies) {
  return movies.filter((movie) => movie.duration < SHORT_MOVIES);
}
