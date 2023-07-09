export const MOVIE_BASE_URL = 'https://api.nomoreparties.co/';

/**
 * * Отображение разного количества карточек в зависимости от размера экрана
 */

export const DESKTOP_DEVICE = {
  screenWidth: 1174,
  initialCards: 16,
  additionalCards: 4,
};
export const TABLET_DEVICE = {
  screenWidth: 1023,
  initialCards: 8,
  additionalCards: 2,
};
export const MOBILE_DEVICE = {
  screenWidth: 654,
  initialCards: 5,
  additionalCards: 2,
};

export const EMAIL_PATTERN = '[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\\.{1,1}[a-z]{2,}';

export const SEARCH_EMPTY_QUERY = 'Нужно ввести ключевое слово';
export const SEARCH_MOVIES_NOT_FOUND_MESSAGE = 'Ничего не найдено';
export const SEARCH_MOVIES_SERVER_ERROR_MESSAGE =
  'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
export const SHORT_MOVIES = 40;
