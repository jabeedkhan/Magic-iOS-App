import {SET_BOOKING} from '../reducers/actionnames';
import {fetchBookingHistory} from '../services/booking';

export const setBookingHistory = (payload, dispatch) => {
  dispatch({
    type: SET_BOOKING,
    payload,
  });
};

export const getBookingHistory = async (userId, dispatch) => {
  try {
    const res = await fetchBookingHistory(userId);
    if (res?.status) {
      //   alert(JSON.stringify(res?.data));
      setBookingHistory(res?.data, dispatch);
    }
  } catch (e) {
    // console.error('fetching error to getttign booking history');
  }
};
