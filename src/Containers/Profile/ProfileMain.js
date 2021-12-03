import React, {useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import logo from '../../assets/images/logo.png';
import colors from '../../Common/colors';
import {Store} from '../../store/store';
import {useContext} from 'react';
import {height, width} from '../../Common/style';
import {doLogout, getProfileDetails} from '../../actions/common';
const getUserData = (state, key) => {
  // alert(JSON.stringify(state));
  if (state?.common?.profile?.user) return state?.common?.profile?.user[key];
  return null;
};
const getShortName = (fname, lname) => {
  let nm = '';
  if (fname) {
    nm += fname[0];
  }
  if (lname) {
    nm += lname[0];
  }
  return nm;
};
const getUserId = () => {
  // alert(JSON.stringify(state.common.profile.user.id));

  return state.common.profile.user.id;
};
const ProfileMain = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {state, dispatch} = useContext(Store);
  // alert(JSON.stringify(state?.common));
  useEffect(() => {
    // alert(JSON.stringify(state));
    // if (route.name === 'Profile') {
    if (state?.data?.user?.token) getProfileDetails(dispatch);
    // }
  }, [state?.data?.user?.token, state?.data?.profile?.user, route.key]);
  if (!state?.common?.user?.token) {
    return (
      <View style={styles.loginCtaContainer}>
        <View style={styles.logo_section}>
          <Image source={logo} alt="Magic Hands" style={styles.logo} />
        </View>
        <TouchableOpacity
          style={styles.loginContainer}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginCta}>Please Login to Proceed</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
      <SafeAreaView>
      <View style={styles.profileMain}>
        <View style={styles.profilenameBox}>
          {/* <Image
            source={{
              uri: `https://magichands.co/magich/${getUserData(
                state,
                'image_url',
              )}`,
            }}
            style={styles.profileImg}
          /> */}
          <Text style={styles.shortAlpha}>{`${getShortName(
            getUserData(state, 'first_name'),
          )}${getShortName(getUserData(state, 'last_name'))}`}</Text>
          <Text style={styles.name}>{`${getUserData(
            state,
            'first_name',
          )} ${getUserData(state, 'last_name')}`}</Text>
          <Text style={styles.number}>+91 {getUserData(state, 'phone')}</Text>
          {/* <ProgressBarAndroidComponent progress={0.5} color={colors.primaryBlack} /> */}
        </View>
      </View>
      <View style={styles.listContainer} getUserId={getUserId}>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <View style={styles.listBox}>
            <Image
              source={require('../../assets/images/edit.png')}
              style={styles.listIcon}
            />
            <Text style={styles.listText}>Edit Profile</Text>
            <Image
              source={require('../../assets/images/arrow.png')}
              style={styles.listIcon}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ChangePass')}>
          <View style={styles.listBox}>
            <Image
              source={require('../../assets/images/password.png')}
              style={styles.listIcon}
            />
            <Text style={styles.listText}>Change Password</Text>
            <Image
              source={require('../../assets/images/arrow.png')}
              style={styles.listIcon}
            />
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => navigation.navigate('BookingHistory')}>
          <View style={styles.listBox}>
            <Image
              source={require('../../assets/images/calendar.png')}
              style={styles.listIcon}
            />
            <Text style={styles.listText}>Booking History</Text>
            <Image
              source={require('../../assets/images/arrow.png')}
              style={styles.listIcon}
            />
          </View>
        </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={() => navigation.navigate('UpdateAdd')}>
          <View style={styles.listBox}>
            <Image
              source={require('../../assets/images/pin.png')}
              style={styles.listIcon}
            />
            <Text style={styles.listText}>Update Address</Text>
            <Image
              source={require('../../assets/images/arrow.png')}
              style={styles.listIcon}
            />
          </View>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
          <View style={styles.listBox}>
            <Image
              source={require('../../assets/images/contact.png')}
              style={styles.listIcon}
            />
            <Text style={styles.listText}>Contact Us</Text>
            <Image
              source={require('../../assets/images/arrow.png')}
              style={styles.listIcon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
          <View style={styles.listBox}>
            <Image
              source={require('../../assets/images/aboutUs.png')}
              style={styles.listIcon}
            />
            <Text style={styles.listText}>About Us</Text>
            <Image
              source={require('../../assets/images/arrow.png')}
              style={styles.listIcon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
            doLogout();
          }}>
          <View style={styles.listBox}>
            <Image
              source={require('../../assets/images/aboutUs.png')}
              style={styles.listIcon}
            />
            <Text style={styles.listText}>Logout</Text>
            <Image
              source={require('../../assets/images/arrow.png')}
              style={styles.listIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ProfileMain;
const styles = StyleSheet.create({
  container: {
    height: height(100),
    backgroundColor: colors.backdroundWhite,
    flex: 1,
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
  profilenameBox: {
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    alignItems: 'center',
  },
  profileImg: {
    width: width(20),
    height: width(20),
    borderRadius: width(20),
    marginHorizontal: 'auto',
    marginBottom: width(5),
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  shortAlpha: {
    backgroundColor: colors.submit,
    padding: width(4),
    borderRadius: width(50),
    fontSize: width(8),
    textTransform: 'uppercase',
    color: colors.white,
    marginBottom: 10,
  },
  number: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
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
    width: '90%',
    margin: 20,
    borderRadius: 10,
    paddingBottom: 70,
  },

  listBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: width(3),
    borderBottomWidth: 2,
    borderColor: colors.gray,
    paddingBottom: 10,
  },

  listIcon: {
    width: width(7),
    height: width(7),
  },
  listText: {
    color: colors.black,
    fontSize: width(5),
    fontWeight: 'bold',
    textAlign: 'left',
    flex: 1,
    paddingLeft: width(3),
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
