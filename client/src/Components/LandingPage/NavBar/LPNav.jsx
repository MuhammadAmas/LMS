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
                        <Button
                            size={{ base: 'sm', sm: 'lg' }}
                            fontWeight={'normal'}
                            className="button"
                            bg={'#fff'}
                        >
                            Sign In
                        </Button>
                    </Link>
                    <Link to="/signup" className="signup">
                        <Button
                            size={{ base: 'sm', sm: 'lg' }}
                            fontWeight={'normal'}
                            className="button"
                            bg={'#fff'}
                        >
                            Sign Up
                        </Button>
                    </Link>
                </Box>
            </Box>
        </>
    )
}
