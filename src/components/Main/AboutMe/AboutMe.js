import person from '../../../images/person.png';
import './AboutMe.css';
import HeadSection from '../../HeadSection';

function AboutMe() {
    return (
            <section id="aboutMe" className="about-me">
                    <div className="about-me__section">
                        <h3 className="about-me__caption">Студент</h3>
                        <hr className="about-me__line" />
                    </div>
                    <div className="about-me__wrapper">
                        <div className="about-me__column">
                            <h1 className="about-me__name">Егор</h1>
                            <h3 className="about-me__short-info">Фронтенд-разработчик, 23 года</h3>
                            <p className="about-me__description">
                                Я молодой веб-разработчик из Сибири, на данный момент живу в Абакане закончил факультет информатики ХГУ. Люблю путешествовать, ходить в спортзал, увлекаюсь бегом и другими спортивными вещами. Проработал около 7 месяцев в веб-студии «Magneex». Хочу связать жизнь с разработкой коммерческих сайтов.
                            </p>
                            <a className="about-me__link" href="https://github.com/EgorSabyanin" target="_blank" rel="noreferrer">Github</a>
                        </div>
                        <div className="about-me__column">
                            <img className="about-me__avatar" src={person} alt='Егор Сабянин' />
                        </div>
                    </div>
            </section>
    )
}

export default AboutMe;