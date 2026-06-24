import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { UserInfo } from "../components/UserInfo/UserInfo";
import { Footer } from "../components/Footer/Footer";
import { Modal } from "../components/Modal/Modal";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { ButtonSecondary } from "../components/Button/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../slices/User.slice";
import type { RootState } from "../store/store";
import { Search } from "../components/Search/Search";

type MainLayoutProps = {
    author: string;
}

export const MainLayout = ({ author }: MainLayoutProps  ) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.user.isLoggedIn);
    const userName = useSelector((state: RootState) => state.user.name);
    
    const handleLogin = () => {
        dispatch(userActions.login({ name: author }));
    }

    const handleLogout = () => {
        dispatch(userActions.logout());
    }

    return (
        <>
            <Header>
                {isAuthenticated && userName && <UserInfo name={userName} />}
                {!isAuthenticated ? <ButtonSecondary onClick={() => setIsModalOpen(true)}>Logowanie</ButtonSecondary> : <ButtonSecondary onClick={handleLogout}>Wyloguj</ButtonSecondary>}
                <Modal onClose={() => setIsModalOpen(false)} isOpen={isModalOpen}>
                    <LoginForm onLogin={() => {
                        handleLogin()
                        setIsModalOpen(false);
                    }} />
                </Modal>
            </Header>
            <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
                <Search />
                <Outlet />
            </main>
            <Footer author={author} />
        </>
    )
}