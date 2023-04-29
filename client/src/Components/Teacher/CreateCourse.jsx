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
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    onClick={onOpen}
                    colorScheme='green'
                    fontSize='md'
                    leftIcon={<i className="fas fa-plus"></i>}
                    marginTop='30px'
                    marginRight='20px'
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
                            <Input ref={initialRef} placeholder='Course ID' />
                        </FormControl>

                        <FormControl mt={4} isRequired>
                            <FormLabel>Course Name</FormLabel>
                            <Input placeholder='Course name' />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Description</FormLabel>
                            <Input ref={initialRef} placeholder='Description of the course..' />
                        </FormControl>

                        <FormControl mt={4} isRequired>
                            <FormLabel>Image URL</FormLabel>
                            <Input placeholder='URL for the image'
                                type='url' />
                        </FormControl>

                        <FormControl mt={4} isRequired>
                            <FormLabel>Instructor Name</FormLabel>
                            <Input ref={initialRef} placeholder='Instructor Name' />
                        </FormControl>

                        <FormControl mt={4} isRequired>
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