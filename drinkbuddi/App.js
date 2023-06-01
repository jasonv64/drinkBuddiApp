import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './app/home/home';
import Signup from './app/signup/signup';
import Login from './app/login/login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Home}
        />
        <Stack.Screen 
          name="Signup"
          component={Signup}
        />
        <Stack.Screen 
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;