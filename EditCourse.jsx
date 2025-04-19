import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useCourses from '../hooks/useCourses';

function EditCourse() {
    const { id } = useParams();
    const { courses, updateCourse } = useCourses();
    const navigate = useNavigate();

    const course = courses.find((c) => c.id === id);

    const [form, setForm] = useState({
        title: '',
        price: '',
        tag: '',
        level: '',
        syllabus: '',
    });

    useEffect(() => {
        if (course) {
            setForm({
                title: course.title,
                price: course.price,
                tag: course.tag,
                level: course.level,
                syllabus: course.syllabus.join(', '),
            });
        }
    }, [course]);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const syllabusArray = form.syllabus.split(',').map((item) => item.trim());
        updateCourse(id, {
            ...form,
            price: Number(form.price),
            syllabus: syllabusArray,
        });
        navigate('/dashboard');
    }

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
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '16px',
    };

    const formStyle = {
        display: 'grid',
        gap: '16px',
        maxWidth: '500px',
    };

    const inputStyle = {
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '6px',
    };

    const buttonStyle = {
        backgroundColor: '#2563EB',
        color: 'white',
        padding: '10px 16px',
        borderRadius: '6px',
        border: 'none',
        fontWeight: 'bold',
        cursor: 'pointer',
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Edit Course</h1>
            <form onSubmit={handleSubmit} style={formStyle}>
                <input
                    type="text"
                    name="title"
                    placeholder="Course Title"
                    value={form.title}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={form.price}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                />
                <input
                    type="text"
                    name="tag"
                    placeholder="Tag (e.g., React)"
                    value={form.tag}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                />
                <input
                    type="text"
                    name="level"
                    placeholder="Level (e.g., Intermediate)"
                    value={form.level}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                />
                <input
                    type="text"
                    name="syllabus"
                    placeholder="Syllabus topics (comma separated)"
                    value={form.syllabus}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                />
                <button type="submit" style={buttonStyle}>
                    Save Changes
                </button>
            </form>
        </div>
    );
}

export default EditCourse;
