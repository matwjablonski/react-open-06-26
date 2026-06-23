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
        <Outlet />
        <Footer author={author} />
    </>
)