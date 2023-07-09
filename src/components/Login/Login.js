import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './Login.css';
import logo from '../../logo.svg';

import { EMAIL_PATTERN } from '../../constants/constants';
import useForm from '../../hooks/useForm';

import Preloader from '../Preloader/Preloader';

import '../../blocks/form/__label/form__label.css';
import '../../blocks/form/__input/form__input.css';
import '../../blocks/form/__input/_error/form__input_error.css';
import '../../blocks/form/__submit/form__submit.css';
import '../../blocks/form/__error/form__error.css';
import '../../blocks/form/__link/form__link.css';
import '../../blocks/form/__text/form__text.css';
import { mainApi } from '../../utils/MainApi';

function Login({ onSubmit, setLogged, setCurrentUser }) {
  const [isLoading, setIsLoading] = useState(false);
  const [responseError, setResponseError] = useState(false);
  const { values, errors, handleChange, isFormValid } = useForm();

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);
    const userData = {
      email: values.email,
      password: values.password,
    };

    onSubmit(userData)
      .then((res) => {
        setLogged(true);
        setResponseError(false);
        localStorage.setItem('jwt', res.token);

        mainApi
          .getMe()
          .then((res) => {
            localStorage.setItem(
              'currentUser',
              JSON.stringify({
                name: res.name,
                email: res.email,
              })
            );
            setCurrentUser({ name: res.name, email: res.email });
            navigate('/movies', { replace: true });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        setResponseError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <main className='login'>
      {isLoading ? (
        <>
          <div className='preloader-wrapper'>
            <Preloader />
          </div>
        </>
      ) : (
        <>
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
                pattern={EMAIL_PATTERN}
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
                <span className='form__error login__error'>
                  {errors.password}
                </span>
              )}
              {responseError && (
                <span className='form__error login__error'>
                  {responseError}
                </span>
              )}
              <button
                className='form__submit login__submit'
                type='submit'
                disabled={!isFormValid}
              >
                Войти
              </button>
            </fieldset>
          </form>
          <p className='login__text form__text'>
            Ещё не зарегистрированы?{' '}
            <Link className='form__link' to='/signup'>
              Регистрация
            </Link>
          </p>
        </>
      )}
    </main>
  );
}

export default Login;
