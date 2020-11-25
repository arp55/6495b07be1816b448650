import React from 'react'
import { Image, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducers.ts/rootReducer'
import Styles from '../styles/global'

export default function Weather() {
    const {weather} = useSelector((state:RootState) => state.country)

    const renderItem=({item}:any)=>(
        <Image source={{uri:`${item}`}} style={Styles.icons} />
    )

    return (
        <View style={Styles.infoScreen}>
            <View style={Styles.infoCard}>
                <Text style={Styles.info}>Temperature: {weather.temperature}</Text>
                <FlatList style={Styles.list} data={weather.weather_icons} renderItem={renderItem} keyExtractor={item=>item}/>
                <Text style={Styles.info}>Wind Speed: {weather.wind_speed}</Text>
                <Text style={Styles.info}>Precipitation: {weather.precip}</Text>
            </View>
        </View>
    )
}



