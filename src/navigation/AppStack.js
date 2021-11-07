import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Pages/Home';
import Booking from '../Pages/Booking';
import Rewards from '../Pages/Rewards';
import Profile from '../Pages/Profile';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import ServiceDetails from '../Pages/ServiceDetails';
import Tabs from './Tabs';
import Checkout from '../Pages/Checkout';
import OrderDetails from '../Pages/OrderDetails';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator headerMode="none" initialRouteName="Home">
    <Stack.Screen name="Home" component={Tabs} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Booking" component={Booking} />
    <Stack.Screen name="OrderDetails" component={OrderDetails} />
    <Stack.Screen name="Checkout" component={Checkout} />
    <Stack.Screen name="Rewards" component={Rewards} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
  </Stack.Navigator>
);

export default AppStack;
