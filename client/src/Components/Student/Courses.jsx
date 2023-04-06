import React from 'react'
import data from './data.json';

export default function Courses() {
    return (
        <div>
            {data.map((course) => (
                <div key={course.course_id}>
                    <h2>{course.course_name}</h2>
                    <p>{course.description}</p>
                </div>
            ))}
        </div>
    );
}
