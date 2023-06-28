import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Logo({ styleClass }) {
    return (
        <Link to="/" className="navigation__link">
            <img className={styleClass} src={logo} alt="Логотип проекта" />
        </Link>
    );
}

export default Logo;