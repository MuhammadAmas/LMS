import React, { useState, useEffect } from 'react';
import data from './data.json';
import { Grid, useMediaQuery, Button } from '@chakra-ui/react';
import CourseCard from './CourseCard';
import useFetchAllData from '../../utils/useFetchAllCourses';
import useFetchUsersData from '../../utils/useFetchUserCourses';

export default function Courses({ userID }) {
    const [courses, setCourses] = useState([]);
    const [isLargerThan700] = useMediaQuery('(min-width: 700px)');
    const [showItems, setShowItems] = React.useState(3);

    const handleLoadMore = () => {
        setShowItems(showItems + 6);
    }

    const courseData = async () => {
        if (userID == null) {
            await useFetchAllData('GET', "http://localhost:3000/courses").
                then((course) => {
                    setCourses(course);
                });
        }
        else {
            await useFetchUsersData('GET', "http://localhost:3000/courses/" + userID).
                then((course) => {
                    setCourses(course);
                });
        }
    }
    useEffect(() => {
        courseData();
    }, [])

    return (
        <>
            {courses.length == 0 && <h4>You have not Created any courses yet! </h4>}
            <Grid templateColumns={isLargerThan700 ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)'} gap={0}>
                {courses !== undefined && courses.slice(0, showItems).map((course) => {
                    return <CourseCard key={course.course_id} course={course} userID={userID} />
                })}
            </Grid>
            {showItems < data.length & courses.length > 3 && (
                <Button onClick={handleLoadMore} mt={4} mx="auto" display="block"
                    style={{
                        backgroundColor: "#f56565",
                        color: "white",
                    }}
                >
                    Load More...
                </Button>
            )}

        </>
    );
}

