import method from '../Common/method';
import {fetchRequest} from './common';

export const AllServices = body => {
  return fetchRequest(`api/services`, method.POST, body);
};
