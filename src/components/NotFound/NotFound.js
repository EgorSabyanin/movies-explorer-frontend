import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="error">
      <h1 className="error__title">404</h1>
      <p className="error__text">Страница не найдена</p>
      <a className="error__link" onClick={() => navigate(-1)}>Назад</a>
    </main>
  );
}

export default NotFound;