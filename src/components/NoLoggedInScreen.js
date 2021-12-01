import React, {useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import logo from '../assets/images/logo.png';
import colors from '../Common/colors';
import {Store} from '../store/store';
import {useContext} from 'react';
import {width} from '../Common/style';
import {getProfileDetails} from '../actions/common';
import BookTest from '../Containers/Booking/BookAdd';
const getUserData = (state, key) => {
  // alert(JSON.stringify(state));
  return state?.common?.profile?.user[key];
};
const NoLoggedInScreen = ({children}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const {state, dispatch} = useContext(Store);
  useEffect(() => {}, [state?.data?.user?.token, route.key]);
  const user = state?.common?.profile?.user ? state?.common?.profile?.user : null;
  // if (!state?.common?.profile?.user) {
  //   return (
  //     <View style={styles.loginCtaContainer}>
  //       <View style={styles.logo_section}>
  //         <Image source={logo} alt="Magic Hands" style={styles.logo} />
  //       </View>
  //       <TouchableOpacity
  //         style={styles.loginContainer}
  //         onPress={() => navigation.navigate('Login')}>
  //         <Text style={styles.loginCta}>Please Login to Proceed</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // }
      // <BookTest user/>
  return children;
};

export default NoLoggedInScreen;

const styles = StyleSheet.create({
  container: {
    // height: '100%',
    width: '100%',
    backgroundColor: colors.backdroundWhite,
  },

  profileMain: {
    backgroundColor: colors.primary,
    width: '90%',
    margin: 20,
    padding: width(5),
    borderRadius: 10,
    // shadowColor: colors.primaryBlack,
    // shadowOpacity: 0.20,
    // shadowOffset: {width: 2, height: 0},
    // shadowRadius: 10,
    // elevation: 3,
  },

  iconHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },

  profilenameBox: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  profileImg: {
    width: width(20),
    height: width(20),
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  number: {
    textAlign: 'center',
    fontSize: 20,
  },

  profileButton: {
    borderWidth: 2,
    borderColor: '#000',
    padding: 10,
    width: 250,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginTop: 20,
    fontSize: 18,
  },

  listContainer: {
    backgroundColor: colors.primaryBlack,
    height: 280,
    width: '90%',
    margin: 20,
    borderRadius: 10,
  },

  listBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    borderWidth: 2,
    borderColor: colors.primary,
    paddingBottom: 20,
  },

  listIcon: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginLeft: 10,
  },
  listText: {
    color: colors.black,
    marginTop: 25,
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginCtaContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.backdroundWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    backgroundColor: colors.submit,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 120,
  },
  loginCta: {
    fontSize: width(4),
    textAlign: 'center',
    color: colors.white,
  },
  logo_section: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
