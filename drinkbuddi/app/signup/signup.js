import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function Signup() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checkPassword, setCheckPassword] = React.useState('');
  

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
      />   
      <TextInput
        style={styles.input}
        onChangeText={setCheckPassword}
        value={checkPassword}
        placeholder="Confirm Password"
        keyboardType="default"
      />
      <Button color='#000000' title='Create Account' />
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
