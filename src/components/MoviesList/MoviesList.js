import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.css';

function MoviesCardList({ children }) {
    return (
        <>
            <div className='movies-list'>
                { children }
            </div>
        </>
    );
}

export default MoviesCardList;