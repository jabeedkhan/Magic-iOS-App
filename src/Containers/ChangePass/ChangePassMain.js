import React from 'react';
import {useContext} from 'react';
import {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert,
} from 'react-native';
import colors from '../../Common/colors';
import {width} from '../../Common/style';
import {doChangePassword} from '../../services/login';
import {Store} from '../../store/store';

const ChangePassMain = () => {
  const [oldP, setOldP] = useState('');
  const [newP, setNewP] = useState('');
  const [confP, setConfP] = useState('');
  const [loader, setLoader] = useState(false);
  const {state} = useContext(Store);
  const submitChangePassword = async () => {
    if (newP !== confP) {
      Alert.alert('Mismatch new password and confirm password');
      return;
    }
    if (loader) {
      return;
    }
    setLoader(true);
    try {
      const req = {
        id: state?.common?.profile?.user?.id,
        old_password: oldP,
        new_password: newP,
      };
      const res = await doChangePassword(req);
      if (res?.message) {
        Alert.alert(res?.message);
      } else {
        Alert.alert('Something went wrong');
      }
      setLoader(false);
    } catch (e) {
      Alert.alert(e?.message);
      setLoader(false);
    }
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Your Old Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputBox}
            placeholder="Your OLD password"
            secureTextEntry={true}
            onChangeText={val => setOldP(val)}
          />
          <Image
            style={styles.icon}
            source={require('../../assets/images/padlock.png')}
          />
        </View>

        <Text style={styles.text}>Your New Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputBox}
            placeholder="Your new password"
            secureTextEntry={true}
            onChangeText={val => setNewP(val)}
          />
          <Image
            style={styles.icon}
            source={require('../../assets/images/padlock.png')}
          />
        </View>

        <Text style={styles.text}>Confirm New Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputBox}
            secureTextEntry={true}
            placeholder="Your new password"
            onChangeText={val => setConfP(val)}
          />
          <Image
            style={styles.icon}
            source={require('../../assets/images/padlock.png')}
          />
        </View>
        <TouchableOpacity
          style={styles.butn}
          onPress={submitChangePassword}
          activeOpacity={loader ? 1 : 0.7}>
          {loader ? (
            <ActivityIndicator size="small" color={colors.white} />
          ) : (
            <Text style={styles.butnText}>Update</Text>
          )}
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ChangePassMain;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backdroundWhite,
  },

  mainText: {
    color: colors.primary,
    fontSize: 46,
    fontWeight: 'bold',
    marginTop: 60,
    marginLeft: 20,
    marginBottom: 30,
  },
  inputBox: {
    color: colors.black,
  },
  icon: {
    width: 20,
    height: 20,
    marginTop: 15,
    marginRight: 20,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: colors.secondary,
    borderWidth: 1,
    borderColor: colors.submit,
    margin: 10,
    marginLeft: 10,
    borderRadius: 5,
    paddingLeft: 10,
  },

  butn: {
    width: width(90),
    marginLeft: width(5),
    marginTop: width(7),
    backgroundColor: colors.submit,
    padding: width(3),
    borderRadius: 5,
    alignItems: 'center',
  },

  butnText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.white,
  },
  text: {
    paddingTop: 5,
    fontSize: 14,
    fontWeight: 'normal',
    marginLeft: 10,
    color: colors.black,
  },
});
