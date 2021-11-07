import React from 'react';
import {Text, Image, View} from 'react-native';
import colors from '../../Common/colors';
import {width} from '../../Common/style';

const BookingMain = () => {
  return (
    <View
      style={{
        position: 'relative',
        padding: 16,
        backgroundColor: colors.submit,
      }}>
      <View
        style={{
          height: 16,
          width: 16,
          position: 'absolute',
          left: 10,
          top: 16,
        }}>
        <Image
          style={{
            height: width(5),
            width: width(5),
          }}
          source={require('../../assets/images/back.png')}
        />
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: width(5),
          color: colors.white,
        }}>
        Booking
      </Text>
    </View>
  );
};

export default BookingMain;
