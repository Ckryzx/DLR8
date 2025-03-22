import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
      await login(email, password);
      navigate("/profile");
  };

  return (
      <div className="container">
          <h1>Iniciar Sesión</h1>
          <form onSubmit={handleSubmit}>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="submit">Ingresar</button>
          </form>
      </div>
  );
};

export default Login;
