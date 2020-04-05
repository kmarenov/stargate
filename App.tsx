import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Header, ImageCard, Layout} from './src/components/uikit';

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
      <Layout>
        {data.map((item: ApiRow) => {
          return <ImageCard data={item} key={item.id} />;
        })}
      </Layout>
    </View>
  );
};

export default App;
