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
} from 'react-native';
import Carousel from './carousel';
import BottomNav from '../common/bottomNav';
import {Svg, Path, Rect, Line, Circle, Polyline} from 'react-native-svg';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const Home: () => Node = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.background}>
        <View style={styles.topMain}>
          <View style={styles.profileWrapper}>
            <View style={styles.subWrapper}>
              <Image
                style={styles.profileImage}
                source={require('../../assets/images/profilePlaceholder.png')}
              />
              <Text style={styles.greeting}>Good Afternoon, Assad!</Text>
            </View>
            <View style={styles.subWrapper}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#fff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round">
                <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <Rect x="3" y="8" width="18" height="4" rx="1" />
                <Line x1="12" y1="8" x2="12" y2="21" />
                <Path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
                <Path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
              </Svg>
              <View style={{paddingLeft: 10}}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#fff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <Circle cx="10" cy="10" r="7" />
                  <Path d="M21 21l-6 -6" />
                  <Line x1="10" y1="13" x2="10" y2="13.01" />
                  <Path d="M10 10a1.5 1.5 0 1 0 -1.14 -2.474" />
                </Svg>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 60,
              marginRight: 60,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{marginTop: 30}}>
              <Text style={{color: 'white', fontSize: 18}}>Wallet Balance</Text>
              <View style={{flexDirection: 'row', paddingTop: 4}}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    paddingTop: 10,
                    paddingRight: 5,
                    paddingLeft: 10,
                  }}>
                  $
                </Text>
                <Text style={{color: 'white', fontSize: 35}}>0.00</Text>
              </View>
            </View>
            <View style={{marginTop: 30}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Wallet')}
                style={{
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: 'white',
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}>
                <Text style={{color: 'white', fontSize: 18}}>My Wallet</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.cardWrapper, {marginTop: 40}]}>
            <View style={styles.cardLeft}>
              <View style={styles.cardLeftInner}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#59AD5A"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <Path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z" />
                  <Circle cx="12" cy="12" r="9" />
                </Svg>
              </View>
              <View style={styles.centerTextArea}>
                <Text style={styles.centerTitle}>Ajo Group Saving</Text>
                <Text style={styles.centerText}>
                  Create a rotating saving group with the people that you trust.{' '}
                  {'\n'}Collect in turns{' '}
                </Text>
              </View>
              <View>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-right"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#E0E0E0"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <Polyline points="9 6 15 12 9 18" />
                </Svg>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardWrapper}>
          <View style={styles.cardLeft}>
            <View style={styles.cardLeftInner}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#59AD5A"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round">
                <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <Path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z" />
                <Circle cx="12" cy="12" r="9" />
              </Svg>
            </View>
            <View style={styles.centerTextArea}>
              <Text style={styles.centerTitle}>Ajo Group Saving</Text>
              <Text style={styles.centerText}>
                Create a rotating saving group with the people that you trust.{' '}
                {'\n'}Collect in turns{' '}
              </Text>
            </View>
            <View>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-right"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#E0E0E0"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round">
                <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <Polyline points="9 6 15 12 9 18" />
              </Svg>
            </View>
          </View>
        </View>
        <View style={[styles.cardWrapper, {marginTop: 0}]}>
          <View style={styles.cardLeft}>
            <View style={styles.cardLeftInner}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#59AD5A"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round">
                <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <Path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z" />
                <Circle cx="12" cy="12" r="9" />
              </Svg>
            </View>
            <View style={styles.centerTextArea}>
              <Text style={styles.centerTitle}>Ajo Group Saving</Text>
              <Text style={styles.centerText}>
                Create a rotating saving group with the people that you trust.{' '}
                {'\n'}Collect in turns{' '}
              </Text>
            </View>
            <View>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-right"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#E0E0E0"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round">
                <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <Polyline points="9 6 15 12 9 18" />
              </Svg>
            </View>
          </View>
        </View>
        <View style={[styles.cardWrapper, {marginTop: 20}]}>
          <View style={[styles.cardLeft, {paddingTop: 20, paddingBottom: 20}]}>
            <View style={styles.verificationCard}>
              <AnimatedCircularProgress
                useNativeDriver={false}
                size={80}
                width={8}
                fill={25}
                tintColor={'#4A03B1'}
                rotation={0}
                backgroundColor="#FFF1E1">
                {fill => (
                  <Text styles={{fontSize: 18, fontWeight: 800}}>{fill}%</Text>
                )}
              </AnimatedCircularProgress>
            </View>
            <View style={styles.verificationCard}>
              <View style={styles.verificationStack}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#51A859"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <Polyline points="9 11 12 14 20 6" />
                  <Path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                </Svg>
                <Text style={{paddingLeft: 5}}>Email Verification</Text>
              </View>
              <View style={styles.verificationStack}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#d14040"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <Circle cx="12" cy="12" r="9" />
                  <Line x1="5.7" y1="5.7" x2="18.3" y2="18.3" />
                </Svg>
                <Text style={{paddingLeft: 5}}>Phone Verification</Text>
              </View>
              <View style={styles.verificationStack}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#d14040"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <Circle cx="12" cy="12" r="9" />
                  <Line x1="5.7" y1="5.7" x2="18.3" y2="18.3" />
                </Svg>
                <Text style={{paddingLeft: 5}}>Picture Verification</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardWrapper}>
          <View style={[styles.cardLeft, {paddingTop: 20, paddingBottom: 20}]}>
            <Text style={{fontSize: 18}}>Have a Group ID?</Text>
            <Text style={{fontSize: 18, fontWeight: '700', color: '#3D1784'}}>
              Join now
            </Text>
          </View>
        </View>
        <View style={[styles.cardWrapper, {marginTop: 0}]}>
          <View style={styles.cardLeft}>
            <View style={[styles.cardLeftInner, {backgroundColor: '#FFE8EA'}]}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#EF4A38"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round">
                <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <Path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                <Path d="M15 7a2 2 0 0 1 2 2" />
                <Path d="M15 3a6 6 0 0 1 6 6" />
              </Svg>
            </View>
            <View style={styles.centerTextArea}>
              <Text style={styles.centerTitle}>Buy Airtime</Text>
              <Text style={styles.centerText}>
                Topup your MTN, GLO, 9Mobile and AIRTEL network at a{'\n'}
                Discounted rate{' '}
              </Text>
            </View>
            <View>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-right"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#E0E0E0"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round">
                <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <Polyline points="9 6 15 12 9 18" />
              </Svg>
            </View>
          </View>
        </View>
        <Carousel />
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
  },
  profileWrapper: {
    paddingTop: 20,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
    resizeMode: 'cover',
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
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },
  cardLeftInner: {padding: 6, backgroundColor: '#E6F6E9', borderRadius: 7},
  centerTextArea: {paddingLeft: 10},
  centerTitle: {fontWeight: '900'},
  centerText: {fontSize: 11, paddingTop: 5, lineHeight: 15},
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
});

export default Home;
