import React from 'react';
import { Text } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import Dashboard from './src/screens/DashboardScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import Loading from './src/components/Loading';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Loading: {
    screen: Loading
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Dashboard: {
    screen: Dashboard
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      headerTitle: () => <Text style={{ fontSize: 20 }}>Settings</Text>
    }
  }
});

const App = createAppContainer(MainNavigator);

export default App;
