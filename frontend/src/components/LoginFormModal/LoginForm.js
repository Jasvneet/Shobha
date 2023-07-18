import { useDispatch, useSelector } from "react-redux";
import { useState} from 'react';
import * as sessionActions from '../../store/session';
import SignupForm from "../SignupFormPage/SignupForm";
import { Modal } from "../../context/Modal";
// import { Redirect } from 'react-router-dom';
import './LoginForm.css';


function LoginForm(props) {
    const dispatch = useDispatch();
    // const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(true);
    // if (sessionUser) return <Redirect to="/" />;
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        if (typeof props.onLoginSuccess === 'function') {
          props.onLoginSuccess();
        }
        return dispatch(sessionActions.login({ email, password }))
          .catch(async (res) => {
            let data;
            try {
 
              data = await res.clone().json();
            } catch {
              data = await res.text(); 
            }
            if (data?.error) setErrors(data.error);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
          });
    }

    const handleOpenSignupModal = () => {
      setShowSignupModal(true);
      setShowLoginForm(false);
    };
  
   const handleCloseSignupModal = () => {
      setShowSignupModal(false);
      setShowLoginForm(false);
      props.closeLogin();
    };

    const handleDemoLogin = async (e) => {
      e.preventDefault();

      const demoEmail = 'demo@user.io';
      const demoPassword = 'password';
      
      // setEmail(demoEmail);
      // setPassword(demoPassword);

      try {
        await dispatch(sessionActions.login({ email: demoEmail, password: demoPassword }));
       
        if (typeof props.onLoginSuccess === 'function') {
          props.onLoginSuccess();
        }
      } catch (error) {
 
        setErrors([error.message]);
      }
  }



    return (
      <>
      {showLoginForm && !showSignupModal && (
        <form onSubmit={handleSubmit} className="login-form">
         
            <div className="form">

            <div className="login-message">
            <h3 id="login-heading">Sign In</h3>
            <br />
            <p> Sign in or create an account to enjoy <strong>FREE standard shipping </strong> on all orders.</p>

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

            {errors.length > 0 && (
                <ul>
                  {errors.map((error, index) => (
                    <li key={index} className="login-error">{error}</li>
                  ))}
                </ul>
              )}
            <br />
            <div id='terms-of-use'>By clicking “Sign In”, you (1) agree to the current version of our <strong>TERMS OF USE</strong>, and (2) have read Sephora’s Privacy Policy</div>
            <div>
              <div className="login-buttons">
                <button type="submit" className="login-button">Sign In</button>
                <button onClick={handleDemoLogin} type="submit" className="login-button" id="demo-button">Demo Sign In</button>
              </div>
            </div>
            </div>

            
            <div className="line"></div>
          
        </form>
         

      )}

      <div id="new-user"> 
            <div id="new-user-message">
              New To Shobha?
            </div>
            <div>
                <button type="button" onClick={handleOpenSignupModal} className="create-account-button">Create Account</button>
            </div>

      </div>

        {showSignupModal && !showLoginForm && (
        <Modal onClose={handleCloseSignupModal}>
          <SignupForm />
        </Modal>
        )}
         
      </>
    )

}

export default LoginForm;