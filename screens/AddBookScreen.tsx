import React from 'react';
import { View, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

function AddBookScreen({onPress}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <AntDesign name="close" size={24} color="red" />
      </TouchableOpacity>
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
