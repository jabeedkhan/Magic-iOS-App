import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../../Common/colors';
import Head from './Head';
const OrderSection = ({label, children}) => {
  return (
    <>
      <View style={styles.container}>
        <Head label={label} />
        <View style={styles.section}>{children}</View>
      </View>
    </>
  );
};

export default OrderSection;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  section: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 4,
  },
});
