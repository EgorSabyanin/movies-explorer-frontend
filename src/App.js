import logo from './logo.svg';

// * Import User's Components

import AboutProject from './components/AboutProject';
import Technologies from './components/Technologies';
import Student from './components/Student';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="page__wrapper">
        <header className="header">
          <nav className="navigation">
            <img src={logo} alt="Логотип"/>
            </nav>
        </header>
      </div>
      <AboutProject />
      <Technologies />
      <Student />
      <Portfolio />
      <Footer />
      </>
  );
}

export default App;
