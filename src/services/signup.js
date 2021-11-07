import method from '../Common/method';
import {fetchRequest} from './common';

export const doSignUp = body => {
  return fetchRequest(`api/register`, method.POST, body);
};
