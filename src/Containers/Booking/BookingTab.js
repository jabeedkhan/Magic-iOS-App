import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import colors from '../../Common/colors';
import {width} from '../../Common/style';
import BookAdd from './BookAdd';
import Drop from './Drop';

const BookingTab = ({service}) => {
  const [index, setIndex] = React.useState(0);
  return (
    <>
      <View style={styles.container}>
        {service?.isPickup && (
          <View style={styles.tabContainer}>
            <TouchableOpacity
              onPress={() => setIndex(0)}
              style={[styles.tabBtn, index === 0 ? styles.active : {}]}>
              <Text style={[styles.tab, index === 0 ? styles.activeText : {}]}>
                Pick Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIndex(1)}
              style={[styles.tabBtn, index === 1 ? styles.active : {}]}>
              <Text style={[styles.tab, index === 1 ? styles.activeText : {}]}>
                Drop you Car
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {index === 0 ? (
          <BookAdd service={service} />
        ) : (
          <Drop service={service} />
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#f2f2f2',
  },
  tabContainer: {
    flexDirection: 'row',
    width: width(100),
  },
  tabBtn: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.primary,
    fontSize: width(4),
  },
  active: {
    backgroundColor: colors.submit,
  },
  activeText: {
    backgroundColor: colors.submit,
    color: colors.white,
  },
  tab: {
    textAlign: 'center',
    flex: 1,
    color: colors.black,
  },
});
export default BookingTab;
