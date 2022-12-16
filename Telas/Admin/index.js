import { React, useState, useEffect } from 'react';
import { Text, CheckBox, View } from 'react-native';
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
  const [titulo, setTitulo] = useState('');
  const [codigo, setCodigo] = useState('');
  const navigation = useNavigation();
  const [isSelected, setSelection] = useState(false);
  const [lista, setLista] = useState("anunciosVideos");

  const gravarAnuncio = async () => {
    console.log(
      '--------------------------------------------------------------------'
    );
    console.log(titulo);
    console.log(codigo);

    //verificar se todos os campos estão preenchidos
    if (titulo != '' &&codigo != '') {
      console.log("entro no if");
      //carrega a lista do async storage
      let listaCarregada = await AsyncStorage.getItem(lista);
      //cria o json para salvar as informações e relaciona as variaveis
      let jsonAnuncios = {
        titulo: titulo,
        codigo: codigo
      };
      console.log('1 anunciosSalvos', listaCarregada);
      console.log('2 tipo da lista salva', typeof listaCarregada);
      //caso a lista carregada esteja nula (nada adicionado ainda)
      if (listaCarregada == null) {
        //setta ela como um array vazio
        listaCarregada = [];
        //adiciona o json a ela (usando o push)
        listaCarregada.push(jsonAnuncios);
        console.log('4 lista com o json adicionada', listaCarregada);
        console.log(
          '5 tipo da lista com o json adicionada',
          typeof listaCarregada
        );
      } else { //caso a lista carregada ja tenha registros
        //converte a lista carregada do async storage em json para poder manipular (pois o async storage so trabalha com strings)
        listaCarregada = JSON.parse(listaCarregada);
        console.log('6 lista sem o json adicionada', listaCarregada);
        console.log(
          '7 tipo da lista sem o json adicionada',
          typeof listaCarregada
        );
        //adiciona o json a ela (usando o push)
        listaCarregada.push(jsonAnuncios);
        console.log('8 lista com o json adicionada', listaCarregada);
        console.log(
          '9 tipo da lista com o json adicionada',
          typeof listaCarregada
        );
      }
      //cria uma variavel para converter o json para string, para possibiltar o salvamento no async storage
      let listaParaAdicionar = JSON.stringify(listaCarregada);
      console.log('10 listaadicionar com o json adicionada', listaParaAdicionar);
      console.log(
        '11 listaadicionar tipo da lista com o json adicionada',
        typeof listaParaAdicionar
      );

      //salva a lista alterada no async storage
      await AsyncStorage.setItem(lista, listaParaAdicionar);

      //navega para a tela de lembretes
      navigation.navigate('FIRE');

      console.log(
        '--------------------------------------------------------------------'
      );
    } else { //se não estiver preenchidos alerta 
      console.log(
        '12 campos da lista incompletos',
        intervalo + ' ' + titulo + ' ' + horarioInicial + ' ' + duracao
      );
      alert('Preencha todos os campos');
    }
  };

  function clicou(e){
    setSelection(true);
    setLista('anunciosImagens');
  }

  return (
    <ContainerCadastrar>

      <AreaCabecalho>
        <Titulo>Cadastrar Anúncios</Titulo>
      </AreaCabecalho>

      <DescricaoCampo> Título: </DescricaoCampo>
      <Input
        value={titulo}
        placeholder="Título"
        placeholderTextColor="gray"
        onChangeText={text => setTitulo(text)}
        autoCapitalize="none"
        style={{ flex: 1, color: '#000000' }}
      />

      <DescricaoCampo> Código: </DescricaoCampo>
      <Input
        value={codigo}
        placeholder="</>"
        placeholderTextColor="gray"
        onChangeText={text => setCodigo(text)}
        autoCapitalize="none"
        style={{ flex: 1, color: '#000000' }}
      />
      <View style={styles.checkboxContainer}>
      <CheckBox
          value={isSelected}
          onValueChange={clicou}
          style={styles.checkbox}
      /><Text style={styles.label}>É uma imagem?</Text>
      </View>
        

      <BotaoCustomizavel cor="#03C148" onPress={() => gravarAnuncio()}>
        <BotaoCustomizavelTexto cor="#FFF" margem="40px">
          Salvar
        </BotaoCustomizavelTexto>
      </BotaoCustomizavel>

      <BotaoCustomizavel
        cor="#F53209"
        onPress={() => navigation.navigate('FIRE')}>
        <BotaoCustomizavelTexto cor="#FFF" margem="40px">
          Excluir
        </BotaoCustomizavelTexto>
      </BotaoCustomizavel>

    </ContainerCadastrar>
  );
};

