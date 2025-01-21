import {configureStore} from '@reduxjs/toolkit'
import skladReduser from './skladSlice'
import authReducer from './authSlice'

export const store = configureStore({
    reducer: {
        sklad: skladReduser,
        auth: authReducer
    }
})