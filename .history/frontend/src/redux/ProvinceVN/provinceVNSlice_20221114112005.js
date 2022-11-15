import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState={
    province: {}
}

export getProvince = createAsyncThunk('province', 
            async(data))

const provinceVNSlice = createSlice({
    name: 'province',
    initialState,
    extraReducers: {

    }
})

export default provinceVNSlice.reducer