import React, { useEffect, useState } from 'react';
import { FlatList, Text, View , SafeAreaView, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import ListItem from '../../components/ListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CountDown from 'react-native-countdown-component';
import { useNavigation } from '@react-navigation/native';


export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [mensagem, setMensagem] = useState('');

  const navigation = useNavigation();

  const Adicionar = async () => {
     let listaCarregada = await AsyncStorage.getItem('saque');
     console.log(listaCarregada);
     let valorNovo = Number(listaCarregada);
     let soma = valorNovo + 0.05;
     console.log(valorNovo);
     AsyncStorage.setItem('saque', soma);
     navigation.navigate('FIRE')
  };

  const adicionarValor = () => {
      AsyncStorage.setItem('saldo', 0.05); 
  };
  //<TouchableOpacity onPress={() => navigation.navigate('FIRE')}>
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <SafeAreaView style={styles.container}> 
      <TouchableOpacity onPress={() => Adicionar() }>
        <Image
            style={styles.botao}
            source={require('../../assets/x.png')}
          />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>
          Parabéns, você ganhou 0.05 centavos!
        </Text>
        <Image
          style={{width: 300, height: 200}}
          source={{uri: 'https://media1.giphy.com/media/Z1rnSNFu8Hi79gK2wo/giphy.gif?cid=ecf05e47one1y2fntmv201pm3iambxpvtwm5eseha7c5f869&rid=giphy.gif&ct=s'}} />
      </View>
    </SafeAreaView>
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  botao:{
    width: 60,
    height: 50,
  }
});