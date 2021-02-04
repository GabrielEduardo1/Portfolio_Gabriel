import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SobreScreen from './Sobre';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Sobre')} style={styles.btnNavigation}>
        <Text style={{color:'white'}}>Details</Text>
      </TouchableOpacity>
    </View>
  );
}

<SobreScreen/>

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Sobre" component={SobreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  btnNavigation:{
    padding:10,
    backgroundColor:'green',
  }
})