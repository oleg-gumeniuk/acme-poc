import React from 'react';

import { FlatList, StyleSheet } from 'react-native';
import SettingsItem from './SettingsItem';
import { getSettings, updateSetting } from '../api/SettingsService';

class SettingsScreen extends React.Component {
  state = {
    settings: []
  };

  componentDidMount() {
    this.fetchSettingsData();
  }

  onSettingSelect = (item, value) => {
    updateSetting(item, value).then(() => {
      this.fetchSettingsData();
    });
  };

  fetchSettingsData() {
    getSettings().then(settings => {
      this.setState({
        settings: settings || []
      });
    });
  }

  render() {
    return (
      <FlatList
        key="flatlist"
        data={this.state.settings}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SettingsItem item={item} onSelect={this.onSettingSelect} />
        )}
      />
    );
  }
}

export default SettingsScreen;
