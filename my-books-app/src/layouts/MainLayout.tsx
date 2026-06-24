import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { UserInfo } from "../components/UserInfo/UserInfo";
import { Footer } from "../components/Footer/Footer";
import { Modal } from "../components/Modal/Modal";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { ButtonSecondary } from "../components/Button/Button";
import { useState } from "react";

type MainLayoutProps = {
    author: string;
    isAuthenticated?: boolean;
    onLogin: () => void;
    onLogout: () => void;
}

export const MainLayout = ({ author, onLogin, onLogout, isAuthenticated }: MainLayoutProps  ) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <>
            <Header>
                {isAuthenticated && <UserInfo name={author} />}
                {!isAuthenticated ? <ButtonSecondary onClick={() => setIsModalOpen(true)}>Logowanie</ButtonSecondary> : <ButtonSecondary onClick={() => onLogout()}>Wyloguj</ButtonSecondary>}
                <Modal onClose={() => setIsModalOpen(false)} isOpen={isModalOpen}>
                    <LoginForm onLogin={() => {
                        onLogin();
                        setIsModalOpen(false);
                    }} />
                </Modal>
            </Header>
            <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
                <Outlet />
            </main>
            <Footer author={author} />
        </>
    )
}