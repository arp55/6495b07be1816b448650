import React, { Provider, useState } from 'react'
import { Button, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { getCountry } from '../redux/actions/action'
import Styles from '../styles/global'

type Props={
    navigation:{
        navigate:Function
    }
}

export default function Home({navigation}:Props) {
    const [country, setCountry] = useState('')
    const dispatch = useDispatch()
    return (
        <View style={Styles.container} testID="home-screen">
            <TextInput style={Styles.textInput} onChangeText={(text)=>setCountry(text)}  placeholder="Enter country" />
            <Button color="skyblue" title="Submit" onPress={()=>dispatch(getCountry(country,navigation))} />
        </View>
    )
}
