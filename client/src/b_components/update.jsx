import axios from 'axios';
import  { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const navigate = useNavigate();

    const {id} = useParams();

    function handleSubmit(event){
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+id,{ name,email})
        .then(res =>{
            console.log(res);
            navigate('/admin');
        })
        .catch(
            err => console.log(err)
        );

    }



    return (
        


       
    <form onSubmit={handleSubmit} className="form-container" >
        <h2>Update Employee </h2>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='Enter Name' className='form-control' id="name"
        onChange={(e)=>setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input type="email" id="email"placeholder='Enter Email' className='form-control'
        onChange={(e)=>setEmail(e.target.value)}
        />
        <button type ="submit">Update</button>
    </ form>
        
    );
};

export default Update;