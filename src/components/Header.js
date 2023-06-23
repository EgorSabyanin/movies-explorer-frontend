function Header({ children}) {
    return (
        <header className="header">
            <nav className="navigation page__wrapper">
                { children }
            </nav>
        </header>
    )
}

export default Header;