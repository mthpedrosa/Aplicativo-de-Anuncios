import React, { useState, useEffect } from 'react';
    import {
      StyleSheet,
      Text,
      View,
      FlatList,
      TouchableWithoutFeedback,
      TouchableOpacity,
      Keyboard,
      Image,
      Button
    } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListItem from '../../components/ListItem';
import { useNavigation } from '@react-navigation/native';
//import { ListItem } from 'react-native-elements'
import styles from "./styles";


 
export default function App() {

  const navigation = useNavigation();
  const [todos, setTodos] = useState([]);
    
  useEffect(() => {
    restoreTodosFromAsync();
  }, []);
    
  const restoreTodosFromAsync = () => {
    AsyncStorage.getItem('anunciosVideos')
      .then(stringifiedTodos => {
      console.log('Restored Todos:');
      console.log(stringifiedTodos);
    
      const parsedTodos = JSON.parse(stringifiedTodos);
    
      if (!parsedTodos || typeof parsedTodos !== 'object') return;
        setTodos(parsedTodos);
      })
      .catch(err => {
        console.warn('Error restoring todos from async');
        console.warn(err);
      });
};

const ListItem = ({ data }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('VideoAnuncio')}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemP1}>{data.titulo}</Text>
        <Text style={styles.itemP2}>{data.codigo}</Text>
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


  

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={({item}) => <ListItem data={item}/>}
      />
    </View>
  );

  
}