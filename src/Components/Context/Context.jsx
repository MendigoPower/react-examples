import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import { useState } from 'react';
import { UserContext, UserProvider } from './UserContext';

export default function Context() {
  // const [user, setUser] = useState({
  //   name: '',
  //   email: '',
  // });
  // const updateUser = (newUser) => {
  //   setUser({ ...newUser });
  // };
  return (
    <div className='component'>
      <h1>App</h1>
      {/* <UserContext.Provider
        value={{ name: 'Context', email: 'context@context.com' }}>
        <UserContext.Consumer>
          {(value) => <Navbar email={value.email} />}
        </UserContext.Consumer>
        <Navbar email={user.email} />
        <Main user={user} updateUser={updateUser} />
      </UserContext.Provider> */}
      <UserProvider>
        <Navbar />
        <Main />
      </UserProvider>
    </div>
  );
}
