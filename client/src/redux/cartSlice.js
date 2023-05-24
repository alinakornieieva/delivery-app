import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    products: JSON.parse(localStorage.getItem('shop') ?? '[]'),
    totalPrice: JSON.parse(localStorage.getItem('totalPrice') ?? 0)
}

const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.totalPrice += action.payload.price
            state.products.find((product) => product._id === action.payload._id) ?
            state.products.map(product => {
                if (product._id === action.payload._id) {
                    return product.amount += 1
                }
                return product
            }) : state.products.push({...action.payload, amount: 1})
            localStorage.setItem('shop', JSON.stringify(state.products))
            localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice))
        },
        deleteProduct: (state, action) => {
            state.totalPrice -= action.payload.price
            state.products = state.products.find((product) => product._id === action.payload._id) && action.payload.amount !== 1 ?
                state.products.map((product) => {
                    if (product._id === action.payload._id) {
                        return {...product, amount: product.amount - 1}
                    }
                    return product
                })
            : state.products.filter((product) => product._id !== action.payload._id)
            localStorage.setItem('shop', JSON.stringify(state.products))
            localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice))
        }
    }
})

const {reducer, actions} = slice
export default reducer
export const {addProduct, deleteProduct} = actions