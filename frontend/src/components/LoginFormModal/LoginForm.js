import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import * as sessionActions from '../../store/session';
// import { Redirect } from 'react-router-dom';
import './LoginForm.css';


function LoginForm() {
    const dispatch = useDispatch();
    // const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    // if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ email, password }))
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

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <div className="login-heading">
            <h3>Sign In</h3>
            <br />
            <p> Sign in or create an account to enjoy FREE standard shipping on all orders.</p>

            </div>
            <br />
            <label>
                <input 
                type="text" 
                placeholder="Email Address"
                value={email} 
                onChange={(e) => setEmail(e.currentTarget.value)} 
                className="text-input" />                
            </label>

            <br />

            <label>
                <input 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                className="text-input"/>                
            </label>
            <br />
            <div>
            <button type="submit" className="login-button">Sign In</button>
            </div>
            
            <div className="line"></div>
            
        </form>
    )

}

export default LoginForm;