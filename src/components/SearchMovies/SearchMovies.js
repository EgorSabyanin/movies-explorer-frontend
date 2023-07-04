import './SearchMovies.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchMovies() {
    return (
        <>
            <div className='search-movies'>
                <form className='search-movies__form'>
                    <fieldset className='search-movies__fieldset'>
                        <input className='search-movies__input' type='search' placeholder='Фильм' required minLength="5" maxLength="75" />
                        <button className='search-movies__submit' type='submit'>
                        </button>
                    </fieldset>
                    <FilterCheckbox />
                </form>
            </div>
        </>
    );
}

export default SearchMovies;