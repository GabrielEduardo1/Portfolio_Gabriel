import * as React from 'react';
import { StyleSheet, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SobreScreen from './Sobre';
import HomeScreen from './Home';
import PortfolioScreen from './Portfolio';


<HomeScreen/>,

<SobreScreen/>, 

<PortfolioScreen/>

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer >
        <StatusBar backgroundColor='black' style='light'/>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-home'
                  : 'ios-home';
              } else if (route.name === 'Sobre') {
                iconName = focused ? 'ios-apps' : 'ios-apps';
              }else{
                iconName = focused ? 'ios-list' : 'ios-list';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#038fab',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen}  />
          <Tab.Screen name="Sobre" component={SobreScreen} />
          <Tab.Screen name="Portfolio" component={PortfolioScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({

})