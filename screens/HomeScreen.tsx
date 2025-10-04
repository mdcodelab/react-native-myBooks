import React from 'react';
import { View, Text, StyleSheet, FlatList, Modal } from 'react-native';
import BookCard from '../components/BookCard';
import { getAllBooks } from '../api/functions';
import AddButton from '../components/AddButton';
import AddBookScreen from './AddBookScreen';

function HomeScreen() {
  const [books, setBooks] = React.useState([]);
  const [modalVisible, setModalVisible] = React.useState(false);

  React.useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getAllBooks();
        setBooks(data);
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchBooks();
  }, []);

  function onPress(){
    setModalVisible(!modalVisible);
  }

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
      <AddButton onPress={onPress}></AddButton>
      <Modal animationType="slide" visible={modalVisible}>
        <AddBookScreen onPress={onPress}/>
      </Modal>
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