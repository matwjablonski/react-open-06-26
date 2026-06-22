type FooterProps = {
    author: string;
}

export const Footer = ({ author }: FooterProps) => (
    <footer>
        Aplikacja przygotowana przez {author}
    </footer>
);