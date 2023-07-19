import React, { useState } from 'react'

import {
    Box,
    Center,
    useColorModeValue,
} from '@chakra-ui/react';
import theme from "../../styles/theme";
import TextBoxContainer from '../molecules/textBoxContainer';
import NameListContainer from '../molecules/nameListContainer';
import { Parallax } from "react-parallax";
const image2 =
    "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";

const HomePage = () => {
    const [refresh, setRefresh] = useState(false);
    return (
        <>
            <Parallax bgImage={image2} strength={-100}>
                <div style={{ height: '100%' }}>
                    <Center py={6}>
                        <Box
                            maxW={'85%'}
                            w={'full'}
                            h={'full'}
                            bg={useColorModeValue(theme.colors.background.primaryBackground, theme.colors.background.secondaryBackground)}
                            color={useColorModeValue(theme.colors.font.primaryColor, theme.colors.font.secondaryColor)}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            overflow={'hidden'}>
                            <TextBoxContainer setRefresh={setRefresh} />
                            <NameListContainer refresh={refresh} setRefresh={setRefresh} />
                        </Box>
                    </Center>
                </div>
            </Parallax>
        </>

    )
}

export default HomePage