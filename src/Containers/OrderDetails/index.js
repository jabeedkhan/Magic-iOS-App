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
import {useNavigation} from '@react-navigation/native';

const OrderDetails = () => {
  const route = useRoute();
  const {order, service, address} = route.params;
  const navigation = useNavigation();

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
        <View style={styles.pickerContainer}>
          <TouchableOpacity
            style={styles.proceed}
            onPress={() => navigation.push('Home')}>
            <Text style={styles.proceedText}>Proceed to Home</Text>
          </TouchableOpacity>
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
  pickerContainer: {
    backgroundColor: colors.primaryBlack,
    margin: 10,
    borderRadius: 20,
    width: '90%',
    color: colors.black,
  },
  proceed: {
    backgroundColor: colors.submit,
    padding: 10,
    borderRadius: 8,
  },
  proceedText: {
    textAlign: 'center',
    color: colors.white,
  },
});
