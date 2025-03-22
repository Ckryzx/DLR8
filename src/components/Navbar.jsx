import { Link } from "react-router-dom";
import { useUser } from "./context/UserContext";

const Navbar = () => {
    const { token, logout } = useUser();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">🍕 Pizzería Mamma Mía</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
                        {!token ? (
                            <>
                                <li className="nav-item"><Link className="nav-link" to="/register">Registro</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/login">Iniciar Sesión</Link></li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item"><Link className="nav-link" to="/profile">Perfil</Link></li>
                                <li className="nav-item"><button className="btn btn-danger" onClick={logout}>Cerrar Sesión</button></li>
                            </>
                        )}
                        <li className="nav-item">
                            <Link className="btn btn-warning" to="/cart">🛒 Carrito</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;