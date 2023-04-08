import React from 'react';
import data from './data.json';
import { Grid, useMediaQuery } from '@chakra-ui/react';
import CourseCard from './CourseCard';

export default function Courses() {
    const [isLargerThan700] = useMediaQuery('(min-width: 700px)');

    return (
        <Grid
            templateColumns={isLargerThan700 ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)'}
            gap={0}

            justifyItems="center"
        >
            {data.map((course) => (
                <CourseCard key={course.course_id} course={course} />
            ))}
        </Grid>
    );
}
