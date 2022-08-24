import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  createUser,
  loginWithGoogle,
  loginWithGithub,
} from './features/user/userSlice';

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const signup = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const newUser = { email, password };
    dispatch(createUser(newUser));
  };
  return (
    <>
      <form onSubmit={signup}>
        <div>
          <label htmlFor=''>Email</label>
          <input type='email' ref={emailRef} />
        </div>
        <div>
          <label htmlFor=''>Password</label>
          <input type='password' ref={passwordRef} />
        </div>
        <button>Sign Up!</button>
      </form>
      <button onClick={() => dispatch(loginWithGoogle())}>
        Login with Google
      </button>
      <button onClick={() => dispatch(loginWithGithub())}>
        Login with Github
      </button>
    </>
  );
}
