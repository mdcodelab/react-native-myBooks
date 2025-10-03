import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BookCard from '../components/BookCard';



function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text >Home Screen</Text>
      <BookCard></BookCard>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: 'gold',
  },
});
