import {
  Box,
  Button,
  Text,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  List,
  VStack,
  View,
} from "native-base";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import error from "../../assets/error.png";
import { AntDesign } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

const ListHeroes = ({ navigation, resultArray }) => {
  const [favoriteHeroes, setFavoriteHeroes] = useState([]);
  const animationSource = {
    uri: "https://lottie.host/5cc4ed31-c967-47ab-b478-3680421b077b/O1kwPkZY1H.json",
  };

  const HeroeFavoritoPress = (id) => {
    setFavoriteHeroes((prevState) => ({
      ...prevState, //haciendo copia del estado anterior
      [id]: !prevState[id],
    }));
  };

  if (resultArray.length === 0) {
    return (
      <Box w="100%" alignItems="center">
        {/* <Button onPress={() => navigation.navigate("favoritos", { favoriteHeroes: favoriteHeroes })}
                    variant="outline" colorScheme="secondary">
                    See favorites
                </Button> */}
        
        
        <Text bold>¡Busca un Heroe!</Text>
          <LottieView
            source={animationSource}
            autoPlay
            loop            
            style={{ width: 300, height: 300 }}
          />
        
      </Box>
    );
  }

  return (
    <ScrollView>
      <Box w="100%">
        {/* <Button onPress={() => navigation.navigate("favoritos", { favoriteHeroes: favoriteHeroes })}
                    variant="outline" colorScheme="secondary">
                    See favorites
                </Button> */}
        <List space={2} my={2}>
          {resultArray.map((e) => (
            <List.Item
              key={e.id}
              onPress={() => navigation.navigate("detalle", { id: e.id })}
            >
              <HStack alignItems="center">
                <Image
                  source={{ uri: e.image?.url || error }}
                  alt={e.name}
                  size={24}
                  borderRadius={8}
                  onError={() => console.log("Error al cargar la imagen")}
                />
                <VStack ml={3} flex={1}>
                  <Heading size="sm">{e.name}</Heading>
                  <Text fontSize="xs">{e.biography["full-name"]}</Text>
                </VStack>
                <View flex={1} justifyContent="flex-end">
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
          ))}
        </List>
      </Box>
    </ScrollView>
  );
};

export default ListHeroes;
