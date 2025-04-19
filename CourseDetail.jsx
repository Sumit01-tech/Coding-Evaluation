import { useParams, Link } from 'react-router-dom';
import useCourses from '../hooks/useCourses';

function CourseDetail() {
    const { id } = useParams();
    const { courses } = useCourses();
    const course = courses.find((c) => c.id === id);

    if (!course) {
        return (
            <p style={{ textAlign: 'center', padding: '24px' }}>
                Course not found.
            </p>
        );
    }

    const containerStyle = {
        padding: '24px',
    };

    const titleStyle = {
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '16px',
    };

    const textStyle = {
        color: '#4B5563',
        marginBottom: '8px',
    };

    const syllabusTitleStyle = {
        fontWeight: '600',
        marginBottom: '8px',
    };

    const listStyle = {
        listStyleType: 'disc',
        paddingLeft: '24px',
        marginBottom: '24px',
    };

    const instructorStyle = {
        color: '#6B7280',
    };

    const linkStyle = {
        display: 'block',
        marginTop: '24px',
        color: '#2563EB',
        textDecoration: 'none',
        fontWeight: 'bold',
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>{course.title}</h1>
            <p style={textStyle}>Price: ${course.price}</p>
            <p style={textStyle}>Level: {course.level}</p>
            <p style={syllabusTitleStyle}>Syllabus:</p>
            <ul style={listStyle}>
                {course.syllabus.map((topic, i) => (
                    <li key={i}>{topic}</li>
                ))}
            </ul>
            <p style={instructorStyle}>Instructor: {course.createdBy}</p>
            <Link to="/courses" style={linkStyle}>
                ← Back to Courses
            </Link>
        </div>
    );
}

export default CourseDetail;
