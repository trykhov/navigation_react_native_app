import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Follow from './screens/Follow';


const MainNavigator = createStackNavigator(
    {
      // order matters
      Home: { screen: Home }, // puts react-navigation props into Home component
      Follow: { screen: Follow } // puts react-navigation props into Follow component
    }, 
    {
     defaultNavigationOptions: {
       headerTintColor: "#FFF",
       headerStyle: {
        backgroundColor: "#BA2F16"
       },
       headerTitleStyle: {
        color: "#FFF"
       }
     }
});

const App = createAppContainer(MainNavigator);
export default App;