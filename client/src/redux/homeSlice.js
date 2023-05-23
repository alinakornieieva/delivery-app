import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../axios'

const initialState = {
    products: [],
    shops: [],
    productsStatus: 'loading',
    shopsStatus: 'loading'
}

export const fetchProducts = createAsyncThunk('shop/fetchProducts', async () => {
    const {data} = await axios.get('/products')
    return data
})

export const fetchShops = createAsyncThunk('shop/fetchShops', async () => {
    const {data} = await axios.get('/shops')
    return data
})

export const fetchShop = createAsyncThunk('shop/fetchShop', async (shop) => {
    const {data} = await axios.get(`/products/${shop}`)
    return data
})

const slice = createSlice({
    name: 'shop',
    initialState,
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.productsStatus = 'loading'
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.productsStatus = 'idle'
            state.products = action.payload
        },
        [fetchProducts.rejected]: (state) => {
            state.productsStatus = 'error'
        },
        [fetchShop.pending]: (state) => {
            state.productsStatus = 'loading'
        },
        [fetchShop.fulfilled]: (state, action) => {
            state.productsStatus = 'idle'
            state.products = action.payload
        },
        [fetchShop.rejected]: (state) => {
            state.productsStatus = 'error'
        },
        [fetchShops.pending]: (state) => {
            state.shopsStatus = 'loading'
        },
        [fetchShops.fulfilled]: (state, action) => {
            state.shopsStatus = 'idle'
            state.shops = action.payload
        },
        [fetchShops.rejected]: (state) => {
            state.shopsStatus = 'error'
        }
    }
})

const {reducer} = slice
export default reducer