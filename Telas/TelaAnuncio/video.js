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
  const [valor, setValor] = useState(10);
   
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Aguarde ...
        </Text>
        <Image
          style={{width: 300, height: 200}}
          source={{uri: 'https://media0.giphy.com/media/3tJFReqsF1rIE3909Y/giphy.gif?cid=ecf05e47d9a4f8zpo8eud9xeh0e7xbdsixhfrjtbrd5hzapk&rid=giphy.gif&ct=g'}} />
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