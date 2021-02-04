import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as React from 'react';

export default function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          <Text>Portfolio Screen</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btnNavigation}>
            <Text style={{color:'white'}}>Home</Text>
          </TouchableOpacity>

        </View>
    );
}
const styles = StyleSheet.create({
    btnNavigation:{
        padding:10,
        backgroundColor:'green',
    }
})