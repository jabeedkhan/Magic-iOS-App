import React, {useState, useContext, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import colors from '../../Common/colors';
import {width} from '../../Common/style';
import {Store} from '../../store/store';
import {doLogin} from '../../services/login';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-navigation';

const BookTest = ({service}) => {
  const {state} = useContext(Store);
  const {cities, states} = state?.common;
  const [selectedState, setselectedState] = useState(states[0]?.state_code);
  const [selectedCity, setSelectedCity] = useState();
  const [address, onChangeAddress] = useState();
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [loader, setLoader] = useState(false);
  const [enableShift, setEnableShift] = useState(false);
  const [alreadyLoggedin, setAlreadyLoggein] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    setselectedState(states[0]?.state_code);
  }, [states?.length]);
  useEffect(() => {
    setSelectedCity(cities[0]?.city_code);
  }, [cities?.length]);
  useEffect(() => {
    setFName(state?.common?.profile?.user?.first_name);
  }, [state?.common?.profile?.user?.first_name]);
  useEffect(() => {
    setLName(state?.common?.profile?.user?.last_name);
  }, [state?.common?.profile?.user?.last_name]);
  useEffect(() => {
    setEmail(state?.common?.profile?.user?.email);
  }, [state?.common?.profile?.user?.email]);
  useEffect(() => {
    setPhoneNumber(state?.common?.profile?.user?.phone);
  }, [state?.common?.profile?.user?.phone]);
  useEffect(async () => {
    const token = await AsyncStorage.getItem('token');
    if (token && token.length > 0) {
      setAlreadyLoggein(true);
    }

    setPassword(state?.common?.profile?.user?.password);
  }, [state?.common?.profile?.user]);
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
  const goToCheckoutPage = () => {
    navigation.navigate('Checkout', {
      service,
      address: {
        city: getCityDet(selectedCity),
        state: getStateDet(selectedState),
        address,
      },
    });
  };

  const saveResponse = async response => {
    try {
      await AsyncStorage.setItem('token', JSON.stringify(response));
      // navigate to order to process.
      goToCheckoutPage();
    } catch (error) {
      // Error saving data
    }
  };

  const submitSignupPage = async () => {
    try {
      const req = {
        first_name: fName,
        last_name: lName,
        email,
        phone: phoneNumber,
        password,
      };
      const res = await doLogin(req);
      if (res && res.token && res.token.length > 0) {
        saveResponse(res);
        setLoader(false);
      } else if (res?.message === 'CREATED') {
        Alert.alert('Your Account Registered Successfully');
        navigation.goBack();
      } else {
        Alert.alert('Invalid Credential');
        setLoader(false);
      }
    } catch (e) {
      Alert.alert(e?.message);
      setLoader(false);
    }
  };
  return (
    <SafeAreaView >
      <ScrollView style={{flex: 1}}>
        <View style={styles.pickerContainer}>
          <Text style={styles.text}>First Name</Text>
          <View style={styles.picker}>
            <TextInput
              placeholder="First Name"
              placeholderTextColor={colors.black}
              textContentType="name"
              autoCapitalize="none"
              style={styles.text_input}
              onChangeText={fName => setFName(fName)}
              value={fName}
            />
          </View>
        </View>
        <View style={styles.pickerContainer}>
          <Text style={styles.text}>Last Name</Text>
          <View style={styles.picker}>
            <TextInput
              placeholder="Last Name"
              placeholderTextColor={colors.black}
              textContentType="name"
              autoCapitalize="none"
              onChangeText={lName => setLName(lName)}
              value={lName}
              style={styles.text_input}
            />
          </View>
        </View>
        <View style={styles.pickerContainer}>
          <Text style={styles.text}>Your Email</Text>
          <View style={styles.picker}>
            <TextInput
              placeholder="Your Email"
              textContentType="emailAddress"
              autoCapitalize="none"
              onChangeText={userEmail => setEmail(userEmail)}
              style={[
                styles.text_input,
                alreadyLoggedin ? styles.disabledBackgroundColor : {},
              ]}
              placeholderTextColor={colors.black}
              value={email}
              editable={alreadyLoggedin ? false : true}
            />
          </View>
        </View>
        <View style={styles.pickerContainer}>
          <Text style={styles.text}>Phone Number</Text>
          <View style={styles.picker}>
            <TextInput
              placeholder="Your Phone Number"
              textContentType="telephoneNumber"
              autoCapitalize="none"
              keyboardType="numeric"
              onFocus={() => setEnableShift(true)}
              onChangeText={userNumber => setPhoneNumber(userNumber)}
              value={phoneNumber}
              style={[
                styles.text_input,
                alreadyLoggedin ? styles.disabledBackgroundColor : {},
              ]}
              placeholderTextColor={colors.black}
              editable={alreadyLoggedin ? false : true}
            />
          </View>
        </View>
        {!alreadyLoggedin ? (
          <View style={styles.pickerContainer}>
            <Text style={styles.text}>Password</Text>
            <View style={styles.picker}>
              <TextInput
                placeholder="Your Password"
                // textContentType="oneTimeCode"
                textContentType="none"
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.text_input}
                onFocus={() => setEnableShift(true)}
                secureTextEntry={true}
                // editable={disableField ? false: true}
                selectTextOnFocus={false}
                onChangeText={userPassword => setPassword(userPassword)}
                placeholderTextColor={colors.black}
              />
            </View>
          </View>
        ) : null}
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
            onPress={alreadyLoggedin ? goToCheckoutPage : submitSignupPage}>
            <Text style={styles.proceedText}>Proceed to checkout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    padding:10,
    
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
  text_input: {
    borderBottomWidth: 0,
    color: colors.black,
    fontSize: 15,
    opacity: 1.0,
    height:30
  },
  disabledBackgroundColor: {
    backgroundColor: colors.gray,
    opacity: 0.9,
    flex:1
    
  },
});
