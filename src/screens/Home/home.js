import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';

export default function Home({navigation, route}) {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        style={{borderColor: 'skyblue', borderWidth: 1}}
        placeholder="enter text"
        onChangeText={a => {
          setText(a);
        }}
        value={text}
        autoCorrect={false}
      />
      <Button
        title="Navigate"
        onPress={() => {
          navigation.navigate('Screen2', {name: text});
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
