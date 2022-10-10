import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function StandardButton({buttonTextProp, buttonOnPressProp}) {
  return (
    <View>
      <TouchableOpacity
        style={{
          marginTop: 30,
          alignItems: 'center',
          backgroundColor: 'blue',
          height: 30,
          justifyContent: 'center',
          marginHorizontal: 100,
        }}
        onPress={buttonOnPressProp}>
        <Text style={{color: 'white'}}>{buttonTextProp}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
