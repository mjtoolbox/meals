import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CategoryMeals from './CategoryMealsScreen';

const CategoriesScreen = (props) => {
  console.log(props);
  return (
    <View style={styles.screen}>
      <Text>Cagegories Screen</Text>
      <Button
        title='Go to Meals'
        onPress={() => {
          props.navigation.navigate({ routeName: 'CategoryMeals' });
          // props.navigation.push('Categories');
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
export default CategoriesScreen;
