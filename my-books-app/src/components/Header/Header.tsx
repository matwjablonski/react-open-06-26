type HeaderProps = {
    children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => (
    <header>
        <h1>Witaj w naszej aplikacji książkowej</h1>
        {children}
        <nav>
            <a href="/">Strona główna</a>
            <a href="/books">Książki</a>
            <a href="/authors">Autorzy</a>
        </nav>
    </header>
)