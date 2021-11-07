import React from 'react';
import {Text, StyleSheet} from 'react-native';
import colors from '../../Common/colors';
import {width} from '../../Common/style';

const Head = ({label}) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
    </>
  );
};

export default Head;

const styles = StyleSheet.create({
  label: {fontSize: width(5), color: colors.black, fontWeight: '700'},
});
