const initialState={
    country:'',
    weather:''
}

export default (state=initialState,action:any)=>{
    switch(action.type){
        case 'GET_COUNTRY':
            return {...state,country:action.payload}
        case 'GET_WEATHER':
            return {...state,weather:action.payload}
        default:
            return state
    }
}