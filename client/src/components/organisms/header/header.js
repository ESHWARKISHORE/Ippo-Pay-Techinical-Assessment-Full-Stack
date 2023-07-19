import React from 'react'
import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
    Menu,
    MenuButton,
} from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import theme from "../../../styles/theme";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box
            bg={useColorModeValue(theme.colors.background.primaryBackground, theme.colors.background.secondaryBackground)}
            color={useColorModeValue(theme.colors.font.primaryColor, theme.colors.font.secondaryColor)}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <div></div>
                <Text>Ippo Pay Technical Assessment</Text>
                <Menu>
                    <MenuButton onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </MenuButton>
                </Menu>
            </Container>
        </Box>
    )
}

export default Header