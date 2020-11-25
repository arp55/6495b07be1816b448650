import { combineReducers } from "redux";
import country from './country'

export const rootReducer=combineReducers({
    country
})

export type RootState= ReturnType<typeof rootReducer>