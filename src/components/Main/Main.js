import Logo from '../Logo';

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
            <a className='navigation__link'>Регистрация</a>
            <a className='navigation__button'>Войти</a>
          </div>
        </Header>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
        <Footer /> 
        </>
    )
}

export default Main;