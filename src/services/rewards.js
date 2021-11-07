import method from '../common/method';
import {fetchRequest} from './common';

export const fetchRewards = () => {
  return fetchRequest(`/rewards`, method.GET);
};
