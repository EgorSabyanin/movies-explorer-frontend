import './Register.css';
import Logo from '../Logo';

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
        <section className="register">
            <div className="register__icon">
                <Logo />
            </div>
            <h2 className="register__title">Добро пожаловать!</h2>
            <form className="register__form">
                <fieldset className='register__fieldset'>
                    <label className="form__label register__label" htmlFor="name">Имя</label>
                    <input className="form__input register__input" type="text" placeholder="Имя" id="name" name="name" required />
                    <label className="form__label register__label" htmlFor="email">E-mail</label>
                    <input className="form__input register__input" type="email" placeholder="E-mail" id="email" name="email" required />
                    <label className="form__label register__label" htmlFor="password">Пароль</label>
                    <input className="form__input form__input_error register__input" type="password" placeholder='Пароль' id="password" name="password" required />
                    <span className="form__error register__error">Что-то пошло не так...</span>
                    <button className="form__submit register__submit" type="submit">Зарегистрироваться</button>
                </fieldset>
                <p className="register__text form__text">Уже зарегистированы? <Link className="form__link" to="/signin">Войти</Link></p>
            </form>
        </section>
    );
}

export default Register;