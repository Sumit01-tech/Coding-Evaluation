const BASE_URL = 'https://ed-tech-startup-course-default-rtdb.firebaseio.com/courses';

export async function getCoursesAPI() {
    const res = await fetch(`${BASE_URL}.json`);
    const data = await res.json();
    return data ? Object.values(data) : [];
}

export async function addCourseAPI(course) {
    const res = await fetch(`${BASE_URL}/${course.id}.json`, {
        method: 'PUT',
        body: JSON.stringify(course)
    });
    if (!res.ok) throw new Error('Failed to add');
}

export async function updateCourseAPI(id, updates) {
    const res = await fetch(`${BASE_URL}/${id}.json`, {
        method: 'PATCH',
        body: JSON.stringify(updates)
    });
    if (!res.ok) throw new Error('Failed to update');
}

export async function deleteCourseAPI(id) {
    const res = await fetch(`${BASE_URL}/${id}.json`, {
        method: 'DELETE'
    });
    if (!res.ok) throw new Error('Failed to delete');
}
