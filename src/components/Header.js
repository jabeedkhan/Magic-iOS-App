import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = ({title}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  title: {
    fontSize: 20,
  },
});
export default Header;
