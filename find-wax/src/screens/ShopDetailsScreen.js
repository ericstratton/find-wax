import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import shops from '../api/shops';

function ShopDetailsScreen({ route }) {
  const shop = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: shop.image_url }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.nameText}>{shop.name}</Text>
        <View style={styles.detailsText}>
          <Text style={styles.text}>{shop.display_phone}</Text> 
          <Text style={styles.text}>{shop.location.display_address}</Text> 
          <Text style={styles.text}>{shop.categories[0].title}</Text>
          <Text style={styles.text}>{shop.price}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  detailsContainer: {
    padding: 5,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 20,
  },
  detailsText: {

  },  
  nameText: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default ShopDetailsScreen;