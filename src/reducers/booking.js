import {
  SET_BOOKING,
  SET_CITIES,
  SET_LOGGED_IN_USER,
  SET_PROFILE_DETAILS,
  SET_STATES,
} from './actionnames';

export const booking = {
  history: null,
};

export function bookingReducer(state = booking, action) {
  const {type, payload} = action;
  switch (type) {
    case SET_BOOKING:
      return {
        ...state,
        booking: {
          ...state.booking,
          history: [...payload],
        },
      };
    default:
      return state;
  }
}
