import React, { useEffect, useState } from 'react';
import { getUdemyCourses } from './udemyApi';

const UdemyCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const data = await getUdemyCourses();
            setCourses(data.results);
        };
        fetchCourses();
    }, []);

    return (
        <div>
            {courses.map((course) => (
                <div key={course.id}>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                </div>
            ))}
        </div>
    );
};

export default UdemyCourses;
