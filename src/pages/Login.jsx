import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/api';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import './Login.css';

const Login = ({ setLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState(null);

    const reset = () => {
        setEmail('');
        setPassword('');
    };

    const navigate = useNavigate();

    const submitForm = async (event) => {
        event.preventDefault();

        try {
            // Call the login function in your api
            const user = await login(email, password);
            // Assuming a successful login, you can access user data
            reset();
            setLoggedIn(true);

            // Display success message
            setSuccessMessage(`Welcome back, ${user.email}!`);

            // Redirect to the home page after a delay
            setTimeout(() => {
                navigate('/');
                window.location.reload();

            }, 2000);
        } catch (error) {
            alert('Invalid credentials. Please check your email and password.');
            console.log('Full response details:', error.response);
        }
    };

    return (
        <div className="loginPage">
            <div className="login-container">
                <h1 className="login-title">Login</h1>
                <form onSubmit={submitForm}>
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
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
                {/* Success alert */}
                {successMessage && (
                    <Alert variant="filled" style={{ margin: "1rem" }} severity="success">
                        <AlertTitle>Success</AlertTitle>
                        {successMessage}
                    </Alert>
                )}
            </div>
        </div>
    );
};

export default Login;
