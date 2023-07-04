import arrive from '../../../images/arrive.svg';
import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
                <ul className='portfolio__list'>
                    <li className='portfolio__item'>
                        <a className="portfolio__link" href="https://github.com/EgorSabyanin/how-to-learn" target='__blank'>
                            <span className="portfolio__text">Статичный сайт</span>
                            <img className="portfolio__icon" src={arrive} alt="Статичный сайт" />
                        </a>
                    </li>
                    <li className='portfolio__item'>
                        <a className="portfolio__link" href="https://egorsabyanin.github.io/russian-travel/" target='__blank'>
                            <span className="portfolio__text">Адаптивный сайт</span>
                            <img className="portfolio__icon" src={arrive} alt="Адаптивный сайт" />
                        </a>
                    </li>
                    <li className='portfolio__item'>
                        <a className="portfolio__link" href="https://github.com/EgorSabyanin/react-mesto-api-full-gha" target='__blank'>
                            <span className="portfolio__text">Одностраничное приложение</span>
                            <img className="portfolio__icon" src={arrive} alt="Одностраничное приложение" />
                        </a>
                    </li>
                </ul>
        </section>
    )
}

export default Portfolio;