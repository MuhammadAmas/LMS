import React from 'react';
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
} from '@chakra-ui/react'

function CreateCourse() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
        <>
            <Button onClick={onOpen}>Create Course</Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Course ID</FormLabel>
                            <Input ref={initialRef} placeholder='Course ID' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Course Name</FormLabel>
                            <Input placeholder='Course name' />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Description</FormLabel>
                            <Input ref={initialRef} placeholder='Write about the course..' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Image URL</FormLabel>
                            <Input placeholder='Give the URL of the image' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Instructor Name</FormLabel>
                            <Input ref={initialRef} placeholder='Instructor Name' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Date</FormLabel>
                            {/* <Input placeholder='Pick up the date' /> */}
                            <Input
                                placeholder="Select Date and Time"
                                size="md"
                                type="date"
                            />
                        </FormControl>


                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Create
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CreateCourse;