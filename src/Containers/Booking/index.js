import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import colors from '../../Common/colors';
import NoLoggedInScreen from '../../components/NoLoggedInScreen';
import CommonHeader from '../../components/CommonHeader';
import {useRoute} from '@react-navigation/native';
import BookingTab from './BookingTab';

const Booking = () => {
  const route = useRoute();
  console.log('route.params ', route);
  return (
    <NoLoggedInScreen>
      <ScrollView>
        <View style={styles.BookingContainer}>
          <CommonHeader headText={'Booking'} backPage="Home" />
          <BookingTab service={route.params.service} />
        </View>
      </ScrollView>
    </NoLoggedInScreen>
  );
};

export default Booking;

const styles = StyleSheet.create({
  BookingContainer: {
    flex: 1,
    backgroundColor: colors.matteBlack,
  },
});
