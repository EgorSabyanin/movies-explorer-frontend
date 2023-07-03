import './Login.css';
import logo from '../../logo.svg';

import { Link } from 'react-router-dom';

import '../../blocks/form/__label/form__label.css';
import '../../blocks/form/__input/form__input.css';
import '../../blocks/form/__input/_error/form__input_error.css';
import '../../blocks/form/__submit/form__submit.css';
import '../../blocks/form/__error/form__error.css';
import '../../blocks/form/__link/form__link.css';
import '../../blocks/form/__text/form__text.css'

function Login() {
    return (
        <main className="login">
            <div className="login__icon">
                <Link className="register__icon-link" to="/">
                    <img src={logo} alt="Логотип проекта" />
                </Link>
            </div>
            <h2 className="login__title">Рады видеть!</h2>
            <form className="login__form">
                <fieldset className='login__fieldset'>
                    <label className="form__label login__label" htmlFor="email">E-mail</label>
                    <input className="form__input login__input" type="email" placeholder="E-mail" id="email" name="email" required />
                    <label className="form__label login__label" htmlFor="password">Пароль</label>
                    <input className="form__input login__input" type="password" placeholder='Пароль' id="password" name="password" required />
                    <button className="form__submit login__submit" type="submit">Войти</button>
                </fieldset>
                <p className="login__text form__text">Ещё не зарегистрированы? <Link className="form__link" to="/signup">Регистрация</Link></p>
            </form>
        </main>
    );
}

export default Login;