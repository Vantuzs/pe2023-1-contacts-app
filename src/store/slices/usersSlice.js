import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '../../api';

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

// export const getUsersThink = createAsyncThunk('', async (payload, thunkAPI) => {});

export const getUsersThunk = createAsyncThunk(
  'users/getUsers',
  async (payload, thunkAPI) => {
    try {
      const { data } = await API.getUsers();
      return data; // action.payload
    } catch (err) {
      return thunkAPI.rejectWithValue({ message: err.message }); // action.payload
    }
  }
);

const usersSlice = createSlice({
  initialState,
  name: 'users',
  reducers: {},
  // extraReducers: builder=>{}
  extraReducers: builder => {
    // builder.addCase(action.type, (state, action)=>{})
    // action.type = thunk.(pending|fullfilled|rejected)
    builder.addCase(getUsersThunk.pending, (state, action) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getUsersThunk.fulfilled, (state, { payload }) => {
      state.users = payload;
      state.isFetching = false;
    });
    builder.addCase(getUsersThunk.rejected, (state, { payload }) => {
      state.error = payload;
      state.isFetching = false;
    });
  },
});

const { reducer, actions } = usersSlice;

export default reducer;
