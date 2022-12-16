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
  const [valor, setValor] = useState(2);
  var tempo = 2;
  


function clicou(e){
    setValor(10);
    navigation.navigate('Ganhou');
    Adicionar();
}
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Aguarde ...
        </Text>
        <Image
          style={styles.anuncio}
          source={require('../../assets/mcdonalds.png')}
        />
        <CountDown
          until={valor}
          timeToShow={['S']}
          timeLabels={{s: 'Segundos'}}
          onFinish={() => navigation.navigate('Ganhou')}
          size={20}
        />
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
  anuncio:{
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 15,
    overflow: 'hidden',
    width: 200,
    height: 150,
  }
});