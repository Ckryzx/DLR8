import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (pizza) => {
        setCart((prevCart) => {
            const existingPizza = prevCart.find((p) => p.id === pizza.id);
            if (existingPizza) {
                return prevCart.map((p) =>
                    p.id === pizza.id ? { ...p, count: p.count + 1 } : p
                );
            } else {
                return [...prevCart, { ...pizza, count: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) =>
            prevCart
                .map((p) => (p.id === id ? { ...p, count: p.count - 1 } : p))
                .filter((p) => p.count > 0)
        );
    };

    const totalCartPrice = cart.reduce((acc, item) => acc + item.price * item.count, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalCartPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
