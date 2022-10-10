import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

export default function FormFields({
  placeholderProp,
  onchangeTextProp,
  valueProp,
}) {
  return (
    <View style={{marginTop: 20, marginLeft: 20, marginRight: 20}}>
      <TextInput
        style={{
          borderColor: 'grey',
          borderWidth: 1,
          height: 40,
          paddingLeft: 10,
        }}
        placeholder={placeholderProp}
        onChangeText={onchangeTextProp}
        value={valueProp}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
