import { useState, useRef } from 'react';
import { Link } from "react-router-dom";

import Logo from '../Logo';
import userAccountIcon from '../../images/user_account.svg'
import Header from '../Header/Header';
import './Profile.css';

function Profile() {
    const [user, setUser] = useState({ name: 'Виталий', email: 'egor.sabyanin.dev@gmail.com' });
    
    function handleChange ({ target }) {
        const { name, value } = target;
        setUser({...user, [name]: value});
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log("Данные пользователя отправлены на сервер");
    }

    function handleLogout() {
        console.log('Вы вышли из аккаунта');
    }

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
                            <Link to="/movies" className="navigation-mobile__link navigation-mobile__link_active">Фильмы</Link>
                            <Link to="/saved-movies" className="navigation-mobile__link">Сохранённые фильмы</Link>
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
                            <Link to="/movies" className='navigation__link navigation__link_active'>
                                Фильмы
                            </Link>
                        </li>
                        <li className='navigation__item'>
                            <Link to="/saved-movies" className='navigation__link'>
                                Сохранённые фильмы
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='navigation__column'>
                    <Link className='navigation__user-account' to='/profile'><img src={userAccountIcon} alt='Профиль пользователя' />Аккаунт</Link>
                    <button className="navigation__burger" ref={buttonOpenNavigation} onClick={openNavigation}></button>
                </div>
            </Header>
            <main className='profile'>
                <div className='page__wrapper'>
            <h2 className='profile__greeting'>Привет, { user.name}!</h2>
            <form
                name="profile__form"
                className="profile__form"
                onSubmit={handleSubmit}
            >
                <label className="profile__input-wrapper">
                    <span className="profile__input-label">
                        Имя
                    </span>
                    <input
                        type="text"
                        name="name"
                        className="profile__input"
                        placeholder='Имя'
                        value={user.name || ''}
                        minLength={2}
                        maxLength={30}
                        onChange={handleChange}
                        required
                    />
                </label>  
                <hr className="profile__break-line" />
                <label className="profile__input-wrapper">
                    <span className="profile__input-label">
                        E-mail
                    </span>
                    <input
                        type="email"
                        name="email"
                        className="profile__input"
                        placeholder='E-mail'
                        value={user.email || ''}
                        onChange={handleChange}
                        required
                    />
                </label>  
            </form>
            <div className="profile__buttons">
                <button className="profile__button-edit" form="profile__form" type="submit" onClick={handleSubmit}>Редактировать</button>
                <button className="profile__button-logout" onClick={ handleLogout }>Выйти из аккаунта</button>
            </div>
            </div>
            </main>
            </>
    )
}

export default Profile;