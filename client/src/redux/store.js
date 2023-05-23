import {configureStore} from '@reduxjs/toolkit'
import shop from '../redux/slice'

const store = configureStore({
    reducer: {
        shop
    }
})

export default store