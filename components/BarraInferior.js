import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import {useState} from 'react';

const TabArea = styled.View`
    height: 60px;
    background-color: #FFFFFF;
    flex-direction: row;  
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TabText = styled.Text`
    font-size: 11px;
    margin-top: 3px;
    font-weight: bold;
`;

export default () => {
    const navigation = useNavigation();
    
  


    return (
      //Criando a barra de navegação do Menu
        <TabArea>
            <TabItem onPress={()=>navigation.navigate('FIRE')}>      
              <Image style={{width: 24, height: 24, resizeMode:'contain'}}  source={require('../assets/home.png')} />
              <TabText>FIRE</TabText>
            </TabItem>
            <TabItem onPress={()=>navigation.navigate('Video')}>
              <Image style={{width: 24, height: 24, resizeMode:'contain'}}  source={require('../assets/movies.png')} />
              <TabText>Vídeos</TabText>
            </TabItem>
            <TabItem onPress={()=>navigation.navigate('Saque')}>
              <Image style={{width: 24, height: 24, resizeMode:'contain'}}  source={require('../assets/money.png')} />
              <TabText>Saque</TabText>
            </TabItem>
            <TabItem onPress={()=>navigation.navigate('Admin')}>
              <Image style={{width: 24, height: 24, resizeMode:'contain'}}  source={require('../assets/config.png')} />
              <TabText>Admin</TabText>
            </TabItem>
        </TabArea>
        
    );
}