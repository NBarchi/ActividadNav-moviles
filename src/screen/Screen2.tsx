import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { ButtonComponent } from '../components/ButtonComponent'
import { InputComponent } from '../components/InputComponent'
import { stylesGlobal } from '../theme/apptheme';

interface NumForm{
    num1: string,
    num2: string
}

export const Screen2 = () => {

    const [form, setForm] = useState<NumForm>({
        num1: '',
        num2: ''
    })

    const handlerChangeText=(name: string, value: string)=>{
        setForm(prevState => ({
            ...prevState,
            [name]:value
        }))
    }

    const [resultado, setResultado] = useState('')

    const Division=()=>{
        const numero1=parseInt(form.num1)
        const numero2=parseInt(form.num2)
        const div=numero1/numero2;

        if (numero1 === 0) {
            setResultado('Indeterminación')

        }else if(numero2 === 0){
            setResultado('No existe división para 0')

        }else{
            setResultado(`El resultado es: ${div}`)
        }

    }

  return (
    <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.title}>División</Text>
        <InputComponent placeholder='Número 1' name='num1' onChangeText={handlerChangeText}/>
        <InputComponent placeholder='Número 2' name='num2' onChangeText={handlerChangeText}/>
        <ButtonComponent title='Dividir' onPress={Division}/>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{resultado}</Text>
    </View>
  )
}
