import Logo from './components/Logo';

// * Import User's Components

// * Page Component
import Promo from './components/Promo';
import NavTab from './components/NavTab';
import AboutProject from './components/AboutProject';
import Technologies from './components/Technologies';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';

// * Basic Page Component
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header>
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
      <Technologies />
      <AboutMe />
      <Portfolio />
      <Footer />
      </>
  );
}

export default App;
