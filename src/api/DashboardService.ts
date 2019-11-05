import api_urls from '../config/urls';

/**
 * Fetches the data to populate the DashboardScreen
 * @param page is a page number to fetch the results from
 * @param seed allows to generate different sets of users
 */
export function getDashboard({ page, seed }) {
  const params = `?results=20&nat=gb&seed=${seed}&page=${page}`;
  return fetch(api_urls.DASHBOARD + params)
    .then(res => res.json())
    .catch(error => console.error('Error:', error));
}
