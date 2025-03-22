import React from "react";

const CardPizza = ({ pizza }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />
        <div className="card-body">
          <h5 className="card-title">{pizza.name}</h5>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p className="fw-bold">${pizza.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;

