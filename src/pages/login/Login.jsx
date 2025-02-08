import { useState } from "react";
import loginClass from './css/login.module.css';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";



function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const staticUsername = "admin";
  const staticPassword = "password123";

  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 8); // Generates a 6-character alphanumeric captcha
  }

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  };

  const handleSubmit = () => {
    if (username !== staticUsername || password !== staticPassword) {
      setErrorMessage("Invalid username or password!");
      refreshCaptcha();
      return;
    }
    if (captchaInput !== captcha) {
      setErrorMessage("Captcha incorrect! Try again.");
      refreshCaptcha();
      return;
    }
    Swal.fire("Success", "Login successful!", "success");

    navigate('/nsso-secured/compile-schedule');
  };


 return (
  <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Captcha: {captcha}</label>
        <input
          type="text"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
          required
        />
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <button type="button" onClick={refreshCaptcha}>Refresh Captcha</button>
      </div>
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default LoginForm;
