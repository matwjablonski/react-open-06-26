import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { UserInfo } from "../components/UserInfo/UserInfo";
import { Footer } from "../components/Footer/Footer";

type MainLayoutProps = {
    author: string;
}

export const MainLayout = ({ author }: MainLayoutProps  ) => (
    <>
        <Header>
            <UserInfo name={author} />
        </Header>
        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
            <Outlet />
        </main>
        <Footer author={author} />
    </>
)