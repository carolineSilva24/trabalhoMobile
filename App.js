import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { ActivityIndicator } from 'react-native-web';

export default function App() {

const URL = 'https://api.otaviolube.com/api/filmes?populate=*'

let[filmes, setFilmes] = useState([]);
const baseURL = 'https://api.otaviolube.com'

useEffect(function(){
  fetch(URL)
  .then(data => data.json())
  .then(objeto => {
    setFilmes(objeto.data);
  })
}, []);

  return (
    <View style={styles.container}>
      {filmes.length > 0 ? filmes.map(filme =>
      <View style={styles.cartao}>
       <Image source = {{ 
        uri: baseURL + filme.attributes.poster.data.attributes.url}} style = {styles.img}/>
       <Text style={styles.titulo}>{filme.attributes.titulo}</Text>
       <Text style={styles.sinopse}>{filme.attributes.sinopse}</Text>
       <View style={styles.botao}>
        <Button title='Comprar' color= 'red'/>
       </View>
      </View>) :
       <View style={[styles.container,styles.carregando]}> 
        <ActivityIndicator size="large" color = "#4b0082"/> 
        <Text>Carregando ...</Text>
      </View>
       }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    padding: 10,
    margin: 10,
  },
  carregando:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff7269',
  },
  cartao: {
   backgroundColor: '#ADD8E6',
   borderRadius: '10px',
   width: '100%',
   borderWidth: 4,
   borderColor: '#3ea4c4',
   textAlign: 'center',
   marginTop: 12
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red'
  },
  sinopse: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'arial',
    marginTop: '5px',
    padding: '40'
  },
  img: {
   height: '390px',
   width:'100%',
   borderRadius: 5,
   alignItems: 'center'
  },
  botao:{
   borderRadius: '10px',
   marginTop: 5,
   padding: 10
  }
});
