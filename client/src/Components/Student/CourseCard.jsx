import React, { useEffect } from "react"
import { Card, CardBody, Stack, Text, Image, Divider, CardFooter, Button, ButtonGroup, Heading } from "@chakra-ui/react"
import './courseCard.css'
import useDeleteCourse from "../../utils/useDeleteCourse"

export default function CourseCard({ course }) {

    function deleteCourseHandle() {
        console.log("delete course", course.course_id)
        useDeleteCourse("http://localhost:3000/courses/", course.course_id);
    }

    return <div className="course-container">
        <Card
            maxW='sm'
            borderWidth='0.5px'
        >
            <CardBody>
                <Image
                    src={course.image}
                    alt={course.course_name}
                    borderRadius='lg'
                    className="xyz"
                    maxW={220}

                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{course.course_name}</Heading>
                    <Text className='text'>
                        {course.description}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        {course.price}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Preview
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Enroll now
                    </Button>
                    {/* <Button variant='ghost' colorScheme='blue'
                        onClick={
                            () => { deleteCourseHandle(course.course_id) }}>
                        Delete
                    </Button> */}
                </ButtonGroup>
            </CardFooter>
        </Card>
    </div>
}