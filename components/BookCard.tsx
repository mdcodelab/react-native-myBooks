import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { deleteBook } from '../api/functions';

interface Book {
  id: string;
  name: string;
  cover: string;
}

interface BookCardProps {
  book: Book;
  books: Book[];
  setBooks: (books: Book[]) => void;
}

function BookCard({ book, books, setBooks }: BookCardProps) {

  const handleDelete = (id: string) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this book?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              console.log('Attempting to delete book with ID:', id);
              const result = await deleteBook(id);
              console.log('Delete result:', result);
              
              const newBooks = books.filter((item) => item.id !== id); // scoți cartea din listă
              setBooks(newBooks);
              Alert.alert("Success", "Book deleted successfully");
            } catch (error) {
              console.error("Delete error:", error);
              Alert.alert("Error", `Failed to delete book: ${error instanceof Error ? error.message : 'Unknown error'}`);
            }
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: book.cover }} style={styles.coverImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.author}>{book.name}</Text>
        <Text style={styles.price}>Price</Text>
      </View>
      <View style={styles.editDelete}>
        <TouchableOpacity>
          <AntDesign name="edit" size={24} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(book.id)}>
          <AntDesign name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default BookCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 250,
    height: 120,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  coverImage: {
    width: '50%',
    height: 100,
    borderRadius: 8,
    resizeMode: 'stretch',
  },
  detailsContainer: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  author: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: 'gray',
  },
  editDelete: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
