import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Header from './src/components/uikit/Header';

const url =
  'https://gitlab.com/gHashTag/react-native-init-data/-/raw/master/db.json';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData: any = async () => {
      const response = await fetch(url);
      setData(await response.json());
    };

    try {
      fetchData();
    } catch (e) {
      throw e;
    }
  }, []);

  return (
    <View>
      <Header title={'STAR GATE'} />
    </View>
  );
};

export default App;
