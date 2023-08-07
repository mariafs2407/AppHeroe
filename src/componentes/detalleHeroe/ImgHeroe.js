import { Center, Image } from 'native-base';
import React from 'react';

const ImgHeroe = ({infoHeroe}) => {
    return (
        <Center m={3}>
            <Image alignItems="center"
                source={{ uri: infoHeroe.image?.url }}
                alt={infoHeroe.name}
                size={250}
                borderRadius={8}
            />
        </Center>
    );
}

export default ImgHeroe;