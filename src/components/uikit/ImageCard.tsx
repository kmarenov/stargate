import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {width} from '../../../constants';

const ImageCard = ({data, onPress}: {data: ApiRow; onPress: any}) => {
  const {name, image} = data;
  const {container, cover, h1, sub} = styles;
  const img = `https${image.medium.slice(4)}`;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={container}>
        <View style={sub}>
          <Image source={{uri: img}} style={cover} />
        </View>
        <Text style={h1}>{name.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
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
