import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import colors from '../../Common/colors';
import logo from '../../assets/images/logo.png';
import {width} from '../../Common/style';

const CustomHeader = () => {
  return (
    <>
      <View style={styles.HomeContainer}>
        <View style={styles.logo_section}>
          <Image source={logo} alt="Magic Hands" style={styles.logo} />
        </View>
      </View>
    </>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  HomeContainer: {
    // flex: 1,
    backgroundColor: colors.matteBlack,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    marginBottom: -10,
  },
  logo_section: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
