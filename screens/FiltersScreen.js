import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const FiltersScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Filter Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default FiltersScreen;
