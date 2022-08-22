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
  ScrollView,
} from 'react-native';

const Signup: () => Node = ({navigation}) => {
  return (
    <View style={styles.background}>
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.crossContainer}>
          <Image style={styles.crossImage}
            source={require('../../../assets/images/cross.png')}
          />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../../assets/images/coloredlogo.png')}
          />
          <Text style={styles.heading}>Create Account</Text>
          <Text style={styles.text}>
            Provide a valid information below. Each information will be
            validated for account approval.
          </Text>
        </View>
        <View>
          <TextInput
            style={styles.field}
            placeholder={'First Name'}
            placeholderTextColor={'black'}
          />
          <TextInput
            style={styles.field}
            placeholder={'Last Name'}
            placeholderTextColor={'black'}
          />
          <TextInput
            style={styles.field}
            placeholder={'Email Address'}
            placeholderTextColor={'black'}
          />
          <TextInput
            style={styles.field}
            placeholder={'Phone number eg +234'}
            placeholderTextColor={'black'}
          />
          <TextInput
            style={styles.field}
            placeholder={'Password'}
            secureTextEntry={true}
            placeholderTextColor={'black'}
          />
          <TextInput
            style={styles.field}
            placeholder={'Pin number'}
            secureTextEntry={true}
            placeholderTextColor={'black'}
          />
          <View style={styles.signIn}>
            <Text style={{color: 'black', fontWeight: '700', textAlign: 'center'}}>
              I hereby attest that all the information I provided are genuine,
              and I agreed to the Term of use.
            </Text>
            <TouchableOpacity>
              <Text style={{color: 'green', paddingLeft: 3, fontWeight: '700'}}>
                Term of use.
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.loginText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollView: {
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
    marginBottom: 20,
  },
  signIn: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
});

export default Signup;
