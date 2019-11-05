import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import {
  FlatList,
  Linking,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

import { getDashboard } from '../api/DashboardService';
import strings from '../config/strings';
import api_urls from '../config/urls';
import Button from '../components/Button';
import DashboardItem from '../components/DashboardItem';

import LogoTitle from '../components/LogoTitle';

/**
 * A Dashboard used to display a list of items obtained via API
 * as well as an action button which opens a native browser
 */
class DashboardScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: () => <LogoTitle />,
    headerLeft: null,
    headerRight: (
      <TouchableOpacity
        style={{ marginRight: 10 }}
        onPress={() => navigation.navigate('Settings')}
      >
        <FontAwesomeIcon size={25} style={{ color: '#b2b2b2' }} icon={faCog} />
      </TouchableOpacity>
    )
  });

  state = {
    data: [],
    page: 1,
    seed: 1,
    refreshing: false
  };

  componentDidMount() {
    this.fetchDashboardData();
  }

  fetchDashboardData() {
    getDashboard(this.state).then(res => {
      this.setState({
        data: res.results || [],
        refreshing: false
      });
    });
  }

  refreshDashboard = () => {
    this.setState(
      {
        page: 1,
        refreshing: true,
        seed: this.state.seed + 1
      },
      () => {
        this.fetchDashboardData();
      }
    );
  };

  showAll = () => {
    Linking.canOpenURL(api_urls.SHOW_ALL).then(supported => {
      if (supported) {
        Linking.openURL(api_urls.SHOW_ALL);
      } else {
        console.log("Don't know how to open URI: " + api_urls.SHOW_ALL);
      }
    });
  };

  render() {
    return (
      <View style={styles.listContainer}>
        <View style={styles.list}>
          <FlatList
            key="flatlist"
            data={this.state.data}
            keyExtractor={item => item.email}
            renderItem={({ item }) => <DashboardItem item={item} />}
            refreshing={this.state.refreshing}
            onRefresh={this.refreshDashboard}
          />
        </View>

        <View style={styles.bottom}>
          <Button
            style={styles.button}
            label={strings.SHOW_ALL}
            onPress={this.showAll}
            disabled={false}
          />
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
    borderBottomColor: '#f7f7f7',
    borderBottomWidth: 4,
    marginBottom: 70
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: 35,
    marginRight: 35
  },
  button: {
    position: 'absolute',
    bottom: 0
  }
});

export default DashboardScreen;
