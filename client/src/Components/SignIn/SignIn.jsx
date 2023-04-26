import React, { useState } from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Divider,
    HStack,
} from '@chakra-ui/react';

import { GoogleIcon } from './ProviderIcons';
import userSignin from '../../utils/userSigninAPI';


export default function SignIn() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handleClick() {
        const user = {
            email: email,
            password: password
        }
        try {
            const response = userSignin("POST", "http://localhost:3000/signin", user).then((result) => {
                if (result.type === "student")
                    window.location.href = "/student/" + result.user_id;
                else
                    window.location.href = "/teacher";
                console.log(result.type);
            }
            );

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
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to learn all of our free  <Link color={'blue.400'}>Courses</Link> ✌️
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
                            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" onChange={(e) => setPassword(e.target.value)} />
                        </FormControl>
                        <Stack spacing={7}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'blue.400'}>Forgot password?</Link>
                            </Stack>

                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                onClick={handleClick}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign in
                            </Button>

                            <Stack spacing="6">
                                <HStack>
                                    <Divider />
                                    <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                                        or continue with
                                    </Text>
                                    <Divider />
                                </HStack>
                            </Stack>

                            <Button
                                maxW="320px"
                                display="flex"
                                px="1.4rem"
                                py="0.5rem"
                                fontSize="0.875rem"
                                lineHeight="1.25rem"
                                fontWeight="700"
                                textAlign="center"
                                textTransform="uppercase"
                                alignItems="center"
                                borderRadius="0.5rem"
                                borderWidth="1px"
                                borderColor="rgba(0, 0, 0, 0.25)"
                                gap="0.75rem"
                                color="rgb(65, 63, 63)"
                                bg="#fff"
                                cursor="pointer"
                                transition="all .6s ease"
                                _hover={{ transform: "scale(1.02)" }}
                            >
                                <GoogleIcon />
                                Login with Google
                            </Button>

                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}