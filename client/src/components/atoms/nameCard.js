import React from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Stack,
    Image,
} from '@chakra-ui/react';
import theme from "../../styles/theme";

const IMAGE =
    "https://source.unsplash.com/random/200x200?sig=1";

const NameCard = (props) => {
    return (
        <Center py={12}>
            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue(theme.colors.background.whiteBackground, theme.colors.background.secondaryBackground)}
                color={useColorModeValue(theme.colors.font.transparentColor, theme.colors.font.secondaryColor)}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        backgroundImage: `url(${IMAGE})`,
                        filter: 'blur(15px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(20px)',
                        },
                    }}>
                    <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={props.image}
                    />
                </Box>
                <Stack pt={10} align={'center'}>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        {props.name}
                    </Heading>
                </Stack>
            </Box>
        </Center>
    )
}

export default NameCard