import React from 'react';

import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { auth } from '../config/firebase';

/**
 * A component that renders the loading screen
 */
export default class Loading extends React.Component {
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Dashboard' : 'Login');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
