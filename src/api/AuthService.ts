import api_urls from '../config/urls';

export function doAuth({ email, password }) {
  const params = `?email=${email}&password=${password}`;
  const fullUrl = `${api_urls.USERS}${params}`;
  return fetch(fullUrl)
    .then(res => res.json())
    .catch(error => console.error('Error:', error));
}
