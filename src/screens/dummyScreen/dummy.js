import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

export default function Dummy() {
  const emailFromStore = useSelector(storeHub => {
    return storeHub.signupRed.email;
  });
  const passwordFromStore = useSelector(storeHub => {
    return storeHub.signupRed.password;
  });
  return (
    <View>
      <Text>Dummy Screen</Text>
      <Text>{emailFromStore}</Text>
      <Text>{passwordFromStore}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
