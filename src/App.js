import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice'; // Assuming you have a userSlice setup for Redux
import ProfileScreen from './screens/ProfileScreen'; // Add this line

function App() {
  const user=useSelector(selectUser);
  const dispatch= useDispatch();

  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged(userAuth=>{
      if (userAuth) {
        // Logged in
        dispatch( //???????
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  },[dispatch]
    );
  return (
    <div className="app">
      <Router>
        {!user? (
          <LoginScreen />  
        ):(
            
          <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/profile" element={<ProfileScreen />} />

        </Routes>
      
        )
      }
        </Router>
    </div>
  );
}

export default App;