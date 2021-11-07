import React, {useState, useContext} from 'react';
import colors from '../../Common/colors';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import background from '../../assets/images/background.jpg';
import profile from '../../assets/images/Profile.png';
import user from '../../assets/images/user.png';
import pass from '../../assets/images/padlock.png';
import arrow from '../../assets/images/left-arrow.png';
import phone from '../../assets/images/phone.png';
import emailimg from '../../assets/images/email.png';
import {useNavigation} from '@react-navigation/native';
import {doLogin, doSignup} from '../../services/login';
import {height} from '../../Common/style';

const SignUpmain = () => {
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [loader, setLoader] = useState(false);

  const [enableShift, setEnableShift] = useState(false);
  const navigation = useNavigation();
  // const {register} = useContext(AuthContext);
  // const submitSignUpForm = async () => {
  //   try {
  //     const req = {
  //       username,
  //       email,
  //       password,
  //       phoneNumber,
  //     };
  //     const res = await doSignUp(req);
  //     console.log(res);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
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
      alert(req);
      doLogin(req)
        .then(res => {
          if (res?.token) {
            AsyncStorage.setItem(constants.token, JSON.stringify(res)).then(
              () => {
                setLoggedInUser(res, dispatch);
                getProfileDetails(res?.token, dispatch);
                navigation.navigate('Home');
              },
            );
          } else {
            Alert.alert('Invalid Credential');
          }
          setLoader(false);
        })
        .catch(e => {
          setLoader(false);
        });
    } catch (e) {
      Alert.alert(e?.message);
      setLoader(false);
    }
  };
  const submitSignupPage = async () => {
    if (loader) {
      return;
    }
    setLoader(true);
    try {
      const req = {
        first_name: fName,
        last_name: lName,
        email,
        phone: phoneNumber,
        password,
      };
      const res = await doSignup(req);
      if (res?.message === 'CREATED') {
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
    <>
      <KeyboardAvoidingView>
        <ScrollView>
          <ImageBackground style={styles.background_img} source={background}>
            <View style={styles.overlay}>
              <View style={styles.header}>
                <Image
                  source={require('../../assets/images/left-arrow.png')}
                  style={styles.icon}
                  onPress={() => navigation.navigate('Login')}
                />

                <Text style={styles.text_header}>Sign up</Text>
              </View>

              <View style={styles.logo_section}>
                <Image source={profile} alt="Profile" style={styles.logo} />
              </View>
              <View style={styles.footer}>
                <View style={styles.text_icon}>
                  <Image source={user} alt="Profile" style={styles.icon} />
                  <Text style={styles.email_text}>First Name</Text>
                </View>
                <TextInput
                  placeholder="First Name"
                  placeholderTextColor={colors.black}
                  textContentType="name"
                  autoCapitalize="none"
                  style={styles.text_input}
                  onChangeText={fName => setFName(fName)}
                  value={fName}
                />

                <View style={styles.text_icon}>
                  <Image source={user} alt="Profile" style={styles.icon} />
                  <Text style={styles.email_text}>Last Name</Text>
                </View>
                <TextInput
                  placeholder="Last Name"
                  textContentType="name"
                  autoCapitalize="none"
                  style={styles.text_input}
                  onChangeText={lName => setLName(lName)}
                  value={lName}
                  placeholderTextColor={colors.black}
                />

                <View style={styles.text_icon}>
                  <Image source={emailimg} style={styles.icon} />
                  <Text style={styles.email_text}>Email</Text>
                </View>
                <TextInput
                  placeholder="Your Email"
                  textContentType="emailAddress"
                  autoCapitalize="none"
                  style={styles.text_input}
                  onChangeText={userEmail => setEmail(userEmail)}
                  placeholderTextColor={colors.black}
                  // value={email}
                />

                <View style={styles.text_icon}>
                  <Image source={pass} style={styles.icon} />
                  <Text style={styles.email_text}>Password</Text>
                </View>
                <TextInput
                  placeholder="Your Password"
                  textContentType="password"
                  autoCapitalize="none"
                  style={styles.text_input}
                  onFocus={() => setEnableShift(true)}
                  secureTextEntry={true}
                  onChangeText={userPassword => setPassword(userPassword)}
                  placeholderTextColor={colors.black}
                  // value={password}
                />

                <View style={styles.text_icon}>
                  <Image source={phone} style={styles.icon} />
                  <Text style={styles.email_text}>Phone Number</Text>
                </View>
                <TextInput
                  placeholder="Your Phone Number"
                  textContentType="telephoneNumber"
                  autoCapitalize="none"
                  style={styles.text_input}
                  onFocus={() => setEnableShift(true)}
                  onChangeText={userNumber => setPhoneNumber(userNumber)}
                  value={phoneNumber}
                  placeholderTextColor={colors.black}
                />

                <TouchableOpacity
                  style={styles.btns}
                  // onPress={submitSignUpForm}
                  onPress={submitSignupPage}
                  activeOpacity={loader ? 1 : 0.7}>
                  {loader ? (
                    <ActivityIndicator size="small" color={colors.white} />
                  ) : (
                    <Text style={styles.btn_txt}> Signup </Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUpmain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
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
    color: colors.primaryBlack,
    fontWeight: 'normal',
    fontSize: 24,
  },

  logo_section: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  logo: {
    height: 160,
    width: 160,
  },

  footer: {
    padding: 20,
  },

  text_icon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 15,
  },

  email_text: {
    color: colors.primaryBlack,
    fontSize: 20,
    marginLeft: 20,
    fontWeight: 'bold',
  },

  text_input: {
    borderBottomWidth: 2,
    color: colors.black,
    fontSize: 15,
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
    marginTop: 40,
    marginBottom: 20,
  },

  btn_txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
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
    width: 20,
    height: 20,
    marginTop: 3,
  },
});
