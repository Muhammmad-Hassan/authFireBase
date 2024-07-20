import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleToggleAuthMethod = () => {
    setIsSignUp((prevState) => !prevState);
    setError("");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are both required.");
      return;
    }

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredentials.user);
      setEmail("");
      setPassword("");
      setError("");
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are both required.");
      return;
    }

    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredentials.user);
      setEmail("");
      setPassword("");
      navigate("/private");
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  return (
    <form>
      <legend>{isSignUp ? "Sign Up" : "Sign In"}</legend>
      <fieldset>
        <ul>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-required="true"
              required
            />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-required="true"
              required
            />
          </li>
        </ul>
        {isSignUp ? (
          <button onClick={handleSignUp}>Sign Up</button>
        ) : (
          <button onClick={handleSignIn}>Sign In</button>
        )}
      </fieldset>
      {error && <p id="error-message" role="alert">{error}</p>}
      <a onClick={handleToggleAuthMethod}>
        {isSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign Up"}
      </a>
    </form>
  );
}

export default Home;
