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
