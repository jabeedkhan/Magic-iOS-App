import React, {useState, useContext} from 'react';
import colors from '../../Common/colors';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {AuthContext} from '../../navigation/AuthProvider';
import Cookie from 'react-native-cookie';
import logo from '../../assets/images/logo.png';
import user from '../../assets/images/user.png';
import pass from '../../assets/images/padlock.png';
// import arrow from '../../assets/images/left-arrow.png';
import background from '../../assets/images/background.jpg';
import {doLogin} from '../../services/login';
import constants from '../../Common/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getLoggedInUser,
  getProfileDetails,
  setLoggedInUser,
} from '../../actions/common';
import {Store} from '../../store/store';
import {height} from '../../Common/style';

const LoginMain = () => {
  const {dispatch} = useContext(Store);
  const [enableShift, setEnableShift] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loader, setLoader] = useState(false);

  const navigation = useNavigation();

  const submitLoginForm = async () => {
    if (loader) {
      return;
    }
    setLoader(true);
    try {
      const req = {
        email,
        password,
      };
      const res = await doLogin(req);
      // alert(res?.token);
      if (res?.token) {
        AsyncStorage.setItem(constants.token, JSON.stringify(res)).then(() => {
          setLoggedInUser(res, dispatch);
          getProfileDetails(res?.token, dispatch);
          navigation.navigate('Home');
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
      <View style={styles.container}>
        <ImageBackground style={styles.background_img} source={background}>
          <View style={styles.overlay}>
            <KeyboardAvoidingView behavior="position" enabled={enableShift}>
              <View>
                <View style={styles.logo_section}>
                  <Image source={logo} alt="Magic Hands" style={styles.logo} />
                </View>

                <View style={styles.footer}>
                  <View style={styles.text_icon}>
                    <Image source={user} style={styles.icon} />
                    <Text style={styles.email_text}>Username</Text>
                  </View>
                  <TextInput
                    placeholder="Your Username"
                    autoCapitalize="none"
                    style={styles.text_input}
                    onChangeText={userEmail => setEmail(userEmail)}
                    value={email}
                    placeholderTextColor={colors.black}
                  />

                  <View style={styles.text_icon}>
                    <Image source={pass} style={styles.icon} />
                    <Text style={styles.email_text}>Password</Text>
                  </View>
                  <TextInput
                    placeholder="Your Password"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    style={styles.text_input}
                    onChangeText={userPassword => setPassword(userPassword)}
                    value={password}
                    onFocus={() => setEnableShift(true)}
                    placeholderTextColor={colors.black}
                  />
                  <Text
                    style={styles.pass}
                    onPress={() => navigation.navigate('Forgot')}>
                    Forgot Password ?
                  </Text>

                  <TouchableOpacity
                    style={styles.btns}
                    onPress={submitLoginForm}
                    activeOpacity={loader ? 1 : 0.7}>
                    {loader ? (
                      <ActivityIndicator size="small" color={colors.white} />
                    ) : (
                      <Text style={styles.btn_txt}> Log In </Text>
                    )}
                  </TouchableOpacity>

                  <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Text
                      style={styles.signup}
                      onPress={() => navigation.navigate('SignUp')}>
                      Don't have an account?
                      <Text style={{fontWeight: 'bold'}}> Sign Up</Text>
                    </Text>
                  </View>
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default LoginMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.submit,
    height: height(100),
  },

  background_img: {
    height: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },

  text_header: {
    color: colors.black,
    fontWeight: 'normal',
    fontSize: 24,
  },

  logo_section: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 120,
  },

  footer: {
    padding: 20,
  },

  text_icon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginLeft: 5,
  },

  email_text: {
    color: colors.black,
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  text_input: {
    borderBottomWidth: 2,
    color: colors.black,
    fontSize: 15,
  },

  pass: {
    marginTop: 20,
    fontWeight: 'normal',
    fontSize: 16,
    color: colors.black,
    marginBottom: 20,
    textAlign: 'right',
  },

  btns: {
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: colors.black,
    margin: 5,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  btn_txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },

  signup: {
    display: 'flex',
    width: '100%',
    marginTop: 30,
    fontWeight: 'normal',
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
    marginBottom: 70,
  },
  overlay: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: colors.primary,
    opacity: 0.9,
    height: height(100),
  },

  icon: {
    width: 16,
    height: 16,
    marginTop: 0,
  },
});
