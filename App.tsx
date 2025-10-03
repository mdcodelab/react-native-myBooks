import React from 'react';
import { View, Text, Image, FlatList, Button, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';


function App() {
  return (
    <View style={styles.container}>
      <HomeScreen></HomeScreen>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
