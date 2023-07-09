import { SHORT_MOVIES } from '../constants/constants';

/**
 * @name filterMoviesByQuery
 * @param {array} movies список фильмов
 * @param {string} query поисковый запрос
 * @returns коллекция найденных фильмов по запросу
 */
export function filterMoviesByQuery(movies, query) {
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
 * @ name filterMoviesByDuration
 * @param {array} movies список фильмов
 * @returns коллекция короткометражных фильмов
 */
export function filterMoviesByDuration(movies) {
  return movies.filter((movie) => movie.duration < SHORT_MOVIES);
}
