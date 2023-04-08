// import React from 'react'
// import {
//     Box,
//     Button,
//     Checkbox,
//     Container,
//     Divider,
//     FormControl,
//     FormLabel,
//     Heading,
//     HStack,
//     Input,
//     Stack,
//     Text,
// } from '@chakra-ui/react'
// import { Logo } from './Logo'
// import { OAuthButtonGroup } from './OAuthButtonGroup'
// import { PasswordField } from './PasswordField'

// export default function SignIn() {
//     return (
//         <Container
//             maxW="lg"
//             py={{
//                 base: '12',
//                 md: '24',
//             }}
//             px={{
//                 base: '0',
//                 sm: '8',
//             }}
//         >
//             <Stack spacing="8">
//                 <Stack spacing="6">
//                     {/* <Logo /> */}
//                     <Stack
//                         spacing={{
//                             base: '2',
//                             md: '3',
//                         }}
//                         textAlign="center"
//                     >
//                         <Heading
//                             size={{
//                                 base: 'xs',
//                                 md: 'sm',
//                             }}
//                         >
//                             Sign in to your account
//                         </Heading>
//                         <HStack spacing="1" justify="center">
//                             <Text color="muted">Don't have an account?</Text>
//                             <Button variant="link" colorScheme="blue">
//                                 Sign up
//                             </Button>
//                         </HStack>
//                     </Stack>
//                 </Stack>
//                 <Box
//                     py={{
//                         base: '0',
//                         sm: '8',
//                     }}
//                     px={{
//                         base: '4',
//                         sm: '10',
//                     }}
//                     bg={{
//                         base: 'transparent',
//                         sm: 'bg-surface',
//                     }}
//                     boxShadow={{
//                         base: 'none',
//                         sm: 'md',
//                     }}
//                     borderRadius={{
//                         base: 'none',
//                         sm: 'xl',
//                     }}
//                 >
//                     <Stack spacing="6">
//                         <Stack spacing="5">
//                             <FormControl>
//                                 <FormLabel htmlFor="email">Email</FormLabel>
//                                 <Input id="email" type="email" />
//                             </FormControl>
//                             <PasswordField />
//                         </Stack>
//                         <HStack justify="space-between">
//                             <Checkbox defaultChecked>Remember me</Checkbox>
//                             <Button variant="link" colorScheme="blue" size="sm">
//                                 Forgot password?
//                             </Button>
//                         </HStack>
//                         <Stack spacing="6">
//                             <Button variant="primary">Sign in</Button>
//                             <HStack>
//                                 <Divider />
//                                 <Text fontSize="sm" whiteSpace="nowrap" color="muted">
//                                     or continue with
//                                 </Text>
//                                 <Divider />
//                             </HStack>
//                             <OAuthButtonGroup />
//                         </Stack>
//                     </Stack>
//                 </Box>
//             </Stack>
//         </Container>
//     );
// }

import React from 'react';
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

} from '@chakra-ui/react';

import { GoogleIcon } from './ProviderIcons';


export default function SignIn() {
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
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'blue.400'}>Forgot password?</Link>
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

                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}