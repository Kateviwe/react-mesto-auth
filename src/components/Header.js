import { Link, useLocation } from 'react-router-dom';

function Header({
    loggedIn,
    email,
    onSignOut
}) {

    const path = useLocation();

    if(path.pathname !== '/' && path.pathname !== '/sign-up' && path.pathname !== '/sign-in') {
        return null;
    } else {
        return (
            <header className="header">
                <div className="header__logo"></div>
                <div className="header__container">
                    {loggedIn && (<h2 className="header__email">{email}</h2>)}
                    {loggedIn && (path.pathname === '/' &&
                        <Link to='/sign-in'
                            className="header__link">
                            <button
                                type='button'
                                className="header__button"
                                onClick={onSignOut}>Выйти
                            </button>
                        </Link>)}
                    {!loggedIn &&
                        (path.pathname === '/sign-up' && <Link to='/sign-in' className="header__link">Войти</Link>)
                        || (path.pathname === '/sign-in' && <Link to='/sign-up' className="header__link">Регистрация</Link>)
                    }
                </div>
            </header>
        );
    }
}

export default Header;