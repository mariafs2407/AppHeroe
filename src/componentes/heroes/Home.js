import React, { useState  } from 'react';
import BuscadorHeroe from './BuscadorHeroe';
import ListHeroes from './ListHeroes';
import { View } from 'native-base';

const Home = ({ navigation, route }) => {

    const [resultArray, setResultArray] = useState([]);

    const PresionarBuscador = (searchResults) => {
        setResultArray(searchResults);
    };


    return (
        <View m={2}>
            <BuscadorHeroe                
                onSearch={PresionarBuscador}  />
            <ListHeroes
                resultArray={resultArray}
                navigation={navigation} />
        </View>
    );
}

export default Home;