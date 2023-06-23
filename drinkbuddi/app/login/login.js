import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function Login({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  

  const Login = async () => {    
    let userData = {
      EMAIL: email,
      PASSWORD: password
    }

    fetch("http://192.168.254.90:8000/user/api/user/login",{
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(userData)
    })
    .then((resp) => resp.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));

    navigation.navigate('Map')
  }
  
  return (
    <View style={styles.container}>
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
      />
      <Button title="Login" onPress={() => {Login();}} />
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
