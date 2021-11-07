import React from 'react';
import {Image, Text, View} from 'react-native';
import colors from '../../Common/colors';

const AboutUsMain = () => {
  return (
    <>
      <View style={{backgroundColor: colors.backdroundWhite, padding: 20}}>
        <Image
          style={{height: 300, width: '100%'}}
          source={require('../../assets/images/about.jpg')}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'normal',
            marginBottom: 20,
            lineHeight: 22,
          }}>
          Magic hands is recognized as the fastest growing startup in India. We
          are a mobile marketplace for local services. We help customers hire
          trusted professionals for all their service needs. We are staffed with
          young, passionate people working tirelessly to make a difference in
          the lives of people by catering them to their service needs at their
          doorsteps. We provide housekeeping services which consists of
          electricians, plumbers, house cleaning, carpenters and interior
          designing. We are a sure shot destination for all your service needs
        </Text>
      </View>
    </>
  );
};

export default AboutUsMain;
