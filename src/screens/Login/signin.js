import {View, TextInput, Button, Text} from 'react-native';
import {useState} from 'react';
import {callApi} from '../api';

const SignIn = () => {
  const [errorTextPassword, setErrorTextPassword] = useState('');
  const [errorTextEmail, setErrorTextEmail] = useState('');

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const onSubmit = () => {
    console.log('Submit Pressed');
    if (!password) {
      setErrorTextPassword('Password can not be empty');
    } else if (password.length < 10) {
      setErrorTextPassword('Password should have min 10 chrs');
    }
    if (!email) {
      setErrorTextEmail('Email can not be empty');
      console.log('Email check');
    } else if (!email.includes('@')) {
      setErrorTextEmail('Email should be of proper format');
    }
    if (password.length > 10 && email.includes('@')) {
      callApi('login', 'post', {
        email: 'eve.holt@reqres.i',
        password: '123',
      }).then(res => {
        if (res.isError) {
          console.log('Error in res', res);
          setSuccessMsg(res.data);
        } else {
          console.log('SuccessFull Recived', res.responseObj);
        }
      });
    }
  };
  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={eachChr => {
          setEmail(eachChr);
        }}
        value={email}
      />
      <TextInput
        placeholder="Password"
        onChangeText={eachChr => {
          console.log('Password Change', eachChr);
          setPassword(eachChr);
        }}
        value={password}
      />
      <Text>{errorTextEmail}</Text>
      <Text>{errorTextPassword}</Text>
      <Text>{successMsg}</Text>
      <Button title="Submit" onPress={onSubmit} />
    </View>
  );
};
export default SignIn;
