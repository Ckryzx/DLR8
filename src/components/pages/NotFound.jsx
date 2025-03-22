import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container text-center mt-5">
            <h1>404 - Página no encontrada 😢</h1>
            <p>Lo sentimos, la página que buscas no existe.</p>
            <Link to="/" className="btn btn-primary">Volver a la página principal</Link>
        </div>
    );
};

export default NotFound;
