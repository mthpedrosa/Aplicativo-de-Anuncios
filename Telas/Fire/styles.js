
import React from 'react';
import styled from "styled-components/native";
import { StyleSheet} from "react-native";

export  const Container = styled.View`
     background-color: #FFF;
     flex: 1;
     justify-content: center;
     align-items: center;
`;
export const ContainerCadastrar = styled.ScrollView`
    flex: 1;
    padding-top: Constants.statusBarHeight;
    padding: 10px;
    background-color: #FFF;
`;

export const AreaIp = styled.TouchableOpacity`
    width: 100%;
    height: 150px;
`;

export const Titulo = styled.Text`
    font-size: 20px;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    margin-top: 40px;
`;

export const AreaBotoes = styled.View`
    padding: 40px;
    width: 100%;
    margin-top: 120px;
    flex: 1;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const BotaoCustomizavel = styled.TouchableOpacity`
    height: 60px;
    width: 60px;
    background-color: ${props=>props.cor};
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    
    flex-direction:row;

`;

export const Button = styled.Button`
    position: absolute;
    height: 60px;
    width: 60px;
    background-color:#0a0a23;
    color: #fff;
    border:none;
    border-radius:10px;
`;

export const BotaoImagem = styled.Image`
    width: 60px;
    height: 50px;
`;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop:10, 
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#D3D9DC',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 15,
    overflow: 'hidden',
    
  },
  seta:{
    width: 30,
    height: 30,
    flexDirection:'row',
    alignItems: 'marginRight',
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

export default styles;