import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import {Header} from '../components/uikit';

const DetailsScreen = ({
  navigation,
}: {
  navigation: NavigationScreenProp<any>;
}) => {
  const {name, summary} = navigation.state.params;
  const {container, h1, h2, sub} = styles;
  return (
    <View style={container}>
      <Header
        detail
        title={name}
        onPress={() => navigation.goBack()}
        leftIcon="ios-arrow-back"
        leftColor="white"
      />
      <ScrollView>
        <View style={sub}>
          <Text style={h1}>{name.toUpperCase()}</Text>
          <Text style={h2}>{summary.replace(/<[^>]+>/g, '')}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  sub: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 150,
    backgroundColor: 'white',
  },
  h1: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 30,
    padding: 15,
    textAlign: 'center',
  },
  h2: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 15,
    padding: 15,
    color: 'grey',
    paddingHorizontal: 15,
    textAlign: 'center',
  },
});

export default DetailsScreen;
