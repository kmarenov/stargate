import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Header, ImageCard, Layout} from './../components/uikit';
import {STARGATE_DETAILS} from '../routes';
import {NavigationScreenProp} from 'react-navigation';

const url = 'http://api.tvmaze.com/search/shows?q=stargate';

const HomeScreen = ({navigation}: {navigation: NavigationScreenProp<any>}) => {
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
        {data.map(({show: item}: {show: ApiRow}) => {
          return (
            <ImageCard
              data={item}
              key={item.id}
              onPress={() => navigation.navigate(STARGATE_DETAILS, item)}
            />
          );
        })}
      </Layout>
    </View>
  );
};

export default HomeScreen;
