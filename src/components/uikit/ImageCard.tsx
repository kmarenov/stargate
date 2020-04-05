import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {width} from '../../../constants';

const ImageCard = ({data}: {data: ApiRow}) => {
  const {name, image} = data;
  const {container, cover, h1, sub} = styles;
  return (
    <View style={container}>
      <View style={sub}>
        <Image source={{uri: image}} style={cover} />
      </View>
      <Text style={h1}>{name.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2.4,
    paddingVertical: 10,
  },
  sub: {
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.4,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  cover: {
    width: width / 2.4,
    height: width * 0.63,
    borderRadius: 10,
  },
  h1: {
    paddingTop: 10,
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    width: width / 2.4,
  },
});

export default ImageCard;
