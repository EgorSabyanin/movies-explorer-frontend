import { Link } from 'react-router-dom';

import './Login.css';
import logo from '../../logo.svg';

import { EMAIL_PATTERN } from '../../constants/constants';
import useForm from '../../hooks/useForm';

import '../../blocks/form/__label/form__label.css';
import '../../blocks/form/__input/form__input.css';
import '../../blocks/form/__input/_error/form__input_error.css';
import '../../blocks/form/__submit/form__submit.css';
import '../../blocks/form/__error/form__error.css';
import '../../blocks/form/__link/form__link.css';
import '../../blocks/form/__text/form__text.css';

function Login() {
  const { values, errors, handleChange, isFormValid } = useForm();

  function handleSubmit() {
    console.log(values.name);
    console.log(values.email);
    console.log(values.password);
  }
  return (
    <main className='login'>
      <div className='login__icon'>
        <Link className='login__icon-link' to='/'>
          <img src={logo} alt='Логотип проекта' />
        </Link>
      </div>
      <h2 className='login__title'>Рады видеть!</h2>
      <form className='form login__form' onSubmit={handleSubmit}>
        <fieldset className='login__fieldset'>
          <label className='form__label login__label' htmlFor='email'>
            E-mail
          </label>
          <input
            className={
              errors.email
                ? 'form__input form__input_error login__input'
                : 'form__input login__input'
            }
            type='email'
            placeholder='E-mail'
            id='email'
            name='email'
            required
            onChange={handleChange}
          />
          {errors.email && (
            <span className='form__error login__error'>{errors.email}</span>
          )}
          <label className='form__label login__label' htmlFor='password'>
            Пароль
          </label>
          <input
            className={
              errors.password
                ? 'form__input form__input_error login__input'
                : 'form__input login__input'
            }
            type='password'
            placeholder='Пароль'
            id='password'
            name='password'
            required
            onChange={handleChange}
          />
          {errors.password && (
            <span className='form__error login__error'>{errors.password}</span>
          )}
          <button
            className='form__submit login__submit'
            type='submit'
            disabled={!isFormValid}
          >
            Войти
          </button>
        </fieldset>
        <p className='login__text form__text'>
          Ещё не зарегистрированы?{' '}
          <Link className='form__link' to='/signup'>
            Регистрация
          </Link>
        </p>
      </form>
    </main>
  );
}

export default Login;
