import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import AddInputText from '../components/AddInputText';

function AddBookScreen({onPress}) {
  const [bookName, setBookName] = React.useState("");
  const [authorName, setAuthorName] = React.useState("");
  const [cover, setCover] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <AntDesign name="close" size={24} color="red" />
      </TouchableOpacity>
      <View>
        <Text style={styles.textTitle}>Add New Book</Text>
        <Text></Text>
        <AddInputText value={bookName} onChangeText={setBookName} placeholder={"Book name..."}></AddInputText>
        <AddInputText value={authorName} onChangeText={setAuthorName} placeholder={"Author..."}></AddInputText>
        <AddInputText value={cover} onChangeText={setCover} placeholder={"Cover image..."}></AddInputText>
      </View>
      <View>

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



}
});
