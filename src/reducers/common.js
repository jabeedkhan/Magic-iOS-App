import {
  SET_CITIES,
  SET_LOGGED_IN_USER,
  SET_PROFILE_DETAILS,
  SET_STATES,
} from './actionnames';

export const common = {
  user: null,
  profile: null,
  editProfile: '',
  cities: [],
  states: [],
};

export function commonReducer(state = common, action) {
  const {type, payload} = action;
  switch (type) {
    case SET_LOGGED_IN_USER:
      return {
        ...state,
        common: {
          ...state.common,
          user: {...payload},
        },
      };
    case SET_PROFILE_DETAILS:
      return {
        ...state,
        common: {
          ...state.common,
          profile: {...payload},
        },
      };
    case SET_STATES:
      return {
        ...state,
        common: {
          ...state.common,
          states: [...payload],
        },
      };
    case SET_CITIES:
      return {
        ...state,
        common: {
          ...state.common,
          cities: [...payload],
        },
      };

    default:
      return state;
  }
}
