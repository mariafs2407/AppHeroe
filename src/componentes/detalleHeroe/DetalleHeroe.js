import { Center, HStack, Image, Progress, ScrollView, Spinner, Text, VStack } from 'native-base';
import React, { useState, useEffect } from 'react';
import ImgHeroe from './ImgHeroe';
import Biografia from './Biografia';
import Powers from './Powers';

const DetalleHeroe = ({ route }) => {

    const [infoHeroe, setInfoHeroe] = useState('');
    const [error, setError] = useState('');
    const { id } = route.params;

    const url = `https://www.superheroapi.com/api.php/6723646157687069//${id}`;

    useEffect(() => {
        fetchHeroe();
    }, []);

    const fetchHeroe = () => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setInfoHeroe(data);
                setError('');
            })
            .catch((error) => {
                console.log(error);
                setError('No se pudo obtener informacion');
            })

    }

    if (!infoHeroe) {
        return (
            <Center mt={8}>
                <Text>Cargando... </Text>
                <Spinner color="fuchsia.600" />
            </Center>
        );

    }

    return (
        <ScrollView m={5}>

            <ImgHeroe infoHeroe={infoHeroe} />

            <VStack space={4} >
                <Biografia infoHeroe={infoHeroe} />
                <Powers
                    infoHeroe={infoHeroe} />
            </VStack>
        </ScrollView>
    );
}

export default DetalleHeroe;