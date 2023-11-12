import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '../../api';

const POSTS_SLICE_NAME = 'posts';

const initialState = {
  posts: [],
  isFetching: false,
  error: null,
};

export const getPostsThunk = createAsyncThunk(
  `${POSTS_SLICE_NAME}/getPosts`,
  async (payload, thunkAPI) => {
    try {
      const { data } = await API.getPosts();
      return data; // .fulfilled action.payload
    } catch (err) {
      return thunkAPI.rejectWithValue({ message: err.message }); // .rejected action.payload
    }
  }
);

// => posts/getPosts/pending    - isFetching = true, error = null
// => posts/getPosts/fullfilled - posts = payload, isFetching = false
// => posts/getPosts/rejected   - error = payload, isFetching = false

const postsSlice = createSlice({
  initialState,
  name: POSTS_SLICE_NAME,
  reducers: {},
  extraReducers: bulder => {
    bulder.addCase(getPostsThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    bulder.addCase(getPostsThunk.fulfilled, (state, { payload }) => {
      state.posts = payload;
      state.isFetching = false;
    });
    bulder.addCase(getPostsThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const { reducer, actions } = postsSlice;

export default reducer;
