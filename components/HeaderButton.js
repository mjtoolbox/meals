import React, { useState } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={SimpleLineIcons}
      iconsize={30}
      color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default CustomHeaderButton;
