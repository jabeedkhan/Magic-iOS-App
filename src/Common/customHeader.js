import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import colors from './colors';
import {useNavigation} from '@react-navigation/native';


const customHeader = ({title}) => {
const navigation = useNavigation();

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          borderWidth: 1,
          borderBottomColor: colors.primaryBlack,
          backgroundColor: colors.matteBlack,
        }}>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={{width: 40, height: 40, marginLeft: 5, marginTop: 5}}
              source={require('../assets/images/menu.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1.5,
            justifyContent: 'center',
          }}>
          <Text
            style={{color: colors.white, textAlign: 'center', fontSize: 20}}>
            {title}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Image
            style={{width: 40, height: 40, marginLeft: 60, marginTop: 5}}
            source={require('../assets/images/shopping-cart.png')}
          />
        </View>
      </View>
    </>
  );
};

export default customHeader;
