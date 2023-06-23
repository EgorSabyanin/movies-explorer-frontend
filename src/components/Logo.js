import logo from '../logo.svg';

function Logo({ styleClass }) {
    return (
        <img className={ styleClass }  src={ logo } alt="Логотип проекта" />
    );
}

export default Logo;