import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import colors from '../Common/colors';
import {width} from '../Common/style';

const CommonHeader = ({headText, backPage}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        position: 'relative',
        padding: 16,
        backgroundColor: colors.submit,
      }}>
      <TouchableOpacity
        style={{
          height: 16,
          width: 16,
          position: 'absolute',
          left: 10,
          top: 16,
        }}
        onPress={() => navigation.goBack()}>
        <Image
          style={{
            height: width(5),
            width: width(5),
          }}
          source={require('../assets/images/back.png')}
        />
      </TouchableOpacity>
      <Text
        style={{
          textAlign: 'center',
          fontSize: width(5),
          color: colors.white,
        }}>
        {headText}
      </Text>
    </View>
  );
};

export default CommonHeader;
