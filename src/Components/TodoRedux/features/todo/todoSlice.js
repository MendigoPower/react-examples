import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import todoService from './todoService';

export const fetchTodos = createAsyncThunk(
  'todo/fetchTodos',
  async (thunkAPI) => {
    try {
      const response = await todoService.get();
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    list: [],
    isLoading: false,
    isError: false,
    message: '',
  },
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload);
    },
    remove: (state, action) => {
      state.list = state.list.filter((task) => task.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        if (action.payload.message) {
          state.message = action.payload.message;
        }
        state.list = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTodos.pending, (state, action) => {
        state.list = action.payload;
        state.isLoading = true;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { add, remove } = todoSlice.actions;
// export const {actions} = todoSlice
export default todoSlice.reducer;
