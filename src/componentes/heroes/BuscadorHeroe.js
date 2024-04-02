import {
  Button,
  Center,
  Icon,
  Input,
  Spinner,
  Text,
  VStack,
  Box,
} from "native-base";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const BuscadorHeroe = ({ onSearch }) => {
  const [nomHeroe, setNomHeroe] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (text) => {
    setNomHeroe(text);
    setError("");
  };

  const url = `https://www.superheroapi.com/api.php/6723646157687069/search/${nomHeroe}`;

  const fetchHeroes = (url) => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          //la informacion que se llevara
          onSearch(data.results);
          setError("");
        } else {
          onSearch([]);
          setError("No se encontraron resultados");
        }
      })
      .catch((error) => {
        console.log(error);
        setError("Hubo un problema al buscar el heroe");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Center>
      <VStack w="100%" m={2} space={5} alignSelf="center">
        <TouchableOpacity>
          <Input
            pointerEvents="none"
            onChangeText={handleInputChange}
            placeholder="Search Hero ..."
            editable={true}
            width="100%"
            borderRadius="4"
            py="3"
            px="3"
            fontSize="14"
            InputRightElement={
              isLoading ? (
                <Spinner color="fuchsia.600" />
              ) : (
                <Button
                  m={1}
                  leftIcon={
                    <Icon
                      name="cog-outline"
                      as={<MaterialIcons name="search" />}
                      color="white"
                    />
                  }
                  colorScheme="secondary"
                  onPress={() => fetchHeroes(url)}
                >
                  Search
                </Button>
              )
            }
          />
        </TouchableOpacity>
        <Box alignItems="center">
          {error ? <Text color="red.500">{error}</Text> : null}
        </Box>
      </VStack>
    </Center>
  );
};

export default BuscadorHeroe;
