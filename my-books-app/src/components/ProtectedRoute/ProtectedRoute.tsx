import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../../store/store";

type ProtectedRouteProps = {
    children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const isAuthenticated = useSelector((state: RootState) => state.user.isLoggedIn);

    if (!isAuthenticated) {
        return <Navigate to="/no-access" replace />;
    }

    return <>{children}</>
}