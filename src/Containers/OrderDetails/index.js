import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import OrderHead from './OrderHead';
import colors from '../../Common/colors';
import CommonHeader from '../../components/CommonHeader';
import {useRoute} from '@react-navigation/native';
import OrderServices from './OrderServices';
import OrderAddress from './OrderAddress';

const OrderDetails = () => {
  const route = useRoute();
  const {order, service, address} = route.params;
  return (
    <>
      <CommonHeader headText={`Order # - ${order?.id}`} />
      <ScrollView>
        <View style={styles.BookingContainer}>
          <OrderHead order={order} />
        </View>
        <View style={styles.BookingContainer}>
          <OrderServices order={order} />
        </View>
        <View style={styles.BookingContainer}>
          <OrderAddress order={order} />
        </View>
      </ScrollView>
    </>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  BookingContainer: {
    flex: 1,
    backgroundColor: colors.matteBlack,
    // height: 100,
  },
  submitContainer: {padding: 16},
  orderBtn: {backgroundColor: colors.submit, padding: 10, alignItems: 'center'},
  proceedBtn: {
    color: colors.white,
  },
});
