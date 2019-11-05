import React from 'react';

import { StyleSheet, View } from 'react-native';

import strings from '../config/strings';
import SettingsList from '../components/SettingsList';
import Button from '../components/Button';
import { auth } from '../config/firebase';

/**
 * This is the settings screen
 * It handles the setting properties updates as well as logout action
 */
class SettingsScreen extends React.Component {
  state = {
    checked: 0
  };

  handleLogoutPress = () => {
    auth
      .signOut()
      .then(() => {
        this.props.navigation.navigate('Loading');
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };

  render() {
    return (
      <View style={styles.listContainer}>
        <View style={styles.list}>
          <SettingsList />
        </View>
        <View style={styles.bottom}>
          <View style={{ width: '80%' }}>
            <Button
              style={styles.button}
              label={strings.LOGOUT}
              onPress={this.handleLogoutPress}
              disabled={false}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1
  },
  list: {
    flex: 6
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    borderTopColor: '#f7f7f7',
    borderTopWidth: 4,
    alignItems: 'center'
  },
  button: {
    marginTop: 15,
    bottom: 0
  }
});

export default SettingsScreen;
