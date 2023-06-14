import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';


function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

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
            <label>Email:
                <input type="text" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />                
            </label>

            <br />

            <label>Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)}/>                
            </label>

            <button type="submit" className="login-button">Sign In</button>
            
        </form>
    )

}

export default LoginFormPage;