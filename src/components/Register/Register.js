import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { EMAIL_PATTERN } from '../../constants/constants';
import useForm from '../../hooks/useForm';
import { mainApi } from '../../utils/MainApi';

import './Register.css';
import logo from '../../logo.svg';

import '../../blocks/form/__label/form__label.css';
import '../../blocks/form/__input/form__input.css';
import '../../blocks/form/__input/_error/form__input_error.css';
import '../../blocks/form/__submit/form__submit.css';
import '../../blocks/form/__error/form__error.css';
import '../../blocks/form/__link/form__link.css';
import '../../blocks/form/__text/form__text.css';

function Register({ onSubmit, setLogged }) {
  const [responseError, setResponseError] = useState(false);
  const { values, errors, handleChange, isFormValid } = useForm();

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const userData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    onSubmit(userData)
      .then((res) => {
        setResponseError(false);
        delete userData.name;
        mainApi
          .signin(userData)
          .then((res) => {
            setLogged(true);
            localStorage.setItem('jwt', res.token);
            navigate('/movies');
          })
          .catch((error) => {
            setResponseError(error);
          });
      })
      .catch((error) => {
        setResponseError(error);
      });
  }
  return (
    <main className='register'>
      <div className='register__icon'>
        <Link className='register__icon-link' to='/'>
          <img src={logo} alt='Логотип проекта' />
        </Link>
      </div>
      <h2 className='register__title'>Добро пожаловать!</h2>
      <form className='form register__form' onSubmit={handleSubmit}>
        <fieldset className='register__fieldset'>
          <label className='form__label register__label' htmlFor='name'>
            Имя
          </label>
          <input
            className={
              errors.name
                ? 'form__input form__input_error register__input'
                : 'form__input register__input'
            }
            type='text'
            placeholder='Имя'
            id='name'
            name='name'
            required
            minLength='2'
            maxLength='30'
            onChange={handleChange}
          />
          {errors.name && (
            <span className='form__error register__error'>{errors.name}</span>
          )}
          <label className='form__label register__label' htmlFor='email'>
            E-mail
          </label>
          <input
            className={
              errors.email
                ? 'form__input form__input_error register__input'
                : 'form__input register__input'
            }
            pattern={EMAIL_PATTERN}
            type='email'
            placeholder='E-mail'
            id='email'
            name='email'
            onChange={handleChange}
            required
          />
          {errors.email && (
            <span className='form__error register__error'>{errors.email}</span>
          )}
          <label className='form__label register__label' htmlFor='password'>
            Пароль
          </label>
          <input
            className={
              errors.password
                ? 'form__input form__input_error register__input'
                : 'form__input register__input'
            }
            type='password'
            placeholder='Пароль'
            id='password'
            name='password'
            onChange={handleChange}
            required
          />
          {errors.password && (
            <span className='form__error register__error'>
              {errors.password}
            </span>
          )}
          {responseError && (
            <span className='form__error register__error'>{responseError}</span>
          )}
          <button
            className='form__submit register__submit'
            type='submit'
            disabled={!isFormValid}
          >
            Зарегистрироваться
          </button>
        </fieldset>
      </form>
      <p className='register__text form__text'>
        Уже зарегистированы?{' '}
        <Link className='form__link' to='/signin'>
          Войти
        </Link>
      </p>
    </main>
  );
}

export default Register;
