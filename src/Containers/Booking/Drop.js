import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import colors from '../../Common/colors';
import {height, width} from '../../Common/style';

const Drop = ({service}) => {
  const navigation = useNavigation();
  const [address, onChangeAddress] = useState([
    {
      address: 'alkdfjaslkdjflkajd\nalskdfjlkajd\nlaksjdflkjsaf',
      city: 'Chapra',
      state: 'Bihar',
      pin: '841301',
      id: 1,
    },
    {
      address: 'alkdfjaslkdjflkajd\nalskdfjlkajd\nlaksjdflkjsaf',
      city: 'Chapra',
      state: 'Bihar',
      pin: '841301',
      id: 2,
    },
  ]);
  const [selectedAdd, setSelectedAdd] = useState(null);

  return (
    <>
      <View style={styles.container}>
        {address?.map((add, index) => (
          <TouchableOpacity
            style={styles.addContainer}
            key={index}
            onPress={() =>
              navigation.navigate('Checkout', {
                service,
                type: 1,
                address: {
                  address: add,
                },
              })
            }>
            <Text>{add?.address}</Text>
            <Text>{add?.city}</Text>
            <Text>{add?.state}</Text>
            <Text>{add?.pin}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default Drop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addContainer: {
    marginHorizontal: width(5),
    marginVertical: width(2),
    backgroundColor: colors.white,
    borderRadius: 8,
    color: colors.black,
    width: width(90),
    padding: 8,
  },
  cta: {
    backgroundColor: colors.submit,
    padding: 10,
    fontSize: 20,
    width: width(100),
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 30,
    zIndex: 10,
  },
  ctaText: {color: colors.white, textAlign: 'center'},
});
