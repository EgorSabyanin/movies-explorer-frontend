import Logo from './Logo';

function Login() {
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <section className="register">
            <Logo />
            <h1>Рады видеть</h1>
        </section>
    );
}

export default Login;