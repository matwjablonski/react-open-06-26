import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
    isAuthenticated: boolean;
    children: React.ReactNode;
}

export const ProtectedRoute = ({ children, isAuthenticated }: ProtectedRouteProps) => {
    if (!isAuthenticated) {
        return <Navigate to="/no-access" replace />;
    }

    return <>{children}</>
}