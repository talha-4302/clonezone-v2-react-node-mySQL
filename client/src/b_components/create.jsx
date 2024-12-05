import axios from 'axios';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Create = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/create',{name,email})
        .then(res =>{
            console.log(res);
            navigate('/admin');
        })
        .catch(
            err => console.log(err)
        );

    }



    return (
        


    <div className='form-div'>
    <form onSubmit={handleSubmit} className="form-container " >
        <h2>Add Employee</h2>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='Enter Name' className='form-control' id="name"
        onChange={(e)=>setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input type="email" id="email"placeholder='Enter Email' className='form-control'
        onChange={(e)=>setEmail(e.target.value)}
        />
        <button type ="submit">Submit</button>
    </ form>
    </div>   
        
    );
};

export default Create;