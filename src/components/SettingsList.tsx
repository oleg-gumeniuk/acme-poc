import React from 'react';

import { FlatList } from 'react-native';

import SettingsItem from '../components/SettingsItem';
import { getSettings, updateSetting } from '../api/SettingsService';

import { db } from '../config/firebase';

/**
 * Is a list of SettingItem components that handles the retrieve and update operations
 */
class SettingsList extends React.Component {
  state = {
    settings: []
  };

  componentDidMount() {
    this.fetchSettingsData();
  }

  onSettingSelect = (item, val) => {
    let updatedSettings = this.state.settings;

    updateSetting({ item, val }).then(() => {
      updatedSettings.find(setting => {
        return setting.key == item.key;
      }).value = val;
    });

    this.setState({ settings: updatedSettings });
  };

  fetchSettingsData() {
    getSettings().then(result => {
      this.setState({ settings: result || [] });
    });
  }

  /**
   * Converts the data in a snapshot into an array of maps with the unique id as one of the keys
   */
  snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;

      returnArr.push(item);
    });

    return returnArr;
  }

  render() {
    return (
      <FlatList
        key="flatlist"
        data={this.state.settings}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <SettingsItem item={item} onSelect={this.onSettingSelect} />
        )}
      />
    );
  }
}

export default SettingsList;
