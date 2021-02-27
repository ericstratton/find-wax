import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper'; // UI library //

export default function App() {

  const handlePress = () => console.log("Text Pressed");
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Text numberOfLines={1} onPress={handlePress}>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    </PaperProvider>
  );
}


