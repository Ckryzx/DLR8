import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
    const { id } = useParams(); 
    const [pizza, setPizza] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/pizzas/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al obtener la pizza.");
                }
                return response.json();
            })
            .then((data) => setPizza(data))
            .catch((error) => setError(error.message));
    }, [id]);

    if (error) return <p className="alert alert-danger">{error}</p>;
    if (!pizza) return <p>Cargando pizza...</p>;

    return (
        <div className="container mt-4">
            <h1>{pizza.name}</h1>
            <img src={pizza.img} className="img-fluid" alt={pizza.name} />
            <p>{pizza.desc}</p>
            <ul>
                {pizza.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <p><strong>Precio: ${pizza.price}</strong></p>
        </div>
    );
};

export default Pizza;