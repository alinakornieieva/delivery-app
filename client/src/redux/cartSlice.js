import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    totalPrice: 0,
    products: [],
    totalItemsCount: 0
}

const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.find((product) => product._id === action.payload._id) ?
            state.products.map(product => {
                if (product._id === action.payload._id) {
                    return product.amount += 1
                }
                return product
            }) : state.products.push({...action.payload, amount: 1})
        }
    }
})

const {reducer, actions} = slice
export default reducer
export const {addProduct} = actions