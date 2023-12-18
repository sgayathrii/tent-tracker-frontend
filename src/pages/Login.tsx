import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext"; 

const Login = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const { loginUser } = useUser(); 
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(formData); 
    navigate("/camping-areas", { state: formData });
  };

  return (
    <div className="login">
      <h2 className="login__header">Login Page</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__form__name">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className="login__form__email">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit" className="login__form__submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
