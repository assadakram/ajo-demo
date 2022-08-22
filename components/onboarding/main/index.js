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
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const Main: () => Node = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../../assets/images/robert.jpg')}
      style={styles.background}>
      <View style={styles.overlay} />
      <View style={{flex: 1}}>
        <View style={styles.top}>
          <Image
            source={require('../../../assets/images/white-logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.bottom}>
          <Text style={styles.text}>
            Take a bold step towards acheiving your financial goal via a well
            organized Ajo Cycle, Kolo and investment plan.
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            style={styles.button}>
            <Text>Join Ajo</Text>
          </TouchableOpacity>
          <View style={styles.signIn}>
            <Text style={{color: 'white'}}>Have an Account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{color: 'green', paddingLeft: 3, fontWeight: '700'}}>
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.8,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 5,
  },
  top: {
    alignItems: 'center',
    paddingTop: 100,
    height: '50%',
    zIndex: 6,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    position: 'relative',
    zIndex: 10,
  },
  bottom: {
    zIndex: 6,
    height: '50%',
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50,
  },
  text: {
    color: 'white',
    width: '75%',
    textAlign: 'center',
    lineHeight: 25,
    fontSize: 16,
  },
  button: {
    width: '85%',
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  signIn: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'center',
    width: '85%',
  },
});

export default Main;
