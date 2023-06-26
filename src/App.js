import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import SavedMovies from './components/SavedMovies/SavedMovies';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/saved-movies"
          element={<SavedMovies />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route path="*" element={<Navigate to="/404" replace/>} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
      </>
  );
}

export default App;
