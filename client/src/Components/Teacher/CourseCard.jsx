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
    useDisclosure,
    Modal,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    ModalOverlay,
} from "@chakra-ui/react"
import './courseCard.css'
import useDeleteCourse from "../../utils/useDeleteCourse"

export default function CourseCard({ course, userID }) {

    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const [isCourseDeleted, setIsCourseDeleted] = useState(false);

    const onDialogClose = () => setDialogIsOpen(false);

    function deleteCourseHandle() {
        console.log("delete course", course.course_id)
        useDeleteCourse("http://localhost:3000/courses/", course.course_id);
        setIsCourseDeleted(true);
    }

    function handleDeleteClick() {
        setDialogIsOpen(true);
    }

    function handleConfirmDelete() {
        deleteCourseHandle();
        onDialogClose();
    }

    useEffect(() => {
        if (isCourseDeleted) {
            window.location.reload();
        }
    }, [isCourseDeleted]);

    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

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
            {/* <Divider /> */}
            <CardFooter justifyContent='center' alignItems='center'>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'
                        onClick={() => {
                            setOverlay(<OverlayOne />)
                            onOpen()
                        }}>
                        Preview
                    </Button>
                    {userID != null &&
                        <Button colorScheme='red'
                            onClick={handleDeleteClick}>
                            Delete
                        </Button>}
                </ButtonGroup>
            </CardFooter>
        </Card>

        <AlertDialog isOpen={dialogIsOpen} onClose={onDialogClose}>
            <AlertDialogOverlay />
            <AlertDialogContent>
                <AlertDialogHeader>Delete Course</AlertDialogHeader>
                <AlertDialogBody>
                    Are you sure you want to delete this course?
                </AlertDialogBody>
                <AlertDialogFooter>
                    <Button colorScheme="gray" onClick={onDialogClose} >
                        Cancel
                    </Button>
                    <Button colorScheme="red" onClick={handleConfirmDelete} ml={3}>
                        Delete
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent>
                <ModalHeader textAlign='center' sx={{
                    textShadow: '1px 1px 2px black',
                    color: 'var(--chakra-colors-blue-300)',
                    fontSize: '2xl',
                    fontWeight: 'bold',
                    letterSpacing: 'wide',
                    textTransform: 'uppercase',
                    marginTop: '1rem',
                }}>{course.course_name}</ModalHeader>
                <ModalCloseButton />
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
                <ModalBody>
                    {/* <Text>{course.description}</Text> */}
                    <Text className='text'>
                        {course.description}
                    </Text>
                    <br></br>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <Text className='text' fontWeight='bold'>
                            {course.instructor_name}
                        </Text>
                        <br></br>
                        <Text color='blue.300' fontSize='xl' fontWeight='bold' marginRight={10}>
                            * {course.ratings}
                        </Text>
                    </div>
                    <br></br>
                    <Text>
                        <h3 style={{
                            display: 'inline',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                        }}>Start Learning:  </h3>
                        <a href="https://www.youtube.com" target="_blank"
                            style={{
                                color: 'blue',
                                textDecoration: 'underline',
                                fontSize: '0.9rem',
                            }}>
                            {course.course_name}
                        </a>
                    </Text>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>


    </div>
}