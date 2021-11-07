import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import colors from '../../Common/colors';
import {width} from '../../Common/style';

const HomeMain = () => {
  return (
    <>
      <View style={styles.HomeContainer}>
        <View style={styles.SearchBarMain}>
          <TextInput placeholder="Search" style={styles.SearchBar} />
          <Image
            source={require('../../assets/images/search.png')}
            style={styles.icon}
          />
        </View>
      </View>
    </>
  );
};

export default HomeMain;

const styles = StyleSheet.create({
  HomeContainer: {
    // flex: 1,
    width: width(100),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  SearchBarMain: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.background,
    borderWidth: 1.5,
    borderColor: colors.border,
    margin: 10,
    borderRadius: 8,
    marginTop: 20,
    width: width(88),
  },
  SearchBar: {
    paddingRight: 30,
    paddingLeft: 20,
    color: colors.black,
    width: 100,
    width: width(95),
  },
  icon: {
    position: 'absolute',
    alignSelf: 'center',
    right: 15,
    width: 20,
    height: 20,
    marginTop: 10,
    marginLeft: 10,
  },
});
