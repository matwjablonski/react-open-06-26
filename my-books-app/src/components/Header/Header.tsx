import { Link } from "react-router-dom";
import styles from './Header.module.css';
import { Avatar } from "../Avatar/Avatar";
import { ButtonSecondary } from "../Button/Button";
import { useTheme } from "../../hooks/useTheme";

type HeaderProps = {
    children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={styles.header}>
            <h1>Witaj w naszej aplikacji książkowej</h1>
            {children}
            <Avatar src="https://placehold.co/150" alt="Avatar" />
            <nav>
                <Link to="/">Strona główna</Link>
                <Link to="/books">Książki</Link>
                <Link to="/readers">Autorzy</Link>
                <Link to="/contact">Kontakt</Link>
                <ButtonSecondary onClick={toggleTheme}>Zmień motyw na {theme === 'light' ? 'ciemny' : 'jasny'}</ButtonSecondary>
        </nav>
        </header>
    )
}
