import React, { useState, useEffect } from 'react'
import NameCard from '../atoms/nameCard'
import {
    useColorModeValue,
    SimpleGrid,
} from '@chakra-ui/react';
import theme from "../../styles/theme";
import axios from 'axios';


const NameListContainer = ({ refresh, setRefresh }) => {
    const [nameListData, setNameListData] = useState([]);

    useEffect(() => {
        fetchNameListFromServerFunction();
    }, [])
    useEffect(() => {
        if (refresh) {
            fetchNameListFromServerFunction();
            setRefresh(false);
        }
    }, [refresh])

    const fetchNameListFromServerFunction = () => {
        axios({
            method: "GET",
            headers: {},
            url: "http://localhost:8000/api/name/getAllName",
        })
            .then(function (response) {
                let newArray = [];
                response.data.forEach((data) => {
                    newArray.push(data.name);
                })
                setNameListData(newArray);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} bg={useColorModeValue(theme.colors.background.whiteBackground, theme.colors.background.secondaryBackground)} p={6} minHeight={'52vh'}>
            {nameListData.map((item, index) => {
                return (
                    <NameCard key={index} name={item} image={`https://source.unsplash.com/random/200x200?sig=${index}`} />
                )
            })}
        </SimpleGrid>
    )
}

export default NameListContainer