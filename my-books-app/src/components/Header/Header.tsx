import styles from './Header.module.css';
import { Avatar } from "../Avatar/Avatar";
import { Nav } from '../Nav/Nav';

type HeaderProps = {
    children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
    
    return (
        <header className={styles.header}>
            <h1>Witaj w naszej aplikacji książkowej</h1>
            {children}
            <Avatar src="https://placehold.co/150" alt="Avatar" />
            <Nav />
        </header>
    )
}
