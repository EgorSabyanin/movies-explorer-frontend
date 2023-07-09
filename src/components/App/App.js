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

  useEffect(() => {
    tokenCheck();
    console.log('From App isLogged = ', isLogged);
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
          console.log('tokenCheck, isLogged = ', isLogged);
          setCurrentUser({ name: res.name, email: res.email });
        })
        .catch((error) => {
          console.log(error);
        })
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
                  <Movies />
                </ProtectedRouteElement>
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRouteElement isLogged={isLogged}>
                  <SavedMovies />
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
