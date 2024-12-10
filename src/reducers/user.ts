import { createSlice } from '@reduxjs/toolkit'

export const userStore = createSlice({
  name: 'userStore',
  initialState: {
    user: {}
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    deleteStore: (state) => {
      state.user = {}
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, deleteStore } = userStore.actions

export default userStore.reducer