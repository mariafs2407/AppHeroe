import { Box, Center, HStack, Progress, Text, VStack, View } from 'native-base';
import React from 'react';

const Powers = ({ infoHeroe }) => {

    const intelligence = parseInt(infoHeroe.powerstats.intelligence, 10);
    const strength = parseInt(infoHeroe.powerstats.strength, 10);
    const speed = parseInt(infoHeroe.powerstats.speed, 10);
    const durability = parseInt(infoHeroe.powerstats.durability, 10);
    const power = parseInt(infoHeroe.powerstats.power, 10);
    const combat = parseInt(infoHeroe.powerstats.combat, 10);
    return (
        <View>
            <Text fontSize="3xl">Powerstats :</Text>
            <VStack >
                <HStack>
                    <Text>Intelligence : </Text>
                    <Box w="80%" maxW="400" mt={2} ml="auto">
                            <Progress value={intelligence} mx="4" />
                    </Box>                   
                </HStack>
                <HStack>
                    <Text>Strength : </Text>                    
                        <Box w="80%" maxW="400" mt={2} ml="auto">
                            <Progress value={strength} mx="4" />
                        </Box>                                       
                </HStack>
                <HStack>
                    <Text>Speed  : </Text>                   
                        <Box w="80%" maxW="400" mt={2} ml="auto">
                            <Progress  value={speed}  mx="4" />
                        </Box>                  
                </HStack>
                <HStack>
                    <Text>Durability : </Text>                    
                        <Box w="80%" maxW="400" mt={2} ml="auto">
                            <Progress  value={durability}   mx="4" />
                        </Box>   
                </HStack>
                <HStack>
                    <Text>Power : </Text>                    
                        <Box w="80%" maxW="400" mt={2} ml="auto">
                            <Progress   value={power}   mx="4" />
                        </Box>              
                </HStack>
                <HStack>
                    <Text>Combat : </Text>                    
                        <Box w="80%" maxW="400" mt={2} ml="auto"> 
                            <Progress     value={combat}    mx="4" />
                        </Box>                    
                </HStack>
            </VStack>

        </View>
    );
}

export default Powers;