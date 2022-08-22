import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import postsService from './postsService';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (data, thunkAPI) => {
    try {
      const data = await postsService.get();
      return data;
    } catch (e) {
      console.log('error', e);
    }
  }
);
export const fetchPostsFromFirebase = createAsyncThunk(
  'posts/fetchPostsFromFirebase',
  async () => {
    try {
      const data = await postsService.getFromFirebase();
      return data;
    } catch (e) {
      console.log('error', e);
    }
  }
);
export const removePost = createAsyncThunk(
  'posts/removePost',
  async (id, thunkAPI) => {
    try {
      const data = await postsService.delete(id);
      return data;
    } catch (e) {
      console.log('error', e);
    }
  }
);
export const removePostFromFirebase = createAsyncThunk(
  'posts/removePostFromFirebase',
  async (id, thunkAPI) => {
    try {
      const data = await postsService.deleteFromFirebase(id);
      return data;
    } catch (e) {
      console.log('error', e);
    }
  }
);
export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async (post, thunkAPI) => {
    try {
      const data = await postsService.update(post);
      console.log('data', data);
      return data;
    } catch (e) {
      console.log('error', e);
    }
  }
);

export const updatePostInFirebase = createAsyncThunk(
  'posts/updatePostInFirebase',
  async (post, thunkAPI) => {
    try {
      const data = await postsService.updateInFirebase(post);
      console.log('data', data);
      return data;
    } catch (e) {
      console.log('error', e);
    }
  }
);

export const postAPost = createAsyncThunk(
  'posts/postAPost',
  async (post, thunkAPI) => {
    try {
      const newPost = await postsService.post(post);
      return newPost;
    } catch (e) {
      console.log(e);
    }
  }
);

export const postAPostToFirebase = createAsyncThunk(
  'posts/postAPostToFirebase',
  async (post, thunkAPI) => {
    try {
      const newPost = await postsService.postToFirebase(post);
      return newPost;
    } catch (e) {
      console.log(e);
    }
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    isUpdating: { postId: null, status: false },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(fetchPostsFromFirebase.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(postAPost.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(postAPostToFirebase.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(removePost.fulfilled, (state, action) => {
        state.list = state.list.filter((post) => post.id !== action.payload);
      })
      .addCase(removePostFromFirebase.fulfilled, (state, action) => {
        state.list = state.list.filter((post) => post.id !== action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.isUpdating = { postId: null, status: false };
        state.list = state.list.map((post) => {
          if (post.id === action.payload.id) {
            return action.payload;
          }
          return post;
        });
      })
      .addCase(updatePostInFirebase.fulfilled, (state, action) => {
        state.isUpdating = { postId: null, status: false };
        state.list = state.list.map((post) => {
          if (post.id === action.payload.id) {
            return action.payload;
          }
          return post;
        });
      });
    // .addCase(updatePost.pending, (state, action) => {
    //   console.log('action', action);
    //   state.isUpdating = { postId: action.payload.meta.arg.id, status: true };
    // });
  },
});

export default postsSlice.reducer;
