import arrive from '../images/arrive.svg';

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="page__wrapper">
                <h2 className="portfolio__title">Портфолио</h2>
                <ul className='portfolio__list'>
                    <li className='portfolio__item'>
                        <a className="portfolio__link" href="#">Статичный сайт</a>
                        <img src={arrive} alt="Статичный сайт"/>
                    </li>
                    <li className='portfolio__item'>
                        <a className="portfolio__link" href="#">Адаптивный сайт</a>
                        <img src={arrive} alt="Адаптивный сайт"/>
                    </li>
                    <li className='portfolio__item'>
                        <a className="portfolio__link" href="#">Одностраничное приложение</a>
                        <img src={arrive} alt="Одностраничное приложение"/>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;