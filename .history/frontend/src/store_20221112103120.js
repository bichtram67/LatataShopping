import { configureStore } from '@reduxjs/toolkit'
import productSlice from './redux/Product/productSlice'


const store = configureStore({
    reducer:{
        product: productSlice,
        user: userSlice

    }
}) 

export default store