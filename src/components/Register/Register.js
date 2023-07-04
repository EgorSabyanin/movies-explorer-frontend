import './Register.css';
import logo from '../../logo.svg'

import { Link } from 'react-router-dom';

import '../../blocks/form/__label/form__label.css';
import '../../blocks/form/__input/form__input.css';
import '../../blocks/form/__input/_error/form__input_error.css';
import '../../blocks/form/__submit/form__submit.css';
import '../../blocks/form/__error/form__error.css';
import '../../blocks/form/__link/form__link.css';
import '../../blocks/form/__text/form__text.css'

function Register() {
    return (
        <main className="register">
            <div className="register__icon">
                <Link className="register__icon-link" to="/">
                    <img src={logo} alt="Логотип проекта" />
                </Link>
            </div>
            <h2 className="register__title">Добро пожаловать!</h2>
            <form className="form register__form">
                <fieldset className='register__fieldset'>
                    <label className="form__label register__label" htmlFor="name">Имя</label>
                    <input className="form__input register__input" type="text" placeholder="Имя" id="name" name="name" required minLength="2" maxLength="30" />
                    <label className="form__label register__label" htmlFor="email">E-mail</label>
                    <input className="form__input register__input" type="email" placeholder="E-mail" id="email" name="email" required />
                    <label className="form__label register__label" htmlFor="password">Пароль</label>
                    <input className="form__input form__input_error register__input" type="password" placeholder='Пароль' id="password" name="password" required />
                    <span className="form__error register__error">Что-то пошло не так...</span>
                    <button className="form__submit register__submit" type="submit">Зарегистрироваться</button>
                </fieldset>
                <p className="register__text form__text">Уже зарегистированы? <Link className="form__link" to="/signin">Войти</Link></p>
            </form>
        </main>
    );
}

export default Register;