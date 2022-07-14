import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface user {
  username: string;
  password: string;
}

// Define the initial state using that type
const User: any =null;

export const slice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState:User,
  reducers: {

    login:(state,action:PayloadAction<user>)=>{
        state.User=action.payload;
    },
    logout:(state)=>{
        state.User=null;
    }
   
  },
})

export const { login,logout } = slice.actions

// Other code such as selectors can use the imported `RootState` type

export default slice.reducer