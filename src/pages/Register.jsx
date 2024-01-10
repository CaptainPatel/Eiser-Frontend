import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/api';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import './Register.css'; // Import your custom CSS file

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(null);

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const navigate = useNavigate();

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      await register(name, email, password);
      setRegistrationSuccess(`Account created for ${name}!`);
      reset();

      // Delay the redirect to the login page by 2 seconds (adjust as needed)
      setTimeout(() => {
        // Redirect to the login page
        navigate('/login');
      }, 1000);
    } catch (error) {
      console.error('Error during registration:', error.message);
      // Handle error, show a message to the user, etc.
    }
  };

  return (
    <div className="registerPage">
      <div className="register-container">
        <h1 className="register-title">Registration</h1>
        {registrationSuccess && (
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            {registrationSuccess}
          </Alert>
        )}
        <form onSubmit={submitForm}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="name"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="pass"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
