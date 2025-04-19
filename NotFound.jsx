import { Link } from 'react-router-dom';

function NotFound() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '24px',
        textAlign: 'center',
    };

    const headingStyle = {
        fontSize: '36px',
        fontWeight: 'bold',
        marginBottom: '16px',
    };

    const paragraphStyle = {
        marginBottom: '24px',
        color: '#6B7280',
    };

    const linkStyle = {
        padding: '12px 24px',
        backgroundColor: '#2563EB',
        color: 'white',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'background-color 0.3s',
    };

    const linkHoverStyle = {
        backgroundColor: '#1D4ED8',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>404 - Page Not Found</h1>
            <p style={paragraphStyle}>Oops! The page you're looking for doesn't exist.</p>
            <Link
                to="/"
                style={linkStyle}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = linkStyle.backgroundColor)}
            >
                Go Home
            </Link>
        </div>
    );
}

export default NotFound;
