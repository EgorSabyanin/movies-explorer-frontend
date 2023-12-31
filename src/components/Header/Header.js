import './Header.css';

function Header({ userClass = null, children }) {
    return (
        <header className={userClass ? userClass + ' ' + 'header' : 'header'}>
            <nav className="navigation">
                { children }
            </nav>
        </header>
    )
}

export default Header;