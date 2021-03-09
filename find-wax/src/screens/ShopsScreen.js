import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, FlatList } from 'react-native';
import Screen from './../components/Screen';
import Card from '../components/Card';
import Button from './../components/AppButton';
import shopsApi from './../api/shops';
import useApi from './../hooks/useApi';
import colors from '../config/colors';


export default function ShopsScreen() {
  const { data: shops, error, loading, request: loadShops } = useApi(shopsApi.getShops);

  useEffect(() => {
    loadShops();
  }, []);

  return (
    <Screen style={styles.container}>
      {error && (<>
        <Text>Couldn't retrieve data.</Text>
        <Button title="Retry" onPress={loadShops}/>
      </>)}
      <ActivityIndicator animating={loading} size='large' />
      <FlatList 
        data={shops.businesses}
        keyExtractor={shop => shop.id.toString()}
        renderItem={({ item }) => (
          <Card
            imageUrl={item.image_url}
            title={item.name}
            subTitle={item.phone} />
        )} />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.lightGrey
  }
})