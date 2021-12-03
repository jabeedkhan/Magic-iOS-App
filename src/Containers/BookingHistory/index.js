import React from 'react';
import BookingHistoryMain from './BookingHistoryMain';
import CommonHeader from '../../components/CommonHeader';
import { SafeAreaView } from 'react-native';

const BookingHistory = () => {
  return (
    <>
      <SafeAreaView>
      <CommonHeader headText={'Booking History'} backPage="Home" />
      <BookingHistoryMain />
      </SafeAreaView>
    </>
  );
};

export default BookingHistory;
