import MovieCard from '../MovieCard/MovieCard';
import './MoviesCardList.css';

function MoviesCardList({ children }) {
    return (
        <>
            <div className='movies-card__list'>
                { children }
            </div>
        </>
    );
}

export default MoviesCardList;