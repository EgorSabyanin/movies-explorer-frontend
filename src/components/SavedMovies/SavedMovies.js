import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Logo from '../Logo';
import userAccountIcon from '../../images/user_account.svg'

import SearchMovies from '../SearchMovies/SearchMovies';
import MoviesList from '../MoviesList/MoviesList';
import MovieCard from '../MovieCard/MovieCard';

import { useRef } from 'react';
import { Link } from "react-router-dom";

import movie from '../../images/saved_movies/12.png';

import './SavedMovies.css';

import Preloader from '../Preloader/Preloader';

function SavedMovies() {
    const buttonOpenNavigation  = useRef(null);
    const mobileNavigation = useRef(null);
    const buttonCloseNavigation = useRef(null); 

    function openNavigation() {
        buttonOpenNavigation.current.style.display = 'none';
        mobileNavigation.current.classList.add('navigation-mobile_active');
        console.log(buttonOpenNavigation);
    }

    
    function closeNavigation() {
        mobileNavigation.current.classList.remove('navigation-mobile_active');
        buttonOpenNavigation.current.style.display = 'block';
    }

    return (
        <>
        <nav className="navigation-mobile" ref={ mobileNavigation }>
                <div className="navigation-mobile__wrapper" >
                    <button className="navigation-mobile__close" ref={buttonCloseNavigation} onClick={ closeNavigation }></button>
                    <ul className="navigation-mobile__list">
                        <li className="navigation-mobile__item">
                            <Link to="/" className="navigation-mobile__link">Главная</Link>
                            <Link to="/movies" className="navigation-mobile__link">Фильмы</Link>
                            <Link to="/saved-movies" className="navigation-mobile__link navigation-mobile__link_active">Сохранённые фильмы</Link>
                        </li>
                        <li className="navigation-mobile__item navigation-mobile__item_user">
                            <Link to="/profile" className="navigation-mobile__user">
                                <img src={userAccountIcon} alt='Профиль пользователя' />Аккаунт
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
                            <Link className='navigation__link navigation__link_active' to="/movies">
                                Фильмы
                            </Link>
                        </li>
                        <li className='navigation__item'>
                            <a className='navigation__link'>
                                Сохранённые фильмы
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='navigation__column'>
                    <Link className='navigation__user-account' to='/profile'><img src={userAccountIcon} alt='Профиль пользователя' />Аккаунт</Link>
                    <button className="navigation__burger" ref={buttonOpenNavigation} onClick={ openNavigation }></button>
                </div>
            </Header>
             <main className='saved-movies'>
                    <SearchMovies />
                    {/* <Preloader /> */}
                    <MoviesList> 
                        <MovieCard title='33 слова о дизайне' duration='1ч42м' preview={ movie } isSaved={ false } />
                        <MovieCard title='33 слова о дизайне' duration='1ч42м' preview={ movie }  isSaved={ true } />
                        <MovieCard title='33 слова о дизайне' duration='1ч42м' preview={ movie }  isSaved={ false } />
                    </MoviesList>
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;