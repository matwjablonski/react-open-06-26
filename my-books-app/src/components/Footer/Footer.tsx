import { useTheme } from "../../hooks/useTheme";

type FooterProps = {
    author: string;
}

export const Footer = ({ author }: FooterProps) => {
    const { theme } = useTheme();

    return (
        <footer>
            Aplikacja przygotowana przez {author} | Używany motyw: {theme}
        </footer>
    );
}
