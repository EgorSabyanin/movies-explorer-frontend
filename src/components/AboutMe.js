import person from '../images/person.png'; 
    
import HeadSection from './HeadSection';

function AboutMe() {
    return (
        <>
            <section className="student">
                <div className="page__wrapper">
                    <HeadSection title="Студент" />
                    <div className="student__wrapper">
                        <div className="student__column">
                            <h1 className="student__name">Виталий</h1>
                            <h3 className="student__info">Фронтенд-разработчик, 23 года</h3>
                            <p className="student__about-me">
                                Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                            </p>
                            <a className="student__link" href="https://github.com" target="_blank" rel="noreferrer">Github</a>
                        </div>
                        <div className="student__column">
                            <img src={person} alt='Виталий' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe;