import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Header from './src/components/uikit/Header';

const App = () => {
  const [title, setTitle] = useState('STAR GATE');

  useEffect(() => {
    // setTitle('Hello World');
  }, []);

  return (
    <View>
      <Header title={title} />
    </View>
  );
};

export default App;
