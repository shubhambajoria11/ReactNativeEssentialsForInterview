import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/home';
import Screen2 from '../screens/Screen2/screen2';
import Login from '../screens/Login/login';
import Signup from '../screens/Signup/signup';
import Dummy from '../screens/dummyScreen/dummy';
import {useDispatch, useSelector} from 'react-redux';
import {getToken} from '../utilities/tokenGenerator';
import {tokenAction} from '../redux/action/tokenAction';
import SignIn from '../screens/Login/signin';

const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
  const dispatch = useDispatch();

  const authTokenFromRedux = useSelector(storeHub => {
    console.log('Store Hub', storeHub);
    return storeHub.authToken.authToken;
  });

  const [authToken, setAuthToken] = useState('');

  let authTokenFromAsyncStorage = null;

  // const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      authTokenFromAsyncStorage = await getToken();
      console.log('authTokenFromAsyncStorage', authTokenFromAsyncStorage);
      dispatch(tokenAction(authTokenFromAsyncStorage));
      //setAuthToken(authTokenFromRedux);
    }
    fetchData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authTokenFromRedux ? (
          <>
            <Stack.Screen name="DummySignIn" component={SignIn} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Screen2" component={Screen2} />
            <Stack.Screen name="Dummy" component={Dummy} />
          </>
        ) : (
          <>
            <Stack.Screen name="DummySignIn" component={SignIn} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
