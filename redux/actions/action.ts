import { Dispatch } from "redux";
import { http } from "../../utils/http";
import * as types from './types'

const key="ed88ba8e24d813ad3079d04c22bd29bc"

export const getCountry=(val:string,navigation:any)=>(dispatch:Dispatch)=>{
    http.get(`https://restcountries.eu/rest/v2/name/${val}`)
    .then(res=>{
        // console.log(res.data[0])
        dispatch({
            type:types.GET_COUNTRY,
            payload:res.data[0]
        })
        navigation.navigate('Country')
    })
    .catch((err)=>{
        console.log(err)
    })
}

export const getWeather=(country:string,navigation:any)=>(dispatch:Dispatch)=>{
    http.get(`http://api.weatherstack.com/current?access_key=${key}&query=${country}`)
    .then((res)=>{
        // console.log(res.data.current)
        dispatch({
            type:types.GET_WEATHER,
            payload:res.data.current
        })
        navigation.navigate('Weather')
    })
    .catch(err=>{
        console.log(err)
    })
}