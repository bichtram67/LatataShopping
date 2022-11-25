import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getProduct } from "../Product/productSlice";


const initialState = {
    listUser: []
}


// delete product admin
export const deleteProduct = createAsyncThunk('admin/delete/product', 
                async(id,thunkAPI) => {
                    try{

                        console.log(id)

                        const res = await axios.delete(`http://localhost:4000/api/v1/admin/product/${id}
                            `)


                        thunkAPI.dispatch(getProduct())
                        return res.data
                    }
                    catch(e){

                    }
                })

// delete user admin
export const deleteUser = createAsyncThunk('admin/delete/user', 
                async(id,thunkAPI) => {
                    try{

                        console.log(id)

                        const res = await axios.delete(`http://localhost:4000/api/v1/admin/user/${id}`)


                        thunkAPI.dispatch(getAllUser())
                        return res.data
                    }
                    catch(e){

                    }
                })

// get all user
export const getAllUser = createAsyncThunk('admin/user', 
        async(data,thunkAPI) => {
            try{
                
                const res = await axios.get('http://localhost:4000/api/v1/admin/users')

                return res.data.users
            }
            catch(e){
                return thunkAPI.rejectWithValue('Register Failed!')
            }
        })


// create product admin 
export const create

const adminSlice = createSlice({
    name: "admin",
    initialState,
    extraReducers: {
        [getAllUser.fulfilled]: (state,action) => {
            state.listUser = action.payload
        }
    }
})


export default adminSlice.reducer