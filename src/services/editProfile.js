import method from '../Common/method';
import {fetchRequest} from './common';

export const doEditProfile = body => {
  return fetchRequest(`api/upduserprofile`, method.POST, body);
};
