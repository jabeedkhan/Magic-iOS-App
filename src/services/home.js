import method from "../common/method";
import { fetchRequest } from "./common";

export const fetchHomeBanner = () => {
  return fetchRequest(`/home-banner`, method.GET);
};

export const fetchHomeServices = () => {
  return fetchRequest(`/home-service`, method.GET);
};

export const fetchHomeOffer = () => {
  return fetchRequest(`/home-offer`, method.GET);
};



