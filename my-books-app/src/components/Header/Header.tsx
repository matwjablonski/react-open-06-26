import { Link } from "react-router-dom";

type HeaderProps = {
    children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => (
    <header>
        <h1>Witaj w naszej aplikacji książkowej</h1>
        {children}
        <nav>
            <Link to="/">Strona główna</Link>
            <Link to="/books">Książki</Link>
            <Link to="/authors">Autorzy</Link>
        </nav>
    </header>
)