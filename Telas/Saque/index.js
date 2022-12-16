import { React, useState, useEffect } from 'react';
import { Text,TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  ContainerCadastrar,
  DescricaoCampo,
  Input,
  BotaoCustomizavel,
  BotaoCustomizavelTexto,
  BotaoImagem,
  BotaoVoltar,
  AreaCabecalho,
  Titulo,
} from './styles';
import styles from "./styles";

export default () => {
  const [chave, setChave] = useState('');
  const [valor, setValor] = useState(0);

  const navigation = useNavigation();

  const verSaldo = async () => {
    let saldoAtual = await AsyncStorage.getItem('saque');
    setValor(saldoAtual);
  }

  const fazerSaque = async () => {
    console.log(
      '--------------------------------------------------------------------'
    );
    //verificar se todos os campos estão preenchidos
    if (chave != '' && valor > 19) {
     alert('Saque realizado com sucesso!');
     await AsyncStorage.setItem('saque', 0);
     let listaCarregada = await AsyncStorage.getItem('saque');
     console.log(listaCarregada);
    } else { //se não estiver preenchidos alerta 
      if(valor < 20){
        alert('Saldo insuficiente');
      }else{
        alert('Coloque a chave pix');
      }
      
    }
  };

  return (
    <ContainerCadastrar>

      <AreaCabecalho>
        <Titulo>Saldo Disponivel:R$ {valor} </Titulo>
        <TouchableOpacity onPress={() => verSaldo() }>
        <Image
            style={styles.botao}
            source={require('../../assets/sinc.png')}
          />
      </TouchableOpacity>
      </AreaCabecalho>


      <DescricaoCampo> Chave Pix: </DescricaoCampo>
      <Input
        value={chave}
        placeholder="Chave"
        placeholderTextColor="gray"
        onChangeText={(t) => setChave(t)}
        autoCapitalize="none"
        style={{ flex: 1, color: '#000000' }}
      />


      <DescricaoCampo> Valor (R$): </DescricaoCampo>
      <Input
        value={valor}
        placeholder="R$00.00"
        placeholderTextColor="gray"
        onChangeText={(t) => setValor(t)}
        editable={false}
        autoCapitalize="none"
        style={{ flex: 1, color: '#000000' }}
      />

      <BotaoCustomizavel cor="#03C148" onPress={() => fazerSaque()}>
        <BotaoCustomizavelTexto cor="#FFF" margem="40px">
          Sacar
        </BotaoCustomizavelTexto>
      </BotaoCustomizavel>


    </ContainerCadastrar>
  );
};