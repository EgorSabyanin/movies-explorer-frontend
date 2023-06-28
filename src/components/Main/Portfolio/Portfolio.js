import arrive from '../../../images/arrive.svg';
import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="page__wrapper">
                <h2 className="portfolio__title">Портфолио</h2>
                <ul className='portfolio__list'>
                    <li className='portfolio__item'>
                        <a className="portfolio__link" href="https://github.com/EgorSabyanin/how-to-learn" >Статичный сайт</a>
                        <img className="portfolio__icon" src={arrive} alt="Статичный сайт"/>
                    </li>
                    <li className='portfolio__item'>
                        <a className="portfolio__link" href="https://egorsabyanin.github.io/russian-travel/">Адаптивный сайт</a>
                        <img className="portfolio__icon" src={arrive} alt="Адаптивный сайт"/>
                    </li>
                    <li className='portfolio__item'>
                        <a className="portfolio__link" href="https://github.com/EgorSabyanin/react-mesto-api-full-gha">Одностраничное приложение</a>
                        <img className="portfolio__icon" src={arrive} alt="Одностраничное приложение"/>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;