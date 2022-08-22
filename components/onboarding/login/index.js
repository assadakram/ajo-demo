/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
} from 'react-native';

const Login: () => Node = ({navigation}) => {
  return (
    <View style={styles.background}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.crossContainer}>
        <Image
          style={styles.crossImage}
          source={require('../../../assets/images/cross.png')}
        />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/coloredlogo.png')}
        />
        <Text style={styles.heading}>Account Login</Text>
        <Text style={styles.text}>
          Log in start investing and saving with friends,{'\n'}family and mates
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.field}
          placeholder={'Email Address'}
          placeholderTextColor={'black'}
        />
        <TextInput
          style={styles.field}
          placeholder={'Password'}
          secureTextEntry={true}
          placeholderTextColor={'black'}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Main')}
            style={styles.button}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signIn}>
          <Text style={{color: 'black', fontWeight: '700'}}>
            Forget Password?
          </Text>
          <TouchableOpacity>
            <Text style={{color: 'green', paddingLeft: 3, fontWeight: '700'}}>
              Reset now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
  },
  crossContainer: {
    paddingTop: 15,
    paddingLeft: 10,
    paddingBottom: 15,
    width: '100%',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  crossImage: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
  logoContainer: {
    paddingLeft: 20,
    paddingTop: 60,
  },
  logo: {
    width: 100,
    resizeMode: 'cover',
    height: 64,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    paddingTop: 30,
  },
  text: {
    fontSize: 18,
    paddingTop: 20,
    lineHeight: 25,
  },
  field: {
    backgroundColor: '#EDEDED',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    padding: 10,
    fontSize: 18,
    color: 'black',
    borderRadius: 4,
    height: 60,
  },
  button: {
    width: '100%',
    height: 60,
    backgroundColor: '#4606AF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 20,
  },
  loginText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonContainer: {
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  signIn: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
});

export default Login;
