import React from "react"
import { Link } from "react-router-dom"
import "./LPNav.css"
import { Button, Heading, Box } from '@chakra-ui/react';

export default function LPNav() {
    return (
        <>
            <Box className="nav"
                padding={"0 1rem"}>
                <Heading
                    color={"#fff"}
                    className="nav-title">
                    Acadist
                </Heading>
                <Box className="btns"
                    display="flex"
                    gap="8px"
                >
                    <Link to="/signin" className="login">
                        {/* <button className="button">
                        Sign In
                    </button> */}
                        <Button
                            size={{ base: 'sm', sm: 'lg' }}
                            // size={'lg'}
                            fontWeight={'normal'}
                            className="button"
                            bg={'#fff'}
                        // rounded={'full'}
                        // px={6}
                        // leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}
                        >
                            Sign In
                        </Button>
                    </Link>
                    <Link to="/signup" className="signup">
                        {/* <button className="button">
                        Sign Up
                    </button> */}
                        <Button
                            size={{ base: 'sm', sm: 'lg' }}
                            // size={'lg'}
                            fontWeight={'normal'}
                            className="button"
                            bg={'#fff'}
                        // rounded={'full'}
                        // px={6}
                        // leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}
                        >
                            Sign Up
                        </Button>
                    </Link>
                </Box>
            </Box>
        </>
    )
}