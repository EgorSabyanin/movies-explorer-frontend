import { useState, useEffect, useRef } from 'react';

import Preloader from '../Preloader/Preloader';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.css';

import {
  DESKTOP_DEVICE,
  TABLET_DEVICE,
  MOBILE_DEVICE,
} from '../../constants/constants';


function MoviesCardList({ cards, isLoading }) {
  /** Отображаемые карточки */
  const [showedMovies, setShowedMovies] = useState([]);
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

  /**
   * Берём из локального хранилища те фильмы, которые уже загрузили
   */
  useEffect(() => {
    if (localStorage.getItem('showedMovies')) {
      setShowedMovies(JSON.parse(localStorage.getItem('showedMovies')));
    } else {
      setShowedMovies(cards.slice(0, getCurrentDevice().initialCards));
    }
  }, [cards]);

  function handleMoreMovies() {
    if (cards.length > showedMovies.length) {
      setShowedMovies(
        showedMovies.concat(
          cards.slice(
            showedMovies.length,
            showedMovies.length + getCurrentDevice().additionalCards
          )
        )
      );
      localStorage.setItem('showedMovies', JSON.stringify(showedMovies));
    } else {
      buttonMore.current.classList.add('movies-list__more_hidden');
    }
  }

  return (
    <>
      {isLoading && <Preloader />}
      <div className='movies-list'>
        <div className='movies-list__wrapper'>
          {showedMovies.map((card) => {
            return (
              <MovieCard
                key={card.id}
                card={card}
                isSaved={true}
              />
            );
          })}
        </div>
        <button
          className='movies-list__more'
          onClick={handleMoreMovies}
          ref={buttonMore}
        >
          Ещё
        </button>
      </div>
    </>
  );
}

export default MoviesCardList;
