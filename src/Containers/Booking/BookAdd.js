import React, {useState, useContext, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import colors from '../../Common/colors';
import {width} from '../../Common/style';
import {Store} from '../../store/store';
import {useNavigation} from '@react-navigation/native';

const BookTest = ({service}) => {
  const {state} = useContext(Store);
  const {cities, states} = state?.common;
  const [selectedState, setselectedState] = useState(states[0]?.state_code);
  const [selectedCity, setSelectedCity] = useState();
  const [address, onChangeAddress] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    setselectedState(states[0]?.state_code);
  }, [states?.length]);
  useEffect(() => {
    setSelectedCity(cities[0]?.city_code);
  }, [cities?.length]);
  const filterCitiesByState = () => {
    return cities?.filter(city => city?.state_code === selectedState);
  };
  const getCityDet = city_code => {
    const a = cities?.find(city => city?.city_code === city_code);
    return a;
  };
  const getStateDet = state_code => {
    return states?.find(state => state?.state_code === state_code);
  };
  return (
    <>
      <View style={styles.pickerContainer}>
        <Text style={styles.text}>Select Your State</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedState}
            onValueChange={(itemValue, itemIndex) =>
              setselectedState(itemValue)
            }>
            {states.map((state, index) => (
              <Picker.Item
                style={styles.pickeritem}
                label={state.state_name}
                value={state.state_code}
                key={state.state_code + index}
              />
            ))}
          </Picker>
        </View>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.text}>Select Your City</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedCity}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedCity(itemValue)
            }>
            {filterCitiesByState().map((city, index) => (
              <Picker.Item
                style={styles.pickeritem}
                label={city.city_name}
                value={city.city_code}
                key={city.city_code + index}
              />
            ))}
          </Picker>
        </View>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.text}>Address</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
          numberOfLines={20}
          multiline={true}
          placeholder="Your Address"
          placeholderTextColor={colors.black}
          textAlignVertical={'top'}
        />
      </View>
      <View style={styles.pickerContainer}>
        <TouchableOpacity
          style={styles.proceed}
          onPress={() =>
            navigation.navigate('Checkout', {
              service,
              address: {
                city: getCityDet(selectedCity),
                state: getStateDet(selectedState),
                address,
              },
            })
          }>
          <Text style={styles.proceedText}>Proceed to checkout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BookTest;

const styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: colors.primaryBlack,
    margin: 10,
    borderRadius: 20,
    width: '90%',
    color: colors.black,
  },
  text: {
    paddingTop: 5,
    fontSize: 14,
    fontWeight: 'normal',
    color: colors.black,
  },
  pickeritem: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 20,
    color: colors.black,
  },
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.black,
    borderRadius: 8,
    marginTop: 5,
    color: colors.black,
    height: 150,
    justifyContent: 'flex-start',
  },
  addtext: {
    color: colors.white,
    marginTop: 20,
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  picker: {
    flex: 1,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.black,
    borderRadius: 8,
    marginTop: 5,
  },
  proceed: {
    backgroundColor: colors.submit,
    padding: 10,
    borderRadius: 8,
  },
  proceedText: {
    fontSize: width(4),
    textAlign: 'center',
    color: colors.white,
  },
});
