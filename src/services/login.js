import method from '../Common/method';
import {fetchRequest} from './common';

export const doLogin = body => {
  return fetchRequest(`api/login`, method.POST, body);
};

export const doSignup = body => {
  return fetchRequest(`api/register`, method.POST, body);
};

export const doChangePassword = body => {
  return fetchRequest(`api/change_password`, method.POST, body);
};


