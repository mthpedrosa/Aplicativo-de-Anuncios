
import React from 'react';
import { StyleSheet} from "react-native";
import styled from "styled-components/native";

export const ContainerCadastrar = styled.ScrollView`
    flex: 1;
    padding-top: Constants.statusBarHeight;
    padding: 10px;
    background-color: #FFF;
`;

export const Titulo = styled.Text`
    font-size: 20px;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    margin-top: 40px;
`;

export const DescricaoCampo = styled.Text`
    margin: 5px;
    margin-top: 20px;
    font-size: 16px;
    font-weight: 16px;
    font-weight: bold;
`;

export const Input = styled.TextInput`
    margin: 5px;
    height: 40px;
    border-width: 1px;
    padding: 5px;
    font-size: 16px;
    text-align: center;
    border-radius: 5px;
`;

export const BotaoCustomizavel = styled.TouchableOpacity `
    height: 40px;
    background-color: ${props=>props.cor};
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    flex-direction:row;
`;

export const BotaoCustomizavelTexto = styled.Text`
    font-size: 15px;
    color: ${props=>props.cor};
    font-family: Prata;
    font-style: normal;
    font-weight: normal;
`;

export const AreaCabecalho = styled.Text`
    display: flex;
    justify-content: space-between;
`;

export const BotaoVoltar = styled.TouchableOpacity `
    height: 40px;
    background-color: ${props=>props.cor};
    border-radius: 15px;
    
    align-items: center;
    margin-top: 30px;
    flex-direction:row;
`;

export const BotaoImagem = styled.Image`
    width: 60px;
    height: 50px;
`;



const styles = StyleSheet.create({
  botao:{
    width: 60,
    height: 50,
  }
});

export default styles;