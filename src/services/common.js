import axios from 'axios';
// const BASE_URL = "https://api.swifsys.com/pub(lic";
const BASE_URL = 'https://magichands.co/magich';

const toUrlEncoded = obj =>
  Object.keys(obj)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]))
    .join('&');

const jsonToUrlEncoded = json => {
  const formBody = [];
  for (var property in json) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(json[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  return formBody.join('&');
};
export const fetchRequest = (uri, method, body, token, header = {}) => {
  const reqBody = body ? toUrlEncoded(body) : '';
  return new Promise((resolve, reject) => {
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Authorization: 'Bearer ' + token,
      },
    };
    const requestBody = {
      method,
      uri,
      body: reqBody,
    };
    debugger;
    // alert(JSON.stringify(config));
    const ax =
      method.toUpperCase() === 'GET'
        ? axios.get(`${BASE_URL}/${uri}`, config)
        : axios[method](`${BASE_URL}/${uri}`, jsonToUrlEncoded(body), config);
    ax.then(res => {
      if (method.toUpperCase() === 'POST') {
      }
      if (res.status >= 200 || res.status < 300) {
        return resolve(res.data);
      } else {
        return reject(res.data);
      }
    }).catch(err => {
      return reject(err);
    });
  });
};
