import React from "react";
import { Link } from 'react-router-dom';
import HeroPic from "/Assets/Hero.png"
import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
} from '@chakra-ui/react';

export default function Hero() {
    return (
        <Container
            maxW={'7xl'}
        >
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                direction={{ base: 'column', md: 'row' }}
            >
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                        textAlign={{ base: 'center', sm: 'left' }}
                    >
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: '30%',
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'red.400',
                                zIndex: -1,
                            }}
                            style={{
                                textDecoration: "underline var(--darkBlue) 10px",
                                textDecorationSkipInk: "none",
                                textUnderlineOffset: "-6px"
                            }}
                        >
                            Welcome to,
                        </Text>
                        <br />
                        <Text as={'span'} color={'red.400'}>
                            Acadist!
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                        Nucleus for Educators. A station to connect teachers and students. Great understanding between students and teachers can make a fabulous change. Invoking the right thought in society is our duty because thoughts are the ones that becomes reality.
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: 'row', sm: 'row' }}>
                        <Link to="/signin" className="login">

                            <Button
                                rounded={'full'}
                                size={{ base: 'md', sm: 'lg' }}
                                fontWeight={'normal'}
                                px={6}
                                colorScheme={'red'}
                                bg={'red.400'}
                                _hover={{ bg: 'red.500' }}
                            >
                                Start Learning !
                            </Button>
                        </Link>
                        <Link to="/signup" className="signup">
                            <Button
                                rounded={'full'}
                                size={{ base: 'md', sm: 'lg' }}
                                fontWeight={'normal'}
                                px={6}
                            >
                                Register For Free
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
                <Flex>
                    <Image
                        alt={'Hero Image'}
                        maxWidth={{ base: "300px", sm: '400px' }}
                        maxHeight={{ base: "300px", sm: '400px' }}
                        src={HeroPic}
                        rounded={'2xl'}
                        boxShadow={'2xl'}
                    />
                </Flex>
            </Stack>
        </Container>
    );
}
export const Blob = (props) => {
    return (
        <Icon
            width={'100%'}
            viewBox="0 0 578 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
                fill="currentColor"
            />
        </Icon>
    );
};