import api_urls from '../config/urls';

/**
 * Fetches the data to populate the DashboardScreen
 * @param page is a page number to fetch the results from
 * @param seed allows to generate different sets of users
 */
export function getDashboard({ page, seed }) {
  const url = `${api_urls.DASHBOARD}?results=20&nat=gb&seed=${seed}&page=${page}`;
  return fetch(url)
    .then(res => res.json())
    .catch(error => console.error('Error:', error));
}
