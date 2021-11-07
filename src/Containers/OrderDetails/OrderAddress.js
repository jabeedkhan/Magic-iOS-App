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
const OrderAddress = ({order}) => {
  return (
    <>
      <OrderSection label={'Address'}>
        <View style={styles.container}>
          <Text style={styles.text}>City:</Text>
          <Text style={styles.text}>{order?.city_name}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>State:</Text>
          <Text style={styles.text}>{order?.state_name}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Address:</Text>
          <Text style={styles.text}>{order?.service_address}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Phone:</Text>
          <Text style={styles.text}>{order?.phone}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Alternate Phone:</Text>
          <Text style={styles.text}>{order?.alternate_phone}</Text>
        </View>
      </OrderSection>
    </>
  );
};

export default OrderAddress;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  text: {
    flex: 1,
  },
});
