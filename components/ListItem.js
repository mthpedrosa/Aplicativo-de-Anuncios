import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ListItem = ({ data }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemP1}>{data.titulo}</Text>
        <Text style={styles.itemP2}>{data.codigo}</Text>
        <Text style={styles.itemP2}>{data.key}</Text>
        <Button
          cor="#0000"
          onPress={() => navigation.navigate('Admin')}>
          <Image source={require('../assets/config.png')} />
        </Button>
        <Button onPress={removerAnuncio(data.titulo)}>delete</Button>
      </View>
    </TouchableOpacity>
  );
};

 const removerAnuncio = async () => {
    try {
      const value = await AsyncStorage.removeItem('titulo')
      setMensagem("Excluido com sucesso");
    }  catch (e){
      setMensagem(e.message);
    }
    try {
      const value = await AsyncStorage.removeItem('idade')
      setMensagem("Excluido com sucesso");
    }  catch (e){
      setMensagem(e.message);
    }
  }; 


const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 5,
    borderBottomColor: '#444',
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#D3D3D3',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 15,
    overflow: 'hidden',
    
  },
  itemPhoto:{
    width: 50,
    height: 50,
  },
  itemInfo: {
    marginLeft: 20,
  },
  itemP1: {
    fontSize: 30,
    color: '#FF0000',
    marginBottom: 10
  },
  itemP2: {
    fontSize: 18,
    color: '#000000',
  },
});

export default ListItem;
