import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../Pages/Home';
import services from '../Pages/Services';
import Rewards from '../Pages/Rewards';
import Profile from '../Pages/Profile';
import {Image, Text, View} from 'react-native';
import colors from '../Common/colors';
import Homeimg from '../assets/images/home.png';
import ServiceDetails from '../Pages/ServiceDetails';
import EditProfile from '../Pages/EditProfile';
import ChangePass from '../Pages/ChangePass';
import AboutUs from '../Pages/AboutUs';
import ContactUs from '../Pages/ContactUs';
import UpdateAdd from '../Pages/UpdateAddress';
import BookingHistory from '../Pages/BookingHistory';

const Tab = createBottomTabNavigator();

const ServicesStack = createStackNavigator();

const ServicesStackScreen = () => (
  <ServicesStack.Navigator headerMode="none">
    <ServicesStack.Screen name="services" component={services} />
    <ServicesStack.Screen name="ServiceDetails" component={ServiceDetails} />
  </ServicesStack.Navigator>
);

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator headerMode="none">
    <ProfileStack.Screen name="Profile" component={Profile} />
    <ProfileStack.Screen name="EditProfile" component={EditProfile} />
    <ProfileStack.Screen name="ChangePass" component={ChangePass} />
    <ProfileStack.Screen name="AboutUs" component={AboutUs} />
    <ProfileStack.Screen name="ContactUs" component={ContactUs} />
    <ProfileStack.Screen name="UpdateAdd" component={UpdateAdd} />
    <ProfileStack.Screen name="BookingHistory" component={BookingHistory} />
  </ProfileStack.Navigator>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        // activeTintColor:'#fff',
        // inactiveTintColor:'#000',
        style: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: colors.primary,
          height: 70,
          paddingBottom: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({activeTab}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={Homeimg}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: activeTab ? '#fff' : '#000',
                }}
              />
              <Text
                style={{
                  color: activeTab ? '#fff' : '#000',
                  fontSize: 12,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="servicesScreen"
        component={BookingHistory}
        options={{
          tabBarIcon: ({activeTab}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/images/booking.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: activeTab ? '#fff' : '#000',
                }}
              />
              <Text
                style={{
                  color: activeTab ? '#fff' : '#000',
                  fontSize: 12,
                }}>
                Booking
              </Text>
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name="Rewards"
        component={Rewards}
        options={{
          tabBarIcon: ({activeTab}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/images/gift.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: activeTab ? '#fff' : '#000',
                }}
              />
              <Text
                style={{
                  color: activeTab ? '#fff' : '#000',
                  fontSize: 12,
                }}>
                Rewards
              </Text>
            </View>
          ),
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({activeTab}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/images/user.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: activeTab ? '#fff' : '#000',
                }}
              />
              <Text
                style={{
                  color: activeTab ? '#fff' : '#000',
                  fontSize: 12,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
