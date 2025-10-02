import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';
import axios from "axios";

export default function App() {
  const endpoint = "https://68dd13757cd1948060ac4c21.mockapi.io/booksstore";
  const [bookList, setBookList] = React.useState([]);

  async function fetchData() {
    const result = await axios.get(endpoint);
    setBookList(result.data);
  }

  console.log(bookList[0]?.cover);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <Button title="Get the list of Books" onPress={fetchData} />
      <FlatList
        data={bookList}
        keyExtractor={(item) => item?.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: item.cover }}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.author}>{item.name}</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  listContent: {
    paddingVertical: 20,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 10,
  },
  author: {
    fontSize: 14,
    color: 'grey',
    marginTop: 10,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 150,
    backgroundColor: '#eee',
    borderRadius: 4,
  },
});