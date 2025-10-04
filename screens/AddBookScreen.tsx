import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import AddInputText from '../components/AddInputText';
import { addBook, getAllBooks } from '../api/functions';

function AddBookScreen({onPress}) {
  const [name, setName] = React.useState("");
  const [cover, setCover] = React.useState("");

  const addNewBook = async () => {
    if (name.length > 0 && cover.length > 0) {
      const newBook = {
        name: name,
        cover: cover || "https://via.placeholder.com/150"
      }
      await addBook(newBook);
      const updated = await getAllBooks();
      
      onPress();
    }
  
    }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <AntDesign name="close" size={24} color="red" />
      </TouchableOpacity>
      <View>
        <Text style={styles.textTitle}>Add New Book</Text>
        <Text></Text>
        <AddInputText value={name} onChangeText={setName} placeholder={"Book name..."}></AddInputText>
        <AddInputText value={cover} onChangeText={setCover} placeholder={"Cover image..."}></AddInputText>
      </View>
      <View>
        <TouchableOpacity style={styles.saveButton} onPress={addNewBook}>
          <Text style={styles.textButton}>Save Book</Text>
        </TouchableOpacity>
          
      </View>

    </SafeAreaView>
  )
}

export default AddBookScreen;

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
    color: "#fff",
    width: 230
}
});
