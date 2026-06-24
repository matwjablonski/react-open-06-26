import { memo } from "react";
import { Link } from "react-router-dom";
import { ButtonSecondary } from "../Button/Button";
import { useTheme } from "../../hooks/useTheme";

export const Nav = memo(() => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav>
            <Link to="/">Strona główna</Link>
            <Link to="/books">Książki</Link>
            <Link to="/readers">Autorzy</Link>
            <Link to="/contact">Kontakt</Link>
            <ButtonSecondary onClick={toggleTheme}>Zmień motyw na {theme === 'light' ? 'ciemny' : 'jasny'}</ButtonSecondary>
        </nav>
    )
});

Nav.displayName = 'MemoNav';