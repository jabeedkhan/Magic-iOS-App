import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';

const Roots = createStackNavigator();

const RootStack = () => (
  <Roots.Navigator headerMode="none">
    <Roots.Screen name="Login" component={Login} />
    <Roots.Screen name="SignUp" component={SignUp} />
  </Roots.Navigator>
);

export default RootStack;
