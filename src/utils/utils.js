import { MOVIE_BASE_URL } from '../constants/constants';

export function getCorrectStringForDuration(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  if (hours !== 0 && minutes !== 0) {
    return `${hours}ч${minutes}м`;
  } else if (hours !== 0 && minutes === 0) {
    return `${hours}ч`;
  } else if (hours === 0 && minutes !== 0) {
    return `${minutes}м`;
  } else {
    return '';
  }
}

export function getCorrectPathForImage(image) {
  return MOVIE_BASE_URL + image;
}
