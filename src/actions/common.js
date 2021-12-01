import AsyncStorage from '@react-native-async-storage/async-storage';
import Cookie from 'react-native-cookie';
import constants from '../Common/constants';
import {
  SET_CITIES,
  SET_LOGGED_IN_USER,
  SET_PROFILE_DETAILS,
  SET_STATES,
} from '../reducers/actionnames';
import {fetchMetaData} from '../services/meta';
import {getProfile} from '../services/profile';
import {getBookingHistory} from './booking';

export const setLoggedInUser = (payload, dispatch) => {
  dispatch({
    type: SET_LOGGED_IN_USER,
    payload,
  });
};

export const setProfileDetails = (payload, dispatch) => {
  dispatch({
    type: SET_PROFILE_DETAILS,
    payload,
  });
};

export const setCities = (payload, dispatch) => {
  dispatch({
    type: SET_CITIES,
    payload,
  });
};

export const setStates = (payload, dispatch) => {
  dispatch({
    type: SET_STATES,
    payload,
  });
};

export const getLoggedInUser = dispatch => {
  try {
    AsyncStorage.getItem(constants.token).then(val => {
      console.log('value ', val);
      debugger;
      setLoggedInUser(JSON.parse(val), dispatch);
      getProfileDetails(JSON.parse(val)?.token, dispatch);
    });
  } catch (e) {
    console.error('error to fetch lang', e);
  }
};

export const getProfileDetails = async (token, dispatch) => {
  try {
    // AsyncStorage.getItem(constants.token).then(async val => {
    // const userData = JSON.parse(val);
    getProfile(token)
      .then(res => {
        setProfileDetails(res, dispatch);
        getBookingHistory(res?.user?.id, dispatch);
      })
      .catch(err => {
        doLogout(dispatch);
      });
    // });
  } catch (e) {
    console.error('error to fetch lang', e);
  }
};

export const doLogout = async dispatch => {
  try {
    AsyncStorage.removeItem(constants?.token).then(() => {
      setLoggedInUser(null, dispatch);
    });
  } catch (e) {
    console.error('error to fetch lang', e);
  }
};

export const getMetaData = async dispatch => {
  try {
    fetchMetaData()
      .then(res => {
        if (res?.status) {
          if (res?.data?.cities) {
            setCities(res?.data?.cities, dispatch);
          }
          if (res?.data?.states) {
            setStates(res?.data?.states, dispatch);
          }
        }
      })
      .catch(err => {
        // alert(JSON.stringify(err));
      });
  } catch (e) {
    console.error('error to fetch lang', e);
  }
};
