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
  Text,
  ScrollView,
  Image,
} from 'react-native';
import BottomNav from '../common/bottomNav';
import {Svg, Path, Line, Circle, Polyline, Rect} from 'react-native-svg';
const Account: () => Node = ({navigation}) => {
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
          </TouchableOpacity>
          <Text style={styles.greeting}>Text User</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.subWrapper}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round">
              <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <Path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <Path d="M7 12h14l-3 -3m0 6l3 -3" />
            </Svg>
          </TouchableOpacity>
        </View>
        <View style={styles.subWrapper1}>
          <Image
            style={styles.profileImage}
            source={require('../../assets/images/profilePlaceholder.png')}
          />
        </View>
        <View style={styles.detailWrapper}>
          <View style={styles.detailInner}>
            <View style={styles.innerLeft}>
              <View style={styles.svgArea}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-left"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#4804B7"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <Circle cx="12" cy="12" r="9" />
                  <Path d="M9 12l2 2l4 -4" />
                </Svg>
              </View>
              <Text>Account Status</Text>
            </View>
            <Text style={{color: 'red'}}>Unverified</Text>
          </View>
          <View style={styles.detailInner}>
            <View style={styles.innerLeft}>
              <View style={styles.svgArea}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-left"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#4804B7"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <Path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
                  <Path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
                  <Circle cx="15" cy="9" r="1" />
                </Svg>
              </View>
              <Text>Ajo Score</Text>
            </View>
            <Text style={{color: 'gray'}}>20</Text>
          </View>
          <View style={styles.detailInner}>
            <View style={styles.innerLeft}>
              <View style={styles.svgArea}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-left"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#4804B7"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <Rect x="3" y="5" width="18" height="14" rx="2" />
                  <Polyline points="3 7 12 13 21 7" />
                </Svg>
              </View>
              <Text>Email</Text>
            </View>
            <Text style={{color: 'gray'}}>test***@gmail.com</Text>
          </View>

          <View style={styles.detailInner}>
            <View style={styles.innerLeft}>
              <View style={styles.svgArea}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-left"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#4804B7"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <Rect x="2" y="6" width="20" height="12" rx="2" />
                  <Line x1="6" y1="10" x2="6" y2="10" />
                  <Line x1="10" y1="10" x2="10" y2="10" />
                  <Line x1="14" y1="10" x2="14" y2="10" />
                  <Line x1="18" y1="10" x2="18" y2="10" />
                  <Line x1="6" y1="14" x2="6" y2="14.01" />
                  <Line x1="18" y1="14" x2="18" y2="14.01" />
                  <Line x1="10" y1="14" x2="14" y2="14" />
                </Svg>
              </View>
              <Text>Phone</Text>
            </View>
            <Text style={{color: 'red'}}>Verify +234*******</Text>
          </View>

          <View style={styles.detailInner}>
            <View style={styles.innerLeft}>
              <View style={styles.svgArea}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-left"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#4804B7"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <Rect x="5" y="11" width="14" height="10" rx="2" />
                  <Circle cx="12" cy="16" r="1" />
                  <Path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                </Svg>
              </View>
              <Text>Change Password</Text>
            </View>
            <Text style={{color: 'gray'}}>*******</Text>
          </View>

          <View style={styles.detailInner}>
            <View style={styles.innerLeft}>
              <View style={styles.svgArea}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-left"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#4804B7"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <Path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                  <Circle cx="12" cy="11" r="1" />
                  <Line x1="12" y1="12" x2="12" y2="14.5" />
                </Svg>
              </View>
              <Text>Security Pin</Text>
            </View>
            <Text style={{color: 'gray'}}>****</Text>
          </View>

          <View style={styles.detailInner}>
            <View style={styles.innerLeft}>
              <View style={styles.svgArea}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-left"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#4804B7"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <Path d="M15.5 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z" />
                  <Line x1="4" y1="4" x2="11" y2="11" />
                  <Line x1="9" y1="4" x2="12.5" y2="7.5" />
                  <Line x1="4" y1="9" x2="7.5" y2="12.5" />
                </Svg>
              </View>
              <Text>KYC</Text>
            </View>
            <Text style={{color: 'red'}}>Complete KYC</Text>
          </View>
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
    position: 'absolute',
    left: 0,
    right: 0,
    height: 150,
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
  subWrapper1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 45,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 100,
    resizeMode: 'cover',
  },
  greeting: {
    paddingLeft: 10,
    color: 'white',
    fontSize: 18,
  },
  detailWrapper: {paddingLeft: 20, paddingRight: 20},
  detailInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    paddingLeft: 3,
    paddingRight: 3,
    paddingBottom: 20,
    paddingTop: 20,
  },
  innerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  svgArea: {
    padding: 3,
    backgroundColor: '#EBE8F6',
    borderRadius: 100,
    marginRight: 10,
  },
});

export default Account;
