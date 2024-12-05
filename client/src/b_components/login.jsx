import axios from 'axios';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [user,setUser]=useState('');
    const [pass,setPassword]=useState('');
    const navigate = useNavigate();

   


    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/login/',{user,pass})
        .then(res =>{
            let arr = [];
            arr = res.data;
            if(arr.length === 0 ){
                alert("INVALID LOGIN!");
            }    
            else
            {
                navigate('/admin')
            }        
        })
        .catch(
            err => console.log(err)
        );

    }



    return (
        


       
    <form onSubmit={handleSubmit} className="form-container" >
        <h2>Log In</h2>
        <label htmlFor="user">User Name</label>
        <input type="text" placeholder='Enter Username' className='form-control' id="user"
        onChange={(e)=>setUser(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input type="password" id="password"placeholder='Enter Password' className='form-control'
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button type ="submit">Submit</button>
    </ form>
        
    );
};

export default Login;