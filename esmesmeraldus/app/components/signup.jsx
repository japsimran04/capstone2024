import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import '../styles/signup.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // User is signed up, you can handle navigation or other logic here
      console.log('User signed up:', userCredential.user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='sign-in'>
      <div>
        <h2>Sign Up</h2>
        <div className='inputs'>
          <h3>Email</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <h3>Password</h3>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSignUp}>Sign Up</button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default SignUp;
