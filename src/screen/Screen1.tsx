import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ButtonComponent } from '../components/ButtonComponent'
import { StackScreenProps } from '@react-navigation/stack'
import { Screen2 } from './Screen2'
import { stylesGlobal } from '../theme/apptheme'

interface Props extends StackScreenProps<any, any>{};

export const Screen1 = ({navigation}:Props) => {
  return (
    <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.title}>BIENVENIDO</Text>
        <Image source={{uri: 'https://img.freepik.com/vector-gratis/ilustracion-concepto-aplicaciones-moviles_114360-690.jpg'}}
            style={{width: 300, height: 300}}/>
        <ButtonComponent title='Acceder' onPress={()=>navigation.navigate('División')}/>
    </View>
  )
}


