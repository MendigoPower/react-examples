import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  login,
  loginWithGoogle,
  loginWithGithub,
} from './features/user/userSlice';

export default function SignIn() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const user = { email, password };
    dispatch(login(user));
  };
  return (
    <div>
      <h2>SignIn</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='emailInput'>Email</label>
          <input type='email' ref={emailInputRef} />
        </div>
        <label htmlFor='passwordInput'>Password</label>
        <input type='password' ref={passwordInputRef} />
        <div>
          <button>Sign in!</button>
        </div>
      </form>
      <button onClick={() => dispatch(loginWithGoogle())}>
        Sign in with Google
      </button>
      <button onClick={() => dispatch(loginWithGithub())}>
        Login with Github
      </button>
    </div>
  );
}
