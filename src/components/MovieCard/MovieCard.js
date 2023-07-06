import { useLocation } from 'react-router-dom';
import './MovieCard.css';

/* Вспомогтальные функции */
import {
  getCorrectStringForDuration,
  getCorrectPathForImage,
} from '../../utils/utils';

function MovieCard({ card, isSaved = false }) {
  const location = useLocation();

  function handleSaveButton(event) {
    event.target.classList.toggle('movie-card__button_active');
    console.log(card);
    /* Запрос в БД с добавлением в понравившейся карточки */
  }

  return (
    <div className='movie-card'>
      <img
        src={getCorrectPathForImage(card.image.url)}
        className='movie-card__preview'
        alt={card.nameRU}
      />
      <div className='movie-card__wrapper'>
        <div className='movie-card__info'>
          <h3 className='movie-card__title'>{card.nameRU}</h3>
          <p className='movie-card__duration'>
            {getCorrectStringForDuration(card.duration)}
          </p>
        </div>
        {location.pathname === '/saved-movies' ? (
          <button className='movie-card__delete'></button>
        ) : (
          <button
            onClick={handleSaveButton}
            className={
              isSaved
                ? 'movie-card__button movie-card__button_active'
                : 'movie-card__button'
            }
          ></button>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
