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
      <div className="page__wrapper">
        <Header>
          <div className='navigation__column'>
            <Logo />
            <a className='navigation__link'>
              Фильмы
            </a>
            <a className='navigation__link'>
              Сохранённые фильмы
            </a>
          </div>
          <div className='navigation__column'>
            <button className='navigation__button'>Аккаунт</button>
          </div>
        </Header>
      </div>
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
