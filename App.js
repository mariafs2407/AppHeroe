
import { NativeBaseProvider } from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/componentes/heroes/Home';
import DetalleHeroe from './src/componentes/detalleHeroe/DetalleHeroe';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
    
const HomeStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <HomeStack.Navigator initialRouteName="Home" screenOptions={{
            headerStyle: {
              backgroundColor: '#D29FDE', // Cambia el color aquí
            },
            headerTitleAlign : 'center'
          }}>
          <HomeStack.Screen options={{ title: 'Heroes'}}  name="Home" component={Home} />
          <HomeStack.Screen options={{ title: '' }} name="detalle" component={DetalleHeroe} />
        </HomeStack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
    
  );
}

