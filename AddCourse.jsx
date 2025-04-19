import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addCourseAPI } from '../services/api';

function AddCourse() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: '',
        price: '',
        tag: '',
        level: '',
        syllabus: '',
        createdBy: 'alice@example.com',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const syllabusArray = form.syllabus.split(',').map((item) => item.trim());

        const newCourse = {
            ...form,
            syllabus: syllabusArray,
            price: Number(form.price),
        };

        try {
            await addCourseAPI(newCourse);
            navigate('/courses');
        } catch (error) {
            alert('Failed to add course');
        }
    };

    return (
        <div className="add-course-container">
            <h1 className="form-title">Add New Course</h1>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    name="title"
                    placeholder="Course Title"
                    value={form.title}
                    onChange={handleChange}
                    className="form-input"
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={form.price}
                    onChange={handleChange}
                    className="form-input"
                    required
                />
                <input
                    type="text"
                    name="tag"
                    placeholder="Tag (e.g., React)"
                    value={form.tag}
                    onChange={handleChange}
                    className="form-input"
                    required
                />
                <input
                    type="text"
                    name="level"
                    placeholder="Level (e.g., Intermediate)"
                    value={form.level}
                    onChange={handleChange}
                    className="form-input"
                    required
                />
                <input
                    type="text"
                    name="syllabus"
                    placeholder="Syllabus topics (comma separated)"
                    value={form.syllabus}
                    onChange={handleChange}
                    className="form-input"
                    required
                />
                <button type="submit" className="form-button">
                    Add Course
                </button>
            </form>
        </div>
    );
}

export default AddCourse;
