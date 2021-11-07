import method from '../Common/method';
import {fetchRequest} from './common';

export const doContactUs = body => {
  return fetchRequest(`api/cust_contact`, method.POST, body);
};
