/*
    Neste arquivo estarão declarados todos os Stacks e suas telas.
    Essa será a tela carregada no App.js
*/

import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

//importando as telas de suas respectivas pastas
import TabMenu from "./TabMenu";

//instanciando a criação de um stack navigator
const Stack = createStackNavigator();

//dentro do stack navigator estarão declaradas todas suas telas
export default () => (
    <Stack.Navigator
        initialRouteName="TabMenu" //inicia chamando a tela "TabMenu"
        screenOptions={{
            headerShown: false
        }}
    >
        
    <Stack.Screen name="TabMenu" component={TabMenu} />

    </Stack.Navigator>
);

