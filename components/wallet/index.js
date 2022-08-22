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
  ScrollView,
  TextInput,
} from 'react-native';
import BottomNav from '../common/bottomNav';
import {Svg, Path, Rect, Line, Circle, Polyline, G} from 'react-native-svg';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const Home: () => Node = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.background}>
        <View style={styles.topMain} />
        <View style={styles.profileWrapper}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Main')}
            style={styles.subWrapper}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-left"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round">
              <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <Line x1="5" y1="12" x2="19" y2="12" />
              <Line x1="5" y1="12" x2="11" y2="18" />
              <Line x1="5" y1="12" x2="11" y2="6" />
            </Svg>
            <Text style={styles.greeting}>$0.00</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.cardWrapper, {marginTop: 30}]}>
          <View style={styles.cardLeft}>
            <View style={styles.centerTextArea}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-alert-triangle"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#FF9101"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round">
                <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <Path d="M12 9v2m0 4v.01" />
                <Path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
              </Svg>
              <Text style={styles.centerTitle}>No card found!</Text>
              <Text style={styles.centerText}>
                We could not find any card connected to your account, kindly
                connect a card to add fund to your wallet
              </Text>
              <TouchableOpacity style={styles.buttonStyle}>
                <Text style={{color: 'white'}}>Connect Card</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[styles.cardWrapper, {marginTop: 30}]}>
          <View style={styles.cardLeft}>
            <View style={styles.centerTextArea}>
              <Text style={styles.centerTitle}>Bank Transfer Account</Text>
              <Text style={styles.centerText}>
                To receive money into your wallet via bank transfer, create a
                bank transfer account number below. Add a valid BVN required.
              </Text>
              <TextInput
                style={styles.field}
                placeholder={'Enter Your VBN'}
                placeholderTextColor={'black'}
              />
              <TouchableOpacity
                style={[
                  styles.buttonStyle,
                  {width: '100%', alignItems: 'center'},
                ]}>
                <Text style={{color: 'white'}}>Create Transfer account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{paddingTop: 30, alignItems: 'center'}}>
          <TouchableOpacity>
            <Text
              style={{
                color: '#4606AF',
                fontWeight: '700',
                textDecorationLine: 'underline',
              }}>
              View All Transactions
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomNav navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F8F8F8',
    flex: 1,
  },
  topMain: {
    backgroundColor: '#4606AF',
    borderBottomLeftRadius: 50,
    borderBottomEndRadius: 50,
    position: 'absolute',
    left: 0,
    right: 0,
    height: 200,
  },
  profileWrapper: {
    paddingTop: 20,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greeting: {
    paddingLeft: 10,
    color: 'white',
    fontSize: 18,
  },
  cardWrapper: {marginBottom: 10, alignItems: 'center'},
  cardLeft: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    paddingTop: 20,
    paddingBottom: 20,
  },
  centerTextArea: {
    paddingLeft: 10,
    alignItems: 'center',
    width: '100%',
  },
  centerTitle: {
    fontWeight: '700',
    fontSize: 18,
    paddingTop: 10,
  },
  centerText: {
    textAlign: 'center',
    fontSize: 14,
    paddingTop: 5,
    lineHeight: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  verificationCard: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verificationStack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    backgroundColor: '#4606AF',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 3,
    marginTop: 20,
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
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
  },
});

export default Home;
