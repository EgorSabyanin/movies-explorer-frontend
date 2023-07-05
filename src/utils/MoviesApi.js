const settingsAPI = {
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
};

class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  /* Проверка ответа сервера */
  _checkResponse(res, message) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Возникла ошибка! ${res.status} : ${message}`);
  }

  /* Получение карточек с сервера Яндекса */
  getAllMovies() {
    return fetch(this._baseUrl, {
      method: 'GET',
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(
        res,
        'Не удалось загрузить изображения с сервера!'
      );
    });
  }
}

// Экземпляр класса для работы с API Яндекса
export const moviesApi = new MoviesApi(settingsAPI);
