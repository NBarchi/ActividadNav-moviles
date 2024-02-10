import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props{
    title: string,
    onPress: ()=>void
}

export const ButtonComponent = ({title, onPress}:Props) => {
  return (
    <TouchableOpacity 
        style={styles.btn}
        onPress={onPress}>
        <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  )
}


const styles=StyleSheet.create({
    btn:{
        height:40,
        width: 100,
        backgroundColor: '#00CED1',
        justifyContent: 'center'
    },

    btnText:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign:'center',
    }
})