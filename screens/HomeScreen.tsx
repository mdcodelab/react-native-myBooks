import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BookCard from '../components/BookCard';
import { getAllBooks } from '../api/functions';

function HomeScreen() {
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    getAllBooks(
      (data) => setBooks(data),
      (error) => console.log(error)
    );
  }, []);

  console.log(books);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BookCard book={item} books={books} setBooks={setBooks}/>}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: 'gold',
  },
  contentList: {
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },    
});