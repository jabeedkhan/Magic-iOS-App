import React from 'react';
import BookingHistoryMain from './BookingHistoryMain';
import CommonHeader from '../../components/CommonHeader';

const BookingHistory = () => {
  return (
    <>
      <CommonHeader headText={'Booking History'} backPage="Home" />
      <BookingHistoryMain />
    </>
  );
};

export default BookingHistory;
