import React, {useContext, useEffect} from 'react';
import Providers from './src/navigation';
// import PushNotification from 'react-native-push-notification';
import {Store, StoreProvider} from './src/store/store';
import {getLoggedInUser, getMetaData} from './src/actions/common';

const RenderDom = () => {
  const {state, dispatch} = useContext(Store);
  useEffect(() => {
    getLoggedInUser(dispatch);
  }, [state?.common?.user?.token]);
  useEffect(() => {
    getMetaData(dispatch);
  }, []);

  return <Providers />;
};
const App = () => {
  // useEffect(() => {
  //   requestUserPermission();
  //   PushNotification.configure({
  //     onRegister: function (token) {
  //       console.log('TOKEN:', token);
  //     },

  //     onNotification: function (notification) {
  //       console.log('NOTIFICATION:', notification);
  //       notification.finish(PushNotification.FetchResult.NoData);
  //     },
  //     onAction: function (notification) {
  //       console.log('ACTION:', notification.action);
  //       console.log('NOTIFICATION:', notification);
  //     },
  //     onRegistrationError: function (err) {
  //       console.error(err.message, err);
  //     },
  //     permissions: {
  //       alert: true,
  //       badge: true,
  //       sound: true,
  //     },
  //     popInitialNotification: true,

  //     requestPermissions: true,
  //   });
  // }, []);

  // requestUserPermission = async () => {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     getFcmToken();
  //     console.log('Authorization status:', authStatus);
  //   }
  // };

  // getFcmToken = async () => {
  //   const fcmToken = await messaging().getToken();
  //   if (fcmToken) {
  //     console.log(fcmToken);
  //     console.log('Your Firebase Token is:', fcmToken);
  //   } else {
  //     console.log('Failed', 'No token received');
  //   }
  // };
  // const {state, reducer} = useContext(Store);
  // console.log('state', state);
  return (
    <StoreProvider>
      <RenderDom />
    </StoreProvider>
  );
};

export default App;
