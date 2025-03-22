import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [email, setEmail] = useState(localStorage.getItem("email") || null);

    // Método para hacer login
    const login = async (email, password) => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                setToken(data.token);
                setEmail(data.email);
                localStorage.setItem("token", data.token);
                localStorage.setItem("email", data.email);
            } else {
                throw new Error(data.message || "Error en login");
            }
        } catch (error) {
            console.error("Error en login:", error.message);
        }
    };

    // Método para hacer register
    const register = async (email, password) => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                login(email, password); // Auto-login después de registrarse
            } else {
                throw new Error(data.message || "Error en registro");
            }
        } catch (error) {
            console.error("Error en registro:", error.message);
        }
    };

    // Método para obtener el perfil del usuario autenticado
    const getProfile = async () => {
        if (!token) return;
        try {
            const response = await fetch("http://localhost:5000/api/auth/me", {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            });

            const data = await response.json();
            if (response.ok) {
                setEmail(data.email);
            } else {
                throw new Error(data.message || "Error obteniendo perfil");
            }
        } catch (error) {
            console.error("Error en perfil:", error.message);
        }
    };

    // Obtener perfil al cargar la app
    useEffect(() => {
        getProfile();
    }, [token]);

    // Método para hacer logout
    const logout = () => {
        setToken(null);
        setEmail(null);
        localStorage.removeItem("token");
        localStorage.removeItem("email");
    };

    return (
        <UserContext.Provider value={{ token, email, login, register, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
