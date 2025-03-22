import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/pages/CartContext";
import { UserProvider } from "./components/context/UserContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Register from "./components/pages/RegisterPage";
import Login from "./components/pages/LoginPage";
import Cart from "./components/pages/Cart";
import Pizza from "./components/pages/Pizzas";
import Profile from "./components/pages/Profile";
import NotFound from "./components/pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
    return (
        <UserProvider>
            <CartProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/pizza/:id" element={<Pizza />} />
                        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </Router>
            </CartProvider>
        </UserProvider>
    );
};

export default App;