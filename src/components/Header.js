function Header({ children}) {
    return (
        <header className="header">
            <nav className="navigation">
                { children }
            </nav>
        </header>
    )
}

export default Header;