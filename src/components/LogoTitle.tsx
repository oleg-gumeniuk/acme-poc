import React from 'react';

import { Image, StyleSheet } from 'react-native';

import imageLogo from '../assets/images/logo.png';

/**
 * A component that renders a logo instead of a standard text title in the navigation menu
 */
class LogoTitle extends React.Component {
  render() {
    return <Image source={imageLogo} style={styles.logo} />;
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    marginLeft: 10
  }
});

export default LogoTitle;
