import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user : {},
    success: false,
    loading: false,
}

export const registerUser = createAsyncThunk('user/register', 
        async(data,thunkAPI) => {
            try{
                const headers = {
                    'Content-Type': 'multipart/form-data'
                }
                const res = await axios.post('/api/v1/register',data,{
                    headers: head
                })

                return res.data
            }
            catch(e){
                return thunkAPI.rejectWithValue('Register Failed!')
            }
        })

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [registerUser.fulfilled]: (state,action) => {
            state.user = action.payload
            state.success = true
        },
    }
})

export default userSlice.reducer