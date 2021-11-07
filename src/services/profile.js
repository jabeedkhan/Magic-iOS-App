import method from '../Common/method';
import {fetchRequest} from './common';

export const getProfile = token => {
  return fetchRequest(`api/profile`, method.GET, undefined, token);
};
