import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CategoryMeals = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Cagegory Meal Screen</Text>
      <Button
        title='Go to Details'
        onPress={() => {
          props.navigation.navigate('MealDetail');
        }}
      />
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
export default CategoryMeals;
