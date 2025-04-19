import { Link } from 'react-router-dom';
import useCourses from '../hooks/useCourses';
import useAuth from '../hooks/useAuth';

function Dashboard() {
    const { courses, deleteCourse } = useCourses();
    const { user } = useAuth();

    const myCourses = courses.filter((course) => course.createdBy === user.email);

    const containerStyle = {
        padding: '24px',
    };

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
    };

    const titleStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
    };

    const addButtonStyle = {
        padding: '8px 16px',
        backgroundColor: '#16A34A',
        color: 'white',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold',
    };

    const courseCardStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid #ccc',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    };

    const courseInfoStyle = {
        display: 'flex',
        flexDirection: 'column',
    };

    const courseTitleStyle = {
        fontSize: '20px',
        fontWeight: '600',
    };

    const coursePriceStyle = {
        color: '#6B7280',
    };

    const actionsStyle = {
        display: 'flex',
        gap: '8px',
    };

    const editButtonStyle = {
        padding: '6px 12px',
        backgroundColor: '#3B82F6',
        color: 'white',
        borderRadius: '6px',
        textDecoration: 'none',
        fontWeight: 'bold',
    };

    const deleteButtonStyle = {
        padding: '6px 12px',
        backgroundColor: '#EF4444',
        color: 'white',
        borderRadius: '6px',
        border: 'none',
        fontWeight: 'bold',
        cursor: 'pointer',
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <h1 style={titleStyle}>My Courses</h1>
                <Link to="/dashboard/new" style={addButtonStyle}>
                    + Add New Course
                </Link>
            </div>

            {myCourses.length === 0 ? (
                <p style={{ color: '#6B7280' }}>You have not added any courses yet.</p>
            ) : (
                <div style={{ display: 'grid', gap: '16px' }}>
                    {myCourses.map((course) => (
                        <div key={course.id} style={courseCardStyle}>
                            <div style={courseInfoStyle}>
                                <h2 style={courseTitleStyle}>{course.title}</h2>
                                <p style={coursePriceStyle}>${course.price}</p>
                            </div>
                            <div style={actionsStyle}>
                                <Link to={`/dashboard/edit/${course.id}`} style={editButtonStyle}>
                                    Edit
                                </Link>
                                <button
                                    onClick={() => deleteCourse(course.id)}
                                    style={deleteButtonStyle}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dashboard;
