import { Box, HStack, Heading, Icon, IconButton, Image, List, VStack, View } from 'native-base';
import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import error from '../../assets/error.png';
import { AntDesign } from "@expo/vector-icons";

const HeroesFav = ({ route,navigation}) => {

    const { favoriteHeroes } = route.params;

    
    if (!favoriteHeroes) {
        return (
            <Center mt={8}>
                <Text>Cargando... </Text>
                <Spinner color="fuchsia.600" />
            </Center>
        );

    }

    return (
        <ScrollView>
            <Box w="100%">
                <List space={2} my={2}>
                    {
                        favoriteHeroes.map(e => (
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
                                            _icon={{
                                                as: AntDesign,
                                                name: "heart", // Cambiar el icono según si es favorito o no
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
    );
}

export default HeroesFav;