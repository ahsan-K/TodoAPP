

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screens from './screens';
import Components from './components';
import { Provider } from 'react-redux';
import store from './redux/store';

export default () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const BottomTab = () =>{
    return(
      <Tab.Navigator tabBar={props => <Components.BottomBar {...props} />}>
          <Tab.Screen name="Tasks" component={Screens.Tasks} />
          <Tab.Screen name="Location" component={Screens.Location} />
      </Tab.Navigator>
    )
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Login" component={Screens.Login} />
          <Stack.Screen name="Tasks" component={BottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
