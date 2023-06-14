import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import * as sessionActions from '../../store/session';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = userSelector(state =?)

    return (
        <form omSubmit={handleSubmit}>
            <label>Email:
                <input type="text" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />                
            </label>

            <label>Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)}/>                
            </label>

            <button type="submit">Log In</button>
            
        </form>
    )

}

export default LoginFormPage;