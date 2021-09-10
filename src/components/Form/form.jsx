import React, { useState, useEffect } from 'react';
import axios from 'axios';

function form() {

    useEffect(()=>{
axios.get('http://localhost:5055/api/getUser')
        .then((response)=>{
            setUserList(response.data)
        })
    },[])
const [userList, setUserList] = useState([])

    const [ username,setUsername ] = useState('')
    const [ email,setEmail ] = useState('')
    const [ password,setPassword ] = useState('');
    const userData = {
        username: username,
        email: email,
        password: password
    }
    const addToList = () => {
        console.log(userData)
        axios.post('http://localhost:5055/api/postUser', userData)
    }



    return (
        <>
        <input type="text" name="username"  onChange={(event) =>{ setUsername(event.target.value)}}/><br />
        <input type="password" name="password" onChange={(event)=>{ setPassword(event.target.value)}}/><br />
        <input type="text" name="email" onChange={(event)=>{setEmail(event.target.value)}}/><br />
        <button type="submit" onClick={addToList}>Submit</button>

        <br/>
        <hr/>
        <table>
        {userList.map((val, key)=>{
            return (
            <tr>
                    <td>{val.username}</td>
                    <td>{val.email}</td>
            </tr>
            )
        })}
        </table>

    </>
    );
}

export default form;