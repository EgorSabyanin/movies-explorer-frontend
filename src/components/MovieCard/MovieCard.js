import { useLocation } from 'react-router-dom';
import './MovieCard.css';

/* Вспомогтальные функции */
import {
  getCorrectStringForDuration,
  getCorrectPathForImage,
} from '../../utils/utils';

function MovieCard({ card, onUnsave, onSave, saved }) {
  const location = useLocation();

  function handleSave(event) {
    event.target.classList.toggle('movie-card__button_active');
    onSave(card);
  }

  function handleUnsave(card) {
    console.log('Unsave =>', card);
    onUnsave(card._id);
  }

  return (
    <div className='movie-card'>
      <a target='_blank' href={card.trailerLink} rel='noreferrer'>
        <img
          src={getCorrectPathForImage(card.image.url)}
          className='movie-card__preview'
          alt={card.nameRU}
        />
      </a>
      <div className='movie-card__wrapper'>
        <div className='movie-card__info'>
          <h3 className='movie-card__title'>{card.nameRU}</h3>
          <p className='movie-card__duration'>
            {getCorrectStringForDuration(card.duration)}
          </p>
        </div>
        {location.pathname === '/saved-movies' ? (
          <button
            className='movie-card__delete'
            onClick={handleUnsave}
          ></button>
        ) : (
          <button
            onClick={handleSave}
            className={
              saved
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
