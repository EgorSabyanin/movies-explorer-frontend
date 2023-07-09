import Logo from '../Logo';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import userAccountIcon from '../../images/user_account.svg';

// * Page Component
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';

// * Basic Page Component
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Main({ isLogged }) {
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
              <Link
                to='/'
                className='navigation-mobile__link navigation-mobile__link_active'
              >
                Главная
              </Link>
              <Link to='/movies' className='navigation-mobile__link'>
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
      <Header userClass='header_theme_main'>
        {isLogged ? (
          <>
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
          </>
        ) : (
          <>
            <div className='navigation__column'>
              <Logo />
            </div>
            <div className='navigation__column'>
              <Link to='/signup' className='navigation__link'>
                Регистрация
              </Link>
              <Link to='/signin' className='navigation__button'>
                Войти
              </Link>
            </div>
          </>
        )}
      </Header>
      <main className='main'>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
        <Footer />
      </main>
    </>
  );
}

export default Main;
