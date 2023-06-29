import { useLocation } from 'react-router-dom'
import './MovieCard.css'

function MovieCard({ title, duration, preview, isSaved = false }) {
    const location = useLocation();
    return (
        <div className="movie-card">
            <img src={ preview }  className='movie-card__preview' alt={ title } />
            <div className='movie-card__wrapper'>
                <div className='movie-card__info'>
                    <h3 className='movie-card__title'>{ title }</h3>
                    <p className='movie-card__duration'>{ duration }</p>
                </div>
                {location.pathname === '/saved-movies' ? <button className='movie-card__delete'></button> : <button className={isSaved ? 'movie-card__button movie-card__button_active' : 'movie-card__button'}></button>}
            </div>
        </div>
    );
}

export default MovieCard;