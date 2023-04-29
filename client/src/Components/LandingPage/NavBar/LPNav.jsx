import React from "react"
import logo from "../../../../Assets/logo.png"
import { Link as LinkButtons } from "react-router-dom"
// import "./LPNav.css"


// export default function LPNav() {
//     return (
//         <nav className="nav">
//             <h1 className="nav-title">Acadist</h1>
//             <div className="btns">
//                 <Link to="/signin" className="login">
//                     <button className="button">
//                         Sign In
//                     </button>
//                 </Link>
//                 <Link to="/signup" className="signup">
//                     <button className="button">
//                         Sign Up
//                     </button>
//                 </Link>

//             </div>
//         </nav>
//     )
// }


import {
    Box,
    Flex,
    Button,
    Stack,
} from '@chakra-ui/react';


export default function LPNav() {

    return (
        <Box>
            <Flex
                bg={"var(--darkBlue)"}
                color={"#fff"}
                minH={'60px'}
                borderBottom={1}
                borderStyle={'solid'}
                boxShadow={"0px 2px 6px rgba(0, 0, 0, 0.5)"}
                display={"flex"}
                align={'center'}
                justify={"space-between"}
            >

                <Stack>
                    <img src={logo} />
                </Stack>

                <Stack >
                    <Stack
                        display="flex" alignItems="center"
                        justifyContent={"space-between"}
                        direction={'row'}
                        spacing={4}
                    >
                        <LinkButtons to="/signin" className="login">
                            <Button
                                fontSize={'sm'}
                                fontWeight={600}
                                color={'var(--darkBlue)'}
                                bg={'#fff'}
                                href={'#'}
                                _hover={{
                                    bg: 'var(--darkBlue)',
                                    color: '#fff',
                                    border: '1px solid #fff'
                                }}>
                                Sign In
                            </Button>
                        </LinkButtons>
                        <LinkButtons to="/signup" className="login">
                            <Button
                                fontSize={'sm'}
                                fontWeight={600}
                                color={'var(--darkBlue)'}
                                bg={'#fff'}
                                href={'#'}
                                _hover={{
                                    bg: 'var(--darkBlue)',
                                    color: '#fff',
                                    border: '1px solid #fff'
                                }}>
                                Sign Up
                            </Button>
                        </LinkButtons>
                    </Stack>
                </Stack>

            </Flex>
        </Box>
    );
}

