import React, { useRef } from 'react';
import './SignupScreen.css';
import { auth } from '../firebase';
// new way
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


function SignupScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = async (e) => {
        e.preventDefault();
        try {
            const authUser = await createUserWithEmailAndPassword(
                auth,
                emailRef.current.value,
                passwordRef.current.value
            );
            console.log(authUser);
        } catch (error) {
            alert(error.message);
        }
    };

    const signIn = async (e) => {
        e.preventDefault();
        try {
            const authUser = await signInWithEmailAndPassword(
                auth,
                emailRef.current.value,
                passwordRef.current.value
            );
            console.log(authUser);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder='Email' />
                <input ref={passwordRef} type="password" placeholder='Password' />
                <button type='submit' onClick={signIn}>Sign In</button>
                <h4>
                    <span className='signupScreen_gray'>New to Netflix? </span>
                    <span className='signupScreen_link' onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    );
}

export default SignupScreen;
