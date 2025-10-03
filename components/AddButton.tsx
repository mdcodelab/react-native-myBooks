import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

function AddButton({onPress}) {
  return (
    <TouchableOpacity style={styles.containerButton} onPress={onPress}>
      <Text>
        <Entypo name="plus" size={24} color="black" />
      </Text>
    </TouchableOpacity>
  )
}

export default AddButton;

const styles = StyleSheet.create({
  containerButton: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  }
});

