import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from 'native-base';
import { weatherEffects } from '../utilities/WeatherEffects';

const Weather = ({weather, temperature}) => {
  console.log(weather);
  return (
    <View style = {[
        styles.weatherContainer,
        { backgroundColor: weatherEffects[weather].color }
      ]}
    >
      <View style = {styles.headerContainer}>
        <Icon size = {72} name = {weatherEffects[weather].icon} color = {"#fff"} type = "MaterialCommunityIcons"/>
        <Text style = {styles.tempText}>{temperature}°</Text>
      </View>
      <View style = {styles.bodyContainer}>
        <Text style = {styles.title}>{weatherEffects[weather].title}</Text>
        <Text style = {styles.subtitle}>{weatherEffects[weather].subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempText: {
    fontSize: 48,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 48,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});

export default Weather;
