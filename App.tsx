import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [title, setTitle] = useState('STAR GATE');

  useEffect(() => {
    // setTitle('Hello World');
  }, []);

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#30d0fe',
    height: 116,
    justifyContent: 'center',
    paddingLeft: 22,
    paddingTop: 71,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',
  },
});

export default App;
