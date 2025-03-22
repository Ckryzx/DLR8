import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext"

const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    const { addToCart } = useCart();  

    useEffect(() => {
        fetch("http://localhost:5000/api/pizzas")
            .then((response) => response.json())
            .then((data) => setPizzas(data));
    }, []);

    return (
        <div className="container mt-4">
            <h1>🍕 Nuestras Pizzas</h1>
            <div className="row">
                {pizzas.map((pizza) => (
                    <div key={pizza.id} className="col-md-4 mb-3">
                        <div className="card">
                            <img src={pizza.img} className="card-img-top" alt={pizza.name} />
                            <div className="card-body">
                                <h5 className="card-title">{pizza.name}</h5>
                                <p>{pizza.desc}</p>
                                <p><strong>Precio: ${pizza.price}</strong></p>
                                <Link to={`/pizza/${pizza.id}`} className="btn btn-info">Ver Detalle</Link>  
                                <button className="btn btn-primary ms-2" onClick={() => addToCart(pizza)}>Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
