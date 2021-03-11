import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import colors from '../config/colors';

function ListItem({ image, title, subTitle, onPress }) {
  return (
    <TouchableHighlight
      underlayColor={colors.lightGrey}
      onPress={onPress}
      >
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.secondary,
  },
  title: {
    fontWeight: '500',
  }
});

export default ListItem;
