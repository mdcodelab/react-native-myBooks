import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import AddInputText from '../components/AddInputText';
import { editBook } from '../api/functions';

interface Book {
  id: string;
  name: string;
  cover: string;
}

interface EditBookScreenProps {
  onPress: () => void;
  book: Book;
  onBookUpdated: () => void;
}

function EditBookScreen({ onPress, book, onBookUpdated }: EditBookScreenProps) {
  const [name, setName] = React.useState(book.name);
  const [cover, setCover] = React.useState(book.cover);

  const updateBook = async () => {
    if (name.length > 0 && cover.length > 0) {
      try {
        const updatedBook = {
          name: name,
          cover: cover || "https://via.placeholder.com/150"
        };
        
        await editBook(book.id, updatedBook);
        Alert.alert("Success", "Book updated successfully");
        onBookUpdated(); // Refresh the books list
        onPress(); // Close the modal
      } catch (error) {
        console.error("Error updating book:", error);
        Alert.alert("Error", `Failed to update book: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    } else {
      Alert.alert("Error", "Please fill in all fields");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <AntDesign name="close" size={24} color="red" />
      </TouchableOpacity>
      <View>
        <Text style={styles.textTitle}>Edit Book</Text>
        <Text></Text>
        <AddInputText value={name} onChangeText={setName} placeholder={"Book name..."}></AddInputText>
        <AddInputText value={cover} onChangeText={setCover} placeholder={"Cover image..."}></AddInputText>
      </View>
      <View>
        <TouchableOpacity style={styles.saveButton} onPress={updateBook}>
          <Text style={styles.textButton}>Update Book</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default EditBookScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    padding: 20
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  button: {
    position: "absolute",
    top: 40,
    right: 40,
    zIndex: 2,  
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  saveButton: {
    backgroundColor: "grey",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20
  },
  textButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    width: 230
  }
});