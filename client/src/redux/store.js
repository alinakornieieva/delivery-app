import {configureStore} from '@reduxjs/toolkit'
import shop from './homeSlice'
import cart from './cartSlice'

const store = configureStore({
    reducer: {
        shop, cart
    }
})

export default store