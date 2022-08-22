import React from 'react';
import MainHome from '../onboarding/main';
import Login from '../onboarding/login';
import Signup from '../onboarding/signup';
import Main from '../mainScreen';
import Wallet from '../wallet';
import Account from '../account';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={MainHome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

export default App;
