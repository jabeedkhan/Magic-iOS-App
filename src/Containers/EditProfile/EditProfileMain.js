import {Picker} from '@react-native-picker/picker';
import React, {useEffect, useState, useContext} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import colors from '../../Common/colors';
import {width} from '../../Common/style';
import {Store} from '../../store/store';
import {doEditProfile} from '../../services/editProfile';
import {getProfileDetails} from '../../actions/common';
import {useNavigation} from '@react-navigation/native';

const EditProfileMain = () => {
  const navigation = useNavigation();
  const [loader, setLoader] = useState(false);
  const [userid, setUserid] = useState(null);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [altPhone, setAltPhone] = useState('');
  const [gender, setGender] = useState('');
  const [file, setFile] = useState(null);
  const [fcmToken, setFcmToken] = useState(null);
  const [oldImage, setOldImage] = useState(null);

  const {state, dispatch} = useContext(Store);
  useEffect(() => {
    setFname(state?.common?.profile?.user?.first_name);
  }, [state?.common?.profile?.user?.first_name]);

  useEffect(() => {
    setLname(state?.common?.profile?.user?.last_name);
  }, [state?.common?.profile?.user?.last_name]);
  useEffect(() => {
    setAltPhone(state?.common?.profile?.user?.alternate_phone);
  }, [state?.common?.profile?.user?.alternate_phone]);
  const updateProfile = async () => {
    if (loader) {
      return;
    }
    setLoader(true);
    try {
      const req = {
        userid: state?.common?.profile?.user?.id,
        fname,
        lname,
        altPhone,
        file,
        oldImage,
        fcmToken,
        gender,
      };
      const res = await doEditProfile(req);
      if (res) {
        localStorage.setItem(userid, JSON.stringify(res)).then(() => {
          getProfileDetails(state?.common?.profile?.user?.id, dispatch);
          navigation.navigate('Profile');
        });
      } else {
        Alert.alert('Invalid Credential');
      }
      setLoader(false);
    } catch (e) {
      Alert.alert(e?.message);
      setLoader(false);
    }
  };

  return (
    <>
      <ScrollView style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter First Name"
            onChangeText={fname => setFname(fname)}
            value={fname}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Last Name"
            onChangeText={lname => setLname(lname)}
            value={lname}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            editable={false}
            value={state?.common?.profile?.user?.phone}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            editable={false}
            value={state?.common?.profile?.user?.email}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Alternate Phone</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Alternate Phone"
            onChangeText={altPhone => setAltPhone(altPhone)}
            value={altPhone}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Gender</Text>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue={gender}
              onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
              <Picker.Item
                style={styles.pickeritem}
                label={'Male'}
                value={'Male'}
              />
              <Picker.Item
                style={styles.pickeritem}
                label={'Female'}
                value={'Female'}
              />
            </Picker>
          </View>
        </View>
        <TouchableOpacity
          style={styles.submit}
          onPress={updateProfile}
          activeOpacity={loader ? 1 : 0.7}>
          {loader ? (
            <ActivityIndicator size="small" color={colors.white} />
          ) : (
            <Text style={styles.submitText}> Update </Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default EditProfileMain;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.matteBlack,
  },
  inputContainer: {
    paddingHorizontal: width(5),
    marginTop: width(7),
  },
  label: {
    fontSize: width(4),
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: width(5),
    paddingVertical: width(2),
    borderRadius: width(2),
    marginTop: 10,
    color: colors.black,
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: width(2),
    padding: 0,
    marginTop: 10,
  },
  picker: {padding: 20},
  submit: {
    width: width(90),
    marginLeft: width(5),
    marginTop: width(7),
    backgroundColor: colors.submit,
    padding: width(3),
    borderRadius: 8,
    marginBottom: 100,
    alignItems: 'center',
  },
  submitText: {
    color: colors.white,
  },
});
