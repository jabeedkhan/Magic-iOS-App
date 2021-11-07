import method from '../Common/method';
import {fetchRequest} from './common';

export const fetchBookingHistory = userId => {
  return fetchRequest(`api/user_services/${userId}`, method.GET);
};

export const submitBooking = req => {
  return fetchRequest('api/book_service', method.POST, req);
};
