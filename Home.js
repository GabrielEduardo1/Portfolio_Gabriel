import { View, Text, TouchableOpacity, StyleSheet,Button} from 'react-native';
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SobreScreen from './Sobre';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  function CasaScreen({ navigation }) {
    return (
        <View style={{ flex: 1, paddingLeft:50, paddingRight:50}}>
            <View style={styles.viewTop}>
                <Text style={styles.textTop}>Conheça o Portfólio de Gabriel Eduardo de Souza</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btnNavigation}>
                <Ionicons name="md-home" size={29} color='white'/>
                <Text style={{color:'white', fontSize:20, marginLeft:'10%'}}>HOME</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Sobre')} style={styles.btnNavigation}>
                <Ionicons name="information-circle-outline"  size={29} color='white'/>
                <Text style={{color:'white', fontSize:20, marginLeft:'10%'}}>SOBRE</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Portfolio')} style={styles.btnNavigation}>
                <Ionicons name="ios-apps"  size={29} color='white'/>
                <Text style={{color:'white', fontSize:20, marginLeft:'10%'}}>PORTFÓLIO</Text>
            </TouchableOpacity>
        </View>
      );
  }
export default function HomeScreen({navigation}) {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={CasaScreen} />
        <Drawer.Screen name="Notification" component={NotificationsScreen} />
      </Drawer.Navigator>
      
    );
  }

  const styles = StyleSheet.create({
    btnNavigation:{
        marginTop:15,
        padding:15,
        backgroundColor:'#006478',
        flexDirection:'row',
    }, 
    viewTop:{
        marginTop:25,
        marginBottom:15
    }, 
    textTop:{
        fontSize:20,
        textAlign:'center'
    }
  })