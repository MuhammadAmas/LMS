import React from 'react';
import navLogo from '../../../assets/logo.png';
import './Navbar.css';
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    Center,
} from '@chakra-ui/react';
import useDeleteAccount from '../../utils/useDeleteAccount';

export default function Navbar({ isChecked }) {

    const email = localStorage.getItem("email") != null ? localStorage.getItem("email") : sessionStorage.getItem("email");
    function handleSignout() {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("type");
        localStorage.removeItem("user_id");
        sessionStorage.clear();
        window.location.href = "/";
    }

    function deleteAccountHandle() {
        let userEmail = localStorage.getItem("email");
        console.log("delete account", userEmail);
        useDeleteAccount(userEmail);
        window.location.href = "/";
    }


    return (
        <>
            <Box
                className='header Nav'
                padding={"0 1rem"}
                color={useColorModeValue('gray.600', 'white')}
            >
                <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <img
                            src={navLogo} alt="logo" />
                    </Box>
                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>


                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={'https://api.dicebear.com/6.x/avataaars/svg?seed=Oliver'}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'} fontSize={18}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={'https://api.dicebear.com/6.x/avataaars/svg?seed=Oliver'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>{email}</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem onClick={deleteAccountHandle}>Delete Account</MenuItem>
                                    <MenuItem onClick={handleSignout}>
                                        Sign Out
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
