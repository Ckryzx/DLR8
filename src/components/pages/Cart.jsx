import { useCart } from "./CartContext";
import { useUser } from "../context/UserContext";

const Cart = () => {
    const { cart, totalCartPrice } = useCart();
    const { token } = useUser();
    const [message, setMessage] = useState("");

    const handleCheckout = async () => {
        if (!token) return;

        const response = await fetch("http://localhost:5000/api/checkouts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ cart }),
        });

        if (response.ok) {
            setMessage("Compra realizada con éxito.");
        } else {
            setMessage("Error en la compra.");
        }
    };

    return (
        <div className="container">
            <h1>Carrito de Compras</h1>
            <h4>Total: ${totalCartPrice}</h4>
            <button onClick={handleCheckout} disabled={!token}>Pagar</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Cart;