import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Header, ImageCard} from './src/components/uikit';

const url =
  'https://gitlab.com/gHashTag/react-native-init-data/-/raw/master/db.json';

const App = () => {
  const [data, setData] = useState([]);
  const {container} = styles;

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
      <ScrollView>
        <View style={container}>
          {data.map((item: ApiRow) => {
            return <ImageCard data={item} key={item.id} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    marginBottom: 150,
  },
});

export default App;
