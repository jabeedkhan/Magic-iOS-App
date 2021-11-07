import method from '../Common/method';
import {fetchRequest} from './common';

export const fetchMetaData = () => {
  return fetchRequest(`api/metadata`, method.GET);
};
