import React from 'react';

import { StyleSheet, FlatList, View, TouchableOpacity } from 'react-native';

import SettingsList from '../components/SettingsList';

const styles = StyleSheet.create({
  listContainer: {
    flex: 1
  }
});

class SettingsScreen extends React.Component {
  state = {
    checked: 0
  };

  render() {
    return (
      <View style={styles.listContainer}>
        <SettingsList />
      </View>
    );
  }
}

export default SettingsScreen;
