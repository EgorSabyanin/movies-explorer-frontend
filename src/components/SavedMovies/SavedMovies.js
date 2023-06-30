import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Logo from '../Logo';
import userAccountIcon from '../../images/user_account.svg'

import SearchMovies from '../SearchMovies/SearchMovies';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MovieCard from '../MovieCard/MovieCard';

import { Link } from "react-router-dom";

import movie from '../../images/saved_movies/12.png';

import './SavedMovies.css';

import Preloader from '../Preloader/Preloader';

function SavedMovies() {
    return (
        <>
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
                    <Link className='navigation__user-account' to='/profile'><img src={ userAccountIcon } alt='Профиль пользователя'/>Аккаунт</Link>
                </div>
            </Header>
             <section className='saved-movies'>
                <div className='page__wrapper'>
                    <SearchMovies />
                    {/* <Preloader /> */}
                    <MoviesCardList> 
                        <MovieCard title='33 слова о дизайне' duration='1ч42м' preview={ movie } isSaved={ false } />
                        <MovieCard title='33 слова о дизайне' duration='1ч42м' preview={ movie }  isSaved={ true } />
                        <MovieCard title='33 слова о дизайне' duration='1ч42м' preview={ movie }  isSaved={ false } />
                    </MoviesCardList>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default SavedMovies;