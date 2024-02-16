import { Navigate, Outlet } from "react-router-dom";


//condificial si pasa algo navege hacia una ruta y sino devuelve el Outlet, es decir, lo demás
//canActive es un Boolean
//replace borra la url actual y la sustituye por lo que contenga redirectPath
const ProtectedRoute = ({
    canActivate,
    redirectPath = '/'
}) => {
    if (!canActivate) {
        return <Navigate to={redirectPath} replace />
    }
    return <Outlet />;
}

export default ProtectedRoute;
