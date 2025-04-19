import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const success = login(email, password);
        if (success) {
            navigate('/dashboard');
        } else {
            setError('Invalid credentials.');
        }
    }

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '24px',
    };

    const formStyle = {
        border: '1px solid #ccc',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        width: '320px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    };

    const headingStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '16px',
    };

    const inputStyle = {
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '6px',
        width: '100%',
    };

    const buttonStyle = {
        backgroundColor: '#2563EB',
        color: '#fff',
        padding: '10px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background-color 0.3s',
    };

    const buttonHoverStyle = {
        backgroundColor: '#1D4ED8',
    };

    const errorStyle = {
        color: 'red',
        fontSize: '14px',
        textAlign: 'center',
    };

    return (
        <div style={containerStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
                <h2 style={headingStyle}>Instructor Login</h2>
                {error && <p style={errorStyle}>{error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    style={inputStyle}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    style={inputStyle}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    style={buttonStyle}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
