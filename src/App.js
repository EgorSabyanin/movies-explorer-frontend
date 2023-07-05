import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import { useState } from 'react';

import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import SavedMovies from './components/SavedMovies/SavedMovies';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Movies from './components/Movies/Movies';

/*
 * Context
 * Подключение контекста
 */

import { CurrentUserContext } from './context/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='*' element={<Navigate to='/404' replace />} />
          <Route path='/404' element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
