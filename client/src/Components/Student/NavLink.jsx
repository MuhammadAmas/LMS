import React from 'react';
import navLogo from '../../../assets/logo.png';
import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Stack,
    useColorMode,
    Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Nav({ isChecked }) {
    const { colorMode, toggleColorMode } = useColorMode();

    function handleSignout() {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("type");
        localStorage.removeItem("user_id");
        sessionStorage.clear();
        window.location.href = "/";
    }

    return (
        <>
            <Box
                className='header'
            >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <img src={navLogo} alt="logo" />
                    </Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

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
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={'https://api.dicebear.com/6.x/avataaars/svg?seed=Oliver'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Profile</MenuItem>
                                    <MenuItem>Account Settings</MenuItem>
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