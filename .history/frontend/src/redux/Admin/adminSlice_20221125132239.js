import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {

}

export const deleteProduct = createAsyncThunk('admin/delete', 
                async(data,thunkAPI))


const adminSlice = createSlice({
    name: "admin",
    initialState,
})