import React from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/reducers.ts/rootReducer'
import { SvgUri } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Styles from '../styles/global'
import { getWeather } from '../redux/actions/action';

type Props={
    navigation:{
        navigate:Function
    }
}

export default function Country({navigation}:Props) {
    const {country} = useSelector((state:RootState) => state.country)
    const dispatch = useDispatch()
    console.log(country)
    return (
        <View style={Styles.infoScreen} testID="country-screen">
            <View style={Styles.infoCard}>
                <Text style={Styles.info}>Capital: <Text style={Styles.infoValues}>{country.capital}</Text></Text>
                <Text style={Styles.info}>Population:  <Text style={Styles.infoValues}>{country.population}</Text></Text>
                <Text style={Styles.info}>LatLng:  <Text style={Styles.infoValues}>{country.latlng}</Text></Text>
                <Text style={Styles.info}>Flag:</Text>
                <SvgUri height="30%" width="40%" uri={country.flag}/>
                <TouchableOpacity style={Styles.button} onPress={()=>dispatch(getWeather(country.capital,navigation))}><Text style={Styles.btnText}>Capital Weather</Text></TouchableOpacity>
            </View>
        </View>
    )
}
