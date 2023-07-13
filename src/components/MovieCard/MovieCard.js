import { useLocation } from 'react-router-dom';
import './MovieCard.css';

/* Вспомогтальные функции */
import {
  getCorrectStringForDuration,
  getCorrectPathForImage,
} from '../../utils/utils';

function MovieCard({ card, onUnsave, onSave, saved, savedMovies }) {
  const location = useLocation();

  function handleSave() {
    onSave(card);
  }

  function handleUnsave() {
    onUnsave(card._id);
  }

  function handleClick(event) {
    if (saved) {
      event.target.classList.remove('movie-card__button_active');
      const movie = savedMovies.filter((movie) => {
        return card.id === movie.movieId;
      });
      onUnsave(movie[0]._id);
    } else {
      event.target.classList.add('movie-card__button_active');
      handleSave(card);
    }
  }

  return (
    <div className='movie-card'>
      <a target='_blank' href={card.trailerLink} rel='noreferrer'>
        <img
          src={
            location.pathname === '/movies'
              ? getCorrectPathForImage(card.image.url)
              : card.image
          }
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
            onClick={handleClick}
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
