import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

function BookCard() {
  return (
    <View style={styles.container}>
    <Image source={require('../assets/icon.png')}
    style={styles.coverImage}></Image>
    <View style={styles.detailsContainer}>
      <Text style={styles.author}>Author</Text>
      <Text style={styles.price}>Price</Text>
    </View>
    <View style={styles.editDelete}>
      <TouchableOpacity>
        <AntDesign name="edit" size={24} color="green" />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
    </View>
  )
}


export default BookCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    width: "25%"
  },
  coverImage: {
    width: '50%',
    height: 120,
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
    marginTop: 10 
}
});
