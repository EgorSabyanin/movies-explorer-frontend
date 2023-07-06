const mainApiSettings = {
  baseUrl: 'https://api.movies.egorsabyanin.nomoredomains.rocks',
  headers: {
    'Content-Type': 'application/json',
  },
};

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  /* Проверка ответа сервера */
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return res
      .json()
      .then((error) => `Возникла ошибка: ${Promise.reject(error.message)}`);
  }

  /* Регистрация пользователя */
  signup(userData) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(userData),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  /* Авторизация пользоваетеля */
  signin(userData) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify(userData),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  /* Получение информации о текущем пользователе */
  getMe() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this.headers,
      credentials: 'include',
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  /* Редактирование пользователя */
  editUserData(userData) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(userData),
      credentials: 'include',
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  logoutUser() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'GET',
      credentials: 'include',
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  /* Получение списка сохраненных фильмов */
  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  /* Сохранение фильма */
  saveMovie(movieData) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(movieData),
      credentials: 'include',
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  /* Удаление фильма */
  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}

/* Экземпляр класса для главного API */
export const mainApi = new MainApi(mainApiSettings);
