import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk for fetching users
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      return await response.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong!!';
      });
  }
});

export default userSlice.reducer;