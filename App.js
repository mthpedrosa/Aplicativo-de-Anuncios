
import React from 'react';

import { NavigationContainer } from "@react-navigation/native";

//importando stack principal, para reendenizar todos os stacks e telas nele contidos
import StackPrincipal from './Stacks/StackPrincipal';

export default () => {
  return(
      <NavigationContainer>
        <StackPrincipal/>
      </NavigationContainer>
  );
}