import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Svg, Path, Circle, Polyline} from 'react-native-svg';

function BottomNav({navigation}) {
  return (
    <View
      style={{
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Main')}
        style={{padding: 10}}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round">
          <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <Polyline points="5 12 3 12 12 3 21 12 19 12" />
          <Path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
          <Path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </Svg>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Wallet')}
        style={{marginBottom: 20}}>
        <View
          style={{padding: 20, backgroundColor: '#4604B1', borderRadius: 100}}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#fff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round">
            <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <Path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
            <Circle cx="12" cy="14" r="2" />
            <Polyline points="14 4 14 8 8 8 8 4" />
          </Svg>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Account')}
        style={{padding: 10}}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round">
          <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <Circle cx="12" cy="7" r="4" />
          <Path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        </Svg>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

export default BottomNav;
