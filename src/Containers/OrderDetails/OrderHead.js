import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {toHHMMSS, toMMMDDYYY} from '../../Common/utils';
import OrderSection from './OrderSection';

const getDateTime = (type, date) => {
  const d = date.toString().split(' ');
  if (type === 'date') {
    return d.length > 0 ? d[0] : null;
  }
  return d.length > 1 ? d[1] : null;
};
const OrderHead = ({order}) => {
  return (
    <>
      <OrderSection label={'View Order Details'}>
        <View style={styles.container}>
          <Text style={styles.text}>Order ID:</Text>
          <Text style={styles.text}>{order?.id}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Reference ID:</Text>
          <Text style={styles.text}>{order?.booking_reference}</Text>
        </View>

        {getDateTime('date', order?.add_date) && (
          <View style={styles.container}>
            <Text style={styles.text}>Order Date:</Text>
            <Text style={styles.text}>
              {getDateTime('date', order?.add_date)}
            </Text>
          </View>
        )}

        {getDateTime('time', order?.add_date) && (
          <View style={styles.container}>
            <Text style={styles.text}>Order Time:</Text>
            <Text style={styles.text}>
              {getDateTime('time', order?.add_date)}
            </Text>
          </View>
        )}
      </OrderSection>
    </>
  );
};

export default OrderHead;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  text: {
    flex: 1,
  },
});
