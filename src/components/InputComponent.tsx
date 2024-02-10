import React from 'react'
import { TextInput, StyleSheet } from 'react-native';

interface InputProps{
    placeholder: string,
    name: string,
    onChangeText: (name: string, value: string)=> void
}

export const InputComponent = ({placeholder, name, onChangeText}:InputProps) => {
  return (
    <TextInput
        placeholder={placeholder}
        keyboardType='numeric'
        style={styles.inputText}
        onChangeText={(value: string)=>onChangeText(name,value)}/>
  )
}

const styles=StyleSheet.create({
    inputText:{
        backgroundColor: '#f1f4f5',
        paddingTop: 10,
        borderWidth: 1,
        width:150
    }
})
