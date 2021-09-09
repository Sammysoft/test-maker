import React, { useState } from 'react';
import axois from 'axios';

function form() {

    const [ username,setUsername ] = useState('')
    const [ email,setEmail ] = useState('')
    const [ password,setPassword ] = useState('');
    const addToList = () => {
        axois('http://localhost:5055/api/postUser', {
            username: username,
            email: email,
            password: password
        })
    }

    return (
        <>
        <input type="text" name="username"  onChange={(event) =>{ setUsername(event.target.value)}}/><br />
        <input type="password" name="password" onChange={(event)=>{ setPassword(event.target.value)}}/><br />
        <input type="text" name="email" onChange={(event)=>{setEmail(event.target.value)}}/><br />
        <button type="submit" onClick={addToList}>Submit</button>

    </>
    );
}

export default form;