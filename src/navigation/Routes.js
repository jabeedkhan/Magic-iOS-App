import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {AuthContext} from './AuthProvider';
import Tabs from './Tabs';

const Routes = () => {
  const [user, setUser] = useState(AuthContext);
  const [initializing, setInitializing] = useState(true);

  // const onAuthStateChanged = user => {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // };
  // if (initializing) return null;
  return <NavigationContainer>{<AppStack />}</NavigationContainer>;
};

export default Routes;
