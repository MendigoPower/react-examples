# Redux

## What is Redux?

- JS library - State management
- Can be used with React, Angular, Vue, etc.
- Solve the problem of complex state
- Better solution for passing props to not related components
- Alternative to Context API + useReducer Hook

## How to install

```
npm install --save react-redux @reduxjs/toolkit
```

## Parts of Redux

- Docs: [https://redux.js.org/]

- Store:
  - Global state (Similar to Context).
  - A store holds the whole state tree of your application.
  - Multiple reducers can be added to the store.

```js
// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import loggedReducer from './loggedSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    logged: loggedReducer,
  },
});
```

- Slice (Reducer):
  - Object that holds reducer data as name, state, actions and so on.
  - Actions are generated for each case reducer function

```js
import { createSlice } from '@reduxjs/toolkit';

export const loggedSlice = createSlice({
  name: 'logged',
  initialState: {
    value: false,
  },
  reducers: {
    signIn: (state) => {
      state.value = true;
    },
    signOut: (state) => {
      state.value = false;
    },
  },
});

export const { signIn, signOut } = loggedSlice.actions;

export default loggedSlice.reducer;
```

- Provider: Component that provides the store as props.

```jsx
import { Provider } from 'react-redux';
import store from './store';

<Provider store={store}>
  <App />
</Provider>;
```

## Redux DevTools Extension

[https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en]

```js
export default configureStore({
  reducer: {
    counter: counterReducer,
    logged: loggedReducer,
  },
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});
```

## Redux Hooks

### useSelector

Function that access a specific property of the state.

```js
import { useSelector } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter.value);
  const isLogged = useSelector((state) => state.logged.value);
  return (
    <div className='App'>
      <h1>Counter : {counter} </h1>
      <h1>Is Logged : {logged} </h1>
    </div>
  );
}
```

### useDispatch

Function that executes one of the actions.

```js
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './counterSlice';

function App() {
  const counter = useSelector((state) => state.counter.value);
  const isLogged = useSelector((state) => state.logged.value);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <h1>Counter : {counter} </h1>
      <h1>Is Logged : {isLogged} </h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}
```

## Exercise

Create a Todo list using Redux.

- User must be able to add new task.
- User must be able to delete existing task.

```
Todo List<h1>

<form>
    Task<input>
    Submit<button>
</form>
TaskList<ul>
    TaskItem<li>
</ul>
```

## API Requests

### Step 1: Import `createAsyncThunk` and call the method to create a new function

```js
// todoSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import todoService from './todoService';

export const fetchTodos = createAsyncThunk(
  'todo/fetchTodos',
  async (thunkAPI) => {
    const response = await todoService.get();
    return response.data;
  }
);
```

### Step 2: Create a service file

```js
// todoService.js
import axios from 'axios';

const todoService = {
  // create one method for every type of request (get, post, put, delete)
  get: async () => {
    //get all todos
    return await axios.get('https://jsonplaceholder.typicode.com/todos');
  },
};

export default todoService;
```

### Step 3: Add extraReducers to your slice

```js
{
  extraReducers: (builder) => {
    builder
      // add a case for every status that needs to update the state.
      .addCase(fetchTodos.fulfilled, (state, action) => {
        // Add all todos to the state array
        state.list = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTodos.pending, (state, action) => {
        // Update loading status
        state.isLoading = true;
      });
  },
}
```

### Step 4: In your component, import the function from the slice file.

```js
//Todo.jsx
import { add, remove, fetchTodos } from './features/todoSlice';
```

### Step 5: Call dispatch and pass the function as parameter.

```js
//Todo.jsx
useEffect(() => {
  dispatch(fetchTodos());
}, [dispatch]);
```

### Step 5: Call useSelector to access the state values.

```js
//Todo.jsx
const { list, isLoading } = useSelector((state) => state.todo);
```

## Exercise 2

Create a Post blog using Redux.

- User must be able to see all the posts.
- User must be able to post new post.
- User must be able to delete existing post.
- User must be able to edit existing post.

```
Blog Posts<h1>

<form>
    Title<input>
    Body<textarea>
    Submit<button>
</form>
PostFeed<section>
    Post<article>
      title<h2>
      body<p>
</section>
```
