/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty-pattern */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { kelliapi } from '@/setup/api'

// Define a type for the slice state
interface IauthState {
  user: any | null,
  errorLogin: string | null
}

// Define the initial state using that type
const initialState: IauthState = {
  user: null,
  errorLogin: null
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUserData: (state, { payload }) => {
      state.user = payload
    },
    setErrorLogin: (state, { payload }) => {
      state.errorLogin = payload
    },
  }
})

export const Login = createAsyncThunk('auth/login', async (data: { username: string, password: string}, thunkApi) => {
  const dispatch = thunkApi.dispatch;

  const req = await kelliapi.post('/kelly/auth/login', data)
  const res = req.data;

  if (!res.response){
    return dispatch(setErrorLogin('Login incorrecto'))
  }

  dispatch(setUserData(res.user))
})

export const { setUserData, setErrorLogin } = authSlice.actions

export default authSlice.reducer