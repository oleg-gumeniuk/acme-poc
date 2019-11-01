import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderBottomColor: '#f7f7f7',
    borderBottomWidth: 2,
    margin: 10
  },
  label: {
    fontSize: 12,
    color: '#bebebe',
    textTransform: 'uppercase'
  },
  buttons: {
    marginTop: 10
  }
});

const currentIndex = item => {
  return item.options.indexOf(item.value);
};

export default function SettingsItem({ item, onSelect }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{item.name}</Text>
      <RadioGroup
        style={styles.buttons}
        onSelect={value => onSelect(item, value)}
        selectedIndex={currentIndex(item)}
      >
        {item.options.map((option, index) => {
          return (
            <RadioButton value={option} key={index}>
              <Text>{option}</Text>
            </RadioButton>
          );
        })}
      </RadioGroup>
    </View>
  );
}
