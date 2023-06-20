import logo from './logo.svg';

// * Import User's Components

import Technologies from './components/Technologies';

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
      <Technologies />
      </>
  );
}

export default App;
