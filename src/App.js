import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import SavedMovies from './components/SavedMovies/SavedMovies';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Movies from './components/Movies/Movies';

import { mainApi } from './utils/MainApi';
/*
 * Context
 * Подключение контекста
 */

import CurrentUserContext from './context/CurrentUserContext';

function App() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  /**
   * Проверка авторизации пользователя
   */
  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      mainApi.getMe().then((res) => {
        setIsLogged(true);
        setCurrentUser({ name: res.name, email: res.email });
      });
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

  useEffect(() => {
    tokenCheck();
  }, []);

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies isLogged={isLogged} />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route
            path='/profile'
            element={
              <Profile
                onLogout={handleSignOut}
                isLogged={isLogged}
                onEditProfile={editProfile}
                setCurrentUser={setCurrentUser}
              />
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
    </>
  );
}

export default App;
