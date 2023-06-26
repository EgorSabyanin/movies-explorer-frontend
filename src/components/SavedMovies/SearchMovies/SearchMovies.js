import './SearchMovies.css';

function SearchMovies() {
    return (
        <>
            <div className='search-movies'>
                <form className='search-movies__form'>
                    <fieldset className='search-movies__fieldset'>
                        <input className='search-movies__input' type='search' placeholder='Фильм' />
                        <button className='search-movies__submit' type='submit'>
                        </button>
                    </fieldset>
                </form>
            </div>
        </>
    );
}

export default SearchMovies;