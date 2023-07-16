import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react';
import createCourse from '../../utils/createCourseAPI';

function CreateCourse() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [courseID, setCourseID] = useState('');
    const [courseName, setCourseName] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [instructorName, setInstructorName] = useState('');
    const [showErrorModal, setShowErrorModal] = useState(false);

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const MIN_RATING = 3;
    const MAX_RATING = 5;

    function handleCreateCourse() {
        if (!courseID || !courseName || !description || !imageURL || !instructorName) {
            setShowErrorModal(true);
            return;
        }

        const newCourse = {
            course_id: courseID,
            course_name: courseName,
            instructor_name: instructorName,
            image: imageURL,
            description: description,
            ratings: (Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING).toFixed(1),
            user_id:
                localStorage.getItem('user_id') != null
                    ? localStorage.getItem('user_id')
                    : sessionStorage.getItem('user_id'),
        };

        try {
            createCourse('POST', 'http://localhost:3000/teacher', newCourse).then(
                (result) => {
                    window.location.reload();
                }
            );
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    onClick={onOpen}
                    colorScheme="green"
                    fontSize="md"
                    leftIcon={<i className="fas fa-plus"></i>}
                    marginTop="30px"
                    marginRight="20px"
                >
                    Create Course
                </Button>
            </div>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                motionPreset="slideInBottom"
                scrollBehavior="inside"
                size="lg"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create a new course</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl isRequired>
                            <FormLabel>Course ID</FormLabel>
                            <Input
                                ref={initialRef}
                                placeholder="Course ID"
                                onChange={(e) => setCourseID(e.target.value)}
                            />
                        </FormControl>

                        <FormControl mt={4} isRequired>
                            <FormLabel>Course Name</FormLabel>
                            <Input
                                placeholder="Course name"
                                onChange={(e) => setCourseName(e.target.value)}
                            />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Description</FormLabel>
                            <Input
                                ref={initialRef}
                                placeholder="Description of the course.."
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </FormControl>

                        <FormControl mt={4} isRequired>
                            <FormLabel>Image URL</FormLabel>
                            <Input
                                placeholder="URL for the image"
                                type="url"
                                onChange={(e) => setImageURL(e.target.value)}
                            />
                        </FormControl>

                        <FormControl mt={4} isRequired>
                            <FormLabel>Instructor Name</FormLabel>
                            <Input
                                ref={initialRef}
                                placeholder="Instructor Name"
                                onChange={(e) => setInstructorName(e.target.value)}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Date</FormLabel>
                            <Input placeholder="Select Date and Time" size="md" type="date" />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleCreateCourse}>
                            Create
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Modal isOpen={showErrorModal} onClose={() => setShowErrorModal(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Error</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Please fill in all the fields before creating the course.
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" onClick={() => setShowErrorModal(false)}>
                            OK
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default CreateCourse;
