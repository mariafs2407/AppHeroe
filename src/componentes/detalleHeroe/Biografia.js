import { HStack, Text, VStack, View } from 'native-base';
import React from 'react';

const Biografia = ({infoHeroe}) => {
    return (
        <View>
            <Text fontSize="3xl">Biography :</Text>
            <VStack>
                <HStack>
                    <Text>Full Name : </Text>
                    <Text>{infoHeroe.biography['full-name']}</Text>
                </HStack>
                <HStack>
                    <Text>Alter Egos : </Text>
                    <Text>{infoHeroe.biography['alter-egos']}</Text>
                </HStack>
                <HStack>
                    <Text>Place of Birth  : </Text>
                    <Text>{infoHeroe.biography['place-of-birth']}</Text>
                </HStack>
            </VStack>
        </View>
    );
}

export default Biografia;