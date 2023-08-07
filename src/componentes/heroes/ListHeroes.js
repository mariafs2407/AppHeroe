import { Box, Button, HStack, Heading, Icon, IconButton, Image, List, VStack, View } from 'native-base';
import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import error from '../../assets/error.png';
import { AntDesign } from "@expo/vector-icons";


const ListHeroes = ({ navigation, resultArray }) => {

    const [favoriteHeroes, setFavoriteHeroes] = useState({});

    if (resultArray.length === 0) {
        return <Text></Text>
    }

    const HeroeFavoritoPress = (id) => {
        setFavoriteHeroes(prevState => ({
            ...prevState,//haciendo copia del estado anterior
            [id]: !prevState[id], 
        }));
    };

    return (
        <ScrollView>
            <Box w="100%">
                <List space={2} my={2}>
                    {
                        resultArray.map(e => (
                            <List.Item
                                key={e.id}
                                onPress={() => navigation.navigate("detalle", { id: e.id })}>
                                <HStack alignItems="center" >
                                    <Image
                                        source={{ uri: e.image?.url || error }}
                                        alt={e.name}
                                        size={24}
                                        borderRadius={8}
                                        onError={() => console.log("Error al cargar la imagen")}
                                    />
                                    <VStack ml={3} flex={1}>
                                        <Heading size="sm">{e.name}</Heading>
                                        <Text fontSize="xs">{e.biography['full-name']}</Text>
                                    </VStack>
                                    <View flex={1} justifyContent='flex-end'>
                                        <IconButton                                            
                                            colorScheme="secondary" 
                                            onPress={() => HeroeFavoritoPress(e.id)}
                                            _icon={{
                                                as: AntDesign,
                                                name: favoriteHeroes[e.id] ? "heart" : "hearto", // Cambiar el icono según si es favorito o no
                                            }}
                                        />
                                    </View>
                                </HStack>
                            </List.Item>
                        ))
                    }
                </List>
            </Box>
        </ScrollView>
    )
}

export default ListHeroes;