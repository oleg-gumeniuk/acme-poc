import Constants from 'expo-constants';

const { manifest } = Constants;
const api = manifest.packagerOpts.dev
  ? manifest.debuggerHost
      .split(`:`)
      .shift()
      .concat(`:3000`)
  : `api.example.com`;

const BASE_URL = `http://${api}/`;

const api_urls = {
  USERS: BASE_URL + 'users',
  SETTINGS: BASE_URL + 'settings',
  DASHBOARD: `https://randomuser.me/api/`,
  SHOW_ALL: `https://olmibytes.se`
};

export default api_urls;
