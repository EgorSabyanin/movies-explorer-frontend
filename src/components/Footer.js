function Footer() {
    return (
        <footer className='footer'>
            <div className="page__wrapper">
                <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__block" >
                    <p className="footer__copyright">&copy; 2023</p>
                    <div className="footer__links">
                        <a className="footer__link" href="https://practicum.yandex.ru" rel="noreferrer" target="_blank">Яндекс.Практикум</a>
                        <a className="footer__link" href="https://github.com" rel="noreferrer" target="_blank">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;