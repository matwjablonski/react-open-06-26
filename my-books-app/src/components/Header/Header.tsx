import { Link } from "react-router-dom";
import styles from './Header.module.css';

type HeaderProps = {
    children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => (
    <header className={styles.header}>
        <h1>Witaj w naszej aplikacji książkowej</h1>
        {children}
        <nav>
            <Link to="/">Strona główna</Link>
            <Link to="/books">Książki</Link>
            <Link to="/readers">Autorzy</Link>
            <Link to="/contact">Kontakt</Link>
        </nav>
    </header>
)