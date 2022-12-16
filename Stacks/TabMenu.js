import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import BarraInferior from "../components/BarraInferior"

//importando as telas
import FIRE from '../Telas/Fire/index';
import Video from '../Telas/Video/index';
import Saque from '../Telas/Saque/index';
import Admin from '../Telas/Admin/index';
import Anuncio from '../Telas/TelaAnuncio/index';
import VideoAnuncio from '../Telas/TelaAnuncio/video';
import Ganhou from '../Telas/TelaGanhou/index';

const Tab = createBottomTabNavigator();
//aqui são listadas as telas deste stack
export default () => (
    <Tab.Navigator tabBar={props => <BarraInferior {...props} />}
        screenOptions={{
            headerShown: false
        }}>
        <Tab.Screen name="FIRE" component={FIRE} />
        <Tab.Screen name="Video" component={Video} />
        <Tab.Screen name="Saque" component={Saque} />   
        <Tab.Screen name="Admin" component={Admin} />   
        <Tab.Screen name="Anuncio" component={Anuncio} />   
        <Tab.Screen name="VideoAnuncio" component={VideoAnuncio} />   
        <Tab.Screen name="Ganhou" component={Ganhou} />   
    </Tab.Navigator>
);