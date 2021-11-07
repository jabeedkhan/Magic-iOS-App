import React from 'react';
import {ScrollView, StyleSheet, View, Text, Image} from 'react-native';
import colors from '../../Common/colors';
import {width} from '../../Common/style';

const AddressDetails = ({address, type}) => {
  //   alert(JSON.stringify(address));
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.title}>
            {type === 1 ? 'Drop Address' : 'Pick up Address'}
          </Text>
          {type === 1 ? (
            <>
              <Text style={styles.desc}>{address?.address?.address}</Text>
              <Text style={styles.desc}>{address?.address?.city}</Text>
              <Text style={styles.desc}>{address?.address?.state}</Text>
              <Text style={styles.desc}>{address?.address?.zip}</Text>
            </>
          ) : (
            <>
              <Text style={styles.desc}>{address?.address}</Text>
              <Text style={styles.desc}>{address?.city?.city_name}</Text>
              <Text style={styles.desc}>{address?.state?.state_name}</Text>
            </>
          )}
        </View>
      </View>
    </>
  );
};

export default AddressDetails;

const styles = StyleSheet.create({
  mainContainer: {flexDirection: 'row', padding: 16, flex: 1},
  nameContainer: {flex: 1},
  title: {fontSize: width(6)},
  desc: {fontSize: width(4)},
  imageContainer: {},
  image: {width: width(20), height: width(20), borderRadius: 8, marginLeft: 8},
});
