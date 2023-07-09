import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';

import ProtectedRouteElement from '../ProtectedRoute';
import Preloader from '../Preloader/Preloader';
import './App.css';

import { mainApi } from '../../utils/MainApi';

import { MOVIE_BASE_URL } from '../../constants/constants';

/*
 * Context
 * Подключение контекста
 */

import CurrentUserContext from '../../context/CurrentUserContext';

function App() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isTokenChecked, setIsTokenChecked] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    tokenCheck();
  }, [isLogged]);

  /** Получение коллекции сохраненных фильмов */
  useEffect(() => {
    if (isLogged) {
      setIsLoading(true);
      Promise.all([mainApi.getMe(), mainApi.getSavedMovies()])
        .then(([currentUserInfo, moviesData]) => {
          setCurrentUser(currentUserInfo);
          setSavedMovies(
            moviesData.filter((x) => x.owner === currentUser._id).reverse()
          );
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isLogged]);

  /**
   * Проверка авторизации пользователя
   */
  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      mainApi
        .getMe()
        .then((res) => {
          setIsLogged(true);
          setCurrentUser({ name: res.name, email: res.email });
        })
        .catch((error) => {})
        .finally(() => {
          setIsTokenChecked(true);
        });
    } else {
      setIsTokenChecked(true);
    }
  }

  /**  Регистрация */
  function handleSignUp(userData) {
    return mainApi.signup(userData);
  }

  /**  Авторизация */
  function handleSignIn(userData) {
    return mainApi.signin(userData);
  }

  /**  Выход из профиля */
  function handleSignOut() {
    setIsLogged(false);
    setCurrentUser({});
    localStorage.removeItem('jwt');
    localStorage.removeItem('currentUser');
    navigate('/', { replace: true });
  }

  /** Редактирование учётных данных пользователя */
  function editProfile(userData) {
    return mainApi.editUserData(userData);
  }

  /** Обработка сохраненния фильма */
  function handleSave(movie) {
    mainApi
      .saveMovie({
        movieData: {
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: `${MOVIE_BASE_URL}${movie.image.url}`,
          trailerLink: movie.trailerLink,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
          thumbnail: `${MOVIE_BASE_URL}${movie.image.url}`,
          movieId: movie.id,
        },
      })
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /** Обработка удаления фильма */
  function handleUnsave(movie) {
    mainApi
      .deleteMovie({ id: movie._id })
      .then((res) => {
        setSavedMovies((state) =>
          state.filter((item) => item._id !== movie._id)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      {isTokenChecked ? (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path='/' element={<Main isLogged={isLogged} />} />
            <Route
              path='/movies'
              element={
                <ProtectedRouteElement isLogged={isLogged}>
                  <Movies onSave={handleSave} />
                </ProtectedRouteElement>
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRouteElement isLogged={isLogged}>
                  <SavedMovies onUnsave={handleUnsave} />
                </ProtectedRouteElement>
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRouteElement isLogged={isLogged}>
                  <Profile
                    onLogout={handleSignOut}
                    isLogged={isLogged}
                    onEditProfile={editProfile}
                    setCurrentUser={setCurrentUser}
                  />
                </ProtectedRouteElement>
              }
            />
            <Route
              path='/signin'
              element={
                <Login
                  onSubmit={handleSignIn}
                  setLogged={setIsLogged}
                  setCurrentUser={setCurrentUser}
                />
              }
            />
            <Route
              path='/signup'
              element={
                <Register
                  onSubmit={handleSignUp}
                  setLogged={setIsLogged}
                  setCurrentUser={setCurrentUser}
                />
              }
            />
            <Route path='*' element={<Navigate to='/404' replace />} />
            <Route path='/404' element={<NotFound />} />
          </Routes>
        </CurrentUserContext.Provider>
      ) : (
        <div className='preloader-wrapper'>
          <Preloader />
        </div>
      )}
    </>
  );
}

export default App;
