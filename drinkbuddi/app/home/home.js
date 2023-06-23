import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home( {navigation} ) {
  return (
    <View style={styles.container}>
      <Text>Efren testicng</Text>
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('Signup')}
      />      
      <Button
        title="Log On"
        onPress={() => navigation.navigate('Login')}
    />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
