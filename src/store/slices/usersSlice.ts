import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

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
  selectedUser: User | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  selectedUserStatus: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  selectedUser: null,
  status: 'idle',
  selectedUserStatus: 'idle',
  error: null,
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('/api/users/masked-email');
  
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  const users: User[] = await response.json();
  return users;
})

export const fetchUserById = createAsyncThunk('users/fetchUserById', async (userId: number) => {
    const response = await fetch(`/api/users/masked-email?id=${userId}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }

    const user: User = await response.json();
    return user;
  }
);

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
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
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
      .addCase(fetchUserById.pending, (state) => {
        state.selectedUserStatus = 'loading';
      })
      .addCase(fetchUserById.fulfilled, (state, action: PayloadAction<User>) => {
        state.selectedUserStatus = 'succeeded';
        state.selectedUser = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.selectedUserStatus = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
})

export const { filterUsers } = usersSlice.actions

export default usersSlice.reducer
