import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

/* Подключение API  */
import { moviesApi } from '../../utils/MoviesApi';
import {
  filterMoviesByQuery,
  filterMoviesByDuration,
} from '../../utils/filterMovies';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Logo from '../Logo';
import userAccountIcon from '../../images/user_account.svg';

import SearchMovies from '../SearchMovies/SearchMovies';
import MoviesList from '../MoviesList/MoviesList';

import './Movies.css';

function Movies({ onSave, savedMovies }) {
  const [isLoading, setIsLoading] = useState(true);
  const [movieCards, setMovieCards] = useState([]);

  /**
   * Обработка фильмов
   */
  const [initialMovies, setInitialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isRequestError, setIsRequestError] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  const handleFilterMovies = (movies, query, short) => {
    const moviesList = filterMoviesByQuery(movies, query, short);
    setInitialMovies(moviesList);
    setFilteredMovies(short ? filterMoviesByDuration(moviesList) : moviesList);
    localStorage.setItem('allMovies', JSON.stringify(movies));
    localStorage.setItem('movies', JSON.stringify(moviesList));
    localStorage.setItem('shorts', JSON.stringify(short));
  };

  const handleShortMovies = () => {
    setIsShortMovies(!isShortMovies);
    if (!isShortMovies) {
      if (filterMoviesByDuration(initialMovies).length === 0) {
        setFilteredMovies(filterMoviesByDuration(initialMovies));
      } else {
        setFilteredMovies(filterMoviesByDuration(initialMovies));
      }
    } else {
      setFilteredMovies(initialMovies);
    }
    localStorage.setItem('shorts', !isShortMovies);
  };

  const onSearch = (query) => {
    localStorage.setItem('query', query);
    localStorage.setItem('shorts', isShortMovies);

    if (localStorage.getItem('allMovies')) {
      const movies = JSON.parse(localStorage.getItem('allMovies'));
      handleFilterMovies(movies, query, isShortMovies);
    } else {
      setIsLoading(true);
      moviesApi
        .getAllMovies()
        .then((cardsData) => {
          handleFilterMovies(cardsData, query, isShortMovies);
          setIsRequestError(false);
        })
        .catch((err) => {
          setIsRequestError(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      const movies = JSON.parse(localStorage.getItem('movies'));
      setInitialMovies(movies);
      if (localStorage.getItem('shorts') === 'true') {
        setFilteredMovies(filterMoviesByDuration(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('query')) {
      if (filteredMovies.length === 0) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  useEffect(() => {
    if (localStorage.getItem('shorts') === 'true') {
      setIsShortMovies(true);
    } else {
      setIsShortMovies(false);
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    moviesApi
      .getAllMovies()
      .then((res) => {
        setMovieCards(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const buttonOpenNavigation = useRef(null);
  const mobileNavigation = useRef(null);
  const buttonCloseNavigation = useRef(null);

  function openNavigation() {
    buttonOpenNavigation.current.style.display = 'none';
    mobileNavigation.current.classList.add('navigation-mobile_active');
  }

  function closeNavigation() {
    mobileNavigation.current.classList.remove('navigation-mobile_active');
    buttonOpenNavigation.current.style.display = 'block';
  }

  return (
    <>
      <nav className='navigation-mobile' ref={mobileNavigation}>
        <div className='navigation-mobile__wrapper'>
          <button
            className='navigation-mobile__close'
            ref={buttonCloseNavigation}
            onClick={closeNavigation}
          ></button>
          <ul className='navigation-mobile__list'>
            <li className='navigation-mobile__item'>
              <Link to='/' className='navigation-mobile__link'>
                Главная
              </Link>
              <Link
                to='/movies'
                className='navigation-mobile__link navigation-mobile__link_active'
              >
                Фильмы
              </Link>
              <Link to='/saved-movies' className='navigation-mobile__link'>
                Сохранённые фильмы
              </Link>
            </li>
            <li className='navigation-mobile__item navigation-mobile__item_user'>
              <Link to='/profile' className='navigation-mobile__user'>
                <img src={userAccountIcon} alt='Профиль пользователя' />
                Аккаунт
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Header>
        <div className='navigation__column'>
          <Logo />
          <ul className='navigation__list'>
            <li className='navigation__item'>
              <Link
                className='navigation__link navigation__link_active'
                to='/movies'
              >
                Фильмы
              </Link>
            </li>
            <li className='navigation__item'>
              <Link className='navigation__link' to='/saved-movies'>
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
        </div>
        <div className='navigation__column'>
          <Link className='navigation__user-account' to='/profile'>
            <img src={userAccountIcon} alt='Профиль пользователя' />
            Аккаунт
          </Link>
          <button
            className='navigation__burger'
            ref={buttonOpenNavigation}
            onClick={openNavigation}
          ></button>
        </div>
      </Header>
      <main className='movies'>
        <SearchMovies
          onSearch={onSearch}
          onCheckbox={handleShortMovies}
          isShortMovies={isShortMovies}
        />
        <MoviesList
          isLoading={isLoading}
          cards={filteredMovies}
          savedMovies={savedMovies}
          isSavedMovies={false}
          isNotFound={isNotFound}
          isRequestError={isRequestError}
          onSave={onSave}
        ></MoviesList>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
