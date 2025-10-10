import React from 'react';
import { View, Text, StyleSheet, FlatList, Modal } from 'react-native';
import BookCard from '../components/BookCard';
import { getAllBooks } from '../api/functions';
import AddButton from '../components/AddButton';
import AddBookScreen from './AddBookScreen';
import EditBookScreen from './EditBookScreen';
import { editBook } from '../api/functions';

interface Book {
  id: string;
  name: string;
  cover: string;
}

function HomeScreen() {
  const [books, setBooks] = React.useState<Book[]>([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [editModalVisible, setEditModalVisible] = React.useState(false);
  const [selectedBook, setSelectedBook] = React.useState<Book | null>(null);

  const fetchBooks = async () => {
    try {
      const data = await getAllBooks();
      setBooks(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchBooks();
  }, []);

  const onPress = () => {
    // If modal is currently visible and we're about to close it, refresh the books list
    if (modalVisible) {
      fetchBooks();
    }
    setModalVisible(!modalVisible);
  };

  async function handleEdit(item: Book) {
    setSelectedBook(item);
    setEditModalVisible(true);
  }

  const onEditPress = () => {
    // If edit modal is currently visible and we're about to close it, refresh the books list
    if (editModalVisible) {
      fetchBooks();
    }
    setEditModalVisible(!editModalVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BookCard 
        book={item} books={books} setBooks={setBooks} handleEdit={() => handleEdit(item)}/>}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
      <AddButton onPress={onPress}></AddButton>
      <Modal animationType="slide" visible={modalVisible}>
        <AddBookScreen onPress={onPress}/>
      </Modal>
      {selectedBook && (
        <Modal animationType="slide" visible={editModalVisible}>
          <EditBookScreen 
            onPress={onEditPress} 
            book={selectedBook} 
            onBookUpdated={fetchBooks}
          />
        </Modal>
      )}
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