import React, { useState, useEffect } from 'react';
import data from './data.json';
import { Grid, useMediaQuery, Button } from '@chakra-ui/react';
import CourseCard from './CourseCard';
import useFetchData from '../../utils/useFetchAllCourses';

export default function Courses() {
    const [courses, setCourses] = useState();
    const [isLargerThan700] = useMediaQuery('(min-width: 700px)');
    const [showItems, setShowItems] = React.useState(3);

    const handleLoadMore = () => {
        setShowItems(showItems + 6);
    }

    const coursesData = async () => {
        await useFetchData('GET', "http://localhost:3000/courses").
            then((course) => {
                setCourses(course);
            });
    }
    useEffect(() => {
        coursesData();
    }, [])

    return (
        <>
            <Grid templateColumns={isLargerThan700 ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)'} gap={0}>
                {courses !== undefined && courses.slice(0, showItems).map((course) => {
                    return <CourseCard key={course.course_id} course={course} />
                })}
            </Grid>
            {showItems < data.length && (
                <Button onClick={handleLoadMore} mt={4} mx="auto" display="block"
                    style={{
                        backgroundColor: "#f56565",
                        color: "white",
                    }}>
                    Load More...
                </Button>
            )}
        </>
    );
}

