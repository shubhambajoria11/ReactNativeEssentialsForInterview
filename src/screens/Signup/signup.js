import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import FormFields from '../components/formInput';
import StandardButton from '../components/standardButton';
import {useDispatch} from 'react-redux';
import {changeEmail, changePassword} from '../../redux/action/action';
import {NavigationContainer} from '@react-navigation/native';

export default function Signup({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  function onSignupButtonPress(email, password) {
    dispatch(changeEmail(email));
    dispatch(changePassword(password));
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView>
      <Text style={{alignSelf: 'center', marginTop: 30}}>
        Welcome to the signup Page !!!!!
      </Text>
      <FormFields
        placeholderProp="Email"
        onchangeTextProp={eachChr => {
          setEmail(eachChr);
        }}
        valueProp={email}
      />
      <FormFields
        placeholderProp="Password"
        onchangeTextProp={eachChr => {
          setPassword(eachChr);
        }}
        valueProp={password}
      />
      <StandardButton
        buttonTextProp="Signup"
        buttonOnPressProp={() => {
          onSignupButtonPress(email, password);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
