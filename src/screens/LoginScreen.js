import React from 'react';
import './LoginScreen.css';
import SignupScreen from './SignupScreen';
import { useState } from 'react';

function LoginScreen() {
  const[signIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
      <div className='loginScreen_background'>
        <img
          className='loginScreen_logo'
          src='https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/7500/Netflix_Logo_RGB-512.png'
          alt='Netflix Logo'
        />
        <button onClick={()=> setSignIn(true)} 
        className='loginScreen_button'>
          Sign In
        </button>

        <div className='loginScreen_gradient'></div>

        <div className='loginScreen_body'>
          {signIn?(
            <SignupScreen/>
          ):(
            <>
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
         
          <div className='loginScreen_input'>
            {/*Email Input*/}
            <form>
              <input type='email' placeholder='Email Address' />
              <button
                onClick={() => setSignIn(true)}
                className='loginScreen_getStarted'
                type='submit'>GET STARTED</button>
            </form>
          </div>
          </>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
