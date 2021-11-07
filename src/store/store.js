/* eslint-disable camelcase */
import React, {useReducer, createContext} from 'react';
import {booking, bookingReducer} from '../reducers/booking';
import {common, commonReducer} from '../reducers/common';

export const Store = createContext();

const initialState = {
  common: {...common},
  booking: {...booking},
};

const reduceReducers =
  (...reducers) =>
  (prevState, value, ...args) => {
    return reducers.reduce(
      (newState, reducer) => reducer(newState, value, ...args),
      prevState,
    );
  };

const reducers = reduceReducers(commonReducer, bookingReducer);

export function StoreProvider({children, initState = initialState}) {
  const [state, dispatch] = useReducer(reducers, initState);
  const value = {state, dispatch};
  // alert(JSON.stringify(state));
  return <Store.Provider value={value}>{children}</Store.Provider>;
}

// ([^\s]+):
