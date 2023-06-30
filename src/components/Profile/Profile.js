import { useState } from 'react';

import { Link } from "react-router-dom";

import Logo from '../Logo';
import userAccountIcon from '../../images/user_account.svg'
import Header from '../Header/Header';
import './Profile.css';

function Profile() {
    const [user, setUser] = useState({ name: 'Егор', email: 'egor.sabyanin.dev@gmail.com' });
    
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

    return (
        <>
        <Header>
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
                    <Link className='navigation__user-account' to='/profile'><img src={ userAccountIcon } alt='Профиль пользователя'/>Аккаунт</Link>
                </div>
            </Header>
        </Header>
            <section className='profile'>
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
                        maxLength={50}
                        onChange={handleChange}
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
                    />
                </label>  
            </form>
            <div className="profile__buttons">
                <button className="profile__button-edit" form="profile__form" type="submit" onClick={handleSubmit}>Редактировать</button>
                <button className="profile__button-logout" onClick={ handleLogout }>Выйти из аккаунта</button>
            </div>
            </div>
            </section>
            </>
    )
}

export default Profile;