import api_urls from '../config/urls';

export function getSettings() {
  return fetch(api_urls.SETTINGS)
    .then(res => res.json())
    .catch(error => console.error('Error:', error));
}

export function updateSetting(item, value) {
  return fetch(api_urls.SETTINGS + `/${item.id}`, {
    method: 'PUT',
    body: JSON.stringify({
      name: item.name,
      value: value,
      options: item.options
    }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error));
}
