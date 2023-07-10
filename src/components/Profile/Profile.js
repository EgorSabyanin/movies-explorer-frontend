import { useContext, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { EMAIL_PATTERN } from '../../constants/constants';

import CurrentUserContext from '../../context/CurrentUserContext';

import useForm from '../../hooks/useForm';

import Logo from '../Logo';
import userAccountIcon from '../../images/user_account.svg';

import Modal from '../Modal/Modal';
import Header from '../Header/Header';

import '../../blocks/form/__error/form__error.css';
import '../../blocks/form/__submit/form__submit.css';
import './Profile.css';

function Profile({ onLogout, onEditProfile, setCurrentUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [isCurrentValues, setIsCurrentValues] = useState(false);

  /** Обработка формы */
  const { values, errors, handleChange, isFormValid, resetForm } = useForm();

  /** Настройки модального окна */
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [messageModal, setMessageModal] = useState('');

  const [responseError, setResponseError] = useState(false);

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  useEffect(() => {
    if (
      currentUser.name === values.name &&
      currentUser.email === values.email
    ) {
      setIsCurrentValues(true);
    } else {
      setIsCurrentValues(false);
    }
  }, [values]);

  const userNameRef = useRef(null);
  const userEmailRef = useRef(null);

  function openEditProfile() {
    userNameRef.current.disabled = false;
    userEmailRef.current.disabled = false;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const userData = {
      name: values.name,
      email: values.email,
    };

    onEditProfile(userData)
      .then((res) => {
        localStorage.setItem(
          'currentUser',
          JSON.stringify({
            name: res.name,
            email: res.email,
          })
        );
        setCurrentUser({ name: res.name, email: res.email });
        setIsOpenModal(true);
        setMessageModal('Данные пользователя обновлены успешно!');
      })
      .catch((error) => {
        setIsOpenModal(true);
        setMessageModal('При обновлении профиля произошла ошибка.');
        setResponseError(error);
      });
  }

  function handleLogout() {
    onLogout();
  }

  const buttonOpenNavigation = useRef(null);
  const mobileNavigation = useRef(null);
  const buttonCloseNavigation = useRef(null);

  function openNavigation() {
    buttonOpenNavigation.current.style.display = 'none';
    mobileNavigation.current.classList.add('navigation-mobile_active');
  }

  function closeNavigation() {
    mobileNavigation.current.classList.remove('navigation-mobile_active');
    buttonOpenNavigation.current.style.display = 'block';
  }

  return (
    <>
      <Modal
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
        message={messageModal}
      />
      <nav className='navigation-mobile' ref={mobileNavigation}>
        <div className='navigation-mobile__wrapper'>
          <button
            className='navigation-mobile__close'
            ref={buttonCloseNavigation}
            onClick={closeNavigation}
          ></button>
          <ul className='navigation-mobile__list'>
            <li className='navigation-mobile__item'>
              <Link to='/' className='navigation-mobile__link'>
                Главная
              </Link>
              <Link
                to='/movies'
                className='navigation-mobile__link navigation-mobile__link_active'
              >
                Фильмы
              </Link>
              <Link to='/saved-movies' className='navigation-mobile__link'>
                Сохранённые фильмы
              </Link>
            </li>
            <li className='navigation-mobile__item navigation-mobile__item_user'>
              <Link to='/profile' className='navigation-mobile__user'>
                <img src={userAccountIcon} alt='Профиль пользователя' />
                Аккаунт
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Header>
        <div className='navigation__column'>
          <Logo />
          <ul className='navigation__list'>
            <li className='navigation__item'>
              <Link
                to='/movies'
                className='navigation__link navigation__link_active'
              >
                Фильмы
              </Link>
            </li>
            <li className='navigation__item'>
              <Link to='/saved-movies' className='navigation__link'>
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
        </div>
        <div className='navigation__column'>
          <Link className='navigation__user-account' to='/profile'>
            <img src={userAccountIcon} alt='Профиль пользователя' />
            Аккаунт
          </Link>
          <button
            className='navigation__burger'
            ref={buttonOpenNavigation}
            onClick={openNavigation}
          ></button>
        </div>
      </Header>
      <main className='profile'>
        <div className='page__wrapper'>
          <h2 className='profile__greeting'>Привет, {values.name}!</h2>
          <form
            name='profile__form'
            className='profile__form'
            onSubmit={handleSubmit}
          >
            <label className='profile__input-wrapper'>
              <span className='profile__input-label'>Имя</span>
              <input
                type='text'
                name='name'
                className='profile__input'
                placeholder='Имя'
                value={values.name || ''}
                minLength={2}
                maxLength={30}
                onChange={handleChange}
                required
                disabled={true}
                ref={userNameRef}
              />
            </label>
            {errors.name && <span className='form__error'>{errors.name}</span>}
            <hr className='profile__break-line' />
            <label className='profile__input-wrapper'>
              <span className='profile__input-label'>E-mail</span>
              <input
                type='email'
                name='email'
                className='profile__input'
                placeholder='E-mail'
                value={values.email || ''}
                onChange={handleChange}
                pattern={EMAIL_PATTERN}
                required
                disabled={true}
                ref={userEmailRef}
              />
            </label>
            {errors.email && (
              <span className='form__error'>{errors.email}</span>
            )}
          </form>
          <div className='profile__buttons'>
            {isCurrentValues ? (
              <>
                <button
                  className='profile__button-edit'
                  form='profile__form'
                  onClick={openEditProfile}
                >
                  Редактировать
                </button>
                <button
                  className='profile__button-logout'
                  onClick={handleLogout}
                >
                  Выйти из аккаунта
                </button>
              </>
            ) : (
              <>
                {responseError && (
                  <span className='form__error'>{responseError}</span>
                )}
                <button
                  className={
                    responseError
                      ? 'form__submit profile__submit profile__submit_error'
                      : 'form__submit profile__submit'
                  }
                  disabled={!isFormValid || responseError}
                  type='submit'
                  onClick={handleSubmit}
                >
                  Сохранить
                </button>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;
