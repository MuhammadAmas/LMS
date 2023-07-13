import React, { useEffect, useState } from "react"
import {
    Card,
    CardBody,
    Stack,
    Text,
    Image,
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

export default function CourseCard({ course }) {

    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);


    function handleEnroll() {
        setIsOpen(true);
    }

    function handleSure() {
        onClose();
    }
    return <div className="course-container">
        <Card
            maxW='sm'
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
                    maxW={200}
                    maxH={200}
                    minH={150}
                    minW={150}
                    margin='auto'
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
            <CardFooter justifyContent='center' alignItems='center'>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue' minWidth="90px">
                        Preview
                    </Button>
                    <Button colorScheme="red" minWidth="90px"
                        onClick={handleEnroll}
                    >
                        Enroll
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
        <AlertDialog isOpen={isOpen} onClose={onClose}>
            <AlertDialogOverlay />
            <AlertDialogContent>
                <AlertDialogHeader>Enroll Now !</AlertDialogHeader>
                <AlertDialogBody>
                    Let's get started with this wonderful  journey.
                </AlertDialogBody>
                <AlertDialogFooter>
                    <Button colorScheme="gray" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme="green" onClick={handleSure} ml={3}>
                        Sure
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    </div>
}