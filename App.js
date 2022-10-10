/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
import MainStackNavigator from './src/navigation/mainStackNavigator';
import Login from './src/screens/Login/login';
import Signup from './src/screens/Signup/signup';
import {Provider} from 'react-redux';
import {storeHub} from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={storeHub}>
      <MainStackNavigator />
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
