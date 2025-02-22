import { createSlice } from '@reduxjs/toolkit'

export interface authState {
  value: string
}

const initialState: authState = {
  value: 'noAutorizado',
}

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment } = authSlice.actions

export default authSlice.reducer