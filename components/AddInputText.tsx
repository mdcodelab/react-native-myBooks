import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

type AddInputTextProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
    keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
};

function AddInputText({ value, onChangeText, 
    placeholder, keyboardType }: AddInputTextProps) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        keyboardType={keyboardType}
      />
    </View>
  );
}

export default AddInputText;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: 'gray',
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
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
