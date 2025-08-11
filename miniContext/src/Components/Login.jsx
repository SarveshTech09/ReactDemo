import React from 'react'
import UserContext from '../Context/UserContext';
import { useContext, useState } from 'react';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');  
    
    const { setUser } = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    };
  return (
    <div>
        <input type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username" />
        {"  "}
        <input type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password" />    
        {"  "}
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login