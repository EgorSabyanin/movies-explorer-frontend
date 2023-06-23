import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="error">
      <h1 className="error__title">404</h1>
      <p className="error__text">Страница не найдена</p>
      <button className="error__button" onClick={() => navigate(-1)}>Назад</button>
    </section>
  );
}

export default NotFound;