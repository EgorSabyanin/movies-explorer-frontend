import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

import '../../blocks/form/__error/form__error.css';

import Preloader from '../Preloader/Preloader';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.css';

import {
  SEARCH_MOVIES_NOT_FOUND_MESSAGE,
  SEARCH_MOVIES_SERVER_ERROR_MESSAGE,
} from '../../constants/constants';

import {
  DESKTOP_DEVICE,
  TABLET_DEVICE,
  MOBILE_DEVICE,
} from '../../constants/constants';

function MoviesCardList({
  savedMovies,
  cards,
  isSavedMovies,
  isLoading,
  isRequestError,
  isNotFound,
  onSave,
  onUnsave,
}) {
  const location = useLocation();

  const [visibleMovies, setVisibleMovies] = useState(0);

  const buttonMore = useRef(null);

  function getCurrentDevice() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= DESKTOP_DEVICE.screenWidth) {
      return DESKTOP_DEVICE;
    } else if (windowWidth >= TABLET_DEVICE.screenWidth) {
      return TABLET_DEVICE;
    } else {
      return MOBILE_DEVICE;
    }
  }

  useEffect(() => {
    setVisibleMovies(getCurrentDevice().initialCards);
  }, []);

  function handleMoreMovies() {
    if (cards.length - 1 >= visibleMovies) {
      setVisibleMovies(visibleMovies + getCurrentDevice().additionalCards);
      if (
        visibleMovies + getCurrentDevice().additionalCards >=
        cards.length - 1
      ) {
        buttonMore.current.classList.add('movies-list__more_hidden');
      }
    } else {
      buttonMore.current.classList.add('movies-list__more_hidden');
    }
  }

  const getSavedCard = (savedMovies, card) => {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  };

  return (
    <>
      {isLoading ? (
        <>
          <Preloader />
        </>
      ) : (
        <>
          {location.pathname === '/saved-movies' ? (
            <>
              <div className='movies-list'>
                <div className='movies-list__wrapper'>
                  {cards.map((card) => {
                    return (
                      <MovieCard
                        key={card.id}
                        card={card}
                        isSaved={true}
                        saved={getSavedCard(savedMovies, card)}
                        cards={cards}
                        isSavedMovies={isSavedMovies}
                        onUnsave={onUnsave}
                        savedMovies={savedMovies}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <>
              {isNotFound && (
                <span className='form__error movies-list__error'>
                  {SEARCH_MOVIES_NOT_FOUND_MESSAGE}
                </span>
              )}
              {isRequestError && (
                <span className='form__error movies-list__error'>
                  {SEARCH_MOVIES_SERVER_ERROR_MESSAGE}
                </span>
              )}
              <div className='movies-list'>
                <div className='movies-list__wrapper'>
                  {cards.slice(0, visibleMovies).map((card) => {
                    return (
                      <MovieCard
                        key={isSavedMovies ? card._id : card.id}
                        cards={cards}
                        card={card}
                        saved={getSavedCard(savedMovies, card)}
                        onSave={onSave}
                        isSavedMovies={isSavedMovies}
                        savedMovies={savedMovies}
                      />
                    );
                  })}
                </div>
                {cards.length > getCurrentDevice().initialCards ? (
                  <>
                    <button
                      className='movies-list__more'
                      onClick={handleMoreMovies}
                      ref={buttonMore}
                    >
                      Ещё
                    </button>
                  </>
                ) : (
                  ''
                )}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default MoviesCardList;
