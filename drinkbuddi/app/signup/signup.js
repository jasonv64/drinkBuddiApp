import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {PermissionsAndroid} from 'react-native';
import { Button, StyleSheet, TextInput, View } from 'react-native';


export default function Signup({navigation} ) {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checkPassword, setCheckPassword] = React.useState('');

  const GetAllPermissions = async () => {
    try {
      if (Platform.OS === "android") {
        const userResponse = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          PermissionsAndroid.PERMISSIONS.SEND_SMS,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.ACCESS_MEDIA_LOCATION,
          PermissionsAndroid.PERMISSIONS.READ_PHONE_NUMBERS,
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS
        ]);
        return userResponse;
      }
    } catch (err) {
      Warning(err);
    }
    return null;
  }

  const SignUp = async () => {
    let userData = {
      FIRST_NAME: firstName,
      LAST_NAME: lastName,
      EMAIL: email,
      STATE: 'CA',
      ZIP: 95230,
      PASSWORD: password
    }

    await fetch('http://192.168.254.90:8000/user/api/user/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
       },
       body: JSON.stringify(userData)
      })
      .then(response => response.json())
      .then(result => {
          console.log('User in DB created');
          console.log(result);
          navigation.navigate('Map')
      })
      .catch(error => console.log('error', error));
      
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setFirstName}
        value={firstName}
        placeholder="First Name"
        keyboardType="default"
      />      
      <TextInput
        style={styles.input}
        onChangeText={setLastName}
        value={lastName}
        placeholder="Last Name"
        keyboardType="default"
      />   
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="default"
      />   
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        keyboardType="default"
        secureTextEntry={true}
      />   
      <TextInput
        style={styles.input}
        onChangeText={setCheckPassword}
        value={checkPassword}
        placeholder="Confirm Password"
        keyboardType="default"
        secureTextEntry={true}
      />
      <Button color='#000000' title='Create Account' onPress={GetAllPermissions}/>
      <Button
        title="Finish"
        onPress={() => { SignUp()}}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D69312',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#D9D9D9',
    borderColor: "gray",
    width: "50%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 7,
    marginBottom: 10,
  }
});
