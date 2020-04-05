import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {width} from '../../../constants';

const Header = ({
  title,
  onPress,
  leftIcon,
  leftColor,
  detail,
}: {
  title: string;
  onPress?: any;
  leftIcon?: string;
  leftColor?: string;
  detail?: boolean;
}) => {
  const {viewStyle, textStyle, leftButtonStyle} = styles;
  return (
    <View style={viewStyle}>
      <TouchableOpacity onPress={onPress}>
        {leftIcon ? (
          <Ionicons
            name={leftIcon}
            style={[leftButtonStyle, {paddingLeft: detail ? 10 : 20}]}
            color={leftColor}
          />
        ) : (
          <View></View>
        )}
      </TouchableOpacity>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[textStyle, {paddingLeft: leftIcon ? 10 : 0}]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    backgroundColor: '#30d0fe',
    paddingLeft: 22,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    ...ifIphoneX(
      {
        height: 116,
      },
      {
        height: 90,
      },
    ),
  },
  textStyle: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',
    ...ifIphoneX(
      {
        paddingTop: 75,
      },
      {
        paddingTop: 50,
      },
    ),
    width: width - 40,
  },
  leftButtonStyle: {
    ...ifIphoneX(
      {
        paddingTop: 75,
      },
      {
        paddingTop: 50,
      },
    ),
    fontSize: 35,
  },
});

export default Header;
