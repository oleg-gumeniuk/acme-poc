import api_urls from '../config/urls';

export function getDashboard({ page, seed }) {
  const params = `?results=20&nat=gb&seed=${seed}&page=${page}`;
  return fetch(api_urls.DASHBOARD + params)
    .then(res => res.json())
    .catch(error => console.error('Error:', error));
}
