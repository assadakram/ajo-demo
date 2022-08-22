/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import type {Node} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Bar} from 'react-native-progress';

const Card = () => {
  return (
    <View style={styles.mainScrollCard}>
      <Text style={styles.scrollCenterTitle}>Admitting</Text>
      <Text style={styles.scrollCenterText}>Monthly Simply Saver 1</Text>
      <Text style={styles.scrollCenterText2}>~ $12,000.0</Text>
      <Text style={styles.scrollCenterText3}>Save 2000 monthly</Text>
      <View style={styles.barWrapper}>
        <Text style={{paddingRight: 5}}>5 Slots</Text>
        <Bar
          progress={0.3}
          width={200}
          color="#4606AF"
          unfilledColor="lightgray"
          borderWidth={0}
        />
      </View>
    </View>
  );
};

const Carousel: () => Node = ({navigation}) => {
  return (
    <View style={styles.cardWrapper}>
      <View style={[styles.scrollSection, {paddingTop: 20, paddingBottom: 20}]}>
        <Text style={{fontSize: 18, fontWeight: '700'}}>Public Groups</Text>
        <Text style={{fontSize: 18, color: '#3D1784'}}>See all</Text>
      </View>
      <ScrollView style={{paddingLeft: 20}} horizontal={true}>
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {marginBottom: 40, alignItems: 'center'},
  scrollSection: {
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    paddingTop: 10,
    paddingBottom: 10,
  },
  scrollCenterTitle: {
    fontWeight: '800',
    fontSize: 18,
    color: '#95B291',
  },
  scrollCenterText: {
    fontSize: 17,
  },
  scrollCenterText2: {
    fontSize: 20,
    fontWeight: '700',
  },
  scrollCenterText3: {
    fontSize: 15,
  },
  mainScrollCard: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: 300,
    marginRight: 20,
  },
  barWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Carousel;
