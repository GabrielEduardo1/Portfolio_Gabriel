import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput} from 'react-native';
import * as React from 'react';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {db} from './firebase';
import { useState, useEffect } from 'react';
import { ceil } from 'react-native-reanimated';



let windowWidth = Dimensions.get('window').width -10 -10;

export default function SobreScreen({navigation}) { 
    
    //Faz a modal(aba de contato) aparecer ou desaparecer
    const [showModal, setModal] = useState(false);

    //Armazena os dados do nome e da mensagem
    const[nome, setNome] = useState('');
    const[mensagem, setMensagem] = useState('');

    //Faz a modal contato abrir
    const abrirModal = () =>{
      setModal(!showModal);
    }

    //Envia a mensagem para o banco de dados
    const enviarMensagem = ()=>{
      db.collection('contato').add({
        nome:nome,
        mensagem:mensagem,
    })
    alert('Sua mensagem foi enviado com Sucesso');
    }
    return (
        <View style={{flex:1}}>
          {
          (showModal)?
          <View style={styles.modalParent}>
            <View style={{position:'absolute', right:5, top:3 , width:50, height:50, backgroundColor:'black',zIndex:2, justifyContent:'center', borderRadius:25}}>
              <TouchableOpacity  style={{width:'100%', height:'100%', top:2.5}} onPress={()=>setModal(!setModal)} >
                <Text style={{color:'white', textAlign:'center', fontSize:25}}>x</Text>
              </TouchableOpacity>
            </View>
              <View style={styles.boxModal}>
                <Text style={{fontSize:15, color:'#424242'}}>Qual seu nome?</Text>
                <TextInput onChangeText={(text)=>setNome(text)} style={styles.TextInput}  numberOfLines={4} multiline={true}></TextInput>
                <Text style={{fontSize:15, color:'#424242'}}>Qual sua mensagem?</Text>
                <TextInput onChangeText={(mensagem)=>setMensagem(mensagem) } style={{...styles.TextInput, height:80}}  numberOfLines={4}></TextInput>
                <TouchableOpacity 
                  onPress={()=>enviarMensagem()}
                  style={{...styles.btnNavigation}}>
                  <Text style={{color:'white', fontSize:17, textAlign:'center'}}>
                    Enviar
                  </Text>
                </TouchableOpacity>
              </View>
            
          </View>
          :
          <View></View>
        }
        <View style={{ flex: 1, padding:10, backgroundColor:'#dbdbdb', paddingBottom:0}}>
          <ScrollView style={{backgroundColor:'white', padding:5}}>
            <Text style={{textAlign:'center', marginBottom:10, fontSize:20}}> GABRIEL EDUARDO DE SOUZA</Text>
            <Image style={{width:windowWidth, height:windowWidth}} source={require('./assets/gabriel.jpg')} />
            <View style={{padding:10}}>
              <Text style={{textAlign:'center', fontSize:20, marginBottom:10}}>Texto Loren Ipson</Text>
              <Text style={{fontSize:15}}>
                On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
              </Text>
            </View>
            <View style={{padding:15}}>
              <TouchableOpacity onPress={() => abrirModal()} style={styles.btnNavigation}>
                <Text style={{color:'white', textAlign:'center', fontSize:20}}>Entrar em Contato</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  btnNavigation:{
    padding:10,
    backgroundColor:'#006478',
    borderRadius:20
  },
  modalParent:{
    position:'absolute',
    left:0,
    top:0,
    width:'100%',
    height:'100%',
    backgroundColor:'rgba(0,0,0,0.6)',
    zIndex:1,
  },
  boxModal:{
    backgroundColor:'white',
    width:'90%',
    height:360,
    position:'absolute',
    left:0,
    marginTop:'50%',
    marginLeft:'5%',
    padding:15
  },
  TextInput:{
    height:80,
    width:'100%',
    borderColor:'gray',
    borderWidth:1,
    marginBottom:20,
    padding:5
  } 
})