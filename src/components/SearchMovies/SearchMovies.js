import { useState } from 'react';
import './SearchMovies.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchMovies() {
  const [query, setQuery] = useState('');
  const [hasQueryError, setHasQueryError] = useState(false);

  function handleChange(event) {
    setQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (query.trim().length === 0) {
      setHasQueryError(true);
    } else {
      setHasQueryError(false);
    }
  }
  return (
    <>
      <div className='search-movies'>
        <form className='search-movies__form'>
          <fieldset className='search-movies__fieldset'>
            <input
              className='search-movies__input'
              type='search'
              placeholder='Фильм'
              required
              minLength='1'
              maxLength='75'
              value={query || ''}
              onChange={handleChange}
            />
            <button
              className='search-movies__submit'
              type='submit'
              onClick={handleSubmit}
            ></button>
          </fieldset>
          <FilterCheckbox />
        </form>
      </div>
    </>
  );
}

export default SearchMovies;
