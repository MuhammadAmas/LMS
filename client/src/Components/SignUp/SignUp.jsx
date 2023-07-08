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
        // if (newUser.type === "student")
        // window.location.href = "/student/" + result.user_id;
        // else
        // window.location.href = "/teacher/" + result.user_id;
        window.location.href = "/signin";
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
          <Heading
            fontSize={'4xl'} textAlign={'center'}
            style={{
              textDecoration: "underline var(--darkBlue) 10px",
              textDecorationSkipInk: "none",
              textUnderlineOffset: "-6px"
            }}
          >
            Sign up for an account
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
            {/* <HStack>
              <Box> */}
            <FormControl id="firstName" isRequired>
              <FormLabel>User Name</FormLabel>
              <Input type="text" onChange={(e) => setUserName(e.target.value)} />
            </FormControl>
            {/* </Box> */}
            {/* <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" onChange={(e) => setLastName(e.target.value)} />
                </FormControl>
              </Box> */}
            {/* </HStack> */}
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
                bg={'var(--darkBlue)'}
                color={'white'}
                _hover={{
                  bg: 'var(--hoverDarkBlue)',
                }}>
                Sign up
              </Button>

            </Stack>
            <Stack pt={6}>
              <Text align={'center'}
                fontSize={'lg'}
              >
                Already a user? <Link to="/signin" >
                  <Text color={'var(--darkBlue)'} as="span"
                    _hover={{
                      color: 'var(--hoverDarkBlue)',
                    }}>
                    Login
                  </Text>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack >
    </Flex >
  );
}