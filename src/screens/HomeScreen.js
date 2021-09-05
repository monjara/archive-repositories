import React from 'react';
import {StyleSheet, Text, View, FlatList, StatusBar} from 'react-native';

const FlatListData = [
  {
    country: 'Country Name', // Which will display on bottom
    artists: [
      [artist_name: 'artistOne_name'],
      [artist_name: 'artistTwo_name'],
      [artist_name: 'artistThree_name'],
      [artist_name: 'artistFour_name'],
    ],
  },
];

const HomeScreen = () => (
  <View>
    <Text>test page</Text>
    <FlatList
      data={FlatListData}
      renderItem={({item}) => (
        <View>
          <Text>{item.country}</Text>
          <FlatList
            data={item.artists}
            renderItem={({data}) => (
              <View>
                <Text>{data.artist_name}</Text>
              </View>
            )}
            keyExtractor={(data, index) => index}
          />
        </View>
      )}
      keyExtractor={(item, index) => index}
    />
  </View>
);

export default HomeScreen;
