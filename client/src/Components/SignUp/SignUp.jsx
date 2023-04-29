import React from 'react';
import { Link } from 'react-router-dom';
// import GoogleIcon from './ProviderIcons';
import GoogleIcon from '/Assets/google.png'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Divider,
  Radio,
  RadioGroup
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import userSignup from '../../utils/userSignupAPI';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleUserTypeChange(value) {
    setUserType(value);
  }

  function handleSubmit() {
    const newUser = {
      username: userName,
      email: email,
      password: password,
      type: userType
    }
    try {
      const response = userSignup("POST", "http://localhost:3000/signup", newUser).then((result) => {
        if (newUser.type === "student")
          window.location.href = "/student/" + result.user_id;
        else
          window.location.href = "/teacher/" + result.user_id;
      }
      );

    }
    catch (error) {
      console.error(error);
    }
    console.log(newUser);
  }


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to start learning today for free ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>User Name</FormLabel>
                  <Input type="text" onChange={(e) => setUserName(e.target.value)} />
                </FormControl>
              </Box>
              {/* <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" onChange={(e) => setLastName(e.target.value)} />
                </FormControl>
              </Box> */}
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} />
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

            <RadioGroup value={userType} onChange={(value) => handleUserTypeChange(value)}>
              <Stack direction="row">
                <Radio value="student">Student</Radio>
                <Radio value="teacher">Teacher</Radio>
              </Stack>
            </RadioGroup>

            <Stack spacing={7} pt={2}>
              <Button
                loadingText="Submitting"
                onClick={handleSubmit}
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
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
                maxW="fitContent"
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
                <img src={GoogleIcon} alt="Google"
                  style={{ maxWidth: "22px" }} />
                Continue With Google
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}
                fontSize={'lg'}
              >
                Already a user? <Link to="/signin" color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack >
    </Flex >
  );
}