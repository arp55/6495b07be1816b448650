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
        <View style={Styles.infoScreen} testID="weather-screen">
            <View style={Styles.infoCard}>
                <Text style={Styles.info}>Temperature: <Text style={Styles.infoValues}>{weather.temperature}</Text></Text>
                <FlatList style={Styles.list} data={weather.weather_icons} renderItem={renderItem} keyExtractor={item=>item}/>
                <Text style={Styles.info}>Wind Speed:  <Text style={Styles.infoValues}>{weather.wind_speed}</Text></Text>
                <Text style={Styles.info}>Precipitation:  <Text style={Styles.infoValues}>{weather.precip}</Text></Text>
            </View>
        </View>
    )
}



