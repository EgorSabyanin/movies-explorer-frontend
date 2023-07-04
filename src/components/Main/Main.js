import Logo from '../Logo';

import { Link } from 'react-router-dom';
// * Page Component
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from "./Portfolio/Portfolio";

// * Basic Page Component
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Main() {
    return (
      <>
        <Header userClass='header_theme_main'>
          <div className='navigation__column'>
            <Logo />
          </div>
          <div className='navigation__column'>
            <Link to="/signup" className='navigation__link'>Регистрация</Link>
            <Link to="/signin" className='navigation__button'>Войти</Link>
          </div>
        </Header>
        <main className="main">
          <Promo />
          <NavTab />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
          <Footer /> 
        </main>
        </>
    )
}

export default Main;