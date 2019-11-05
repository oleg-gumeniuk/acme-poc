import { db } from '../config/firebase';

/**
 * Converts the data in a snapshot into an array of objects with the unique id as one of the properties
 */
function snapshotToArray(snapshot) {
  const resultArr = [];
  snapshot.forEach(childSnapshot => {
    const item = childSnapshot.val();
    item.key = childSnapshot.key;
    resultArr.push(item);
  });

  return resultArr;
}

/**
 * Fetches the data to populate the DashboardScreen
 * @param item is a settings item being updated
 * @param val is a new value of a settings item
 */
export function updateSetting({ item, val }) {
  let settingValueRef = db.ref('/settings/' + item.key);
  return settingValueRef.update({ value: val });
}

/**
 * Fetches the data to populate the SettingsScreen
 */
export function getSettings() {
  const settingsRef = db.ref('settings/');

  return settingsRef.once('value').then(snapshotToArray);
}
