import {StyleSheet, Text, View, SafeAreaView, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import FormFields from '../components/formInput';
import StandardButton from '../components/standardButton';
import {useSelector} from 'react-redux';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setToken} from '../../utilities/tokenGenerator';
import MainStackNavigator from '../../navigation/mainStackNavigator';

export default function Login({navigation, route}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginToken, setLoginToken] = useState('');

  const emailFromStore = useSelector(storeHub => {
    return storeHub.signupRed.email;
  });
  const passwordFromStore = useSelector(storeHub => {
    return storeHub.signupRed.password;
  });

  function loginAPI() {
    let options = {
      method: 'post',
      url: 'https://reqres.in/api/login',
      data: {
        email: email,
        password: password,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    };

    useEffect(() => {
      //
    }, [loginToken]);
    axios(options)
      .then(res => {
        setLoginToken(res.data.token);
        // setToken(loginToken);
        setToken(res.data.token); // Storing data in async storage
        // navigation.navigate('Home');
        console.log('Login API success response: - ', res.data.token);
      })
      .catch(error => {
        console.log('error in api call', error);
        alert('Email and pass combination is wrong');
      });
  }

  function onLoginButtonPress() {
    // if (
    //   email === emailFromStore &&
    //   password === passwordFromStore &&
    //   email !== '' &&
    //   password !== ''
    // ) {
    //   navigation.navigate('Dummy');
    // } else {
    //   alert('Email password combination is wrong');
    // }
    loginAPI();
  }
  return (
    <SafeAreaView>
      <Text style={{alignSelf: 'center', marginTop: 30}}>
        Welcome to the Login Page.........!
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
      <View>
        <StandardButton
          buttonTextProp="Login"
          buttonOnPressProp={() => {
            onLoginButtonPress();
          }}
        />
        <StandardButton
          buttonTextProp="Create an Account"
          buttonOnPressProp={() => {
            navigation.navigate('Signup');
          }}
        />
      </View>
    </SafeAreaView>
  );
}
