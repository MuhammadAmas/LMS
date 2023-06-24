import React, { useEffect, useState } from "react"
import {
    Card,
    CardBody,
    Stack,
    Text,
    Image,
    Divider,
    CardFooter,
    Button,
    ButtonGroup,
    Heading,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
} from "@chakra-ui/react"
import './courseCard.css'
import useDeleteCourse from "../../utils/useDeleteCourse"

export default function CourseCard({ course }) {

    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);

    // function deleteCourseHandle() {
    //     console.log("delete course", course.course_id)
    //     useDeleteCourse("http://localhost:3000/courses/", course.course_id);
    // }

    function handleDeleteClick() {
        setIsOpen(true);
    }

    function handleConfirmDelete() {
        // deleteCourseHandle();
        onClose();
    }
    return <div className="course-container">
        <Card
            maxW='sm'
            // borderWidth='0.5px'
            sx={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
            }}
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
            {/* <Divider /> */}
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Preview
                    </Button>
                    <Button colorScheme='red'
                        onClick={handleDeleteClick}
                    >
                        Enroll
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
        <AlertDialog isOpen={isOpen} onClose={onClose}>
            <AlertDialogOverlay />
            <AlertDialogContent>
                <AlertDialogHeader>Delete Course</AlertDialogHeader>
                <AlertDialogBody>
                    Are you sure you want to enroll in this course?
                </AlertDialogBody>
                <AlertDialogFooter>
                    <Button colorScheme="gray" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme="red" onClick={handleConfirmDelete} ml={3}>
                        Yes
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    </div>
}