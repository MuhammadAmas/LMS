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
    const onDialogClose = () => setDialogIsOpen(false);

    function deleteCourseHandle() {
        console.log("delete course", course.course_id)
        useDeleteCourse("http://localhost:3000/courses/", course.course_id);
    }

    function handleDeleteClick() {
        setDialogIsOpen(true);
    }

    function handleConfirmDelete() {
        deleteCourseHandle();
        onDialogClose();
    }

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
            borderWidth='0.5px'
        >
            <CardBody>
                <Image
                    src={course.image}
                    alt={course.course_name}
                    borderRadius='lg'
                    className="xyz"
                    maxW={220}
                    alignSelf='center'
                    justify='center'
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
                <ModalHeader>{course.course_name}</ModalHeader>
                <ModalCloseButton />
                <Image
                    src={course.image}
                    alt={course.course_name}
                    borderRadius='lg'
                    className="xyz"
                    maxW={220}
                    alignSelf='center'
                />
                <ModalBody>
                    <Text>{course.description}</Text>
                    <Text className='text'>
                        {course.description}
                    </Text>
                    <Text className='text'>
                        {course.instructor_name}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        {course.ratings}
                    </Text>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>


    </div>
}