import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import './SearchMovies.css';
import '../../blocks/form/__error/form__error.css';

import { SEARCH_EMPTY_QUERY } from '../../constants/constants';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchMovies({ onSearch, isShortMovies, onCheckbox }) {
  const location = useLocation();
  const locationPath = location.pathname;
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
      onSearch(query);
    }
  }

  useEffect(() => {
    if (locationPath === '/movies' && localStorage.getItem('query')) {
      const localQuery = localStorage.getItem('query');
      setQuery(localQuery);
    }
  }, [locationPath]);

  return (
    <>
      <div className='search-movies'>
        <form className='search-movies__form' onSubmit={handleSubmit}>
          <fieldset className='search-movies__fieldset'>
            <input
              className='search-movies__input'
              type='search'
              placeholder='Фильм'
              value={query || ''}
              onChange={handleChange}
            />
            <button className='search-movies__submit' type='submit'></button>
          </fieldset>
          <FilterCheckbox
            onCheckbox={onCheckbox}
            isShortMovies={isShortMovies}
          />
          {hasQueryError && (
            <span className='form__error'>{SEARCH_EMPTY_QUERY}</span>
          )}
        </form>
      </div>
    </>
  );
}

export default SearchMovies;
