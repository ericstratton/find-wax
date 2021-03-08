import React, { useState, useEffect }from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native';
import Card from '../components/Card';
import Button from './../components/AppButton';
import shopsApi from './../api/shops';

export default function ShopsScreen() {

  const [shops, setShops] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadShops();
  }, []);

  const loadShops = async () => {
    const response = await shopsApi.getShops();
    if (!response.ok) return setError(true);
    setError(false);
    setShops(response.data);
  };

  return (
    <View>
      {error && (<>
        <Text>Couldn't retrieve data.</Text>
        <Button title="Retry" onPress={loadShops}/>
      </>)}
      <FlatList 
        data={shops}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) =>
          <Card
            title={item.title}
            subTitle={item.subTitle} />
          } />
      <Text>{console.log(shops)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
