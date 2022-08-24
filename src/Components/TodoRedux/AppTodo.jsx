import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Todo from './Todo';
export default function AppTodo() {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/signup'>Sign up</Link>
        <Link to='/signin'>Sign in</Link>
        <Link to='/todos'>Todos</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route
          path='/todos'
          element={
            <ProtectedRoute>
              <Todo />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
