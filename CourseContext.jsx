import { createContext, useState, useEffect } from 'react';

export const CourseContext = createContext();

export function CourseProvider({ children }) {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchCourses() {
        try {
            setLoading(true);
            const fetched = await getCoursesAPI();
            setCourses(fetched);
        } catch (err) {
            setError('Failed to fetch courses.');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <CourseContext.Provider value={{ courses, fetchCourses, setCourses, loading, error }}>
            {children}
        </CourseContext.Provider>
    );
}
