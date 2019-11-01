import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  dashboardItem: {
    flexDirection: 'row',
    borderBottomColor: '#f7f7f7',
    borderBottomWidth: 2
  },
  avatar: {
    flex: 2,
    overflow: 'hidden',
    padding: 10
  },
  info: {
    flex: 8,
    margin: 5,
    fontSize: 14,
    marginTop: 10
  },
  name: {
    color: '#9EA7AE',
    fontWeight: 'bold'
  },
  email: {
    marginTop: 5
  }
});

export default function DashboardItem({ item }) {
  return (
    <View style={styles.dashboardItem}>
      <View style={styles.avatar}>
        <Image
          source={{ uri: item.picture.thumbnail }}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>
          {item.name.first} {item.name.last}
        </Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    </View>
  );
}
