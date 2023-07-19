import { useState } from 'react';
import {
    Stack,
    FormControl,
    Input,
    Button,
    useColorModeValue,
    Heading,
    Container,
    Flex,
    useToast
} from '@chakra-ui/react';
import theme from "../../styles/theme";
import axios from 'axios';

const TextBoxContainer = ({ setRefresh }) => {
    const [name, setName] = useState('');
    const [state, setState] = useState(
        'initial'
    );
    const [error, setError] = useState(false);
    const toast = useToast()
    const onSubmit = (e) => {
        e.preventDefault();
        setError(false);
        setState('submitting');
        updateNameOnDBFunction();
    }

    const updateNameOnDBFunction = () => {
        axios({
            method: "POST",
            headers: {},
            url: "http://localhost:8000/api/name/postName",
            data: {
                name: name,
            }
        })
            .then(function (response) {
                console.log(response);
                setName('');
                setState('success');
                setRefresh(true);
                toast({
                    title: 'Success',
                    description: "Name added to database successfully",
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                    position: 'top-right'
                })
            })
            .catch(function (error) {
                console.log(error.response.data.message);
                setState('success');
                toast({
                    title: 'Error',
                    description: error.response.data.message,
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                    position: 'top-right'
                })
            });
    }

    return (
        <Flex
            minH={'30vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue(theme.colors.background.whiteBackground, theme.colors.background.secondaryBackground)}
            color={useColorModeValue(theme.colors.font.transparentColor, theme.colors.font.secondaryColor)}
        >
            <Container
                maxW={'lg'}
                bg={useColorModeValue('white', 'whiteAlpha.100')}
                boxShadow={'xl'}
                rounded={'lg'}
                p={6}
                direction={'column'}>
                <Heading
                    as={'h2'}
                    fontSize={{ base: 'xl', sm: '2xl' }}
                    textAlign={'center'}
                    mb={5}>
                    Enter Your Name
                </Heading>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    as={'form'}
                    spacing={'12px'}
                    onSubmit={(e) => onSubmit(e)}>
                    <FormControl>
                        <Input
                            variant={'solid'}
                            borderWidth={1}
                            color={useColorModeValue('black.300', 'white.700')}
                            _placeholder={{
                                color: 'gray.400',
                            }}
                            borderColor={useColorModeValue('gray.300', 'gray.700')}
                            id={'name'}
                            type={'text'}
                            required
                            placeholder={'Your Name'}
                            aria-label={'Your Name'}
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                        />
                    </FormControl>
                    <FormControl w={{ base: '100%', md: '40%' }}>
                        <Button
                            isLoading={state === 'submitting'}
                            w="100%"
                            type={'submit'}>
                            Submit
                        </Button>
                    </FormControl>
                </Stack>
            </Container>
        </Flex>
    )
}

export default TextBoxContainer