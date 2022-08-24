import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove, fetchTodos, fetchTodosFromFirebase } from './features/todo/todoSlice';
import { createUser, login, signOut } from './features/user/userSlice';
// import { actions } from './features/todo/todoSlice';
export default function Todo() {
  const { list, isLoading, isError, message } = useSelector(
    (state) => state.todo
  );
  const dispatch = useDispatch();
  const inputRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const signInEmailRef = useRef();
  const signInPasswordRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: list.length + 1,
      title: inputRef.current.value,
    };
    dispatch(add(newTask));
  };
  useEffect(() => {
    dispatch(fetchTodosFromFirebase());
  }, [dispatch]);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (message) {
    return <h2>{message}</h2>;
  }

  if (isError) {
    return <h2>Failed to load data!</h2>;
  }
  
const signUp = (e) => {
  e.preventDefault();
  const email = emailRef.current.value;
  const password = passwordRef.current.value;
  const newUser = {email, password};
  dispatch(createUser(newUser));
};

const signIn = (e) => {
  e.preventDefault();
  const email = signInEmailRef.current.value;
  const password = signInPasswordRef.current.value;
  const user = { email, password };
  dispatch(login(user));
}


  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={signUp}>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" ref={passwordRef}/>
        </div>
        <button>Sign Up</button>
      </form>
      <form onSubmit={signIn}>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" ref={signInEmailRef} />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" ref={signInPasswordRef}/>
        </div>
        <button>Sign In</button>
      </form>
      <button onClick={()=>dispatch(signOut())}>signOut</button>
      <form onSubmit={handleSubmit}>
        <label htmlFor='taskInput'>New Task:</label>
        <input type='text' ref={inputRef} />
        <button>Submit</button>
      </form>
      <ul>
        {list.map((task) => (
          <li key={task.id}>
            <button onClick={() => dispatch(remove(task.id))}>X</button>
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
