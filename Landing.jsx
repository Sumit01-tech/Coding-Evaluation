import { Link } from 'react-router-dom';

function Landing() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '24px',
    };

    const headingStyle = {
        fontSize: '36px',
        fontWeight: 'bold',
        marginBottom: '16px',
    };

    const paragraphStyle = {
        marginBottom: '32px',
        color: '#6B7280', // gray-600
    };

    const linkStyle = {
        padding: '12px 24px',
        backgroundColor: '#2563EB', // blue-600
        color: 'white',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'background-color 0.3s',
    };

    const linkHoverStyle = {
        backgroundColor: '#1D4ED8', // blue-700
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Welcome to EdTech Courses</h1>
            <p style={paragraphStyle}>Learn new skills with our curated short courses!</p>
            <Link
                to="/courses"
                style={linkStyle}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = linkStyle.backgroundColor)}
            >
                Browse Courses
            </Link>
        </div>
    );
}

export default Landing;
