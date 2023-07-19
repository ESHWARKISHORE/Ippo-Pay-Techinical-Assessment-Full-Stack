import React from 'react';
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import theme from "../../../styles/theme";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            {children}
        </chakra.button>
    );
};

const Footer = () => {
    return (
        <Box as={'footer'}
            bg={useColorModeValue(theme.colors.background.transparentColor, theme.colors.background.transparentColor)}
            color={useColorModeValue(theme.colors.font.transparentColor, theme.colors.font.primaryColor)}
            className='footer'
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'center' }}
                align={{ base: 'center', md: 'center' }}>
                <Text>© 2023 - Esshwar Kishore Rathnala for Ippo Pay </Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/esshwar-kishore-70085514b/'}>
                        <FaLinkedin />
                    </SocialButton>
                    <SocialButton label={'Git Hub'} href={'https://github.com/ESHWARKISHORE'}>
                        <FaGithub />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'#'}>
                        <FaInstagram />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    )
}

export default Footer