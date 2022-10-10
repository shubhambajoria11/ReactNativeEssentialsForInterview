import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

function Screen2({navigation, route}) {
  return (
    <View>
      <Text>Screen2 + {route.params.name}</Text>
    </View>
  );
}

export default Screen2;

const styles = StyleSheet.create({});
