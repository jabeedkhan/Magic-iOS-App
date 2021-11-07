import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import colors from '../../Common/colors';
import CheckBox from '@react-native-community/checkbox';
import {width} from '../../Common/style';

const PaymentMethod = () => {
  const [isSelected, setIsSelected] = useState(true);
  return (
    <>
      <View style={styles.container}>
        <CheckBox
          value={isSelected}
          onValueChange={() => setIsSelected(!isSelected)}
          style={styles.checkbox}
          disabled={true}
        />
        <Text style={styles.label}>Cash on Delivery</Text>
      </View>
    </>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.matteBlack,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  checkbox: {
    // width: width(10),
    // height: width(10),
  },
  label: {
    fontSize: width(5),
    marginLeft: 5,
  },
});
