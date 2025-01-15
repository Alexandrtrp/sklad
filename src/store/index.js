import {configureStore} from '@reduxjs/toolkit'
import skladReduser from './skladSlice'

export const store = configureStore({
    reducer: {
        sklad: skladReduser
    }
})