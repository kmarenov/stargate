import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {width} from '../../../constants';

const Header = ({
  title,
  onPressLeft,
  onPressRight,
  iconLeft,
  colorLeft,
  iconRight,
  colorRight,
  detail,
}: {
  title: string;
  onPressLeft?: any;
  onPressRight?: any;
  iconLeft?: string;
  colorLeft?: string;
  iconRight?: string;
  colorRight?: string;
  detail?: boolean;
}) => {
  const {container, textStyle, iconLeftStyle, iconRightStyle} = styles;
  return (
    <View style={container}>
      {iconLeft && (
        <TouchableOpacity onPress={onPressLeft}>
          <Ionicons name={iconLeft} style={iconLeftStyle} color={colorLeft} />
        </TouchableOpacity>
      )}
      <Text numberOfLines={1} ellipsizeMode="tail" style={textStyle}>
        {title}
      </Text>
      {iconRight && (
        <TouchableOpacity onPress={onPressRight}>
          <MaterialCommunityIcons
            name={iconRight}
            style={[iconRightStyle, {color: colorRight}]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#30d0fe',
    paddingLeft: 22,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    paddingHorizontal: 20,
    position: 'relative',
    justifyContent: 'space-between',
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
        paddingTop: 40,
      },
    ),
    width: width - 75,
  },
  iconLeftStyle: {
    ...ifIphoneX(
      {
        paddingTop: 75,
      },
      {
        paddingTop: 40,
      },
    ),
    fontSize: 35,
  },
  iconRightStyle: {
    ...ifIphoneX(
      {
        paddingTop: 75,
      },
      {
        paddingTop: 44,
      },
    ),
    fontSize: 35,
    marginRight: 3,
  },
});

export default Header;
