import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Divider,
    InputRightElement,
    HStack,
    InputGroup,
    extendTheme,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { GoogleIcon } from './ProviderIcons';
import userSignin from '../../utils/userSigninAPI';
// import Student from '../Student/Student';
// import { Form } from 'react-router-dom';


export default function SignIn({ emailHistory, typeHistory, passwordHistory }) {

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isChecked, setIsChecked] = useState(true);

    const theme = extendTheme({
        colors: {
            brand: {
                50: "#44337A",
                100: "#B794F4",
                500: "#B794F4", // you need this
            }
        }
    });

    function handleCheckboxChange(e) {
        setIsChecked(e.target.checked);
    }

    useEffect(() => {
        if (emailHistory) {
            handleClick(emailHistory, passwordHistory, typeHistory);
        }
    }, []);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleClick(email, password, null);
        }
    };

    function handleClick(email, password, type) {
        const user = {
            email: email,
            password: password,
            type: type
        }
        try {
            const response = userSignin("POST", "http://localhost:3000/signin", user).then((result) => {
                console.log('nope');
                console.log(result);
                if (result.type === "student") {
                    console.log('here');
                    user.type = "student"
                    window.location.href = "/student/" + result.user_id;
                }
                else {
                    console.log('here1');
                    user.type = "teacher"
                    window.location.href = "/teacher/" + result.user_id;
                }
                if (isChecked) {
                    console.log('here2');
                    localStorage.setItem("user_id", result.user_id)
                }
                else {
                    console.log('here3');
                    sessionStorage.setItem("user_id", result.user_id)
                }

            }
            );
            if (isChecked) {
                localStorage.setItem("email", user.email);
                localStorage.setItem("password", user.password);
                localStorage.setItem("type", user.type);
            }
            else {
                localStorage.removeItem("email");
                localStorage.removeItem("password");
                localStorage.removeItem("type");
                sessionStorage.setItem("email", email)
                sessionStorage.setItem("password", password)
                sessionStorage.setItem("type", user.type)
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}
                        style={{
                            textDecoration: "underline var(--darkBlue) 10px",
                            textDecorationSkipInk: "none",
                            textUnderlineOffset: "-6px"
                        }}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to learn all of our free&nbsp;
                        <Link >
                            <Text as="span"
                                color={'var(--darkBlue)'}
                                _hover={{
                                    color: 'var(--hoverDarkBlue)',
                                }}>
                                Courses
                            </Text>
                        </Link> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter email'
                            />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Enter password'
                                    autoComplete="current-password"
                                    onKeyDown={handleKeyDown} />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                            setShowPassword((showPassword) => !showPassword)
                                        }>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={7}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox
                                    isChecked={isChecked}
                                    onChange={handleCheckboxChange}
                                    colorScheme="brand"


                                >Remember me</Checkbox>
                            </Stack>


                            <Button
                                bg={'var(--darkBlue)'}
                                color={'white'}
                                onClick={() => { handleClick(email, password, null) }}
                                _hover={{
                                    bg: 'var(--hoverDarkBlue)',
                                }}>
                                Sign in
                            </Button>

                            <Stack pt={6}>
                                <Text align={'center'}
                                    fontSize={'lg'}
                                >
                                    Don't have a account? <Link to="/signup" >
                                        <Text color={'var(--darkBlue)'} as="span"
                                            _hover={{
                                                color: 'var(--hoverDarkBlue)',
                                            }}>
                                            SignUp
                                        </Text>
                                    </Link>
                                </Text>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}