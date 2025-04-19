import { useState } from 'react';
import { Link } from 'react-router-dom';
import useCourses from '../hooks/useCourses';

function Courses() {
    const { courses, loading, error } = useCourses();
    const [search, setSearch] = useState('');
    const [tagFilter, setTagFilter] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [page, setPage] = useState(1);
    const pageSize = 10;

    const filtered = courses
        .filter((c) => c.title.toLowerCase().includes(search.toLowerCase()))
        .filter((c) => (tagFilter ? c.tag === tagFilter : true))
        .sort((a, b) => {
            if (sortBy === 'title-asc') return a.title.localeCompare(b.title);
            if (sortBy === 'title-desc') return b.title.localeCompare(a.title);
            if (sortBy === 'price-asc') return a.price - b.price;
            if (sortBy === 'price-desc') return b.price - a.price;
            return 0;
        });

    const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);
    const totalPages = Math.ceil(filtered.length / pageSize);

    if (loading) return <p style={{ textAlign: 'center', padding: '24px' }}>Loading...</p>;
    if (error) return <p style={{ textAlign: 'center', padding: '24px', color: 'red' }}>{error}</p>;

    const containerStyle = {
        padding: '24px',
    };

    const formControlsStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        marginBottom: '24px',
    };

    const inputStyle = {
        border: '1px solid #ccc',
        padding: '8px',
        borderRadius: '6px',
        width: '300px',
    };

    const selectStyle = {
        border: '1px solid #ccc',
        padding: '8px',
        borderRadius: '6px',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
    };

    const cardStyle = {
        padding: '16px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'box-shadow 0.3s',
    };

    const cardHoverStyle = {
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    };

    const paginationStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '32px',
        gap: '8px',
    };

    const pageButtonStyle = (isActive) => ({
        padding: '8px 12px',
        border: '1px solid #ccc',
        borderRadius: '6px',
        backgroundColor: isActive ? '#2563EB' : 'transparent',
        color: isActive ? '#fff' : 'black',
        cursor: 'pointer',
        fontWeight: isActive ? 'bold' : 'normal',
    });

    return (
        <div style={containerStyle}>
            <div style={formControlsStyle}>
                <input
                    type="text"
                    placeholder="Search courses..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={inputStyle}
                />
                <select onChange={(e) => setSortBy(e.target.value)} value={sortBy} style={selectStyle}>
                    <option value="">Sort By</option>
                    <option value="title-asc">Title A-Z</option>
                    <option value="title-desc">Title Z-A</option>
                    <option value="price-asc">Price Low-High</option>
                    <option value="price-desc">Price High-Low</option>
                </select>
                <select onChange={(e) => setTagFilter(e.target.value)} value={tagFilter} style={selectStyle}>
                    <option value="">All Tags</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="React">React</option>
                    <option value="UI/UX">UI/UX</option>
                </select>
            </div>

            <div style={gridStyle}>
                {paginated.map((course) => (
                    <Link
                        to={`/courses/${course.id}`}
                        key={course.id}
                        style={cardStyle}
                        onMouseOver={(e) => (e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow)}
                        onMouseOut={(e) => (e.currentTarget.style.boxShadow = cardStyle.boxShadow)}
                    >
                        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>{course.title}</h2>
                        <p style={{ color: '#4B5563', marginBottom: '4px' }}>Price: ${course.price}</p>
                        <p style={{ color: '#9CA3AF', fontSize: '14px' }}>{course.tag}</p>
                    </Link>
                ))}
            </div>

            {/* Pagination */}
            <div style={paginationStyle}>
                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setPage(i + 1)}
                        style={pageButtonStyle(page === i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Courses;
