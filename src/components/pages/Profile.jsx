import { useUser } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const Profile = () => {
    const { token, email, logout } = useUser();

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="container">
            <h1>Perfil del Usuario</h1>
            <p>Email: {email}</p>
            <button onClick={logout}>Cerrar Sesión</button>
        </div>
    );
};

export default Profile;
