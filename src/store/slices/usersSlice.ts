// store/slices/usersSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface User {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

interface UsersState {
  users: User[]
  filteredUsers: User[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  status: 'idle',
  error: null,
}

// Asynchronous thunk action
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://reqres.in/api/users?page=1&per_page=12')
  return response.data.data as User[]
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    filterUsers(state) {
      state.filteredUsers = state.users.filter(
        (user) =>
          user.first_name.startsWith('G') || user.last_name.startsWith('W')
      )
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.users = action.payload
        state.filteredUsers = state.users.filter(
          (user) =>
            user.first_name.startsWith('G') || user.last_name.startsWith('W')
        )
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Something went wrong'
      })
  },
})

export const { filterUsers } = usersSlice.actions

export default usersSlice.reducer
