import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupForm(){
    const dispatch = useDispatch();
    // const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
  
    // if (sessionUser) return <Redirect to="/" />;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (password === confirmPassword) {
        setErrors([]);
        return dispatch(sessionActions.signup({ email, firstname, lastname, password }))
          .catch(async (res) => {
          let data;
          try {
            // .clone() essentially allows you to read the response body twice
            data = await res.clone().json();
          } catch {
            data = await res.text(); // Will hit this case if the server is down
          }
          if (data?.errors) setErrors(data.errors);
          else if (data) setErrors([data]);
          else setErrors([res.statusText]);
        });
      }
      return setErrors(['Confirm Password field must be the same as the Password field']);
    };
  
    return (
      <>
       
      <form onSubmit={handleSubmit} className="signup-form">
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <div>
          <h1>Create an Account</h1>
        </div>
        <img className='insider-logo' src="/images/logo-beauty-insider.svg"/>
        <p>Join the Beauty Insider loyalty program. Earn points, get FREE standard shipping, redeem rewards, and more.</p>
        <br />
        <div className="name-input">
        <label className="first-name ">
          <input className="name-input"
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
           
        </label>
        <br />
        <label>
          <input className="name-input"
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </label>
        </div>
        <br />
        <label>
          <input className="text-input"
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        
        <br />
        <label>
          <input className="text-input"
            type="password"
            placeholder="Password (minimum: 6 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          <input className="text-input"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <p>By clicking “Join Now” you acknowledge that you are a U.S. or Canada resident and (1) have read Sephora’s Privacy Policy and Notice of Financial Incentive, (2), agree to TERMS OF USE, BEAUTY INSIDER TERMS, and to automatically receive Beauty Insider offers and notifications via email.</p>
        <button type="submit" className="signup-button">Join Now</button>
      </form>
      </>
    );
}
  


export default SignupForm;